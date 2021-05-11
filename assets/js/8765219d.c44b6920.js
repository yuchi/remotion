(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5829],{3905:function(e,n,t){"use strict";t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){return function(n){var t=u(n.components);return o.createElement(e,a({},n,{components:t}))}},u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,h=m["".concat(i,".").concat(p)]||m[p]||c[p]||a;return t?o.createElement(h,s(s({ref:n},l),{},{components:t})):o.createElement(h,s({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},64508:function(e,n,t){"use strict";var o=t(20862).default;n.p=void 0;var r=o(t(2784));t(79165);n.p=function(){var e=(0,r.useRef)(null),n=(0,r.useCallback)((function(){var n;null==(n=e.current)||n.classList.toggle("transparent")}),[]);return r.default.createElement("div",null,r.default.createElement("video",{ref:e,src:"/img/transparent-video.webm",controls:!0,autoPlay:!0,loop:!0}),r.default.createElement("p",{className:"tr-centered",onClick:n},r.default.createElement("button",null,"Toggle transparency")))}},71664:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var o=t(22122),r=t(19756),a=(t(2784),t(3905)),i=t(64508),s={slug:"1-4",title:"Remotion 1.4",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},d={permalink:"/blog/1-4",editUrl:"https://github.com/Jonnyburger/remotion/edit/main/packages/docs/blog/blog/2021-02-26-remotion-1-4.md",source:"@site/blog/2021-02-26-remotion-1-4.md",title:"Remotion 1.4",description:"Welcome to the release notes of Remotion 1.4! This is a big release adding support for more use cases and makes Remotion more stable, intuitive and robust.",date:"2021-02-26T00:00:00.000Z",formattedDate:"February 26, 2021",tags:[],readingTime:5.915,truncated:!1,prevItem:{title:"Remotion 1.5",permalink:"/blog/1-5"},nextItem:{title:"Remotion 1.3",permalink:"/blog/1-3"}},l=[{value:"Support for HEVC and WebM codecs",id:"support-for-hevc-and-webm-codecs",children:[]},{value:"Transparent videos",id:"transparent-videos",children:[]},{value:"New <code>random()</code> API",id:"new-random-api",children:[]},{value:"More configuration options",id:"more-configuration-options",children:[]},{value:"Keyboard controls in the editor",id:"keyboard-controls-in-the-editor",children:[]},{value:"Progress bar for stitching frames together",id:"progress-bar-for-stitching-frames-together",children:[]},{value:"New <code>layout</code> prop for <code>&lt;Sequence&gt;</code>",id:"new-layout-prop-for-sequence",children:[]},{value:"Asynchronously determining composition metadata",id:"asynchronously-determining-composition-metadata",children:[]},{value:"End to End tests for Windows, macOS and Ubuntu",id:"end-to-end-tests-for-windows-macos-and-ubuntu",children:[]},{value:"ESLint rule for wrong asset import",id:"eslint-rule-for-wrong-asset-import",children:[]},{value:"Paying top contributors",id:"paying-top-contributors",children:[]},{value:"Various improvements",id:"various-improvements",children:[]},{value:"Up next...",id:"up-next",children:[]}],m={toc:l};function u(e){var n=e.components,s=(0,r.default)(e,["components"]);return(0,a.mdx)("wrapper",(0,o.default)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Welcome to the release notes of Remotion 1.4! This is a big release adding support for more use cases and makes Remotion more stable, intuitive and robust."),(0,a.mdx)("h2",{id:"support-for-hevc-and-webm-codecs"},"Support for HEVC and WebM codecs"),(0,a.mdx)("p",null,"Instead of just supporting H.264, you can now also encode a video in H.265 (HEVC), or as a WebM (in either VP8 or VP9 codec). These codecs will result in smaller file sizes, but have some trade-offs. To help you decide which codec to use, there is now an ",(0,a.mdx)("a",{parentName:"p",href:"/docs/encoding"},"encoding guide")," in the docs. See also the\ndocumentation for changing the codec in ",(0,a.mdx)("a",{parentName:"p",href:"/docs/config#setcodec"},"the config file"),"\nas well as ",(0,a.mdx)("a",{parentName:"p",href:"/docs/cli#flags"},"in the CLI"),"."),(0,a.mdx)("h2",{id:"transparent-videos"},"Transparent videos"),(0,a.mdx)("p",null,"Did you know that Chrome and Firefox support video with alpha channels? Play the video and click the button below to dynamically change the background."),(0,a.mdx)(i.p,{mdxType:"TransparentVideoDemo"}),(0,a.mdx)("p",null,"Remotion now has enough configurability to enable you to render transparent videos. There is ",(0,a.mdx)("a",{parentName:"p",href:"/docs/transparent-videos"},"a new documentation page")," for it, which also gives you guidance on how to render a fallback video for unsupported browsers."),(0,a.mdx)("h2",{id:"new-random-api"},"New ",(0,a.mdx)("inlineCode",{parentName:"h2"},"random()")," API"),(0,a.mdx)("p",null,"Let's say you want to render 100 random particles in a video. A common mistake is to generate random values and store them in a state. The following is an anti-pattern in Remotion:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{5-6}","{5-6}":!0},"export const MyComp = () => {\n  // \u26a0\ufe0f Bug! Random values will change during render\n  const [particles] = useState(() => {\n    return new Array(100).fill(true).map(() => ({\n      x: Math.random(),\n      y: Math.random()\n    }));\n  })\n}\n")),(0,a.mdx)("p",null,"While this will work while previewing the video, during rendering, the random numbers will change during frames. This is because Remotion spins up multiple instances of Chrome and the random numbers will be different in each instance."),(0,a.mdx)("p",null,"To help you avoid this mistake, there is now a new ESLint rule that will warn when you use ",(0,a.mdx)("inlineCode",{parentName:"p"},"Math.random()"),". Instead using it, you can use the new ",(0,a.mdx)("a",{parentName:"p",href:"/docs/random"},(0,a.mdx)("inlineCode",{parentName:"a"},"random()"))," API. It will take a ",(0,a.mdx)("inlineCode",{parentName:"p"},"seed")," parameter and output a number between 0 and 1. The point of it is: As long as you pass the same seed, you get the same output! That way you don't get unintended effects while multithreaded rendering is performed."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:"{7-8}","{7-8}":!0},"import {random} from 'remotion';\n\nexport const MyComp = () => {\n  // \u2705 Pseudo-random values that will be same across threads\n  const [particles] = useState(() => {\n    return new Array(100).fill(true).map((_, idx) => ({\n      x: random(`x-${idx}`),\n      y: random(`y-${idx}`),\n    }));\n  })\n}\n")),(0,a.mdx)("p",null,"Want to learn more? Read the new documentation page about ",(0,a.mdx)("a",{parentName:"p",href:"/docs/using-randomness"},"using randomness"),"."),(0,a.mdx)("h2",{id:"more-configuration-options"},"More configuration options"),(0,a.mdx)("p",null,"Several new configuration options have been added as CLI flags, config file entries and to the SSR API:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/encoding#controlling-quality-using-the-crf-setting"},"setCrf()")," controls the tradeoff between quality and file size of the output file."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/config#setquality"},"setQuality()")," allows you to control the JPEG quality of the frames rendered."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/config#setcodec"},"setCodec()")," allows you to select between 4 different codecs (as mentioned above)."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/config#setimagesequence"},"setImageSequence()")," allows you to skip the stitching process and output only an image sequence"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/config#setimageformat"},"setImageFormat()")," allows you to explicitly select either PNG or JPEG as the format for the rendered frames."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/config#setpixelformat"},"setPixelFormat()")," has a new accepted value, ",(0,a.mdx)("inlineCode",{parentName:"li"},"yuva420p"),", which is necessary for transparent videos.")),(0,a.mdx)("p",null,"The addition of ",(0,a.mdx)("inlineCode",{parentName:"p"},"setImageSequence()")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"setImageFormat()")," as well as ",(0,a.mdx)("inlineCode",{parentName:"p"},"setCodec()")," makes the previous configuration options ",(0,a.mdx)("inlineCode",{parentName:"p"},"setOutputFormat()")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"--png")," obsolete. and they are therefore now deprecated. While they still work, we encourage you to use the new configuration options which are much more granular - for example now you can render a JPEG sequence if you wish to."),(0,a.mdx)("h2",{id:"keyboard-controls-in-the-editor"},"Keyboard controls in the editor"),(0,a.mdx)("p",null,"Thanks to an ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/arthurdenner"},"awesome pull request by Arthur Denner"),", keyboard navigation in the editor is much improved! ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/125"},"Reading the PR")," is highly recommended because it's insightful and makes you realize that it's not hard to make a website keyboard-navigateable."),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"keyboard-support.gif",src:t(71197).Z})),(0,a.mdx)("h2",{id:"progress-bar-for-stitching-frames-together"},"Progress bar for stitching frames together"),(0,a.mdx)("p",null,"Don't be surprised if the newly added codecs are much slower than the default H.264. It's normal. But at least now you can always check the progress of the rendering!"),(0,a.mdx)("p",null,(0,a.mdx)("img",{alt:"stitching-progress.png",src:t(24816).Z})),(0,a.mdx)("h2",{id:"new-layout-prop-for-sequence"},"New ",(0,a.mdx)("inlineCode",{parentName:"h2"},"layout")," prop for ",(0,a.mdx)("inlineCode",{parentName:"h2"},"<Sequence>")),(0,a.mdx)("p",null,"Few people have rightly pointed out that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<Sequence>")," component will absolutely position it's children and there is no way to opt out of it. While we cannot change this now because of backwards-compatibility, you can now pass ",(0,a.mdx)("inlineCode",{parentName:"p"},'layout="none"')," as a prop to opt out of any layout influence that ",(0,a.mdx)("inlineCode",{parentName:"p"},"<Sequence>")," has."),(0,a.mdx)("h2",{id:"asynchronously-determining-composition-metadata"},"Asynchronously determining composition metadata"),(0,a.mdx)("p",null,"There's a small breaking change in this release - ",(0,a.mdx)("inlineCode",{parentName:"p"},"delayRender")," works during the 'evaluation' phase. This is the phase where Remotion analyses your project and determines all compositions and does some validation. Watch out for ",(0,a.mdx)("inlineCode",{parentName:"p"},"delayRender()")," calls outside components, as they might block the evaluation phase now since no components are being rendered during that phase."),(0,a.mdx)("p",null,"The benefit is that now your compositions can take in data that has been asynchronously fetched. For example the following is now possible:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},'export const RemotionVideo: React.FC = () => {\n  const [videoLength, setVideoLength] = useState(null)\n\n  useEffect(() => {\n    const handle = delayRender();\n\n    determineVideoLength()\n    .then((duration) => {\n      setVideoLength(duration)\n      continueRender(handle)\n    })\n    .catch(err => /**/)\n  }, [])\n\n  if (videoLength === null) {\n    return null;\n  }\n\n  return (\n    <>\n      <Composition\n        id="HelloWorld"\n        component={HelloWorld}\n        durationInFrames={videoLength}\n        fps={30}\n        width={1920}\n        height={1080}\n      />\n    </>\n  )\n}\n')),(0,a.mdx)("p",null,"Stay tuned for a new API that will allow you to measure video and audio duration!"),(0,a.mdx)("h2",{id:"end-to-end-tests-for-windows-macos-and-ubuntu"},"End to End tests for Windows, macOS and Ubuntu"),(0,a.mdx)("p",null,"While Remotion is primarily developed on macOS, other operating systems shouldn't have a sub-par experience or get bugs. While it does not replace manual testing, it helps that ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/blob/main/tests/rendering.test.ts"},"there are now some end-to-end tests for rendering videos")," and the test suite now runs on all 3 operating systems. Going forward, I will add more tests and contributors are also encouraged to do so."),(0,a.mdx)("h2",{id:"eslint-rule-for-wrong-asset-import"},"ESLint rule for wrong asset import"),(0,a.mdx)("p",null,"In Remotion, you shouldn't specify the ",(0,a.mdx)("inlineCode",{parentName:"p"},"src")," as filepath string, but import the asset instead. To help you not make this mistake, there's a new ESLint rule:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import {Img} from 'remotion';\nimport hi from './hi.png';\n\n// \u2705 Correct: Using an import statement\n<Img src={hi} />\n\n// \u26a0\ufe0f Warning since 1.4: Import the asset instead\n<Img src=\"./hi.png\"/>\n")),(0,a.mdx)("h2",{id:"paying-top-contributors"},"Paying top contributors"),(0,a.mdx)("p",null,"Since Remotion ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md"},"will make money by selling licenses to bigger companies"),", it's only fair to give contributors their share as well! I have made offers to two top contributors so far to compensate them for their time spent so far and for potential future work. Gladly, they both accepted!"),(0,a.mdx)("h2",{id:"various-improvements"},"Various improvements"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/122"},"Fixed showing floats when fps is not a Integer (e.g 59.97fps)"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/117"},"Ensure minimum node version"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/118"},"Fix flickering ",(0,a.mdx)("inlineCode",{parentName:"a"},"<Video>")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/127"},"Clean up frames after rendering"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/130"},"Throw error if useVideoConfig is not used in Composition"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/144"},"Don't timeout if image fails to load"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/146"},"Runtime error if you miss a prop in ",(0,a.mdx)("inlineCode",{parentName:"a"},"<Composition>")," or ",(0,a.mdx)("inlineCode",{parentName:"a"},"<Sequence>"))))),(0,a.mdx)("h2",{id:"up-next"},"Up next..."),(0,a.mdx)("p",null,"Some awesome pull requests came in, ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/JonnyBurger/remotion/pull/128"},"the most notable one adds audio support!")," We are also working on allowing you to customize Puppeteer parameters and making the installation process much faster by not downloading a copy of Chromium. Keep your eyes open for more major improvements coming soon."))}u.isMDXComponent=!0},79165:function(e,n,t){"use strict";t.r(n)},71197:function(e,n,t){"use strict";n.Z=t.p+"assets/images/keyboard-support-3a3be889caac7cae64489ba2a4303d41.gif"},24816:function(e,n,t){"use strict";n.Z=t.p+"assets/images/stitching-progress-1d02620869b969ffd36e67186210b340.png"}}]);