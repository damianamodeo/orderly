"use strict";(self.webpackChunkorderly=self.webpackChunkorderly||[]).push([[534],{534:function(e,t,n){n.r(t),n.d(t,{Settings:function(){return N}});var r=n(667),o=n(327),i=n(76),c=n(426),a=n(435),s=n.n(a),l=n(834);s().vfs=l.I.vfs;var u=function(e){return[Object.keys(e[1])].concat(e).map((function(e){return Object.values(e).toString()})).join("\r")},d=function(e,t){r.db.open().then((function(){!function(e,t,n,r){var o={},i=[t];if(0===i.size)r(null,"csv"===n?u(o[t]):JSON.stringify(o));else{var c=Array.from(i),a=e.transaction(c,"readonly");a.onerror=function(e){return r(e,null)},c.forEach((function(e){var i=[];a.objectStore(e).openCursor().onsuccess=function(a){var s=a.target.result;s?(i.push(s.value),s.continue()):(o[e]=i,c.length===Object.keys(o).length&&r(null,"csv"===n?u(o[t]):JSON.stringify(o)))}}))}}(r.db.backendDB(),e,t,(function(e,n){if(e)console.error(e);else{var r=new Date,o=String(r.getDate()).padStart(2,"0"),i=String(r.getMonth()+1).padStart(2,"0"),c=r.getFullYear(),a=new Blob([n],"csv"===t?{"text/csv":[".csv"]}:{"application/json":[".json"]}),s=URL.createObjectURL(a),l=Object.assign(document.createElement("a"),{href:s,style:"display:none",download:"publishers "+c+"-"+i+"-"+o+"."+t});document.body.appendChild(l),l.click(),URL.revokeObjectURL(s),l.remove()}}))})).catch((function(e){console.error("Could not connect. "+e)}))},f=n(201);var h=function(e,t,n,r){var o=new Set(e.objectStoreNames);if(0===o.size)r(null);else{var i,c=Array.from(o),a=e.transaction(c,"readwrite");a.onerror=function(e){return alert("cb(event)")};var s=i="text/csv"===n?JSON.parse('{"publishers": '.concat(function(e){for(var t=e.split("\r"),n=[],r=t[0].split(","),o=1;o<t.length;o++){for(var i={},c=t[o].split(","),a=0;a<r.length;a++)"lastName"===r[a]?i[r[a]]=(0,f.L)(c[a]):"id"===r[a]||"familyHead"===r[a]?i[r[a]]=parseInt(c[a]):i[r[a]]=c[a];n.push(i)}return JSON.stringify(n)}(t),"}")):JSON.parse(t);console.log(i),Object.keys(s).forEach((function(e){c.includes(e)||delete s[e]})),0===Object.keys(s).length&&r(null),c.forEach((function(e){var t=0,n=Array.from(s[e]||[]);s[e]&&n.length>0?n.forEach((function(n){var o=a.objectStore(e).add(n);o.onsuccess=function(){++t===s[e].length&&(delete s[e],0===Object.keys(s).length&&r(null))},o.onerror=function(e){console.log(e)}})):s[e]&&(delete s[e],0===Object.keys(s).length&&r(null))}))}},b=function(e){var t=document.querySelector("#import-stores").files[0],n=new FileReader;n.onloadend=function(){console.log(t.type),function(e,t,n){var r=[t],o=r.size;if(0===o)n(null);else{var i=Array.from(r),c=e.transaction(i,"readwrite");c.onerror=function(e){return n(e)};var a=0;i.forEach((function(e){c.objectStore(e).clear().onsuccess=function(){++a===o&&n(null)}}))}}(r.db.backendDB(),e),h(r.db.backendDB(),n.result,t.type,(function(e){console.log(e)}))},n.readAsText(t)},g=n(841),x=n(184),p=function(e){var t=e.action,n=e.children;return(0,x.jsx)("div",{className:"dark:bg-buttonD w-56 text-center bg-button p-2 text-white dark:text-black",onClick:t,children:n})},m=n(885),v=n(791),j=function(e){var t=e.addStyle,n=e.children;return(0,x.jsx)("span",{className:"inline-block align-baseline dark:text-white "+t,children:n})},y=function(e){var t=e.id,n=(e.label,e.helpText),r=e.types,o=(0,v.useState)(n),i=(0,m.Z)(o,2),c=i[0],a=i[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("input",{id:t,type:"file",accept:r,hidden:"hidden",onChange:function(e){a(e.target.value.match(/[/\\]([\w\d\s.\-()]+)$/)[1])}}),(0,x.jsx)(p,{action:function(){document.getElementById(t).click()},children:"Choose File"}),(0,x.jsx)(j,{addStyle:"align-middle-xxx",children:c})]})},k=n(795),w=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(g.Z,{className:"relative m-4 bg-white p-2 text-center",children:[(0,x.jsx)(k.x,{children:"Import Congregation"}),(0,x.jsx)(y,{id:"import-stores",label:"",helpText:"Select a .csv or .ord file",types:".ord,.csv"}),(0,x.jsx)(p,{action:function(){b("publishers")},children:"Import"})]})})},S=n(328),N=function(){var e=(0,o.useLiveQuery)((function(){return r.db.publishers.orderBy("[lastName+firstName]").toArray()}));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.h,{headerLeft:(0,x.jsx)("div",{}),title:(0,x.jsx)(S.X,{children:"Settings"}),headerRight:(0,x.jsx)("div",{className:"text-header text-primary"})}),(0,x.jsxs)(c.V,{bgColor:"bg-bgLightest dark:bg-black ",children:[(0,x.jsx)(g.Z,{className:"m-4 bg-white p-4 text-center",action:function(){!function(e){var t,n={content:[],pageMargins:10};null===e||void 0===e||e.filter((function(e){return!e.familyHead||e.id===e.familyHead})).forEach((function(r){return(t=[{svg:'<svg height="20" width="580"><line x1="0" y1="18" x2="580" y2="18" stroke="#4a6da7" style="stroke-width:2" /></svg>'},{columns:[{text:r.lastName.toUpperCase(),fontSize:18,bold:!0,width:"25%"},{text:r.homePhone,width:"25%"},{text:"".concat(r.unitNumber?"".concat(r.unitNumber,"/"):"").concat(r.houseNumber," ").concat(r.street,", ").concat(r.suburb),fontSize:13}]},{columns:[{text:r.firstName,width:"25%"},{text:r.mobilePhone,width:"25%"},{text:r.personalEmail}]}])(null===e||void 0===e?void 0:e.filter((function(e){return e.id!==r.id&&e.familyHead===r.id})).forEach((function(e){return t.push([{columns:[{text:e.firstName,width:"25%"},{text:e.mobilePhone,width:"25%"},{text:e.personalEmail}]}])})))(n.content.push({stack:t,unbreakable:!0}))})),console.log(n),s().createPdf(n).download("damo.pdf")}(e)},children:(0,x.jsx)(k.x,{children:"Export Congregation to PDF Contact List"})}),(0,x.jsx)(g.Z,{className:"m-4 bg-white p-4 text-center",action:function(){d("publishers","ord")},children:(0,x.jsx)(k.x,{children:"Export Congregation to Orderly file"})}),(0,x.jsx)(g.Z,{className:"m-4 bg-white p-4 text-center",action:function(){d("publishers","csv")},children:(0,x.jsx)(k.x,{children:"Export Congregation to CSV file"})}),(0,x.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=534.e8e79037.chunk.js.map