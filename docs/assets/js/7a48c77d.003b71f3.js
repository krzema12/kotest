"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[21210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={id:"assertion_mode",title:"Assertion Mode",slug:"assertion-mode.html"},a=void 0,i={unversionedId:"assertions/assertion_mode",id:"version-5.4/assertions/assertion_mode",title:"Assertion Mode",description:"If you are using Kotest framework alongside Kotest assertions, you can ask Kotest to fail the build, or output a warning to stderr, if a test is executed that does not execute an assertion.",source:"@site/versioned_docs/version-5.4/assertions/assertion_mode.md",sourceDirName:"assertions",slug:"/assertions/assertion-mode.html",permalink:"/docs/5.4/assertions/assertion-mode.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/assertions/assertion_mode.md",tags:[],version:"5.4",frontMatter:{id:"assertion_mode",title:"Assertion Mode",slug:"assertion-mode.html"},sidebar:"assertions",previous:{title:"Inspectors",permalink:"/docs/5.4/assertions/inspectors.html"},next:{title:"Core",permalink:"/docs/5.4/assertions/core-matchers.html"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are using Kotest framework alongside Kotest assertions, you can ask Kotest to fail the build, or output a warning to stderr, if a test is executed that does not execute an assertion."),(0,o.kt)("p",null,"To do this, set ",(0,o.kt)("inlineCode",{parentName:"p"},"assertionMode")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertionMode.Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertionMode.Warn")," inside a spec. For example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MySpec : FunSpec() {\n   init {\n      assertions = AssertionMode.Error\n      test("this test has no assertions") {\n         val name = "sam"\n         name.length == 3 // this isn\'t actually testing anything\n      }\n   }\n}\n')),(0,o.kt)("p",null,"Running this test will output something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Test 'this test has no assertions' did not invoke any assertions\n")),(0,o.kt)("p",null,"If we want to set this globally, we can do so in ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.4/framework/project-config.html"},"project config")," or via the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.assertion.mode"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Assertion mode only works for Kotest assertions and not other assertion libraries.")))}d.isMDXComponent=!0}}]);