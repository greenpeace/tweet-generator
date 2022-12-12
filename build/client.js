!function(){"use strict";var e={n:function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,{a:a}),a},d:function(t,a){for(var r in a)e.o(a,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:a[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var t;e.g.importScripts&&(t=e.g.location+"");var a=e.g.document;if(!t&&a&&(a.currentScript&&(t=a.currentScript.src),!t)){var r=a.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}();var t=window.wp.element,a=window.React,r=e.n(a),l=window.ReactDOM,n=e.n(l),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r().createContext&&r().createContext(c),i=function(){return i=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},i.apply(this,arguments)};function s(e){return e&&e.map((function(e,t){return r().createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function m(e){return function(t){return r().createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var a,l=e.attr,n=e.size,c=e.title,o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a}(e,["attr","size","title"]),s=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r().createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r().createElement("title",null,c),e.children)};return void 0!==o?r().createElement(o.Consumer,null,(function(e){return t(e)})):t(c)}function d(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"}}]})(e)}function g(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"}}]})(e)}function v(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"}}]})(e)}function p(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}}]})(e)}function h(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(e)}function w(e){return m({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"}},{tag:"path",attr:{d:"M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"}}]})(e)}var f=e.p+"images/cbd-image.b58120e4.png",b=e.p+"images/tweet-logo.b33a0e7c.png",E=e=>{let{tweet:a,updatedTweetBody:r}=e;const{imgPreview:l,body:n}=a;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"tweet-card"},(0,t.createElement)("div",{className:"card-heading"},(0,t.createElement)("img",{src:b,alt:"Greenpeace logo"}),(0,t.createElement)("div",{className:"heading-container"},(0,t.createElement)("div",{className:"heading-info"},(0,t.createElement)("p",{className:"twitter-name"},"Your Name"),(0,t.createElement)("span",{className:"twitter-handle"},"@YourTwitterHandle")),(0,t.createElement)(h,null))),(0,t.createElement)("div",{className:"card-body"},void 0===n?(0,t.createElement)("p",{className:"tweet-text"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."):(0,t.createElement)("p",{className:"tweet-text"},r),void 0===l?(0,t.createElement)("img",{src:f,alt:"placeholder image",className:"tweet-image"}):(0,t.createElement)("img",{src:l,alt:"character image",className:"tweet-image"}),(0,t.createElement)("div",{className:"tweet-card-actions"},(0,t.createElement)(v,null),(0,t.createElement)(d,null),(0,t.createElement)(p,null),(0,t.createElement)(w,null),(0,t.createElement)(g,null)))))},y=e=>{let{href:a,disabled:r}=e;return(0,t.createElement)("a",{href:a,target:"_blank",rel:"noopener",className:r?"btn-disabled":"tweet-btn"},"Click to tweet")},N=e=>{let{attributes:a,selectedTarget:r,setSelectedTarget:l,selectedCharacter:n,setSelectedCharacter:c,selectedTweetTemplate:o,setSelectedTweetTemplate:i,disabled:s,setDisabled:m}=e;if(!a)return null;const{data:u}=a;if(!u)return null;try{var d,g;const e=JSON.parse(u),{characters:a,targets:m,labels:v}=e,p={target:null==m||null===(d=m[r])||void 0===d?void 0:d["twitter-handle"],body:o,character:null===(g=a[n])||void 0===g?void 0:g.name},{target:h="<target>",character:w="<character>",body:f}=p;let b,N;s=void 0===f||void 0===h||"<target>"===h||void 0===w||"<character>"===w,void 0!==f&&(b=f.replace("<target>",h).replace("<character>",w),N=b.replaceAll("#","%23"));const C=`https://twitter.com/intent/tweet?text=${N}`;return(0,t.createElement)("div",{className:"tweet-container"},(0,t.createElement)("div",{className:"form-container"},(0,t.createElement)("label",{className:"step-label"},v.label_1.name),(0,t.createElement)("select",{onChange:e=>{let{target:t}=e;l(t.value)}},(0,t.createElement)("option",{value:""},"Select Target"),Object.keys(m||{}).map(((e,a)=>(0,t.createElement)("option",{key:a,value:e},m[e].name)))),(0,t.createElement)("label",{className:"step-label"},v.label_2.name),(0,t.createElement)("select",{onChange:e=>{let{target:t}=e;c(t.value)}},(0,t.createElement)("option",{value:""},"Select Species"),Object.keys(a||{}).map(((e,r)=>(0,t.createElement)("option",{key:r,value:e},a[e].name)))),(0,t.createElement)("label",{className:"step-label"},v.label_3.name),(e["tweet-body"]||[]).map(((e,a)=>(0,t.createElement)("div",{key:a,className:"tweet-body-container"},(0,t.createElement)("input",{type:"radio",name:"body",value:e.tweet,onChange:e=>{let{target:t}=e;return i(t.value)}}),(0,t.createElement)("label",null,e.tweet))))),(0,t.createElement)("div",{className:"tweet-card-container"},(0,t.createElement)(E,{tweet:p,updatedTweetBody:b}),(0,t.createElement)(y,{disabled:s,href:C})))}catch(e){return console.error(e),(0,t.createElement)("p",null,"Incorrect JSON")}};function C(e){const{attributes:r}=e,[l,n]=(0,a.useState)(void 0),[c,o]=(0,a.useState)(void 0),[i,s]=(0,a.useState)(void 0),[m,u]=(0,a.useState)(void 0),[d,g]=(0,a.useState)(void 0),[v,p]=(0,a.useState)(!0);return(0,t.createElement)("div",{className:"mt-block-tweet-generator","data-mt-attributes":JSON.stringify(r)},(0,t.createElement)(N,{attributes:r,selectedTarget:l,setSelectedTarget:n,selectedCharacter:c,setSelectedCharacter:o,characterImage:i,setCharacterImage:s,imageUrl:m,setImageUrl:u,selectedTweetTemplate:d,setSelectedTweetTemplate:g,disabled:v,setDisabled:p}))}window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".mt-block-tweet-generator-wrapper");e&&Array.from(e).forEach((e=>{var a;const r=JSON.parse((null==e||null===(a=e.dataset)||void 0===a?void 0:a.mtAttributes)||null);n().hydrate((0,t.createElement)(C,{attributes:r}),e)}))}))}();