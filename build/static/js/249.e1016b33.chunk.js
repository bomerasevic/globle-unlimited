"use strict";(self.webpackChunkgloble=self.webpackChunkgloble||[]).push([[249],{2249:function(e,r,n){n.r(r),n.d(r,{default:function(){return m}});var s=n(885),t=n(2982),i=n(2791),o=n(7503),l=n(5381),c=n(8278),a=n(2606),u=n(9434),d=n(184);function m(e){var r=e.guesses,n=e.win,m=e.globeRef,p=(0,u.v9)((function(e){return e.globe.answerName}));function f(e){return(0,t.Z)(e).sort((function(e,r){return e.properties.NAME===p?-1:r.properties.NAME===p?1:e.proximity-r.proximity}))}var x=(0,i.useState)(f(r)),g=(0,s.Z)(x,2),h=g[0],v=g[1],N=(0,i.useContext)(c.R).locale;console.log("da vidimo",p);var j={"es-MX":"NAME_ES","en-CA":"NAME_EN"}[N];(0,i.useEffect)((function(){v(f(r))}),[r]);var A=n?"Answer":"Closest";var E,b=h[0],w=h[h.length-1];return(0,d.jsxs)("div",{className:"md:ml-10 md:mr-0 py-8 dark:text-white z-30",children:[h.length>0&&(0,d.jsx)("p",{className:"my-1",children:(0,d.jsx)("b",{children:A})}),(0,d.jsx)("ul",{className:"grid grid-cols-3 md:grid-cols-4 gap-3",children:h.map((function(e,r){var n=e.properties,s=n.NAME_LEN,t=n.ABBREV,i=n.NAME,c=(n.FLAG||"").toLocaleLowerCase(),a=s>=10?t:i;return"en-CA"!==N&&(a=e.properties[j]),(0,d.jsx)("li",{children:(0,d.jsxs)("button",{onClick:function(e){return function(e,r){var n=h[r],s=(0,o.Z)(n);(0,l.s)(s,m)}(0,r)},className:"flex items-center cursor-pointer",children:[(0,d.jsx)("img",{src:"https://flagcdn.com/w20/".concat(c.toLowerCase(),".png"),alt:a,className:""}),(0,d.jsx)("span",{className:"ml-2 text-md",children:a})]})},r)}))}),b&&w&&(0,d.jsx)("div",{className:"mt-8",children:(0,d.jsxs)("p",{children:[(0,d.jsx)(a.Z,{id:"Game8"}),": ",(E=null===b||void 0===b?void 0:b.proximity,(E/1e3).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,","))," km"]})})]})}},7503:function(e,r,n){n.d(r,{Z:function(){return t}});var s=n(885);function t(e){var r=e.bbox,n=(0,s.Z)(r,4),t=n[0],i=n[1],o=n[2];return{lat:(i+n[3])/2,lng:(t+o)/2}}}}]);
//# sourceMappingURL=249.e1016b33.chunk.js.map