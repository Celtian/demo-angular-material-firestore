import{a as W}from"./chunk-VJFBLJVP.js";import{b as B,c as $,d as K,e as Q}from"./chunk-ZFJMDEO3.js";import{a as V}from"./chunk-7UGU7RUS.js";import{a as J}from"./chunk-M7MT3CL4.js";import{f as R,g as S}from"./chunk-JNC4QA7Y.js";import{A as q,v as U}from"./chunk-77HBHVUW.js";import{a as F,b as O,d as T,g as D,i as E,j,o as N,p as A,q as Y,r as G}from"./chunk-OKNBJC5B.js";import"./chunk-OAMQ53XU.js";import{b as H}from"./chunk-UCGNMIOJ.js";import{Ad as w,Bd as z,Gb as c,Hb as k,Ib as v,Kb as I,La as n,Ma as a,Mb as h,Pb as u,Qb as s,Rb as L,Ta as P,cb as d,ea as y,eb as f,jb as x,nb as l,o as b,ob as m,pb as M,tc as C,wa as _,wb as g}from"./chunk-N5O566FX.js";import"./chunk-CQCHLVVT.js";function Z(t,e){}function tt(t,e){t&1&&d(0,Z,0,0,"ng-template",8),t&2&&f("cdkPortalOutlet",e)}var et=t=>[t],it=t=>({endYear:t}),Ft=(()=>{let e=class e{constructor(p,o,i,r,X){this.breadcrumbsPortalService=p,this.language=o,this.auth=i,this.router=r,this.lr=X,this.endYear=new Date($.date).getFullYear(),this.destroyRef=_(P),this.language.initLang()}ngOnInit(){queueMicrotask(()=>{this.breadcrumbsPortal$=this.breadcrumbsPortalService.portal$})}logout(){b(q(this.auth)).pipe(V(this.destroyRef)).subscribe(()=>{let p=this.lr.translateRoute(`/${G.APP.LOGIN}`);this.router.navigate([p])})}};e.\u0275fac=function(o){return new(o||e)(a(J),a(W),a(U),a(E),a(N))},e.\u0275cmp=y({type:e,selectors:[["app-layout-private"]],standalone:!0,features:[I],decls:21,vars:18,consts:[[1,"sticky","top-0","z-10"],["color","primary","role","navigation"],[1,"container","flex","items-center","justify-between","gap-2"],["mat-button","",3,"routerLink"],[1,"flex","gap-2"],["mat-button","",3,"click"],["mat-button","",1,"uppercase",3,"click"],[1,"flex-1","permanent-main"],[3,"cdkPortalOutlet"],["ngxFixedFooter","",1,"fixed","bottom-0","w-full","text-center"],["color","primary"],[1,"container","text-sm"]],template:function(o,i){if(o&1&&(l(0,"header",0)(1,"mat-toolbar",1)(2,"nav",2)(3,"a",3),u(4,"localize"),c(5,"Firestore Demo"),m(),l(6,"div",4)(7,"button",5),g("click",function(){return i.logout()}),c(8),u(9,"translate"),m(),l(10,"button",6),g("click",function(){return i.language.toggleLanguage()}),c(11),m()()()()(),l(12,"main",7),d(13,tt,1,1,null,8),u(14,"async"),M(15,"router-outlet"),m(),l(16,"footer",9)(17,"mat-toolbar",10)(18,"div",11),c(19),u(20,"translate"),m()()()),o&2){let r;n(3),f("routerLink",h(14,et,s(4,5,"/"))),n(5),k(s(9,7,"uni.logout")),n(3),v(" ",i.language.language()," "),n(2),x(13,(r=s(14,9,i.breadcrumbsPortal$))?13:-1,r),n(6),v(" ",L(20,11,"footer.content",h(16,it,i.endYear))," ")}},dependencies:[C,Y,A,T,O,F,H,Q,K,S,R,j,D,z,w,B],styles:["[_nghost-%COMP%]{display:flex;min-height:100vh;flex-direction:column}.permanent-main[_ngcontent-%COMP%]{margin-bottom:64px}"],changeDetection:0});let t=e;return t})();export{Ft as LayoutPrivateComponent};