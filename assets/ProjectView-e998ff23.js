import{A as m}from"./AvatarHeader-8440779d.js";import{d as n,r as p,o as t,c,i as r,a as o,t as a,F as u,f,j as h,b as v}from"./app-45100b93.js";import{_ as i}from"./_plugin-vue_export-helper-c27b6911.js";const y=["href"],j={class:"yr-flex-col-1"},k={class:"name"},g={class:"desc"},w=n({__name:"ProjectCard",props:{meta:{}},setup(_){return(e,l)=>{const s=p("IconSets");return t(),c("a",{class:"card yr-flex-row-3",href:e.meta.link},[r(s,{icon:e.meta.icon,class:"icon"},null,8,["icon"]),o("div",j,[o("div",k,a(e.meta.name),1),o("div",g,a(e.meta.desc),1)])],8,y)}}});const P=i(w,[["__scopeId","data-v-115f1711"]]),b=[{name:"My Blog",desc:"Hi, i'm koyomi315. This is my blog.",link:"https://koyomi315.github.io",icon:"fluent-emoji-flat:newspaper"},{name:"More...",desc:"In github",link:"https://github.com/koyomi315",icon:"fluent-emoji-flat:face-with-hand-over-mouth"}],x={class:"project yr-flex-col-16"},B={class:"list"},C=n({__name:"ProjectView",setup(_){return(e,l)=>(t(),c("div",x,[r(m,{title:"projects"}),o("div",B,[(t(!0),c(u,null,f(h(b),(s,d)=>(t(),v(P,{key:d,meta:s},null,8,["meta"]))),128))])]))}});const $=i(C,[["__scopeId","data-v-7863c61e"]]);export{$ as default};