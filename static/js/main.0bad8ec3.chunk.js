(this["webpackJsonpcryptocurrency-tracker-app"]=this["webpackJsonpcryptocurrency-tracker-app"]||[]).push([[0],{13:function(e,t,c){},20:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(14),i=c.n(a),s=(c(20),c(3)),o=c(15),j=c.n(o),l=(c(13),c(39),c(0)),d=function(e){var t=e.name,c=e.image,n=e.symbol,r=e.price,a=e.marketCap,i=e.percentage,s=e.country;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("img",{className:"coinImage",src:c,alt:"crypto"})}),Object(l.jsx)("td",{children:t}),Object(l.jsx)("td",{className:"symbol",children:n}),Object(l.jsxs)("td",{children:["inr"===s?"\u20b9":"usd"===s?"$":"\u20ac",a]}),Object(l.jsxs)("td",{children:["inr"===s?"\u20b9":"usd"===s?"$":"\u20ac",r]}),i<0?Object(l.jsxs)("td",{className:"coinPercent_red",children:[i.toFixed(2),"%"]}):Object(l.jsxs)("td",{className:"coinPercent_green",children:[i.toFixed(2),"%"]})]})})},b=function(e){var t=e.name,c=e.price,n=e.symbol,r=e.image,a=e.percentage,i=e.country;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"coinCard",children:[Object(l.jsx)("div",{className:"imageIcon",children:Object(l.jsx)("img",{src:r,alt:"crypto"})}),Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)("p",{children:n})]}),Object(l.jsxs)("div",{className:"priceData",children:[Object(l.jsxs)("h1",{children:["Price: ","inr"===i?"\u20b9":"usd"===i?"$":"\u20ac",c]}),a<0?Object(l.jsxs)("p",{className:"coinPercent_red",children:[a.toFixed(2),"%"]}):Object(l.jsxs)("p",{className:"coinPercent_green",children:[a.toFixed(2),"%"]})]})]})})};var h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(s.a)(a,2),o=i[0],h=i[1],u=Object(n.useState)("inr"),m=Object(s.a)(u,2),O=m[0],p=m[1],x=function(){var e=Object(n.useState)([window.innerHeight,window.innerWidth]),t=Object(s.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){r([window.innerHeight,window.innerWidth])};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),c}(),g=Object(s.a)(x,2),f=(g[0],g[1]);Object(n.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(O,"&order=market_cap_desc&per_page=25&page=1&sparkline=false")).then((function(e){r(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[O]);var v=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"operations",children:[Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsx)("input",{type:"text",name:"",id:"search",placeholder:"Search the coin..",onChange:function(e){h(e.target.value)}})}),Object(l.jsx)("div",{className:"country",children:Object(l.jsx)("select",{value:O,onChange:function(e){console.log(e.target.value),p(e.target.value)},label:"Country",children:["inr","usd","eur"].map((function(e){return Object(l.jsx)("option",{style:{color:"#fff"},value:e,children:e})}))})})]}),f>=748?Object(l.jsx)("div",{className:"coinContainer",children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{}),Object(l.jsx)("th",{children:"NAME"}),Object(l.jsx)("th",{children:"SYMBOL"}),Object(l.jsx)("th",{children:"MARKET CAP"}),Object(l.jsx)("th",{children:"PRICE"}),Object(l.jsx)("th",{children:"24h"})]}),v.map((function(e){return Object(l.jsx)(d,{name:e.name,image:e.image,symbol:e.symbol,marketCap:e.market_cap.toLocaleString(),price:e.current_price.toLocaleString(),percentage:e.market_cap_change_percentage_24h,country:O})}))]})}):Object(l.jsx)("div",{className:"mobileContainer",children:v.map((function(e){return Object(l.jsx)(b,{name:e.name,image:e.image,symbol:e.symbol,price:e.current_price.toLocaleString(),percentage:e.market_cap_change_percentage_24h,country:O})}))})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),u()}},[[41,1,2]]]);
//# sourceMappingURL=main.0bad8ec3.chunk.js.map