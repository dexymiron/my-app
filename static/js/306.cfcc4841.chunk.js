"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[306],{6306:(s,e,a)=>{a.r(e),a.d(e,{default:()=>f});var i=a(5661);a(5043);const d="Dialogs_dialogs__-er-F",l="Dialogs_dialog__VTszD",t="Dialogs_dialogItems__7Tj3B",n="Dialogs_active__IFRI+",g="Dialogs_messagesLeft__qg1Pk",o="Dialogs_dialogImg__+mtv+";var m=a(5475),r=a(579);const c=s=>{let e="/dialogs/"+s.id;return(0,r.jsx)("div",{className:"".concat(l," ").concat(n),children:(0,r.jsxs)(m.k2,{to:e,children:[(0,r.jsx)("img",{src:s.img,alt:"dialog avatar",className:o}),s.name]})})},h=s=>(0,r.jsx)("div",{className:l,children:s.message});var j=a(3216),x=a(5963),_=a(3842),u=a(6292),v=a(6545);const p=(0,v.d)(50),D=(0,_.A)({form:"dialogAddMessageForm"})((s=>(0,r.jsx)("form",{onSubmit:s.handleSubmit,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(x.A,{name:"newMessageBody",component:u.TM,validate:[v.Q,p],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})}))),N=s=>{let e=s.messagesPage,a=e.dialogsData&&e.dialogsData.map((s=>(0,r.jsx)(c,{name:s.name,id:s.id,img:s.image},s.id))),i=e.messagesData&&e.messagesData.map((s=>(0,r.jsx)(h,{message:s.message},s.id)));return!1===s.isAuth?(0,r.jsx)(j.C5,{to:"/login/"}):(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("div",{className:t,children:a}),(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)("div",{children:i}),(0,r.jsx)(D,{onSubmit:e=>{s.sendMessage(e.newMessageBody)}})]})]})};var A=a(3003),b=a(7863);const f=(0,a(3923).Zz)((0,A.Ng)((s=>({messagesPage:s.messagesPage})),(s=>({sendMessage:e=>{s((0,i.c)(e))}}))),b.H)(N)},7863:(s,e,a)=>{a.d(e,{H:()=>g});var i=a(5043),d=a(3216),l=a(3003),t=a(579);let n=s=>({isAuth:s.auth.isAuth});const g=s=>{class e extends i.Component{render(){return!1===this.props.isAuth?(0,t.jsx)(d.C5,{to:"/login"}):(0,t.jsx)(s,{...this.props})}}return(0,l.Ng)(n)(e)}}}]);
//# sourceMappingURL=306.cfcc4841.chunk.js.map