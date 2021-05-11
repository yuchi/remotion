(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{45125:function(e,t,a){"use strict";var l=a(20862).default,r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(2784)),i=r(a(86010)),d=a(3905),u=l(a(29052)),s=r(a(33692)),o=r(a(73491)),c=r(a(41217)),m=r(a(46327)),f=a(86700);var v=function(e){var t,a,l=(t=(0,f.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),r=e.children,v=e.frontMatter,g=e.metadata,p=e.truncated,b=e.isBlogPostPage,E=void 0!==b&&b,_=g.date,h=g.formattedDate,N=g.permalink,k=g.tags,P=g.readingTime,I=v.author,T=v.title,L=v.image,C=v.keywords,M=v.author_url||v.authorURL,y=v.author_title||v.authorTitle,w=v.author_image_url||v.authorImageURL;return n.default.createElement(n.default.Fragment,null,n.default.createElement(c.default,{keywords:C,image:L}),n.default.createElement("article",{className:E?void 0:"margin-bottom--xl"},(a=E?"h1":"h2",n.default.createElement("header",null,n.default.createElement(a,{className:(0,i.default)("margin-bottom--sm",m.default.blogPostTitle)},E?T:n.default.createElement(s.default,{to:N},T)),n.default.createElement("div",{className:"margin-vert--md"},n.default.createElement("time",{dateTime:_,className:m.default.blogPostDate},h,P&&n.default.createElement(n.default.Fragment,null," \xb7 ",l(P)))),n.default.createElement("div",{className:"avatar margin-vert--md"},w&&n.default.createElement(s.default,{className:"avatar__photo-link avatar__photo",href:M},n.default.createElement("img",{src:w,alt:I})),n.default.createElement("div",{className:"avatar__intro"},I&&n.default.createElement(n.default.Fragment,null,n.default.createElement("h4",{className:"avatar__name"},n.default.createElement(s.default,{href:M},I)),n.default.createElement("small",{className:"avatar__subtitle"},y)))))),n.default.createElement("div",{className:"markdown"},n.default.createElement(d.MDXProvider,{components:o.default},r)),(k.length>0||p)&&n.default.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&n.default.createElement("div",{className:"col"},n.default.createElement("strong",null,n.default.createElement(u.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var t=e.label,a=e.permalink;return n.default.createElement(s.default,{key:a,className:"margin-horiz--sm",to:a},t)}))),p&&n.default.createElement("div",{className:"col text--right"},n.default.createElement(s.default,{to:g.permalink,"aria-label":"Read more about "+T},n.default.createElement("strong",null,n.default.createElement(u.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))};t.default=v},27350:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(2784)),n=l(a(98532)),i=l(a(45125)),d=l(a(82581)),u=l(a(61238)),s=l(a(5176)),o=l(a(14992)),c=a(86700);var m=function(e){var t=e.content,a=e.sidebar,l=t.frontMatter,m=t.metadata,f=m.title,v=m.description,g=m.nextItem,p=m.prevItem,b=m.editUrl,E=l.hide_table_of_contents;return r.default.createElement(n.default,{title:f,description:v,wrapperClassName:c.ThemeClassNames.wrapper.blogPages,pageClassName:c.ThemeClassNames.page.blogPostPage},t&&r.default.createElement("div",{className:"container margin-vert--lg"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col col--3"},r.default.createElement(u.default,{sidebar:a})),r.default.createElement("main",{className:"col col--7"},r.default.createElement(i.default,{frontMatter:l,metadata:m,isBlogPostPage:!0},r.default.createElement(t,null)),r.default.createElement("div",null,b&&r.default.createElement(o.default,{editUrl:b})),(g||p)&&r.default.createElement("div",{className:"margin-vert--xl"},r.default.createElement(d.default,{nextItem:g,prevItem:p}))),!E&&t.toc&&r.default.createElement("div",{className:"col col--2"},r.default.createElement(s.default,{toc:t.toc})))))};t.default=m},82581:function(e,t,a){"use strict";var l=a(20862).default,r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(2784)),i=l(a(29052)),d=r(a(33692));var u=function(e){var t=e.nextItem,a=e.prevItem;return n.default.createElement("nav",{className:"pagination-nav","aria-label":(0,i.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.default.createElement("div",{className:"pagination-nav__item"},a&&n.default.createElement(d.default,{className:"pagination-nav__link",to:a.permalink},n.default.createElement("div",{className:"pagination-nav__sublabel"},n.default.createElement(i.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.default.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.default.createElement(d.default,{className:"pagination-nav__link",to:t.permalink},n.default.createElement("div",{className:"pagination-nav__sublabel"},n.default.createElement(i.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.default.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=u},61238:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return r.default.createElement("div",{className:(0,n.default)(d.default.sidebar,"thin-scrollbar")},r.default.createElement("h3",{className:d.default.sidebarItemTitle},t.title),r.default.createElement("ul",{className:d.default.sidebarItemList},t.items.map((function(e){return r.default.createElement("li",{key:e.permalink,className:d.default.sidebarItem},r.default.createElement(i.default,{isNavLink:!0,to:e.permalink,className:d.default.sidebarItemLink,activeClassName:d.default.sidebarItemLinkActive},e.title))}))))};var r=l(a(2784)),n=l(a(86010)),i=l(a(33692)),d=l(a(60766))},14992:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return r.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.default.createElement(i.default,null),r.default.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var r=l(a(2784)),n=l(a(29052)),i=l(a(18558))},18558:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(22122)),n=l(a(19756)),i=l(a(2784)),d=l(a(86010)),u=l(a(21321)),s=function(e){var t=e.className,a=(0,n.default)(e,["className"]);return i.default.createElement("svg",(0,r.default)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:(0,d.default)(u.default.iconEdit,t),"aria-label":"Edit page"},a),i.default.createElement("g",null,i.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=s},5176:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(2784)),n=l(a(86010)),i=l(a(45035)),d=l(a(38018)),u="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?r.default.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.default.createElement("li",{key:e.id},r.default.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.default.createElement(s,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return(0,i.default)(u,"table-of-contents__link--active",100),r.default.createElement("div",{className:(0,n.default)(d.default.tableOfContents,"thin-scrollbar")},r.default.createElement(s,{toc:t}))};t.default=o},45035:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(2784);var r=function(e,t,a){var r=(0,l.useState)(void 0),n=r[0],i=r[1];(0,l.useEffect)((function(){function l(){var l=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var l=e[e.indexOf(t)-1];return null!=l?l:t}return t}return e[e.length-1]}();if(l)for(var r=0,d=!1,u=document.getElementsByClassName(e);r<u.length&&!d;){var s=u[r],o=s.href,c=decodeURIComponent(o.substring(o.indexOf("#")+1));l.id===c&&(n&&n.classList.remove(t),s.classList.add(t),i(s),d=!0),r+=1}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))};t.default=r},46327:function(e,t,a){"use strict";a.r(t),t.default={blogPostTitle:"blogPostTitle_GeHD",blogPostDate:"blogPostDate_fNvV"}},60766:function(e,t,a){"use strict";a.r(t),t.default={sidebar:"sidebar_2ahu",sidebarItemTitle:"sidebarItemTitle_2hhb",sidebarItemList:"sidebarItemList_2xAf",sidebarItem:"sidebarItem_2UVv",sidebarItemLink:"sidebarItemLink_1RT6",sidebarItemLinkActive:"sidebarItemLinkActive_12pM"}},21321:function(e,t,a){"use strict";a.r(t),t.default={iconEdit:"iconEdit_2_ui"}},38018:function(e,t,a){"use strict";a.r(t),t.default={tableOfContents:"tableOfContents_35-E",docItemContainer:"docItemContainer_gpai"}}}]);