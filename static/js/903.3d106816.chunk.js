"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[903],{4903:(s,e,a)=>{a.r(e),a.d(e,{default:()=>y});var r=a(6847);a(5043);const o="Dialogs_dialogs__ym5-x",t="Dialogs_dialog__c9803",l="Dialogs_dialogItems__FcOQC",n="Dialogs_active__NeaCN",i="Dialogs_messagesLeft__8UNsP",m="Dialogs_dialogImg__2K3mU",c="Dialogs_messageForm__tOP88";var d=a(5475),_=a(579);const g=s=>{let e="/dialogs/"+s.id;return(0,_.jsx)("div",{className:"".concat(t," ").concat(n),children:(0,_.jsxs)(d.k2,{to:e,children:[(0,_.jsx)("img",{src:s.img,alt:"dialog avatar",className:m}),s.name]})})},x=s=>(0,_.jsx)("div",{className:t,children:s.message});var h=a(5963),u=a(3842),C=a(1963);const j=s=>{let{input:e,meta:a,...r}=s;const o=a.touched&&a.error;return(0,_.jsxs)("div",{className:"".concat(C.A.formControl," ").concat(o?C.A.error:""),children:[(0,_.jsx)("textarea",{...e,...r}),o&&(0,_.jsx)("span",{children:a.error})]})},f=s=>{if(!s)return"Field is required"},v=(p=50,s=>{if(s&&s.length>p)return"Max length is ".concat(p," symbols")});var p;const F=(0,u.A)({form:"dialogAddMessageForm"})((s=>(0,_.jsx)("form",{onSubmit:s.handleSubmit,children:(0,_.jsx)("div",{className:c,children:(0,_.jsxs)("div",{children:[(0,_.jsx)(h.A,{name:"newMessageBody",component:j,validate:[f,v],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),(0,_.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})}))),N=s=>{let e=s.messagesPage,a=e.dialogsData&&e.dialogsData.map((s=>(0,_.jsx)(g,{name:s.name,id:s.id,img:s.image},s.id))),r=e.messagesData&&e.messagesData.map((s=>(0,_.jsx)(x,{message:s.message},s.id)));return(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("div",{className:l,children:a}),(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("div",{children:r}),(0,_.jsx)(F,{onSubmit:e=>{s.sendMessage(e.newMessageBody)}})]})]})};var D=a(3003),b=a(5751);const y=(0,a(3923).Zz)((0,D.Ng)((s=>({messagesPage:s.messagesPage})),{...r.o}),b.H)(N)},5751:(s,e,a)=>{a.d(e,{H:()=>n});a(5043);var r=a(3216),o=a(3003),t=a(579);let l=s=>({isAuth:s.auth.isAuth});function n(s){return(0,o.Ng)(l,{})((e=>{let{isAuth:a,...o}=e;return a?(0,t.jsx)(s,{...o}):(0,t.jsx)(r.C5,{to:"/login"})}))}},1963:(s,e,a)=>{a.d(e,{A:()=>r});const r={formControlInput:"FormsControls_formControlInput__IH6cE",formControlTextarea:"FormsControls_formControlTextarea__ymXUO",formCheckbox:"FormsControls_formCheckbox__eG9he",error:"FormsControls_error__b4P29",formControl:"FormsControls_formControl__sC1cx",formSummaryError:"FormsControls_formSummaryError__RnVQJ",createField:"FormsControls_createField__zvZ-q"}}}]);
//# sourceMappingURL=903.3d106816.chunk.js.map