import{u as M,e as se,f as te,g as Y,h as ae,P as le,t as re,i as ue,j as F,k as q,l as ie,w as B,m as t,n as oe,R as $,p as ne,q as ce,s as ve,C as pe,v as he,x as de,y as ye,z as me,A as ge,B as fe,D as He,E as j,F as _,G as Re,H as x,I as ke}from"./app-O7XuUmkD.js";const we=["/","/posts/8%E6%9C%883%E6%97%A5.html","/posts/mission.html","/posts/test.html","/posts/paper/HCI.html","/posts/paper/LLM.html","/404.html"],Qe="SEARCH_PRO_QUERY_HISTORY",g=M(Qe,[]),qe=()=>{const{queryHistoryCount:a}=x,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=a=>we[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,f=M(xe,[]),Ce=()=>{const a=U>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,U-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Se=a=>{const l=pe(),r=Y(),C=he(),i=F(0),k=q(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:S}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:L=h=>h,splitWord:D,suggestionsFilter:I,...m}=l.value;R?(i.value+=1,y(c.join(" "),r.value,m).then(h=>L(h,R,r.value,C.value)).then(h=>{i.value-=1,d.value=h}).catch(h=>{console.warn(h),i.value-=1,i.value||(d.value=[])})):d.value=[]},x.searchDelay-x.suggestDelay);B([a,r],([c])=>H(c),{immediate:!0}),ge(()=>{S()})}),{isSearching:k,results:d}};var De=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),C=Y(),i=ae(le),{enabled:k,addQueryHistory:d,queryHistory:y,removeQueryHistory:S}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:L}=Ce(),D=k||H,I=re(a,"queries"),{results:m,isSearching:h}=Se(I),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),O=q(()=>D&&(y.value.length>0||c.value.length>0)),E=q(()=>m.value.length>0),A=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},V=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=A.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<A.value.contents.length-1?p.value+=1:J()},N=()=>{p.value>0?p.value-=1:V()},b=e=>e.map(s=>ke(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,Q=""]=He(s)?s[C.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",b([o,...n,Q])))}return e.display.map(s=>t("div",b(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>b(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),L(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(E.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=A.value.contents[p.value];d(a.queries.join(" ")),R(s),r.push(P(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),B([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!E.value:!O.value}],id:"search-pro-results"},a.queries.length?h.value?t(oe,{hint:i.value.searching}):E.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:Q}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const T=Q&&p.value===ee;return t($,{to:P(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(a.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:D?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{De as default};
