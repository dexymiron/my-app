"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[723],{723:(s,e,a)=>{a.r(e),a.d(e,{default:()=>b});var t=a(6847);a(5043);const i="Dialogs_dialogs__ym5-x",n="Dialogs_dialog__c9803",r="Dialogs_dialogItems__FcOQC",o="Dialogs_active__NeaCN",l="Dialogs_messagesLeft__8UNsP",c="Dialogs_dialogImg__2K3mU",d="Dialogs_messageForm__tOP88";var m=a(5475),g=a(579);const h=s=>{let e="/dialogs/"+s.id;return(0,g.jsx)("div",{className:"".concat(n," ").concat(o),children:(0,g.jsxs)(m.k2,{to:e,children:[(0,g.jsx)("img",{src:s.img,alt:"dialog avatar",className:c}),s.name]})})},u=s=>(0,g.jsx)("div",{className:n,children:s.message});var x=a(5963),_=a(3842),j=a(7380),v=a(8779);const p=(0,v.d)(50),N=(0,_.A)({form:"dialogAddMessageForm"})((s=>(0,g.jsx)("form",{onSubmit:s.handleSubmit,children:(0,g.jsx)("div",{className:d,children:(0,g.jsxs)("div",{children:[(0,g.jsx)(x.A,{name:"newMessageBody",component:j.TM,validate:[v.Q,p],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),(0,g.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})}))),f=s=>{let e=s.messagesPage,a=e.dialogsData&&e.dialogsData.map((s=>(0,g.jsx)(h,{name:s.name,id:s.id,img:s.image},s.id))),t=e.messagesData&&e.messagesData.map((s=>(0,g.jsx)(u,{message:s.message},s.id)));return(0,g.jsxs)("div",{className:i,children:[(0,g.jsx)("div",{className:r,children:a}),(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("div",{children:t}),(0,g.jsx)(N,{onSubmit:e=>{s.sendMessage(e.newMessageBody)}})]})]})};var D=a(3003),C=a(5751);const b=(0,a(3923).Zz)((0,D.Ng)((s=>({messagesPage:s.messagesPage})),{...t.o}),C.H)(f)},7380:(s,e,a)=>{a.d(e,{pd:()=>l,TM:()=>o,Fv:()=>c});a(5043);const t="FormsControls_formControl__sC1cx",i="FormsControls_error__b4P29";var n=a(5963),r=a(579);const o=s=>{let{input:e,meta:a,...n}=s;const o=a.touched&&a.error;return(0,r.jsxs)("div",{className:"".concat(t," ").concat(o?i:""),children:[(0,r.jsx)("textarea",{...e,...n}),o&&(0,r.jsx)("span",{children:a.error})]})},l=s=>{let{input:e,meta:a,...n}=s;const o=a.touched&&a.error;return(0,r.jsxs)("div",{className:"".concat(t," ").concat(o?i:""),children:[(0,r.jsx)("input",{...e,...n}),o&&(0,r.jsx)("span",{children:a.error})]})},c=function(s,e,a,t){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,r.jsxs)("div",{className:"createField",children:[(0,r.jsx)(n.A,{placeholder:s,name:e,component:t,validate:a,...i}),o]})}},5751:(s,e,a)=>{a.d(e,{H:()=>o});a(5043);var t=a(3216),i=a(3003),n=a(579);let r=s=>({isAuth:s.auth.isAuth});function o(s){return(0,i.Ng)(r,{})((e=>{let{isAuth:a,...i}=e;return a?(0,n.jsx)(s,{...i}):(0,n.jsx)(t.C5,{to:"/login"})}))}},8779:(s,e,a)=>{a.d(e,{Q:()=>t,d:()=>i});const t=s=>{if(!s)return"Field is required"},i=s=>e=>{if(e&&e.length>s)return"Max length is ".concat(s," symbols")}}}]);
//# sourceMappingURL=723.ab43ba97.chunk.js.map