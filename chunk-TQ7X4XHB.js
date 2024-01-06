import{a as ft,b as ht,c as Ct}from"./chunk-54Q6HFBA.js";import{a as tt,b as et}from"./chunk-RIZW4TRM.js";import{a as G,b as Q,e as q,g as H,h as C,j as W,k as J,m as k,o as K,p as X,q as Y,r as Z,t as $}from"./chunk-DED2DYRV.js";import{a as vt,b as bt,c as _t}from"./chunk-LVDNW732.js";import{w as it}from"./chunk-4CYMFQ55.js";import{a as gt,b as Mt,c as It,e as St,f as yt}from"./chunk-XU3K4MMF.js";import{a as xt}from"./chunk-JADWWDIP.js";import{e as M,g as j}from"./chunk-KZZ6WVID.js";import"./chunk-DFMYIP6B.js";import{a as z,b as A,c as L,d as U,i as rt,j as ot,o as mt,p as pt,q as st,r as ct}from"./chunk-FE6K5YNT.js";import"./chunk-DSYF4QHV.js";import{a as dt,b as ut}from"./chunk-VUZ3B7TP.js";import{Ab as w,Eb as N,Gb as O,Id as at,Jb as i,Jd as nt,Kb as r,Kd as lt,Ma as t,Na as p,O as B,Ob as R,Pa as D,Pb as F,Rb as V,Ya as v,Za as d,db as b,eb as P,ia as E,ib as n,jb as l,kb as _,na as S,oa as y,ob as T,sb as x,ub as g,yb as s,zb as h}from"./chunk-NRVZXI7R.js";import"./chunk-OYL2YZNW.js";function Bt(o,c){if(o&1){let u=T();n(0,"button",11),x("click",function(){S(u);let e=g();return y(e.form.controls.title.setValue(""))}),i(1,"translate"),i(2,"translate"),n(3,"mat-icon"),s(4,"close"),l()()}o&2&&(d("matTooltip",r(2,4,"uni.clear")),v("aria-label",r(1,2,"uni.clear")))}function Et(o,c){if(o&1){let u=T();n(0,"button",11),x("click",function(){S(u);let e=g();return y(e.form.controls.body.setValue(""))}),i(1,"translate"),i(2,"translate"),n(3,"mat-icon"),s(4,"close"),l()()}o&2&&(d("matTooltip",r(2,4,"uni.clear")),v("aria-label",r(1,2,"uni.clear")))}var Pt=o=>[o];function Dt(o,c){if(o&1&&(n(0,"div",12)(1,"a",13),i(2,"localize"),s(3),i(4,"translate"),l(),_(5,"mat-icon",14),i(6,"translate"),n(7,"a",13),i(8,"localize"),s(9),i(10,"translate"),l()()),o&2){let u=g();t(1),d("routerLink",O(15,Pt,r(2,5,"/"+u.ROUTE_DEFINITION.APP.POSTS))),t(2),h(r(4,7,"breadcrumbs.app.posts")),t(2),v("aria-label",r(6,9,"uni.aria-label.arrow-icon")),t(2),d("routerLink",O(17,Pt,r(8,11,"/"+u.ROUTE_DEFINITION.APP.POSTS+"/"+ +u.ROUTE_DEFINITION.POSTS.CREATE))),t(2),h(r(10,13,"breadcrumbs.posts.create"))}}var de=(()=>{let c=class c{constructor(m,e,a,f,I,Tt,wt,Ot,kt){this.apiService=m,this.breadcrumbsPortalService=e,this.fb=a,this.snackBar=f,this.router=I,this.lr=Tt,this.translate=wt,this.confirm=Ot,this.cdr=kt,this.ROUTE_DEFINITION=ct,this.form=this.fb.group({title:new k("",{nonNullable:!0,validators:[C.required,C.min(3)]}),body:new k("",{nonNullable:!0,validators:[C.required,C.min(3)]})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(vt.UnsavedWork)}ngOnInit(){setTimeout(()=>{this.breadcrumbsPortalService.setPortal(this.portalContent),this.cdr.markForCheck()})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(B()).subscribe({next:m=>{this.form.reset(m),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let e=this.lr.translateRoute("/");this.router.navigate([e])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(m){m.preventDefault(),this.form.reset()}};c.\u0275fac=function(e){return new(e||c)(p(_t),p(xt),p(Z),p(it),p(rt),p(mt),p(at),p(bt),p(D))},c.\u0275cmp=E({type:c,selectors:[["app-post-create"]],viewQuery:function(e,a){if(e&1&&F(M,7),e&2){let f;R(f=V())&&(a.portalContent=f.first)}},standalone:!0,features:[N],decls:28,vars:21,consts:[[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"formGroup","ngSubmit","reset"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],["autosize","cdkTextareaAutosize"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"matTooltip","click"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(e,a){e&1&&(n(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),s(3),l()(),n(4,"mat-card-content",0)(5,"form",1),x("ngSubmit",function(){return a.onSubmit()})("reset",function(I){return a.onReset(I)}),n(6,"mat-form-field",2)(7,"mat-label"),s(8),i(9,"translate"),l(),_(10,"input",3),b(11,Bt,5,6,"button",4),l(),n(12,"mat-form-field",2)(13,"mat-label"),s(14),i(15,"translate"),l(),_(16,"textarea",5,6),i(18,"translate"),b(19,Et,5,6,"button",4),l(),n(20,"div",7)(21,"button",8),s(22),i(23,"translate"),l(),n(24,"button",9),s(25),i(26,"translate"),l()()()()(),b(27,Dt,11,19,"div",10)),e&2&&(t(3),h(a.form.controls.title.value),t(2),d("formGroup",a.form),t(3),h(r(9,11,"form.post.title.label")),t(3),P(11,a.form.controls.title.value?11:-1),t(3),h(r(15,13,"form.post.body.label")),t(2),d("placeholder",r(18,15,"form.post.body.placeholder")),t(3),P(19,a.form.controls.body.value?19:-1),t(2),d("disabled",a.form.pristine),t(1),w(" ",r(23,17,"uni.reset")," "),t(2),d("disabled",a.form.pristine||a.form.invalid),t(1),w(" ",r(26,19,"uni.submit")," "))},dependencies:[$,K,H,W,J,X,Y,yt,gt,It,St,Mt,ut,dt,Ct,ht,q,G,Q,ft,U,A,z,L,et,tt,j,M,lt,nt,ot,st,pt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let o=c;return o})();export{de as PostCreateComponent};
