(this["webpackJsonpenglish-bot"]=this["webpackJsonpenglish-bot"]||[]).push([[0],{80:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var r,c,i,a,o,s,p,x,l,d,b,j,h=t(1),u=t.n(h),g=t(40),O=t.n(g),m=t(7),f=t(17),v=t(8),w=t.p+"static/media/english.9c170a25.png",y=t.p+"static/media/left-arrow.903af5d7.png",k=t(25),E=t(28),B=t.n(E),C=t(41),S=t(42),T=t.n(S),G=t(0),N=u.a.createContext(),F=function(n){var e=n.children,t=Object(h.useState)({}),r=Object(f.a)(t,2),c=r[0],i=r[1],a=function(){var n=Object(C.a)(B.a.mark((function n(){var e,t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.a.get("https://english-bot-test.herokuapp.com/api/bot-flow");case 2:e=n.sent,t=e.data,i(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(h.useEffect)((function(){a()}),[]),Object(G.jsx)(N.Provider,{value:c,children:e})},L=N,z=t.p+"static/media/send.01c24b89.png",I=t(49),J=t.p+"static/media/bot-icon.cfbb308b.png",M=Object(I.a)("wss://english-bot-test.herokuapp.com/"),D=function(){var n=Object(h.useContext)(L).message,e=Object(h.useState)([{from:"English BOT",text:"\ud83d\udc4b\ud83c\udffb\ud83d\udc4b\ud83c\udffb"},{from:"English BOT",text:null===n||void 0===n?void 0:n.text}]),t=Object(f.a)(e,2),r=t[0],c=t[1],i=Object(h.useState)({text:""}),a=Object(f.a)(i,2),o=a[0],s=a[1];Object(h.useEffect)((function(){M.on("checkGrammerResult",(function(n){var e=n.message,t=n.result;console.log(o,e);var i=t.result,a=t.corrections;0!==(null===a||void 0===a?void 0:a.length)&&e.toLowerCase().replace(/\ /g,"")!=(null===i||void 0===i?void 0:i.toLocaleLowerCase().replace(/\ /g,""))?c([].concat(Object(k.a)(r),[{from:"English BOT",text:Object(G.jsx)(A,{children:Object(G.jsxs)("div",{children:["you are too close , the correct answer is",Object(G.jsx)("h4",{children:i})]})})}])):c([].concat(Object(k.a)(r),[{from:"English BOT",text:"u r right \u2705 "}]))}))}),[r]);return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(R,{children:r.map((function(n,e){var t=n.from,r=n.text;return Object(G.jsx)(G.Fragment,{children:"English BOT"===t?Object(G.jsxs)(U,{children:[Object(G.jsx)("img",{src:J,alt:" "}),Object(G.jsx)("span",{children:r})]},e):Object(G.jsx)(q,{children:Object(G.jsx)("span",{children:r})},e)})}))}),Object(G.jsxs)(P,{onSubmit:function(n){return function(n){n.preventDefault(),c([].concat(Object(k.a)(r),[{from:"Me",text:o.text}])),M.emit("checkGrammer",o),s({text:""})}(n)},children:[Object(G.jsx)("input",{value:o.text,onChange:function(n){return s({text:n.target.value})},type:"text",placeholder:"send a message..."}),Object(G.jsx)("button",{type:"submit",children:Object(G.jsx)("img",{src:z,alt:""})})]})]})},P=v.a.form(r||(r=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  border-top: 1px solid rgb(230, 230, 230);\n  input {\n    border: none;\n    height: 40px;\n    width: 80%;\n    padding: 10px 20px;\n    outline: 0;\n  }\n  button {\n    border: none;\n    background-color: white;\n    width: 18%;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"]))),R=v.a.div(c||(c=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 400px;\n  min-height: 400px;\n  background: white;\n  overflow-y: auto;\n  padding: 15px 20px;\n  span {\n    width: fit-content;\n    height: fit-content;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    margin-bottom: 10px;\n  }\n"]))),U=v.a.div(i||(i=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  span {\n    background-color: #717171;\n    color: white;\n    padding: 10px;\n  }\n  img {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"]))),q=v.a.div(a||(a=Object(m.a)(["\n  margin-left: auto;\n  span {\n    display: block;\n    background-color: #0073a5;\n    color: white;\n    margin-left: 10px;\n    padding: 10px;\n  }\n"]))),A=v.a.div(o||(o=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  h4 {\n    display: inline-block;\n    color: #74eaf4;\n    margin: 0px 0px 0px 10px;\n  }\n"]))),H=function(){var n=Object(h.useState)(!1),e=Object(f.a)(n,2),t=e[0],r=e[1];return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(W,{children:Object(G.jsxs)(K,{children:[t&&Object(G.jsx)(Q,{onClick:function(){return r(!1)},src:y,alt:""}),Object(G.jsxs)(X,{children:[Object(G.jsx)(V,{src:w,alt:""}),Object(G.jsx)("span",{children:" English Bot "})]}),Object(G.jsx)("p",{children:"I can help you to improve your english."})]})}),Object(G.jsx)(K,{children:Object(G.jsxs)(Y,{children:[!t&&Object(G.jsxs)(Z,{children:[Object(G.jsx)("h3",{children:"Get Started"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{className:"replyNote",children:"My usual reply time"}),Object(G.jsx)("br",{}),Object(G.jsx)("span",{className:"replyTome",children:"\ud83d\udd53 Under 1 min"})]}),Object(G.jsx)("button",{onClick:function(){return r(!0)},children:"Get Started"})]}),t&&Object(G.jsx)(D,{})]})})]})},K=v.a.div(s||(s=Object(m.a)(["\n  padding: 0px 25px;\n"]))),Q=v.a.img(p||(p=Object(m.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px 20px 0px;\n  cursor: pointer;\n"]))),V=v.a.img(x||(x=Object(m.a)(["\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n"]))),W=v.a.div(l||(l=Object(m.a)(["\n  color: white;\n  background-color: #14243d;\n  padding: 40px 20px 100px 20px;\n  p {\n    font-size: 20px;\n  }\n"]))),X=v.a.h1(d||(d=Object(m.a)(["\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n"]))),Y=v.a.div(b||(b=Object(m.a)(["\n  margin: -70px 0px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,\n    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;\n  display: flex;\n  flex-direction: column;\n"]))),Z=v.a.div(j||(j=Object(m.a)(["\n  padding: 15px 20px;\n  .replyNote {\n    color: gray;\n    margin: 0px 0px 5px 0px;\n  }\n  .replyTome {\n    font-weight: bold;\n  }\n  button {\n    border: none;\n    background-color: #763c1a;\n    color: white;\n    padding: 15px 20px;\n    border-radius: 30px;\n    font-weight: 600;\n    font-size: 16px;\n    cursor: pointer;\n    width: 200px;\n    margin: 30px 0px 40px 0px;\n    transition: background-color 0.1s ease-in;\n    &:hover {\n      background-color: #bc6a39;\n    }\n  }\n"]))),$=function(){return Object(G.jsx)(F,{children:Object(G.jsx)(H,{})})};t(80);O.a.render(Object(G.jsx)($,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.b26fe975.chunk.js.map