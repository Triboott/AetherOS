import{s as G,a as M,e as k,D as J,f as h,g as N,c as L,b as R,m as T,i as y,h as j,M as V,G as K,N as Q,n as X,J as Y,t as W,d as z}from"../chunks/scheduler.DunZcn5O.js";import{S as Z,i as tt,c as S,b as U,m as D,t as v,e as et,a as E,d as O,g as nt}from"../chunks/index.-fy_H3D9.js";import{g as at}from"../chunks/globals.D0QH3NT1.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{T as st,b as ot}from"../chunks/TitleHeading.2srpbGd6.js";import{N as lt}from"../chunks/news-thumb.C1hOidcA.js";import{T as rt}from"../chunks/TitleSubtile.es-826hg.js";async function ct({fetch:c}){return{posts:await(await c("/api/news")).json()}}const yt=Object.freeze(Object.defineProperty({__proto__:null,load:ct},Symbol.toStringTag,{value:"Module"})),it=""+new URL("../assets/HyprlandLogo.I4r3nWdn.png",import.meta.url).href,{document:C}=at;function F(c,e,n){const t=c.slice();return t[6]=e[n],t}function ft(c){let e;return{c(){e=W("Fresh updates straight from the oven")},l(n){e=z(n,"Fresh updates straight from the oven")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function ut(c){let e,n;return e=new rt({props:{$$slots:{default:[ft]},$$scope:{ctx:c}}}),{c(){S(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const f={};s&512&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function mt(c){let e;return{c(){e=W("News")},l(n){e=z(n,"News")},m(n,t){y(n,e,t)},d(n){n&&h(e)}}}function ht(c){let e,n;return e=new ot({props:{slot:"title",class:"",$$slots:{default:[mt]},$$scope:{ctx:c}}}),{c(){S(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p(t,s){const f={};s&512&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function B(c){let e,n;return e=new lt({props:{entry:c[6]}}),{c(){S(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,s){D(e,t,s),n=!0},p:X,i(t){n||(v(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function dt(c){let e,n,t,s,f,_,b,p,d,g,i;p=new st({props:{$$slots:{title:[ht],default:[ut]},$$scope:{ctx:c}}});let m=q(c[1]),o=[];for(let a=0;a<m.length;a+=1)o[a]=B(F(c,m,a));const $=a=>E(o[a],1,1,()=>{o[a]=null});return{c(){e=M(),n=k("div"),t=M(),s=k("section"),f=k("header"),_=k("pre"),b=M(),S(p.$$.fragment),d=M(),g=k("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){J("svelte-1ck96d1",C.head).forEach(h),e=N(a),n=L(a,"DIV",{class:!0}),R(n).forEach(h),t=N(a),s=L(a,"SECTION",{class:!0});var u=R(s);f=L(u,"HEADER",{class:!0});var r=R(f);_=L(r,"PRE",{class:!0}),R(_).forEach(h),b=N(r),U(p.$$.fragment,r),r.forEach(h),d=N(u),g=L(u,"UL",{class:!0});var w=R(g);for(let x=0;x<o.length;x+=1)o[x].l(w);w.forEach(h),u.forEach(h),this.h()},h(){C.title="Hyprland News",T(n,"class","fancy-top-gradient"),T(_,"class","spinner-wrapper svelte-koamft"),T(f,"class","header svelte-koamft"),T(g,"class","row-auto flex flex-col gap-14 animate-in fade-in-0 slide-in-from-bottom-6 fill-mode-backwards [animation-delay:800ms] [animation-duration:1500ms]"),T(s,"class","svelte-koamft")},m(a,l){y(a,e,l),y(a,n,l),y(a,t,l),y(a,s,l),j(s,f),j(f,_),c[3](_),j(f,b),D(p,f,null),j(s,d),j(s,g);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(g,null);i=!0},p(a,[l]){const u={};if(l&512&&(u.$$scope={dirty:l,ctx:a}),p.$set(u),l&2){m=q(a[1]);let r;for(r=0;r<m.length;r+=1){const w=F(a,m,r);o[r]?(o[r].p(w,l),v(o[r],1)):(o[r]=B(w),o[r].c(),v(o[r],1),o[r].m(g,null))}for(nt(),r=m.length;r<o.length;r+=1)$(r);et()}},i(a){if(!i){v(p.$$.fragment,a);for(let l=0;l<m.length;l+=1)v(o[l]);i=!0}},o(a){E(p.$$.fragment,a),o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)E(o[l]);i=!1},d(a){a&&(h(e),h(n),h(t),h(s)),c[3](null),O(p),V(o,a)}}}function pt(c,e,n){let{data:t}=e,s;const{posts:f}=t;let _,b;K(async()=>{const d=await fetch(it).then($=>$.blob());b=URL.createObjectURL(d);const g=document.createElement("img");g.src=b;const i=document.createElement("canvas");i.width=72,i.height=36;const m=i.getContext("2d",{willReadFrequently:!0}),o=($,a,l)=>Math.sqrt(.299*$*$+.587*a*a+.114*l*l);m.fillStyle="#000000",_=setInterval(()=>{m.fillRect(0,0,i.width,i.height);const $=new Date().getTime()*7e-4;let a=(-Math.cos($)+1)/2*i.width,l=Math.cos($)*i.width;m.drawImage(g,a,0,l,i.height);const r=m.getImageData(0,0,i.width,i.height).data,w=[],x=" .-=+";for(let H=0;H<i.height;H++){for(let I=0;I<i.width;I++){const P=4*((l<0?i.width-I-1:I)+i.width*H),A=o(r[P]/256,r[P+1]/256,r[P+2]/256);w.push(x[Math.floor(A*x.length)])}w.push(`
`)}n(0,s.innerText=w.join(""),s)},40)}),Q(()=>{clearInterval(_),URL.revokeObjectURL(b)});function p(d){Y[d?"unshift":"push"](()=>{s=d,n(0,s)})}return c.$$set=d=>{"data"in d&&n(2,t=d.data)},[s,f,t,p]}class Et extends Z{constructor(e){super(),tt(this,e,pt,dt,G,{data:2})}}export{Et as component,yt as universal};
