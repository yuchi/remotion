(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5122],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){return function(n){var t=c(n.components);return r.createElement(e,o({},n,{components:t}))}},c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return t?r.createElement(f,m(m({ref:n},l),{},{components:t})):r.createElement(f,m({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},23969:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u},default:function(){return s}});var r=t(22122),a=t(19756),o=(t(2784),t(3905)),i={id:"sequence",title:"<Sequence />",sidebar_label:"<Sequence />"},m={unversionedId:"sequence",id:"sequence",isDocsHomePage:!1,title:"<Sequence />",description:"Using a Sequence, you can time-shift certain parts of your animation and therefore make them more reusable. Sequences are also shown in the timeline and help you visually understand the structure of your video.",source:"@site/docs/sequence.md",sourceDirName:".",slug:"/sequence",permalink:"/docs/sequence",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/sequence.md",version:"current",sidebar_label:"<Sequence />",frontMatter:{id:"sequence",title:"<Sequence />",sidebar_label:"<Sequence />"},sidebar:"someSidebar",previous:{title:"<Composition />",permalink:"/docs/composition"},next:{title:"<Video />",permalink:"/docs/video"}},u=[{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],l={toc:u};function s(e){var n=e.components,t=(0,a.default)(e,["components"]);return(0,o.mdx)("wrapper",(0,r.default)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Using a Sequence, you can time-shift certain parts of your animation and therefore make them more reusable. Sequences are also shown in the timeline and help you visually understand the structure of your video."),(0,o.mdx)("h2",{id:"api"},"API"),(0,o.mdx)("p",null,"The Sequence component is a high order component and accepts, besides it's children, the following props:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"from")," ",(0,o.mdx)("em",{parentName:"p"},"(required)"),": At which frame it's children should assume the video starts. When the sequence is at ",(0,o.mdx)("inlineCode",{parentName:"p"},"frame"),", it's children are at 0`.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"durationInFrames")," ",(0,o.mdx)("em",{parentName:"p"},"(required)"),": For how many frames the sequence should be displayed. Children are unmounted if they are not within the time range of display. If you don't want to limit the duration of the sequence, you can pass ",(0,o.mdx)("inlineCode",{parentName:"p"},"Infinity"),".")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"name")," ",(0,o.mdx)("em",{parentName:"p"},"(optional)"),": You can give your sequence a name and it will be shown as the label of the sequence in the timeline of the Remotion preview. This property is purely for helping you keep track of sequences in the timeline.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"layout"),": ",(0,o.mdx)("em",{parentName:"p"},"(optional)"),": Either ",(0,o.mdx)("inlineCode",{parentName:"p"},'"absolute-fill"')," ",(0,o.mdx)("em",{parentName:"p"},"(default)")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},'"none"')," By default, your sequence will be absolutely positioned, so they will overlay each other. If you would like to opt out of it and handle layouting yourself, pass ",(0,o.mdx)("inlineCode",{parentName:"p"},'layout="none"'),". Available since v1.4."))),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Good to know: You can nest sequences within each other and they will cascade. For example, a sequence that starts at frame 60 which is inside a sequence that starts at frame 30 will have it's children start at frame 90. However, nested sequences are not currently displayed in the timeline."))),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,"In the below example, you can see that the component which is wrapped inside a ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Sequence>")," has gets time-shifted by 10 frames. This way you can first create the animation within ",(0,o.mdx)("inlineCode",{parentName:"p"},"<SubComponent />")," and worry about the timing of it's entrance later."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {Sequence, useCurrentFrame} from 'remotion';\n\nconst SubComponent = () => {\n  const frame = useCurrentFrame(); // 15\n\n  return (\n    <div>sequence frame: {frame}</div>\n  );\n}\n\nconst MyVideo = () => {\n  const frame = useCurrentFrame(); // 25\n\n  return (\n    <div>\n      <Sequence from={10} durationInFrames={100} name=\"MySequence\">\n        <div>global frame: {frame}</div>\n        <SubComponent />\n      </Sequence>\n    </div>\n  );\n}\n")),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/reusability"},"Reuse components using Sequences"))))}s.isMDXComponent=!0}}]);