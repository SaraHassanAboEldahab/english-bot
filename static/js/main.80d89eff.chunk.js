(this["webpackJsonpenglish-bot"]=this["webpackJsonpenglish-bot"]||[]).push([[0],{57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var o,s,a,i,r,l,c,d,u,b,g,m,p,x,h,j,f,O,v=n(0),y=n(35),S=n.n(y),M=n(21),N=n(5),E=n(4),I=n(6),w=n(1),T=[{botName:"Bot 1",botDescription:"It will correct your incorrect answers",botLink:"/english-bot/bot1",botItem:"bot1",messagesItem:"messages1"},{botName:"Bot 2",botDescription:"It won't correct your incorrect answers",botLink:"/english-bot/bot2",botItem:"bot2",messagesItem:"messages2"},{botName:"Bot 3",botDescription:"It will correct your incorrect answers after three tries",botLink:"/english-bot/bot3",botItem:"bot3",messagesItem:"messages3"}],k=function(t){t.setActive;return Object(w.jsx)(B,{children:Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(Q,{children:[Object(w.jsx)("h3",{children:"Get Started With One Of The Bots \ud83d\udc47"}),T.map((function(t){return Object(w.jsxs)(R,{children:[Object(w.jsx)("summary",{children:t.botName}),Object(w.jsxs)("p",{children:[t.botDescription," , If you want to finish your previous attempt, click complete, or if you want to start over, click start."]}),Object(w.jsxs)(J,{children:[Object(w.jsx)(M.b,{to:t.botLink,children:Object(w.jsx)(L,{children:"Complete"})}),Object(w.jsx)(M.b,{to:t.botLink,children:Object(w.jsx)(q,{onClick:function(){localStorage.removeItem(t.botItem),localStorage.removeItem(t.messagesItem)},children:"Start"})})]})]})}))]})})})},B=I.a.div(o||(o=Object(N.a)(["\n  margin: -70px 0px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,\n    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;\n  display: flex;\n  flex-direction: column;\n"]))),Q=I.a.div(s||(s=Object(N.a)(["\n  padding: 15px 20px;\n  .replyNote {\n    color: gray;\n    margin: 0px 0px 5px 0px;\n  }\n  .replyTome {\n    font-weight: bold;\n  }\n"]))),J=I.a.div(a||(a=Object(N.a)(["\n  display: flex;\n"]))),L=I.a.button(i||(i=Object(N.a)(["\n  border: none;\n  background-color: #0695d5;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  margin: 10px 10px 10px 25px;\n  transition: background-color 0.1s ease-in;\n  &:hover {\n    background-color: #04638d;\n  }\n"]))),q=I.a.button(r||(r=Object(N.a)(["\n  border: none;\n  background-color: #a9b1b5;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  margin: 10px 0px;\n  transition: background-color 0.1s ease-in;\n  &:hover {\n    background-color: #7f8385;\n  }\n"]))),R=I.a.details(l||(l=Object(N.a)(['\n  summary::before {\n    content: "\u25b6\ufe0f  ";\n  }\n  &[open] {\n    summary::before {\n      content: "\ud83d\udd3d  ";\n    }\n  }\n  summary {\n    cursor: pointer;\n    list-style: none;\n    font-weight: bold;\n    margin-bottom: 15px;\n  }\n  p {\n    margin: 0px 0px 0px 25px;\n    color: gray;\n    width: 50%;\n  }\n']))),A=n.p+"static/media/english.9c170a25.png",C=n.p+"static/media/left-arrow.903af5d7.png",G=function(t){var e=t.active,n=t.setActive;return Object(w.jsx)(W,{children:Object(w.jsxs)(w.Fragment,{children:[e&&Object(w.jsx)(M.b,{to:"/english-bot",onClick:function(){return n(!1)},children:Object(w.jsx)(F,{src:C,alt:""})}),Object(w.jsxs)(_,{children:[Object(w.jsx)(D,{src:A,alt:""}),Object(w.jsx)("span",{children:" English Bot "})]}),Object(w.jsx)("p",{children:"I can help you to improve your english."})]})})},_=I.a.h1(c||(c=Object(N.a)(["\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n"]))),F=I.a.img(d||(d=Object(N.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px 20px 0px;\n  cursor: pointer;\n"]))),D=I.a.img(u||(u=Object(N.a)(["\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n"]))),W=I.a.div(b||(b=Object(N.a)(["\n  color: white;\n  background-color: #14243d;\n  padding: 40px 20px 100px 20px;\n  p {\n    font-size: 20px;\n  }\n"]))),H=n(20),Y=n(2),z=n.p+"static/media/send.01c24b89.png",P=n.p+"static/media/bot-icon.cfbb308b.png",K=function(){return Object(w.jsx)(U,{children:Object(w.jsxs)(V,{children:[Object(w.jsx)(Z,{}),Object(w.jsx)(Z,{}),Object(w.jsx)(Z,{})]})})},U=I.a.div(g||(g=Object(N.a)(["\n  background-color: #717171;\n  padding: 15px 20px;\n  border-radius: 20px;\n  border-bottom-left-radius: 2px;\n  width: fit-content;\n  margin: 0px 0px 20px 20px;\n"]))),V=I.a.ul(m||(m=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  height: 17px;\n  padding: 0px;\n  margin: 0px;\n"]))),X=Object(I.b)(p||(p=Object(N.a)(["\n 0% {\n    transform: translateY(0px);\n    background-color:white;\n  }\n  28% {\n    transform: translateY(-7px);\n    background-color:#d9d8d8;\n  }\n  44% {\n    transform: translateY(0px);\n    background-color:#bbbaba;\n  }\n"]))),Z=I.a.li(x||(x=Object(N.a)(["\n  background-color: white;\n  border-radius: 50%;\n  height: 7px;\n  margin-right: 4px;\n  vertical-align: middle;\n  width: 7px;\n  &:nth-child(1) {\n    animation-delay: 200ms;\n  }\n  &:nth-child(2) {\n    animation-delay: 300ms;\n  }\n  &:nth-child(3) {\n    animation-delay: 400ms;\n  }\n  animation: "," 1.8s infinite ease-in-out;\n"])),X),$=n(22),tt=n.n($);var et,nt,ot,st,at,it,rt=function(t){var e=t.buttons,n=t.text,o=t.onBtnClick;return Object(w.jsxs)(lt,{children:[Object(w.jsx)(ct,{children:n}),Object(w.jsx)(dt,{children:null===e||void 0===e?void 0:e.map((function(t){return Object(w.jsx)(ut,{onClick:function(){o(t)},children:null===t||void 0===t?void 0:t.title},tt()())}))})]})},lt=I.a.div(h||(h=Object(N.a)(["\n  max-width: 300px;\n  text-align: center;\n"]))),ct=I.a.h3(j||(j=Object(N.a)(["\n  margin: 0px;\n  /* background-color: #9b9b9b; */\n  background-color: #0073a5;\n  padding: 20px 0px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  border: 1px solid #f0f0f0;\n"]))),dt=I.a.ul(f||(f=Object(N.a)(["\n  padding: 0px;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0px;\n  border: 1px solid #f0f0f0;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]))),ut=I.a.li(O||(O=Object(N.a)(["\n  border-bottom: 1px solid #f0f0f0;\n  width: 100%;\n  padding: 10px 0px;\n  color: #9b9b9b;\n  cursor: pointer;\n  &:hover {\n    color: #0073a5;\n  }\n  &:last-child {\n    border-bottom: none;\n  }\n"]))),bt=I.a.div(et||(et=Object(N.a)(["\n  margin: -70px 0px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,\n    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;\n  display: flex;\n  flex-direction: column;\n"]))),gt=I.a.form(nt||(nt=Object(N.a)(["\n  display: flex;\n  width: 100%;\n  border-top: 1px solid rgb(230, 230, 230);\n  input {\n    border: none;\n    height: 40px;\n    width: 80%;\n    padding: 10px 20px;\n    outline: 0;\n  }\n  button {\n    border: none;\n    background-color: white;\n    width: 18%;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"]))),mt=I.a.div(ot||(ot=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 400px;\n  min-height: 400px;\n  background: white;\n  overflow-y: auto;\n  padding: 15px 20px;\n  span {\n    width: fit-content;\n    height: fit-content;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    margin-bottom: 10px;\n  }\n"]))),pt=I.a.div(st||(st=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  span {\n    background-color: #9b9b9b;\n    color: white;\n    padding: 10px;\n  }\n  img {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"]))),xt=I.a.div(at||(at=Object(N.a)(["\n  margin-left: auto;\n  span {\n    display: block;\n    background-color: #0073a5;\n    color: white;\n    margin-left: 10px;\n    padding: 10px;\n  }\n"]))),ht=n(42),jt=Object(ht.a)("wss://english-bot-test.herokuapp.com/"),ft=["You are too close , but the write answer is {ANSWER}","The correct answer is {ANSWER}","{ANSWER} this is the correct"," Oh sorry , the write answer is {ANSWER}"],Ot=["You are right \ud83e\udd29","you are too good","great \ud83d\udc4f","Nice \ud83d\ude01\ud83d\ude01","You are right \u2705 "],vt=["Happy end","See you later\ud83d\ude4b\u200d\u2640\ufe0f"," Peace out\ud83e\udd73"," It was nice to see you again\ud83d\ude4b\u200d\u2640\ufe0f","Take care","I look forward to our next dialogue","Good bye","Bye bye!\ud83d\udc4b","Have a nice day","Goodnight","I\u2019m out of here","\ud83e\udd73"],yt=["You are wrong \u263a\ufe0f","false \u263a\ufe0f","Incorrect answer","Sorry , wrong \u263a\ufe0f","bad \ud83e\udd73\ud83d\ude14\ud83e\udd2c","That\u2019s wrong answer \ud83e\udd73\ud83d\ude14\ud83e\udd2c","Sad"],St=["Please think again","Try again ","Repeat your answer ","Please retry again \ud83d\ude35 ","Sorry, Retry","\ud83d\ude35"],Mt=["Go to study again","ask your teacher \ud83e\uddd1\u200d\ud83c\udfeb","Ask your teacher for tips & tricks \ud83e\uddd1\u200d\ud83c\udfeb","ask your tutor \ud83e\uddd1\u200d\ud83c\udfeb","Bad luck"," go to our website and study again","Revise your lessons","Looking back to your lesson","You should revise your lessons \u270d\ufe0f","reflect your daily instructional activities \u270d\ufe0f"],Nt=function(t){var e,n,o,s,a,i,r,l,c,d=t.setActive,u=Object(v.useRef)(),b=Object(v.useState)((null===(e=JSON.parse(localStorage.getItem("bot1")))||void 0===e?void 0:e.questionNo)||0),g=Object(E.a)(b,2),m=g[0],p=g[1],x=Object(v.useState)(null!==(n=null===(o=JSON.parse(localStorage.getItem("bot1")))||void 0===o?void 0:o.modelNo)&&void 0!==n?n:(null===(s=JSON.parse(localStorage.getItem("doneBefore1")))||void 0===s?void 0:s.flag)?Math.floor(3*Math.random()):0),h=Object(E.a)(x,2),j=h[0],f=h[1],O=Object(v.useState)((null===(a=JSON.parse(localStorage.getItem("messages1")))||void 0===a?void 0:a.messages)||[]),y=Object(E.a)(O,2),S=y[0],M=y[1],N=Object(v.useState)({text:""}),I=Object(E.a)(N,2),T=I[0],k=I[1],B=Object(v.useState)(null===(i=null===(r=JSON.parse(localStorage.getItem("bot1")))||void 0===r?void 0:r.typing)||void 0===i||i),Q=Object(E.a)(B,2),J=Q[0],L=Q[1],q=Object(v.useState)((null===(l=JSON.parse(localStorage.getItem("bot1")))||void 0===l?void 0:l.botMsg)||{}),R=Object(E.a)(q,2),A=R[0],C=R[1],G=Object(v.useState)((null===(c=JSON.parse(localStorage.getItem("bot1")))||void 0===c?void 0:c.currentQuestionType)||"intro"),_=Object(E.a)(G,2),F=_[0],D=_[1];Object(v.useEffect)((function(){localStorage.setItem("bot1",JSON.stringify({questionNo:m,currentQuestionType:F,botMsg:A,typing:J,modelNo:j}))}),[m,F,A,J,j]),Object(v.useEffect)((function(){localStorage.setItem("messages1",JSON.stringify({messages:S}))}),[S]),Object(v.useEffect)((function(){d(!0),0===S.length&&setTimeout((function(){jt.emit("getIntroQuestion",{questionNo:m}),jt.on("responseIntroQuestion",(function(t){var e=t.message,n=t.last;M([].concat(Object(Y.a)(S),[{from:"English BOT",text:e.text}])),n||p(m+1),L(!1)}))}),2e3)}),[]),Object(v.useEffect)((function(){"model"===F&&(jt.off("checkGrammerResult"),jt.on("checkGrammerResult",(function(t){var e=t.message,n=t.result,o=n.result,s=n.corrections;0===(null===s||void 0===s?void 0:s.length)||(null===e||void 0===e?void 0:e.toLowerCase().replace(/\ /g,""))===(null===o||void 0===o?void 0:o.toLocaleLowerCase().replace(/\ /g,""))?(L(!1),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:Ot[Math.floor(Math.random()*(Ot.length-1))],type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]))):(L(!1),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:"\n              ".concat(ft[Math.floor(Math.random()*(ft.length-1))].replace("{ANSWER}","<strong>".concat(o,"</strong>")),"\n              "),type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]))),A.last?jt.emit("getEndQuestion",{}):jt.emit("getModelQuestion",{questionNo:m,modelNo:j})}))),jt.off("responseIntroQuestion"),jt.off("responseModelQuestion"),jt.on("responseIntroQuestion",(function(t){var e=t.message,n=t.last;M([].concat(Object(Y.a)(S),[{from:"English BOT",text:e.text,type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}])),C({message:e,last:n}),n||p(m+1),L(!1)})),jt.on("responseModelQuestion",(function(t){var e,n,o=t.message,s=t.last;(M([].concat(Object(Y.a)(S),[{from:"English BOT",text:null===o||void 0===o?void 0:o.text,type:null===o||void 0===o?void 0:o.type,buttons:null===o||void 0===o?void 0:o.buttons}])),C({message:o,last:s}),s)?!(null===(e=JSON.parse(localStorage.getItem("doneBefore1")))||void 0===e?void 0:e.flag)&&j<2?(f(j+1),p(0)):!(null===(n=JSON.parse(localStorage.getItem("doneBefore1")))||void 0===n?void 0:n.flag)&&2===j&&A.last?(console.log("ELSE IF "),localStorage.setItem("doneBefore1",JSON.stringify({flag:!0})),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:vt[Math.floor(Math.random()*(vt.length-1))]}])),D("end")):(console.log("ELSEEE"),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:vt[Math.floor(Math.random()*(vt.length-1))]}])),D("end")):p(m+1);L(!1)})),u.current.addEventListener("DOMNodeInserted",(function(t){var e=t.currentTarget;e.scroll({top:e.scrollHeight,behavior:"smooth"})}))}),[S,m,T.text,F,j,A.last]);var W=function(t){M([].concat(Object(Y.a)(S),[{from:"Me",text:t.title}])),setTimeout((function(){if(L(!1),!0===t.correct)M([].concat(Object(Y.a)(S),[{from:"Me",text:t.title},{from:"English BOT",text:Ot[Math.floor(Math.random()*(Ot.length-1))],type:null===t||void 0===t?void 0:t.type,buttons:null===t||void 0===t?void 0:t.buttons}]));else{var e,n=null===(e=A.message.buttons.find((function(t){return!0===t.correct})))||void 0===e?void 0:e.title;M([].concat(Object(Y.a)(S),[{from:"Me",text:t.title},{from:"English BOT",text:"\n            ".concat(ft[Math.floor(Math.random()*(ft.length-1))].replace("{ANSWER}","<strong>".concat(n,"</strong>")),"\n            "),type:null===t||void 0===t?void 0:t.type,buttons:null===t||void 0===t?void 0:t.buttons}]))}A.last?jt.emit("getEndQuestion",{}):jt.emit("getModelQuestion",{questionNo:m,modelNo:j})}),1e3)};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(bt,{children:[Object(w.jsx)(mt,{ref:u,children:S.map((function(t,e){var n=t.from,o=t.text,s=t.type,a=t.buttons;return Object(w.jsx)(w.Fragment,{children:"English BOT"===n?Object(w.jsxs)(pt,{children:[Object(w.jsx)("img",{src:P,alt:" "}),"@message-type/button"===s?Object(w.jsx)(rt,{buttons:a,text:o,setMessages:M,messages:S,socket:jt,onBtnClick:W}):Object(w.jsx)("span",{dangerouslySetInnerHTML:{__html:"\n                    <style>\n                    strong{\n                      color: #74eaf4;\n                    }\n                    </style>\n                    <div>".concat(o,"</div>\n                    ")}})]},tt()()):Object(w.jsx)(xt,{children:Object(w.jsx)("span",{children:o})},e)})}))}),J&&Object(w.jsx)(K,{}),Object(w.jsxs)(gt,{onSubmit:function(t){return function(t){var e,n;t.preventDefault(),M([].concat(Object(Y.a)(S),[{from:"Me",text:T.text}])),L(!0),(null===A||void 0===A||null===(e=A.message)||void 0===e||null===(n=e.response)||void 0===n?void 0:n.length)>0&&"intro"===F&&setTimeout((function(){var t=A.message.response[Math.floor(Math.random()*(A.message.response.length-1))];M([].concat(Object(Y.a)(S),[{from:"Me",text:T.text},{from:"English BOT",text:t}])),A.last?(D("model"),p(0),C({}),jt.emit("getModelQuestion",{questionNo:m,modelNo:j})):(L(!0),jt.emit("getIntroQuestion",{questionNo:m}))}),1e3),"model"===F&&(jt.emit("checkGrammer",Object(H.a)(Object(H.a)({},T),{},{_id:A.message._id})),C({})),k({text:""})}(t)},children:[Object(w.jsx)("input",{value:T.text,onChange:function(t){return k({text:t.target.value})},type:"text",placeholder:"send a message..."}),Object(w.jsx)("button",{type:"submit",children:Object(w.jsx)("img",{src:z,alt:""})})]})]})})},Et=function(t){var e,n,o,s,a,i,r,l,c,d=t.setActive,u=Object(v.useRef)(),b=Object(v.useState)((null===(e=JSON.parse(localStorage.getItem("bot2")))||void 0===e?void 0:e.questionNo)||0),g=Object(E.a)(b,2),m=g[0],p=g[1],x=Object(v.useState)(null!==(n=null===(o=JSON.parse(localStorage.getItem("bot2")))||void 0===o?void 0:o.modelNo)&&void 0!==n?n:(null===(s=JSON.parse(localStorage.getItem("doneBefore2")))||void 0===s?void 0:s.flag)?Math.floor(3*Math.random()):0),h=Object(E.a)(x,2),j=h[0],f=h[1],O=Object(v.useState)((null===(a=JSON.parse(localStorage.getItem("messages2")))||void 0===a?void 0:a.messages)||[]),y=Object(E.a)(O,2),S=y[0],M=y[1],N=Object(v.useState)({text:""}),I=Object(E.a)(N,2),T=I[0],k=I[1],B=Object(v.useState)(null===(i=null===(r=JSON.parse(localStorage.getItem("bot2")))||void 0===r?void 0:r.typing)||void 0===i||i),Q=Object(E.a)(B,2),J=Q[0],L=Q[1],q=Object(v.useState)((null===(l=JSON.parse(localStorage.getItem("bot2")))||void 0===l?void 0:l.botMsg)||{}),R=Object(E.a)(q,2),A=R[0],C=R[1],G=Object(v.useState)((null===(c=JSON.parse(localStorage.getItem("bot2")))||void 0===c?void 0:c.currentQuestionType)||"intro"),_=Object(E.a)(G,2),F=_[0],D=_[1];Object(v.useEffect)((function(){localStorage.setItem("bot2",JSON.stringify({questionNo:m,currentQuestionType:F,botMsg:A,typing:J,modelNo:j}))}),[m,F,A,J,j]),Object(v.useEffect)((function(){localStorage.setItem("messages2",JSON.stringify({messages:S}))}),[S]),Object(v.useEffect)((function(){d(!0),0===S.length&&setTimeout((function(){jt.emit("getIntroQuestion",{questionNo:m}),jt.on("responseIntroQuestion",(function(t){var e=t.message,n=t.last;M([].concat(Object(Y.a)(S),[{from:"English BOT",text:e.text}])),n||p(m+1),L(!1)}))}),2e3)}),[]),Object(v.useEffect)((function(){"model"===F&&(jt.off("checkGrammerResult"),jt.on("checkGrammerResult",(function(t){var e=t.message,n=t.result,o=n.result,s=n.corrections;0===(null===s||void 0===s?void 0:s.length)||(null===e||void 0===e?void 0:e.toLowerCase().replace(/\ /g,""))===(null===o||void 0===o?void 0:o.toLocaleLowerCase().replace(/\ /g,""))?(L(!1),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:Ot[Math.floor(Math.random()*(Ot.length-1))],type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]))):(L(!1),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:yt[Math.floor(Math.random()*(yt.length-1))],type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]))),A.last?jt.emit("getEndQuestion",{}):jt.emit("getModelQuestion",{questionNo:m,modelNo:j})}))),jt.off("responseIntroQuestion"),jt.off("responseModelQuestion"),jt.on("responseIntroQuestion",(function(t){var e=t.message,n=t.last;M([].concat(Object(Y.a)(S),[{from:"English BOT",text:e.text,type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}])),C({message:e,last:n}),n||p(m+1),L(!1)})),jt.on("responseModelQuestion",(function(t){var e,n,o=t.message,s=t.last;(M([].concat(Object(Y.a)(S),[{from:"English BOT",text:null===o||void 0===o?void 0:o.text,type:null===o||void 0===o?void 0:o.type,buttons:null===o||void 0===o?void 0:o.buttons}])),C({message:o,last:s}),s)?!(null===(e=JSON.parse(localStorage.getItem("doneBefore2")))||void 0===e?void 0:e.flag)&&j<2?(f(j+1),p(0)):!(null===(n=JSON.parse(localStorage.getItem("doneBefore2")))||void 0===n?void 0:n.flag)&&2===j&&A.last?(console.log("ELSE IF "),localStorage.setItem("doneBefore2",JSON.stringify({flag:!0})),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:vt[Math.floor(Math.random()*(vt.length-1))]}])),D("end")):(console.log("ELSEEE"),M([].concat(Object(Y.a)(S),[{from:"English BOT",text:vt[Math.floor(Math.random()*(vt.length-1))]}])),D("end")):p(m+1);L(!1)})),u.current.addEventListener("DOMNodeInserted",(function(t){var e=t.currentTarget;e.scroll({top:e.scrollHeight,behavior:"smooth"})}))}),[S,m,T.text,F,j,A.last]);var W=function(t){M([].concat(Object(Y.a)(S),[{from:"Me",text:t.title}])),setTimeout((function(){if(L(!1),!0===t.correct)M([].concat(Object(Y.a)(S),[{from:"Me",text:t.title},{from:"English BOT",text:Ot[Math.floor(Math.random()*(Ot.length-1))],type:null===t||void 0===t?void 0:t.type,buttons:null===t||void 0===t?void 0:t.buttons}]));else{var e,n=null===(e=A.message.buttons.find((function(t){return!0===t.correct})))||void 0===e?void 0:e.title;M([].concat(Object(Y.a)(S),[{from:"Me",text:t.title},{from:"English BOT",text:"\n            ".concat(ft[Math.floor(Math.random()*(ft.length-1))].replace("{ANSWER}","<strong>".concat(n,"</strong>")),"\n            "),type:null===t||void 0===t?void 0:t.type,buttons:null===t||void 0===t?void 0:t.buttons}]))}A.last?jt.emit("getEndQuestion",{}):jt.emit("getModelQuestion",{questionNo:m,modelNo:j})}),1e3)};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(bt,{children:[Object(w.jsx)(mt,{ref:u,children:S.map((function(t,e){var n=t.from,o=t.text,s=t.type,a=t.buttons;return Object(w.jsx)(w.Fragment,{children:"English BOT"===n?Object(w.jsxs)(pt,{children:[Object(w.jsx)("img",{src:P,alt:" "}),"@message-type/button"===s?Object(w.jsx)(rt,{buttons:a,text:o,setMessages:M,messages:S,socket:jt,onBtnClick:W}):Object(w.jsx)("span",{dangerouslySetInnerHTML:{__html:"\n                    <style>\n                    strong{\n                      color: #74eaf4;\n                    }\n                    </style>\n                    <div>".concat(o,"</div>\n                    ")}})]},tt()()):Object(w.jsx)(xt,{children:Object(w.jsx)("span",{children:o})},e)})}))}),J&&Object(w.jsx)(K,{}),Object(w.jsxs)(gt,{onSubmit:function(t){return function(t){var e,n;t.preventDefault(),M([].concat(Object(Y.a)(S),[{from:"Me",text:T.text}])),L(!0),(null===A||void 0===A||null===(e=A.message)||void 0===e||null===(n=e.response)||void 0===n?void 0:n.length)>0&&"intro"===F&&setTimeout((function(){var t=A.message.response[Math.floor(Math.random()*(A.message.response.length-1))];M([].concat(Object(Y.a)(S),[{from:"Me",text:T.text},{from:"English BOT",text:t}])),A.last?(D("model"),p(0),C({}),jt.emit("getModelQuestion",{questionNo:m,modelNo:j})):(L(!0),jt.emit("getIntroQuestion",{questionNo:m}))}),1e3),"model"===F&&(jt.emit("checkGrammer",Object(H.a)(Object(H.a)({},T),{},{_id:A.message._id})),C({})),k({text:""})}(t)},children:[Object(w.jsx)("input",{value:T.text,onChange:function(t){return k({text:t.target.value})},type:"text",placeholder:"send a message..."}),Object(w.jsx)("button",{type:"submit",children:Object(w.jsx)("img",{src:z,alt:""})})]})]})})},It=function(t){var e,n,o,s,a,i,r,l,c,d=t.setActive,u=Object(v.useRef)(),b=Object(v.useState)(0),g=Object(E.a)(b,2),m=g[0],p=g[1],x=Object(v.useState)((null===(e=JSON.parse(localStorage.getItem("bot3")))||void 0===e?void 0:e.questionNo)||0),h=Object(E.a)(x,2),j=h[0],f=h[1],O=Object(v.useState)(null!==(n=null===(o=JSON.parse(localStorage.getItem("bot3")))||void 0===o?void 0:o.modelNo)&&void 0!==n?n:(null===(s=JSON.parse(localStorage.getItem("doneBefore3")))||void 0===s?void 0:s.flag)?Math.floor(3*Math.random()):0),y=Object(E.a)(O,2),S=y[0],M=y[1],N=Object(v.useState)((null===(a=JSON.parse(localStorage.getItem("messages3")))||void 0===a?void 0:a.messages)||[]),I=Object(E.a)(N,2),T=I[0],k=I[1],B=Object(v.useState)({text:""}),Q=Object(E.a)(B,2),J=Q[0],L=Q[1],q=Object(v.useState)(null===(i=null===(r=JSON.parse(localStorage.getItem("bot3")))||void 0===r?void 0:r.typing)||void 0===i||i),R=Object(E.a)(q,2),A=R[0],C=R[1],G=Object(v.useState)((null===(l=JSON.parse(localStorage.getItem("bot3")))||void 0===l?void 0:l.botMsg)||{}),_=Object(E.a)(G,2),F=_[0],D=_[1],W=Object(v.useState)((null===(c=JSON.parse(localStorage.getItem("bot3")))||void 0===c?void 0:c.currentQuestionType)||"intro"),U=Object(E.a)(W,2),V=U[0],X=U[1];Object(v.useEffect)((function(){localStorage.setItem("bot3",JSON.stringify({questionNo:j,currentQuestionType:V,botMsg:F,typing:A,modelNo:S}))}),[j,V,F,A,S]),Object(v.useEffect)((function(){localStorage.setItem("messages3",JSON.stringify({messages:T}))}),[T]),Object(v.useEffect)((function(){d(!0),0===T.length&&setTimeout((function(){jt.emit("getIntroQuestion",{questionNo:j}),jt.on("responseIntroQuestion",(function(t){var e=t.message,n=t.last;k([].concat(Object(Y.a)(T),[{from:"English BOT",text:e.text}])),n||f(j+1),C(!1)}))}),2e3)}),[]),Object(v.useEffect)((function(){"model"===V&&(jt.off("checkGrammerResult"),jt.on("checkGrammerResult",(function(t){var e=t.message,n=t.result,o=n.result,s=n.corrections;0===(null===s||void 0===s?void 0:s.length)||(null===e||void 0===e?void 0:e.toLowerCase().replace(/\ /g,""))===(null===o||void 0===o?void 0:o.toLocaleLowerCase().replace(/\ /g,""))?(C(!1),k([].concat(Object(Y.a)(T),[{from:"English BOT",text:Ot[Math.floor(Math.random()*(Ot.length-1))],type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]))):(p(m+1),C(!1),k([].concat(Object(Y.a)(T),m>=0&&m<3?[{from:"English BOT",text:St[Math.floor(Math.random()*(St.length-1))],type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]:3===m?[{from:"English BOT",text:Mt[Math.floor(Math.random()*(Mt.length-1))],type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]:[{from:"English BOT",text:"\n                  ".concat(ft[Math.floor(Math.random()*(ft.length-1))].replace("{ANSWER}","<strong>".concat(o,"</strong>")),"\n                  "),type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}]))),F.last?jt.emit("getEndQuestion",{}):jt.emit("getModelQuestion",{questionNo:j,modelNo:S})}))),jt.off("responseIntroQuestion"),jt.off("responseModelQuestion"),jt.on("responseIntroQuestion",(function(t){var e=t.message,n=t.last;k([].concat(Object(Y.a)(T),[{from:"English BOT",text:e.text,type:null===e||void 0===e?void 0:e.type,buttons:null===e||void 0===e?void 0:e.buttons}])),D({message:e,last:n}),n||f(j+1),C(!1)})),jt.on("responseModelQuestion",(function(t){var e,n,o=t.message,s=t.last;(k([].concat(Object(Y.a)(T),[{from:"English BOT",text:null===o||void 0===o?void 0:o.text,type:null===o||void 0===o?void 0:o.type,buttons:null===o||void 0===o?void 0:o.buttons}])),D({message:o,last:s}),s)?!(null===(e=JSON.parse(localStorage.getItem("doneBefore3")))||void 0===e?void 0:e.flag)&&S<2?(M(S+1),f(0)):!(null===(n=JSON.parse(localStorage.getItem("doneBefore3")))||void 0===n?void 0:n.flag)&&2===S&&F.last?(localStorage.setItem("doneBefore3",JSON.stringify({flag:!0})),k([].concat(Object(Y.a)(T),[{from:"English BOT",text:vt[Math.floor(Math.random()*(vt.length-1))]}])),X("end")):(k([].concat(Object(Y.a)(T),[{from:"English BOT",text:vt[Math.floor(Math.random()*(vt.length-1))]}])),X("end")):m>=0&&m<4?f(j):(p(0),f(j+1));C(!1)})),u.current.addEventListener("DOMNodeInserted",(function(t){var e=t.currentTarget;e.scroll({top:e.scrollHeight,behavior:"smooth"})}))}),[T,j,J.text,V,S,F.last,m]);var Z=function(t){k([].concat(Object(Y.a)(T),[{from:"Me",text:t.title}])),setTimeout((function(){if(C(!1),!0===t.correct)k([].concat(Object(Y.a)(T),[{from:"Me",text:t.title},{from:"English BOT",text:Ot[Math.floor(Math.random()*(Ot.length-1))],type:null===t||void 0===t?void 0:t.type,buttons:null===t||void 0===t?void 0:t.buttons}]));else{var e,n=null===(e=F.message.buttons.find((function(t){return!0===t.correct})))||void 0===e?void 0:e.title;k([].concat(Object(Y.a)(T),[{from:"Me",text:t.title},{from:"English BOT",text:"\n            ".concat(ft[Math.floor(Math.random()*(ft.length-1))].replace("{ANSWER}","<strong>".concat(n,"</strong>")),"\n            "),type:null===t||void 0===t?void 0:t.type,buttons:null===t||void 0===t?void 0:t.buttons}]))}F.last?jt.emit("getEndQuestion",{}):jt.emit("getModelQuestion",{questionNo:j,modelNo:S})}),1e3)};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(bt,{children:[Object(w.jsx)(mt,{ref:u,children:T.map((function(t,e){var n=t.from,o=t.text,s=t.type,a=t.buttons;return Object(w.jsx)(w.Fragment,{children:"English BOT"===n?Object(w.jsxs)(pt,{children:[Object(w.jsx)("img",{src:P,alt:" "}),"@message-type/button"===s?Object(w.jsx)(rt,{buttons:a,text:o,setMessages:k,messages:T,socket:jt,onBtnClick:Z}):Object(w.jsx)("span",{dangerouslySetInnerHTML:{__html:"\n                    <style>\n                    strong{\n                      color: #74eaf4;\n                    }\n                    </style>\n                    <div>".concat(o,"</div>\n                    ")}})]},tt()()):Object(w.jsx)(xt,{children:Object(w.jsx)("span",{children:o})},e)})}))}),A&&Object(w.jsx)(K,{}),Object(w.jsxs)(gt,{onSubmit:function(t){return function(t){var e,n,o;t.preventDefault(),k([].concat(Object(Y.a)(T),[{from:"Me",text:J.text}])),C(!0),(null===F||void 0===F||null===(e=F.message)||void 0===e||null===(n=e.response)||void 0===n?void 0:n.length)>0&&"intro"===V&&setTimeout((function(){var t=F.message.response[Math.floor(Math.random()*(F.message.response.length-1))];k([].concat(Object(Y.a)(T),[{from:"Me",text:J.text},{from:"English BOT",text:t}])),F.last?(X("model"),f(0),D({}),jt.emit("getModelQuestion",{questionNo:j,modelNo:S})):(C(!0),jt.emit("getIntroQuestion",{questionNo:j}))}),1e3),"model"===V&&(jt.emit("checkGrammer",Object(H.a)(Object(H.a)({},J),{},{_id:null===F||void 0===F||null===(o=F.message)||void 0===o?void 0:o._id})),D({})),L({text:""})}(t)},children:[Object(w.jsx)("input",{value:J.text,onChange:function(t){return L({text:t.target.value})},type:"text",placeholder:"send a message..."}),Object(w.jsx)("button",{type:"submit",children:Object(w.jsx)("img",{src:z,alt:""})})]})]})})},wt=n(3),Tt=function(){var t=Object(v.useState)(!1),e=Object(E.a)(t,2),n=e[0],o=e[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(G,{active:n,setActive:o}),Object(w.jsx)(kt,{children:Object(w.jsxs)(wt.c,{children:[Object(w.jsx)(wt.a,{path:"/english-bot",element:Object(w.jsx)(k,{setActive:o})}),Object(w.jsx)(wt.a,{path:"/english-bot/bot1",element:Object(w.jsx)(Nt,{setActive:o})}),Object(w.jsx)(wt.a,{path:"/english-bot/bot2",element:Object(w.jsx)(Et,{setActive:o})}),Object(w.jsx)(wt.a,{path:"/english-bot/bot3",element:Object(w.jsx)(It,{setActive:o})})]})})]})},kt=I.a.div(it||(it=Object(N.a)(["\n  padding: 0px 25px;\n"])));n(57);S.a.render(Object(w.jsx)(M.a,{children:Object(w.jsx)(Tt,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.80d89eff.chunk.js.map