import{A as c}from"./AvatarHeader-8440779d.js";import{L as m}from"./ListView-276ebabe.js";import{d as l,j as e,c as r,i as p,a as n,F as u,f as d,b as i,l as f,r as k,o as s,w as v,t as y}from"./app-45100b93.js";import{b as S}from"./MetaPosts-c7b81064.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";const w={key:0,class:"series yr-flex-col-16"},x={class:"container"},V=l({__name:"SeriesView",setup(L){const t=f(),{metaSeries:a}=S();return(h,B)=>{const _=k("RouterLink");return e(t).params.name==""||!(e(t).params.name in e(a))?(s(),r("div",w,[p(c,{title:"series"}),n("div",x,[(s(!0),r(u,null,d(e(a),(g,o)=>(s(),i(_,{key:o,to:"/series/"+o},{default:v(()=>[n("div",null,y(o),1)]),_:2},1032,["to"]))),128))])])):(s(),i(m,{key:1,title:"series : "+e(t).params.name,metaPostsTable:e(a)[e(t).params.name]},null,8,["title","metaPostsTable"]))}}});const P=b(V,[["__scopeId","data-v-4478221b"]]);export{P as default};