(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{AABG:function(e,t,n){},CLSv:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"helloFriendNG":{"menuLinks":[{"name":"Posts","link":"/posts"},{"name":"Works","link":"/works"}]}}}}}')},QWG0:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return p}));n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var r=n("mXGw"),a=n.n(r),c=n("c9rT"),l=(n("jr56"),n("Eb4t"),n("YjJN"),n("IYjZ"),n("VlJN"),n("ZY1c"),n("Wbzz"));function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(e){var t=e.title,n=e.posts.reduce((function(e,t){var n=new Date(t.published_at).getFullYear();return e.set(n,[].concat(o(e.get(n)||[]),[t]))}),new Map),r=[];return n.forEach((function(e,t){r.push(a.a.createElement("div",{className:"posts-group",key:t},a.a.createElement("div",{className:"post-year"},t),a.a.createElement("ul",{className:"posts-list"},e.map((function(e){return a.a.createElement("li",{className:"post-item",key:e.id},a.a.createElement(l.a,{to:e.path},a.a.createElement("span",{className:"post-title"},e.title),a.a.createElement("span",{className:"post-day"},new Date(e.published_at).toLocaleDateString("en-GB",{month:"long",day:"numeric"}))))})))))})),a.a.createElement("main",{className:"posts"},a.a.createElement("h1",null,t),r)};function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="3149575511";t.default=function(e){var t=e.data,n=e.pageContext,r=t.allFile.nodes.map((function(e){return m(m(m({},e.childMdx.frontmatter),e.postInfo),{},{id:e.id})}));return a.a.createElement(c.a,null,a.a.createElement(s,{posts:r,title:n.title}))}},Wbzz:function(e,t,n){"use strict";n("uzcW");var r=n("mXGw"),a=n.n(r),c=n("SDHo"),l=n.n(c);n.d(t,"a",(function(){return l.a}));n("lw3w"),n("emEt").default.enqueue,a.a.createContext({})},Zrjq:function(e,t,n){"use strict";n("NPbJ")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},c9rT:function(e,t,n){"use strict";var r=n("mXGw"),a=n.n(r),c=n("pYmi"),l=n("Wbzz"),o=function(e){var t=e.text,n=e.mark,r=e.cursor,c=e.img;return a.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},a.a.createElement("div",{className:"logo"},c?a.a.createElement("img",{src:c.src,alt:c.alt}):a.a.createElement(a.a.Fragment,null,n&&a.a.createElement("span",{className:"logo__mark"},">"),t&&a.a.createElement("span",{className:"logo__text"},t),r&&a.a.createElement("span",{className:"logo__cursor"}))))},i=function(){return a.a.createElement(o,{text:"$ cd /home/",cursor:!0,mark:!0})},s=n("52Dt"),u=n("CLSv"),m=(n("Zrjq"),n("jr56"),function(e){var t=e.items;return a.a.createElement(a.a.Fragment,null,t&&t.map((function(e){return a.a.createElement("li",{key:e.name},a.a.createElement(l.a,{to:e.link},e.name))})))}),f=function(){var e=u.data;return a.a.createElement(m,{items:e.site.siteMetadata.helloFriendNG.menuLinks})},p=function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),a.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))},d=function(e){var t=e.spaceForThemeToggler,n="--phoneWidth"===Object(r.useContext)(s.default).mediaQueryMatch,c=Object(r.useState)(!n),l=c[0],o=c[1],i=Object(r.useState)(n),u=i[0],m=i[1];Object(r.useEffect)((function(){o(!n),m(n)}),[n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:l?"menu":"hidden"},a.a.createElement("ul",{className:t?"menu__inner":"menu__inner stretch"},a.a.createElement(f,null))),a.a.createElement("span",{className:u?"menu-trigger":"hidden",onClick:function(){u&&o(!l)}},a.a.createElement(p,null)))},b=function(e){var t=e.onClick;return a.a.createElement("svg",{onClick:t,className:"theme-toggler",width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"}))},h=function(){var e=Object(r.useContext)(c.default),t=e.toggleMode,n=e.allowChange;return a.a.createElement("header",{className:"header"},a.a.createElement("span",{className:"header__inner"},a.a.createElement(i,null),a.a.createElement("span",{className:"header__right"},a.a.createElement(d,{spaceForThemeToggler:n}),n&&a.a.createElement("span",{className:"theme-toggle unselectable"},a.a.createElement(b,{onClick:t})))))},E=function(e){var t=e.children;return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"footer__inner"},a.a.createElement("div",{className:"footer__content"},t)))},g=function(){return a.a.createElement(E,null,a.a.createElement("span",null,"© 2020"),a.a.createElement("span",null,a.a.createElement("a",{href:"https://github.com/rhazdon"},"Djordje Atlialp")),a.a.createElement("span",null,a.a.createElement("a",{href:"https://github.com/atmhrt"},"Filip Krawczyk")))};n("ki97"),n("AABG"),t.a=function(e){var t=e.children,n=Object(r.useContext)(c.default).mode;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"dark"===n?"dark-theme":""},a.a.createElement("div",{className:"container"},a.a.createElement(h,null),a.a.createElement("div",{className:"content"},t),a.a.createElement(g,null))))}},ki97:function(e,t,n){},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var r=n("mXGw"),a=n.n(r),c=n("IOVJ");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(c.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---gatsby-theme-hello-friend-ng-src-templates-posts-js-fc17ac77360084b3df4e.js.map