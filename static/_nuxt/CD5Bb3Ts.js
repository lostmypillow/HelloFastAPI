import{L as p,M as h,N as ee,O as x,y as n,P as I,Q as P,R as ae,S as _,T as E,K as b,U as B,V as N,W as S,X as te,Y as ne,Z as se,_ as le,$ as ie,a0 as de,a1 as ce,a2 as re,a3 as oe,a4 as ue,a5 as ve,a6 as me,a7 as ye,a8 as fe,a9 as ge,aa as ke,ab as be,ac as pe,ad as he,ae as xe,af as Ce,ag as Ve,i as f,ah as _e,ai as Ie,aj as F,ak as Ae,al as Se,am as Pe,r as L,u as we,G as Te,an as Be,t as m,v as A,A as D,x as R,ao as y,ap as q,aq as Ne,s as c,ar as j,z as Le}from"./Xa0KOTYA.js";import{_ as De}from"./DlAUqK2U.js";const Re=p()({name:"VCardActions",props:h(),setup(e,l){let{slots:a}=l;return ee({VBtn:{slim:!0,variant:"text"}}),x(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),qe=I({opacity:[Number,String],...h(),...P()},"VCardSubtitle"),je=p()({name:"VCardSubtitle",props:qe(),setup(e,l){let{slots:a}=l;return x(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Me=ae("v-card-title"),Ee=I({appendAvatar:String,appendIcon:_,prependAvatar:String,prependIcon:_,subtitle:[String,Number],title:[String,Number],...h(),...E()},"VCardItem"),Fe=p()({name:"VCardItem",props:Ee(),setup(e,l){let{slots:a}=l;return x(()=>{var v;const t=!!(e.prependAvatar||e.prependIcon),r=!!(t||a.prepend),o=!!(e.appendAvatar||e.appendIcon),g=!!(o||a.append),u=!!(e.title!=null||a.title),k=!!(e.subtitle!=null||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[r&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(S,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):n(b,null,[e.prependAvatar&&n(B,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(N,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[u&&n(Me,{key:"title"},{default:()=>{var s;return[((s=a.title)==null?void 0:s.call(a))??e.title]}}),k&&n(je,{key:"subtitle"},{default:()=>{var s;return[((s=a.subtitle)==null?void 0:s.call(a))??e.subtitle]}}),(v=a.default)==null?void 0:v.call(a)]),g&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(S,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):n(b,null,[e.appendIcon&&n(N,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(B,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Oe=I({opacity:[Number,String],...h(),...P()},"VCardText"),Ye=p()({name:"VCardText",props:Oe(),setup(e,l){let{slots:a}=l;return x(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Ge=I({appendAvatar:String,appendIcon:_,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:_,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...te(),...h(),...E(),...ne(),...se(),...le(),...ie(),...de(),...ce(),...re(),...P(),...oe(),...ue({variant:"elevated"})},"VCard"),M=p()({name:"VCard",directives:{Ripple:ve},props:Ge(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:r}=me(e),{borderClasses:o}=ye(e),{colorClasses:g,colorStyles:u,variantClasses:k}=fe(e),{densityClasses:v}=ge(e),{dimensionStyles:s}=ke(e),{elevationClasses:d}=be(e),{loaderClasses:i}=pe(e),{locationStyles:O}=he(e),{positionClasses:Y}=xe(e),{roundedClasses:G}=Ce(e),C=Ve(e,a),$=f(()=>e.link!==!1&&C.isLink.value),V=f(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return x(()=>{const z=$.value?"a":e.tag,H=!!(t.title||e.title!=null),K=!!(t.subtitle||e.subtitle!=null),Q=H||K,U=!!(t.append||e.appendAvatar||e.appendIcon),W=!!(t.prepend||e.prependAvatar||e.prependIcon),X=!!(t.image||e.image),Z=Q||W||U,J=!!(t.text||e.text!=null);return _e(n(z,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":V.value},r.value,o.value,g.value,v.value,d.value,i.value,Y.value,G.value,k.value,e.class],style:[u.value,s.value,O.value,e.style],href:C.href.value,onClick:V.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[X&&n("div",{key:"image",class:"v-card__image"},[t.image?n(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(F,{key:"image-img",cover:!0,src:e.image},null)]),n(Ae,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),Z&&n(Fe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),J&&n(Ye,{key:"text"},{default:()=>{var T;return[((T=t.text)==null?void 0:T.call(t))??e.text]}}),(w=t.default)==null?void 0:w.call(t),t.actions&&n(Re,null,{default:t.actions}),Se(V.value,"v-card")]}}),[[Ie("ripple"),V.value&&e.ripple]])}),{}}}),$e={class:"flex w-fit text-xl md:text-3xl gap-4"},ze={class:"font-mono font-extrabold"},He={class:"font-mono font-extrabold"},Ke={key:0},Qe={key:0,class:"flex flex-col md:flex-row flex-wrap items-center justify-center w-full gap-4 pt-4"},Ue={key:1,class:"flex flex-col flex-wrap items-center justify-center w-full gap-4 pt-4"},We={__name:"search",setup(e){const l=Pe();L(!1);const a=L(),t=f(()=>l.query.type),r=f(()=>l.query.query),o=we(),g=f(()=>o.currentRoute.value.fullPath);Te(g,(s,d)=>{s!==d&&(console.log("changed"),u())}),Be(()=>{const s=f(()=>l.query.type);console.log(`meow ${s.value}`),s.value&&u()});function u(){t.value=="movies"?(k(),console.log("got movies")):t.value=="google"&&(v(),console.log("got google"))}async function k(){const d=await(await fetch("/get-movies/?query="+r.value)).json();console.log(d.results.Search),a.value=await d.results.Search}async function v(){const d=await(await fetch("/get-google/?query="+r.value+"&limit=10&related=false")).json();console.log(d.results),a.value=await d.results}return(s,d)=>(c(),m(b,null,[A("h1",$e,[D(" You searched for: "),A("p",ze,R(y(r)),1),D(" in "),A("p",He,R(y(t)),1)]),y(a)?(c(),m("div",Ke,[y(t)=="movies"?(c(),m("div",Qe,[(c(!0),m(b,null,q(y(a),i=>(c(),j(M,{class:"min-w-full md:w-1/5",key:i.imdbID,title:i.Title,subtitle:i.Year,text:i.Type,variant:"tonal"},{default:Le(()=>[n(F,{height:"200px",src:i.Poster,cover:""},null,8,["src"])]),_:2},1032,["title","subtitle","text"]))),128))])):(c(),m("div",Ue,[(c(!0),m(b,null,q(y(a).results,i=>(c(),j(M,{class:"md:w-2/3",key:i.position,title:i.title,subtitle:i.url,text:i.description,href:i.url,variant:"tonal"},null,8,["title","subtitle","text","href"]))),128))]))])):Ne("",!0)],64))}},Je=De(We,[["__scopeId","data-v-46fa429c"]]);export{Je as default};
