"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[3267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,description:"The LBRY protocol and Credits.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},i="Overview",l={unversionedId:"category-blockchain/overview",id:"category-blockchain/overview",title:"Overview",description:"The LBRY protocol and Credits.",source:"@site/docs/category-blockchain/overview.mdx",sourceDirName:"category-blockchain",slug:"/category-blockchain/overview",permalink:"/category-blockchain/overview",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/category-blockchain/overview.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"The LBRY protocol and Credits.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"}},sidebar:"helphub",previous:{title:"Odysee's Blockchain",permalink:"/category-blockchain/"},next:{title:"Staking",permalink:"/category-blockchain/category-staking/"}},c={},s=[{value:"LBRY",id:"lbry",level:2},{value:"Credits",id:"credits",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"lbry"},"LBRY"),(0,o.kt)("p",null,"The Odysee platform is built on a blockchain protocol called LBRY. It's important to be clear, Odysee and LBRY aren't the same thing, nor are they interchangeable. LBRY is a ",(0,o.kt)("em",{parentName:"p"},"protocol"),", and Odysee is a ",(0,o.kt)("em",{parentName:"p"},"platform")," built on that protocol."),(0,o.kt)("p",null,"The most common use for blockchains is cryptocurrency. That's not LBRY's use."),(0,o.kt)("p",null,"The LBRY blockchain's purpose is in the name - it's a digital media library. LBRY exists as a decentralized way of sharing digital media content."),(0,o.kt)("p",null,"Whenever you upload a file, the file isn't actually being uploaded to Odysee. It's being uploaded to the LBRY network, which Odysee then pulls from."),(0,o.kt)("p",null,"This means that every channel, post, comment, and so on isn't only accessible through Odysee, but through any frontend for the LBRY protocol."),(0,o.kt)("p",null,"Odysee does have community guidelines and we do remove content that violates those guidelines. This means we stop pulling the content from LBRY. Neither we, or anyone else, is able to remove content from the LBRY network entirely."),(0,o.kt)("p",null,"So, even if content is banned from Odysee, that content would still be viewable on other LBRY frontends, granted that those frontends don't also have it banned."),(0,o.kt)("h2",{id:"credits"},"Credits"),(0,o.kt)("p",null,"LBRY's use isn't cryptocurrency, but it does have its own token. This token is a ",(0,o.kt)("em",{parentName:"p"},"utility token"),", meaning it has a specific purpose within LBRY and is valued for its ",(0,o.kt)("em",{parentName:"p"},"use")," rather than as a financial investment."),(0,o.kt)("p",null,"Put simply, Credits are what allow content to be staked on the blockchain. Credits is required for uploads because without it, uploading onto LBRY is literally impossible. So, you will be asked for a small amount (network fee) of Credits for each content upload on Odysee."))}d.isMDXComponent=!0}}]);