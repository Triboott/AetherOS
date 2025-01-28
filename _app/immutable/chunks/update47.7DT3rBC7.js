import{s as it,e as n,a as o,c as s,w as u,g as a,m as d,x as tt,i as l,n as _e,f as i}from"./scheduler.DunZcn5O.js";import{S as nt,i as st}from"./index.-fy_H3D9.js";function ot(lt){let f,be=`New year, new Hyprland release. This one is quite a large one, with tons of fixes and changes
accumulated over about a month and a half.`,B,_,He=`There have been quite a bunch of internal rewrites, mostly around memory safety, the renderer, and animation system. Although performance shouldn’t change
much, it should improve stability in edge cases. Please do report any regressions you might find, if they aren’t reported already.`,E,r,ge="Breaking changes",K,b,ke="Firstly, we got one breaking change:",O,H,Te="<li><code>master:always_center_master</code> has been replaced with a more flexible <code>master:slave_count_for_center_master</code></li>",V,g,Me="That’s it this time. :)",J,p,Le="Highlights",Q,k,Pe="For the cooler stuff in the release, I’ve decided to give you a few “highlights”:",W,h,qe="HDR",X,T,je=`HDR and Color Management support has been merged and is now functional. You might want to look at the <code>experimental</code>
section of the config variables for more information.`,Z,M,ze="Please do note it <em>is</em> experimental!",$,v,Ae="Squircles",ee,L,Ne="Added support for squircles in your corners:",te,R,De,le,P,Ie="it’s a cosmetic change for sure, but an anticipated one.",ie,x,Se="Protocols",ne,q,Ue=`A few new stuff has been implemented, namely <code>hyprland_surface</code> (used already in quickshell) and <code>hyprland_lock_notify</code> which
should allow hypridle to make your system wait for the lock to launch before putting your system into suspend, avoiding
your desktop appearing for a moment after unsuspending.`,se,m,Ge="Donation request",oe,j,Fe=`A bit following in KDE’s footsteps, we’ve added a small “donation nag” that will appear <em>once</em> in july and <em>once</em> in december.
You can disable it with <code>ecosystem:no_donation_nag</code>, if you are a cruel person.`,ae,z,Re="It looks like this:",ue,Y,Ye,de,A,Be="and will of course go away if you click “No thanks”.",fe,C,Ee="Config",re,N,Ke="New config stuff:",pe,D,Oe="<li><code>negative:</code> for negating any regex has been added</li> <li><code>focusedmonv2</code> will now send more information than <code>focusedmon</code> on socket2</li> <li>new <code>tag:</code> window selector for matching windows by tag</li> <li>a few new window destruction dispatchers to kill windows instead of gracefully closing</li> <li><code>cyclenext</code> got a <code>visible</code> arg to cycle all visible windows</li>",he,c,Ve="Other stuff",ve,I,Je="Some less, but still notable new stuff / fixes include:",xe,S,Qe="<li>CTM (used by hyprsunset) now has a smooth transition (except for Nvidia, because Nvidia)</li> <li><code>--verify-config</code> has been added to Hyprland which will not launch Hyprland, and just print whether your config is well-formed or not</li> <li>hyprpm got an option to force reload all plugins</li> <li>regexes have been sped up by caching the compiled regexes where possible</li> <li>xwayland got a few fixes around clipboard and dnd</li> <li>config should now be reloaded noticeably faster than before thanks to the move to inotify</li>",me,y,We="The raw release",Ce,U,Xe='if you are the type that enjoys reading, check the release out on <a href="https://github.com/hyprwm/Hyprland/releases/tag/v0.47.0" rel="nofollow">Github</a>',ce,w,Ze="Additional releases",ye,G,$e='<a href="https://github.com/hyprwm/hyprutils/releases/tag/v0.5.0" rel="nofollow">hyprutils 0.5.0</a>',we,F,et=`Cheers,
vax.`;return{c(){f=n("p"),f.textContent=be,B=o(),_=n("p"),_.textContent=He,E=o(),r=n("h2"),r.textContent=ge,K=o(),b=n("p"),b.textContent=ke,O=o(),H=n("ul"),H.innerHTML=Te,V=o(),g=n("p"),g.textContent=Me,J=o(),p=n("h2"),p.textContent=Le,Q=o(),k=n("p"),k.textContent=Pe,W=o(),h=n("h3"),h.textContent=qe,X=o(),T=n("p"),T.innerHTML=je,Z=o(),M=n("p"),M.innerHTML=ze,$=o(),v=n("h3"),v.textContent=Ae,ee=o(),L=n("p"),L.textContent=Ne,te=o(),R=n("img"),le=o(),P=n("p"),P.textContent=Ie,ie=o(),x=n("h3"),x.textContent=Se,ne=o(),q=n("p"),q.innerHTML=Ue,se=o(),m=n("h3"),m.textContent=Ge,oe=o(),j=n("p"),j.innerHTML=Fe,ae=o(),z=n("p"),z.textContent=Re,ue=o(),Y=n("img"),de=o(),A=n("p"),A.textContent=Be,fe=o(),C=n("h3"),C.textContent=Ee,re=o(),N=n("p"),N.textContent=Ke,pe=o(),D=n("ul"),D.innerHTML=Oe,he=o(),c=n("h3"),c.textContent=Ve,ve=o(),I=n("p"),I.textContent=Je,xe=o(),S=n("ul"),S.innerHTML=Qe,me=o(),y=n("h2"),y.textContent=We,Ce=o(),U=n("p"),U.innerHTML=Xe,ce=o(),w=n("h3"),w.textContent=Ze,ye=o(),G=n("p"),G.innerHTML=$e,we=o(),F=n("p"),F.textContent=et,this.h()},l(e){f=s(e,"P",{"data-svelte-h":!0}),u(f)!=="svelte-f7ye1f"&&(f.textContent=be),B=a(e),_=s(e,"P",{"data-svelte-h":!0}),u(_)!=="svelte-2vvse"&&(_.textContent=He),E=a(e),r=s(e,"H2",{id:!0,"data-svelte-h":!0}),u(r)!=="svelte-1tamrf"&&(r.textContent=ge),K=a(e),b=s(e,"P",{"data-svelte-h":!0}),u(b)!=="svelte-82qooi"&&(b.textContent=ke),O=a(e),H=s(e,"UL",{"data-svelte-h":!0}),u(H)!=="svelte-1gp26y6"&&(H.innerHTML=Te),V=a(e),g=s(e,"P",{"data-svelte-h":!0}),u(g)!=="svelte-ishugo"&&(g.textContent=Me),J=a(e),p=s(e,"H2",{id:!0,"data-svelte-h":!0}),u(p)!=="svelte-1lguhpm"&&(p.textContent=Le),Q=a(e),k=s(e,"P",{"data-svelte-h":!0}),u(k)!=="svelte-1ejdgvs"&&(k.textContent=Pe),W=a(e),h=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(h)!=="svelte-w171k4"&&(h.textContent=qe),X=a(e),T=s(e,"P",{"data-svelte-h":!0}),u(T)!=="svelte-1m3dhlz"&&(T.innerHTML=je),Z=a(e),M=s(e,"P",{"data-svelte-h":!0}),u(M)!=="svelte-1kyle9c"&&(M.innerHTML=ze),$=a(e),v=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(v)!=="svelte-1cjq85q"&&(v.textContent=Ae),ee=a(e),L=s(e,"P",{"data-svelte-h":!0}),u(L)!=="svelte-1mhj6nv"&&(L.textContent=Ne),te=a(e),R=s(e,"IMG",{src:!0}),le=a(e),P=s(e,"P",{"data-svelte-h":!0}),u(P)!=="svelte-n7clq9"&&(P.textContent=Ie),ie=a(e),x=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(x)!=="svelte-fh0rae"&&(x.textContent=Se),ne=a(e),q=s(e,"P",{"data-svelte-h":!0}),u(q)!=="svelte-11madcf"&&(q.innerHTML=Ue),se=a(e),m=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(m)!=="svelte-n3eoo9"&&(m.textContent=Ge),oe=a(e),j=s(e,"P",{"data-svelte-h":!0}),u(j)!=="svelte-9rocbf"&&(j.innerHTML=Fe),ae=a(e),z=s(e,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1hoggva"&&(z.textContent=Re),ue=a(e),Y=s(e,"IMG",{src:!0}),de=a(e),A=s(e,"P",{"data-svelte-h":!0}),u(A)!=="svelte-eyca5i"&&(A.textContent=Be),fe=a(e),C=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(C)!=="svelte-3r2w4"&&(C.textContent=Ee),re=a(e),N=s(e,"P",{"data-svelte-h":!0}),u(N)!=="svelte-qobvc4"&&(N.textContent=Ke),pe=a(e),D=s(e,"UL",{"data-svelte-h":!0}),u(D)!=="svelte-8unk0i"&&(D.innerHTML=Oe),he=a(e),c=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(c)!=="svelte-1au05o7"&&(c.textContent=Ve),ve=a(e),I=s(e,"P",{"data-svelte-h":!0}),u(I)!=="svelte-1ts9ndl"&&(I.textContent=Je),xe=a(e),S=s(e,"UL",{"data-svelte-h":!0}),u(S)!=="svelte-6htcen"&&(S.innerHTML=Qe),me=a(e),y=s(e,"H2",{id:!0,"data-svelte-h":!0}),u(y)!=="svelte-uzat9m"&&(y.textContent=We),Ce=a(e),U=s(e,"P",{"data-svelte-h":!0}),u(U)!=="svelte-1ygbzwz"&&(U.innerHTML=Xe),ce=a(e),w=s(e,"H3",{id:!0,"data-svelte-h":!0}),u(w)!=="svelte-aznv3n"&&(w.textContent=Ze),ye=a(e),G=s(e,"P",{"data-svelte-h":!0}),u(G)!=="svelte-1k1nzt6"&&(G.innerHTML=$e),we=a(e),F=s(e,"P",{"data-svelte-h":!0}),u(F)!=="svelte-7l2jil"&&(F.textContent=et),this.h()},h(){d(r,"id","breaking-changes"),d(p,"id","highlights"),d(h,"id","hdr"),d(v,"id","squircles"),tt(R.src,De="https://hyprland.org/imgs/blog/update47/squircles.png")||d(R,"src",De),d(x,"id","protocols"),d(m,"id","donation-request"),tt(Y.src,Ye="https://hyprland.org/imgs/blog/update47/nag.png")||d(Y,"src",Ye),d(C,"id","config"),d(c,"id","other-stuff"),d(y,"id","the-raw-release"),d(w,"id","additional-releases")},m(e,t){l(e,f,t),l(e,B,t),l(e,_,t),l(e,E,t),l(e,r,t),l(e,K,t),l(e,b,t),l(e,O,t),l(e,H,t),l(e,V,t),l(e,g,t),l(e,J,t),l(e,p,t),l(e,Q,t),l(e,k,t),l(e,W,t),l(e,h,t),l(e,X,t),l(e,T,t),l(e,Z,t),l(e,M,t),l(e,$,t),l(e,v,t),l(e,ee,t),l(e,L,t),l(e,te,t),l(e,R,t),l(e,le,t),l(e,P,t),l(e,ie,t),l(e,x,t),l(e,ne,t),l(e,q,t),l(e,se,t),l(e,m,t),l(e,oe,t),l(e,j,t),l(e,ae,t),l(e,z,t),l(e,ue,t),l(e,Y,t),l(e,de,t),l(e,A,t),l(e,fe,t),l(e,C,t),l(e,re,t),l(e,N,t),l(e,pe,t),l(e,D,t),l(e,he,t),l(e,c,t),l(e,ve,t),l(e,I,t),l(e,xe,t),l(e,S,t),l(e,me,t),l(e,y,t),l(e,Ce,t),l(e,U,t),l(e,ce,t),l(e,w,t),l(e,ye,t),l(e,G,t),l(e,we,t),l(e,F,t)},p:_e,i:_e,o:_e,d(e){e&&(i(f),i(B),i(_),i(E),i(r),i(K),i(b),i(O),i(H),i(V),i(g),i(J),i(p),i(Q),i(k),i(W),i(h),i(X),i(T),i(Z),i(M),i($),i(v),i(ee),i(L),i(te),i(R),i(le),i(P),i(ie),i(x),i(ne),i(q),i(se),i(m),i(oe),i(j),i(ae),i(z),i(ue),i(Y),i(de),i(A),i(fe),i(C),i(re),i(N),i(pe),i(D),i(he),i(c),i(ve),i(I),i(xe),i(S),i(me),i(y),i(Ce),i(U),i(ce),i(w),i(ye),i(G),i(we),i(F))}}}const dt={title:"Hyprland 0.47.0 has arrived!",date:1737978700,author:{name:"Vaxry",link:"https://github.com/vaxerski/",picture:"/imgs/profile_pictures/vaxry.webp"}};class ft extends nt{constructor(f){super(),st(this,f,null,ot,it,{})}}export{ft as default,dt as metadata};
