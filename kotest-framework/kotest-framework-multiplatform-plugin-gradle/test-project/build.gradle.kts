import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.api.tasks.testing.logging.TestLogEvent
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget

plugins {
   id("org.jetbrains.kotlin.multiplatform")
   id("io.kotest.multiplatform")
}

val kotestLibraryVersion: String by project
val devMavenRepoPath: String by project
val useNewNativeMemoryModel: String by project

repositories {
   maven(file(devMavenRepoPath)) {
      name = "DevMavenRepo"
      mavenContent { includeGroupAndSubgroups("io.kotest") }
   }
   mavenCentral()
}

kotlin {

   jvm()

   js {
      browser()
      nodejs()
   }

   @OptIn(org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalWasmDsl::class)
   wasmJs {
      browser()
      nodejs()
   }

   /* FIXME: enable wasmWasi when there is support in kotlinx-coroutines-core (1.8.0-RC does only wasmJs)
   wasmWasi {
      nodejs()
   }
   */

   linuxX64()
   macosX64()
   macosArm64()
   mingwX64()

   sourceSets {
      val commonTest by getting {
         dependencies {
            implementation("io.kotest:kotest-assertions-core:$kotestLibraryVersion")
            implementation("io.kotest:kotest-framework-api:$kotestLibraryVersion")
            implementation("io.kotest:kotest-framework-engine:$kotestLibraryVersion")
         }
      }

      val jvmTest by getting {
         dependencies {
            implementation("io.kotest:kotest-runner-junit5:$kotestLibraryVersion")
         }
      }
   }
}

tasks.withType<Test>().configureEach {
   useJUnitPlatform()

   testLogging {
      showExceptions = true
      showStandardStreams = true
      events = setOf(TestLogEvent.FAILED, TestLogEvent.SKIPPED, TestLogEvent.STANDARD_ERROR, TestLogEvent.STANDARD_OUT)
      exceptionFormat = TestExceptionFormat.FULL
   }

   systemProperty("kotest.framework.classpath.scanning.autoscan.disable", "true")
}

if (useNewNativeMemoryModel.toBoolean()) {
   kotlin.targets.withType<KotlinNativeTarget>().configureEach {
      binaries.all {
         binaryOptions["memoryModel"] = "experimental"
      }
   }
}

plugins.withType<org.jetbrains.kotlin.gradle.targets.js.yarn.YarnPlugin>().configureEach {
   // yarn.lock will change when running tests with multiple Kotlin versions
   extensions.configure<org.jetbrains.kotlin.gradle.targets.js.yarn.YarnRootExtension> {
      yarnLockMismatchReport = org.jetbrains.kotlin.gradle.targets.js.yarn.YarnLockMismatchReport.WARNING
   }
}
