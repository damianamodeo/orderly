"use strict";(self.webpackChunkorderly=self.webpackChunkorderly||[]).push([[117],{993:function(e,t,n){n.r(t),n.d(t,{Settings:function(){return S}});var r=n(667),o=n(327),c=n(76),i=n(426),l=n(435),a=n.n(l),s=n(834);a().vfs=s.I.vfs;var u=function(e){return[Object.keys(e[1])].concat(e).map((function(e){return Object.values(e).toString()})).join("\r")},d=function(e,t){r.db.open().then((function(){!function(e,t,n,r){var o={},c=[t];if(0===c.size)r(null,"csv"===n?u(o[t]):JSON.stringify(o));else{var i=Array.from(c),l=e.transaction(i,"readonly");l.onerror=function(e){return r(e,null)},i.forEach((function(e){var c=[];l.objectStore(e).openCursor().onsuccess=function(l){var a=l.target.result;a?(c.push(a.value),a.continue()):(o[e]=c,i.length===Object.keys(o).length&&r(null,"csv"===n?u(o[t]):JSON.stringify(o)))}}))}}(r.db.backendDB(),e,t,(function(e,n){if(e)console.error(e);else{var r=new Date,o=String(r.getDate()).padStart(2,"0"),c=String(r.getMonth()+1).padStart(2,"0"),i=r.getFullYear(),l=new Blob([n],"csv"===t?{"text/csv":[".csv"]}:{"application/json":[".json"]}),a=URL.createObjectURL(l),s=Object.assign(document.createElement("a"),{href:a,style:"display:none",download:"publishers "+i+"-"+c+"-"+o+"."+t});document.body.appendChild(s),s.click(),URL.revokeObjectURL(a),s.remove()}}))})).catch((function(e){console.error("Could not connect. "+e)}))},h=n(841),f=n(328),g=n(184),m=function(e){var t=e.action,n=e.children;return(0,g.jsx)("div",{className:"dark:bg-buttonD w-56 text-center bg-button p-2 text-white dark:text-black m-auto",onClick:t,children:n})},b=n(514),p=n(885),x=n(791),v=function(e){var t=e.addStyle,n=e.children;return(0,g.jsx)("span",{className:"inline-block align-baseline dark:text-white "+t,children:n})},j=function(e){var t=e.id,n=(e.label,e.helpText),r=e.types,o=(0,x.useState)(n),c=(0,p.Z)(o,2),i=c[0],l=c[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",{id:t,type:"file",accept:r,hidden:"hidden",onChange:function(e){l(e.target.value.match(/[/\\]([\w\d\s.\-()]+)$/)[1])}}),(0,g.jsxs)("div",{className:"my-3 flex flex-col content-center gap-5 text-center",children:[(0,g.jsx)(m,{action:function(){document.getElementById(t).click()},children:"Choose File"}),(0,g.jsx)(v,{children:i})]})]})},y=n(201);var k=function(e,t,n,r){var o=new Set(e.objectStoreNames);if(0===o.size)r(null);else{var c,i=Array.from(o),l=e.transaction(i,"readwrite");l.onerror=function(e){return alert("cb(event)")};var a=c="text/csv"===n?JSON.parse('{"publishers": '.concat(function(e){for(var t=e.split("\r"),n=[],r=t[0].split(","),o=1;o<t.length;o++){for(var c={},i=t[o].split(","),l=0;l<r.length;l++)"lastName"===r[l]?c[r[l]]=(0,y.L)(i[l]):"id"===r[l]||"familyHead"===r[l]?c[r[l]]=parseInt(i[l]):c[r[l]]=i[l];n.push(c)}return JSON.stringify(n)}(t),"}")):JSON.parse(t);console.log(c),Object.keys(a).forEach((function(e){i.includes(e)||delete a[e]})),0===Object.keys(a).length&&r(null),i.forEach((function(e){var t=0,n=Array.from(a[e]||[]);a[e]&&n.length>0?n.forEach((function(n){var o=l.objectStore(e).add(n);o.onsuccess=function(){++t===a[e].length&&(delete a[e],0===Object.keys(a).length&&r(null))},o.onerror=function(e){console.log(e)}})):a[e]&&(delete a[e],0===Object.keys(a).length&&r(null))}))}},w=function(e){var t=document.querySelector("#import-stores").files[0],n=new FileReader;n.onloadend=function(){console.log(t.type),function(e,t,n){var r=[t],o=r.size;if(0===o)n(null);else{var c=Array.from(r),i=e.transaction(c,"readwrite");i.onerror=function(e){return n(e)};var l=0;c.forEach((function(e){i.objectStore(e).clear().onsuccess=function(){++l===o&&n(null)}}))}}(r.db.backendDB(),e),k(r.db.backendDB(),n.result,t.type,(function(e){console.log(e)}))},n.readAsText(t)},S=function(){var e=(0,o.useLiveQuery)((function(){return r.db.publishers.orderBy("[lastName+firstName]").toArray()}));return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.h,{headerLeft:(0,g.jsx)("div",{}),title:(0,g.jsx)(f.X,{children:"Settings"}),headerRight:(0,g.jsx)("div",{className:"text-header text-primary"})}),(0,g.jsxs)(i.V,{bgColor:"bg-bgLightest dark:bg-black ",children:[(0,g.jsxs)(h.Z,{children:[(0,g.jsx)(b.o,{children:"Export Congregation"}),(0,g.jsxs)("div",{className:"my-3 flex flex-col content-center gap-8",children:[(0,g.jsx)(m,{action:function(){!function(e){var t,n={content:[],pageMargins:10};null===e||void 0===e||e.filter((function(e){return!e.familyHead||e.id===e.familyHead})).forEach((function(r){return t=[{svg:'<svg height="20" width="580"><line x1="0" y1="18" x2="580" y2="18" stroke="#4a6da7" style="stroke-width:2" /></svg>'},{columns:[{text:r.lastName.toUpperCase(),fontSize:18,bold:!0,lineHeight:1.2,width:"25%"},{text:r.homePhone,width:"20%"},{text:"".concat(r.unitNumber?"".concat(r.unitNumber,"/"):"").concat(r.houseNumber," ").concat(r.street,", ").concat(r.suburb),fontSize:18,bold:!0,alignment:"right",link:"https://www.google.com/maps/place/".concat(r.houseNumber,"+").concat(r.street,",+").concat(r.suburb)}]},{columns:[{text:r.firstName,width:"25%",lineHeight:1.4},{text:r.mobilePhone,width:"20%",link:"tel://".concat(r.mobilePhone)},{text:r.personalEmail,link:"mailto:".concat(r.personalEmail),alignment:"right"}]}],null!==e&&void 0!==e&&e.filter((function(e){return e.id!==r.id&&e.familyHead===r.id})).forEach((function(e){return t.push([{columns:[{text:e.firstName,width:"25%",lineHeight:1.4},{text:e.mobilePhone,width:"20%",link:"tel://".concat(e.mobilePhone)},{text:e.personalEmail,link:"mailto:".concat(e.personalEmail),alignment:"right"}]}])})),n.content.push({stack:t,unbreakable:!0})})),console.log(n),a().createPdf(n).download("damo.pdf")}(e)},children:"PDF"}),(0,g.jsx)(m,{action:function(){d("publishers","ord")},children:"ORD"}),(0,g.jsx)(m,{action:function(){d("publishers","csv")},children:"CSV"})]})]}),(0,g.jsxs)(h.Z,{children:[(0,g.jsx)(b.o,{children:"Import Congregation"}),(0,g.jsxs)("div",{className:"my-3 flex flex-col content-center gap-3",children:[(0,g.jsx)(j,{id:"import-stores",label:"",helpText:"Select a .csv or .ord file",types:".ord,.csv"}),(0,g.jsx)(m,{action:function(){w("publishers")},children:"Import"})]})]})]})]})}}}]);
//# sourceMappingURL=117.780c8a52.chunk.js.map