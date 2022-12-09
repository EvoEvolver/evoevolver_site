import{b as y,_ as k,a as b}from"./DocumentEnd.68fa2fac.js";import{_ as w}from"./EquInline.13149450.js";import{o as t,a as o,h as i,F as _,r as g,t as m,j as d,q as x,E as C,e as s,b as c,z as h,u as v,m as E,B as $,p as B}from"./entry.eab4b9ab.js";import"./components.5ea30010.js";import"./composables.93fea509.js";const N={key:0},I={key:1},T={key:2},A={key:3},R={key:0},q={__name:"CreditTip",props:{info:{}},setup(e){return(u,l)=>(t(),o(_,null,[e.info.author?(t(),o("span",N,[i(" Author: "),(t(!0),o(_,null,g(e.info.author,(a,r)=>(t(),o("span",null,m(a.name),1))),256)),i(". ")])):d("",!0),i(" Retrieved "),e.info.origin?(t(),o("span",I,"from "+m(e.info.origin),1)):d("",!0),e.info.license?(t(),o("span",T," under license "+m(e.info.license)+".",1)):d("",!0),e.info.modified||e.info.modifier?(t(),o("span",A,[i(" Modified "),e.info.modifier?(t(),o("span",R,[i(" by "),(t(!0),o(_,null,g(e.info.modifier,(a,r)=>(t(),o("span",null,m(a.name||a),1))),256)),i(". ")])):d("",!0)])):d("",!0)],64))}},L=""+new URL("info.c4b112e0.svg",import.meta.url).href,S=""+new URL("arrow-from-bottom.f00689c1.svg",import.meta.url).href;const D=["id"],U=s("img",{class:"inline-icon",src:L},null,-1),V=[U],j=["id"],z=s("img",{class:"inline-icon",src:S},null,-1),M=[z],P={__name:"CreditBox",props:{id:{}},setup(e){const u=x("pageEnv"),l=C("showRange",()=>!1);function a(r){let n=document.getElementById(r);n&&n.scrollIntoView()}return(r,n)=>{const f=q,p=y;return t(),o("div",{class:$(v(l)?"show-range":"hide-range"),style:{position:"relative"}},[s("span",{class:"credit-start",onMouseenter:n[0]||(n[0]=()=>{l.value=!0}),onMouseleave:n[1]||(n[1]=()=>{l.value=!1})},[c(p,{interactive:!0},{tip:h(()=>[c(f,{info:v(u).creditInfo[e.id]},null,8,["info"])]),default:h(()=>[s("span",{id:"credit-info-"+e.id},V,8,D)]),_:1})],32),E(r.$slots,"default"),s("span",{class:"credit-end",id:"credit-end-"+e.id,onClick:n[2]||(n[2]=H=>a("credit-info-"+e.id))},M,8,j)],2)}}},Z=s("div",{class:"paragraph"},"Here is some text I copied from somewhere.",-1),F={class:"paragraph"},O={__name:"credit-system",setup(e){return B("pageEnv",{basePath:"docs_src",outputPathPrefix:"/page_assets",projectTitle:"Evomark",linearize:["index","install","grammar-markdown","grammar-evomark","slides","open-source-future","meta-info","credit-system","how-design","white-paper"],chatUrl:"https://gitter.im/EvoEvolver/community",gitRepoUrl:"https://github.com/EvoEvolver/evomark-framework/tree/main/docs_src",license:{title:"Creative Commons Attribution-ShareAlike 4.0 International License",link:"https://creativecommons.org/licenses/by-sa/4.0/"},affils:{uoft:"Department of Computer Science, University of Toronto, Canada"},author:[{givenName:"Zi-Jian",familyName:"Zhang",affil:["uoft"],note:["email"]}],authorNotes:{email:"zijian.academic@outlook.com"},responsibleAuthor:[{name:"Zi-Jian Zhang",link:"https://github.com/doomspec"}],idNames:{},counter:{},citedKeys:[],footnotes:[],title:"Credit system",authorBoxRecord:{affilIndices:{uoft:1},noteIndices:{email:1}},creditInfo:[{origin:"https://quantumalgorithms.org/",license:"CC BY-NC-SA 4.0",author:[{name:"Alessandro Luongo"}],src:"credits/q4data.toml",id:0}],slidesMode:!1,outerLinks:[],bibDict:"bibPath not identified"}),(l,a)=>{const r=k,n=w,f=P,p=b;return t(),o("div",null,[c(r),s("article",null,[Z,c(f,{id:"0"},{default:h(()=>[s("div",F,[i("We first show the quadratic advantage for an algorithm "),c(n,{tex:"A"}),i(" whose output is bounded between 0 and 1. This speedup will be smartly used to speedup more general classes of algorithms. This section is also meant to give insights on why quantum speedup happens in the first place.")])]),_:1}),c(p)])])}}};export{O as default};