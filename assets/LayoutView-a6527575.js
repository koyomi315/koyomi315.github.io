import{d as r,r as h,o as n,b as l,w as $,k as H,t as b,l as I,m as S,c as d,q as V,a as o,s as C,v as T,j as p,x as B,y as f,K as R,p as v,e as m,g,i as _,z as L,n as N,F as y,f as w}from"./app-45100b93.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";import{T as M}from"./TheFooter-ac7f0599.js";const j=r({__name:"HeaderNav",props:{name:{},path:{}},setup(e){return(t,c)=>{const s=h("RouterLink");return n(),l(s,{class:"nav",to:t.path},{default:$(()=>[H(b(t.name),1)]),_:1},8,["to"])}}});const u=i(j,[["__scopeId","data-v-2c918b68"]]),F={class:"brief"},z=r({__name:"HeaderBrief",setup(e){const t=I(),c=S(()=>decodeURI(t.path));return(s,a)=>(n(),d("div",F,b("~"+c.value),1))}});const A=i(z,[["__scopeId","data-v-f083eb6d"]]),D=e=>(v("data-v-7a61ff62"),e=e(),m(),e),K={style:{"align-items":"center"}},P={class:"switch"},U=D(()=>o("label",{for:"yr-id-switch-theme",class:"switch__button"},null,-1)),q=r({__name:"HeaderSwitch",setup(e){const{themeState:t}=V();return(c,s)=>(n(),d("div",K,[o("div",P,[(n(),l(R,null,[C(o("input",{class:"switch__checkbox",type:"checkbox",id:"yr-id-switch-theme","onUpdate:modelValue":s[0]||(s[0]=a=>B(t)?t.value=a:null),onChange:s[1]||(s[1]=(...a)=>p(f)&&p(f)(...a))},null,544),[[T,p(t)]])],1024)),U])]))}});const x=i(q,[["__scopeId","data-v-7a61ff62"]]),E=e=>(v("data-v-c1fa7ab0"),e=e(),m(),e),G={class:"dropdown"},J={class:"dropdown__list"},O=E(()=>o("div",{class:"dropdown__mask"},null,-1)),Q=r({__name:"HeaderMenu",setup(e){const t=g(!0);return(c,s)=>{const a=h("IconSets");return n(),d("div",G,[_(a,{icon:"tabler:align-right",class:"button",onClick:s[0]||(s[0]=k=>t.value=!t.value)}),o("div",{class:N(["dropdown__content",{dropdown__unfold:!t.value}]),onClick:s[1]||(s[1]=k=>t.value=!0)},[o("div",J,[L(c.$slots,"default",{},void 0,!0)]),O],2)])}}});const W=i(Q,[["__scopeId","data-v-c1fa7ab0"]]),X={class:"header yr-flex-row-0"},Y={class:"container"},Z={class:"nav-left"},ee={class:"nav-right"},te={class:"nav-right-row yr-flex-row-0"},se={class:"yr-flex-col-0"},ae=r({__name:"TheHeader",setup(e){const t=g([{id:1,name:"Projects",path:"/projects"},{id:2,name:"Posts",path:"/posts"},{id:4,name:"Series",path:"/series"},{id:5,name:"About",path:"/about"}]);return(c,s)=>(n(),d("header",X,[o("div",Y,[o("nav",Z,[_(u,{name:"koyomi315",path:"/"}),_(A)]),o("nav",ee,[o("div",te,[(n(!0),d(y,null,w(t.value,a=>(n(),l(u,{key:a.id,name:a.name,path:a.path},null,8,["name","path"]))),128)),_(x)]),_(W,{class:"nav-right-col"},{default:$(()=>[o("div",se,[(n(!0),d(y,null,w(t.value,a=>(n(),l(u,{key:a.id,name:a.name,path:a.path},null,8,["name","path"]))),128)),_(x)])]),_:1})])])]))}});const oe=i(ae,[["__scopeId","data-v-8d19044e"]]),ne=e=>(v("data-v-360e53d3"),e=e(),m(),e),_e={class:"layout yr-flex-col-0"},ce={class:"container"},de=ne(()=>o("div",{class:"spacer"},null,-1)),re=r({__name:"LayoutView",setup(e){return(t,c)=>{const s=h("RouterView");return n(),d("div",_e,[_(oe,{class:"header"}),o("main",ce,[_(s)]),de,_(M,{class:"footer"})])}}});const ue=i(re,[["__scopeId","data-v-360e53d3"]]);export{ue as default};