import{d as p,c as l,a as o,u as y,o as s,r as g,b as k,w as x,t as u,p as H,e as $,n as S,F as m,f as v,g as i,h as r,i as a,j as V,k as N}from"./app-b08b7487.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{T as C}from"./TheFooter-c249e36e.js";import{u as B}from"./MetaPosts-26359498.js";const P={class:"wrapper"},R=["src"],j=p({__name:"HomeImage",props:{link:{},offset:{}},setup(t){return y(e=>({"9ff7b42e":e.offset})),(e,_)=>(s(),l("div",P,[o("img",{src:e.link},null,8,R)]))}});const F=d(j,[["__scopeId","data-v-8b6989c5"]]),T=t=>(H("data-v-fe996471"),t=t(),$(),t),z={class:"yr-h2"},A=T(()=>o("i",{class:"ri-arrow-right-up-line ri-2x"},null,-1)),D=p({__name:"HomeNav",props:{title:{},link:{}},setup(t){return(e,_)=>{const n=g("RouterLink");return s(),k(n,{to:e.link,class:"nav"},{default:x(()=>[o("h2",z,u(e.title),1),A]),_:1},8,["to"])}}});const f=d(D,[["__scopeId","data-v-fe996471"]]),E="/avatar.webp",M=["href"],q=p({__name:"SocialLink",props:{link:{},icon:{},color:{}},setup(t){return y(e=>({"20aa0bb8":e.color})),(e,_)=>(s(),l("a",{class:"link yr-flex-row-0",href:e.link,target:"_blank",rel:"noopener"},[o("i",{class:S(e.icon)},null,2)],8,M))}});const G=d(q,[["__scopeId","data-v-2657e004"]]),J=t=>(H("data-v-9739317c"),t=t(),$(),t),K={class:"hero yr-flex-row-8"},O=J(()=>o("img",{src:E,alt:"avatar"},null,-1)),Q={class:"content yr-flex-col-4"},U={class:"title"},W={class:"profile yr-flex-col-2"},X={class:"social-link yr-flex-row-4"},Y=p({__name:"HomeHero",props:{title:{},profile:{},social_link:{}},setup(t){return(e,_)=>(s(),l("div",K,[O,o("div",Q,[o("div",U,u(e.title),1),o("div",W,[(s(!0),l(m,null,v(e.profile,(n,c)=>(s(),l("div",{key:c},u(n),1))),128))]),o("div",X,[(s(!0),l(m,null,v(e.social_link,(n,c)=>(s(),k(G,{key:c,icon:n.icon,link:n.link,color:n.color},null,8,["icon","link","color"]))),128))])])]))}});const Z=d(Y,[["__scopeId","data-v-9739317c"]]),ee={class:"left-container"},oe={class:"content yr-flex-col-16"},te={class:"yr-flex-col-4"},se={class:"yr-flex-col-2"},ne={class:"right-container"},le=p({__name:"HomeView",setup(t){const e=i(r.title),_=i(r.profile),n=i(r["social-link"]),c=i(r["image-link"]),w=i(r["image-offset"]),{metaPostsLatest:b}=B();return(ae,_e)=>{const I=g("RouterLink");return s(),l("main",null,[o("div",ee,[o("div",oe,[a(Z,{title:e.value,profile:_.value,social_link:n.value},null,8,["title","profile","social_link"]),o("div",te,[a(f,{title:"Projects",link:"projects"}),o("div",se,[a(f,{title:"Latest Posts",link:"posts"}),(s(!0),l(m,null,v(V(b),(h,L)=>(s(),k(I,{key:L,to:h.path,class:"post-link"},{default:x(()=>[N(u(h.meta.title),1)]),_:2},1032,["to"]))),128))]),a(f,{title:"About",link:"about"})]),a(C)])]),o("div",ne,[a(F,{link:c.value,offset:w.value},null,8,["link","offset"])])])}}});const de=d(le,[["__scopeId","data-v-b03a4370"]]);export{de as default};
