import{a as ut,b as ft,c as Ct}from"./chunk-64LKPXDL.js";import{a as $,b as tt}from"./chunk-RSMRNZYX.js";import{a as U,b as G,e as Q,g as q,h,j as H,k as W,m as O,o as J,p as K,q as X,r as Y,t as Z}from"./chunk-GABIKXSI.js";import{a as ht,b as vt,c as bt}from"./chunk-MPCHIEOJ.js";import{x as et}from"./chunk-H25GNK6C.js";import"./chunk-T3Q3DASN.js";import{a as xt,b as gt,c as Mt,e as It,f as St}from"./chunk-LYULVQVV.js";import{a as _t}from"./chunk-3F3QKQZU.js";import{e as I,g as F}from"./chunk-65ZIV2FX.js";import"./chunk-6MCI2X76.js";import{a as j,b as z,c as A,d as L,i as it,j as rt,o as lt,p as mt,q as pt,r as st}from"./chunk-MUDSTJWP.js";import"./chunk-D2NTN7IT.js";import{a as ct,b as dt}from"./chunk-RLJWUY5K.js";import{Cb as g,Eb as M,Ib as N,Jb as D,Jd as ot,Ka as e,Kb as R,Kd as at,La as p,Ld as nt,O as B,Ob as s,Pb as u,Qb as T,Tb as w,Wb as o,Xa as E,Xb as a,cb as v,cc as V,kb as b,lb as c,pb as P,qa as f,ra as C,tb as l,ub as m,vb as _,zb as x}from"./chunk-D6FEYKHW.js";import"./chunk-ZY7WU73K.js";var yt=r=>[r];function Ot(r,k){if(r&1){let i=x();l(0,"button",11),o(1,"translate"),o(2,"translate"),g("click",function(){f(i);let t=M();return C(t.form.controls.title.setValue(""))}),l(3,"mat-icon"),s(4,"close"),m()()}r&2&&(c("matTooltip",a(1,2,"uni.clear")),b("aria-label",a(2,4,"uni.clear")))}function kt(r,k){if(r&1){let i=x();l(0,"button",11),o(1,"translate"),o(2,"translate"),g("click",function(){f(i);let t=M();return C(t.form.controls.body.setValue(""))}),l(3,"mat-icon"),s(4,"close"),m()()}r&2&&(c("matTooltip",a(1,2,"uni.clear")),b("aria-label",a(2,4,"uni.clear")))}function Bt(r,k){if(r&1&&(l(0,"div",12)(1,"a",13),o(2,"localize"),s(3),o(4,"translate"),m(),_(5,"mat-icon",14),o(6,"translate"),l(7,"a",13),o(8,"localize"),s(9),o(10,"translate"),m()()),r&2){let i=M();e(),c("routerLink",w(15,yt,a(2,5,"/"+i.ROUTE_DEFINITION.APP.POSTS))),e(2),u(a(4,7,"breadcrumbs.app.posts")),e(2),b("aria-label",a(6,9,"uni.aria-label.arrow-icon")),e(2),c("routerLink",w(17,yt,a(8,11,"/"+i.ROUTE_DEFINITION.APP.POSTS+"/"+ +i.ROUTE_DEFINITION.POSTS.CREATE))),e(2),u(a(10,13,"breadcrumbs.posts.create"))}}var me=(()=>{class r{constructor(i,n,t,d,S,y,Pt,Tt,wt){this.apiService=i,this.breadcrumbsPortalService=n,this.fb=t,this.snackBar=d,this.router=S,this.lr=y,this.translate=Pt,this.confirm=Tt,this.cdr=wt,this.ROUTE_DEFINITION=st,this.form=this.fb.group({title:new O("",{nonNullable:!0,validators:[h.required,h.min(3)]}),body:new O("",{nonNullable:!0,validators:[h.required,h.min(3)]})})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(ht.UnsavedWork)}ngOnInit(){setTimeout(()=>{this.breadcrumbsPortalService.setPortal(this.portalContent),this.cdr.markForCheck()})}ngOnDestroy(){this.portalContent?.detach()}onSubmit(){this.apiService.create(this.form.value).pipe(B()).subscribe({next:i=>{this.form.reset(i),this.snackBar.open(this.translate.instant("response.create.success"),this.translate.instant("uni.close"));let n=this.lr.translateRoute("/");this.router.navigate([n])},error:()=>{this.snackBar.open(this.translate.instant("response.create.failed"),this.translate.instant("uni.close"))}})}onReset(i){i.preventDefault(),this.form.reset()}static{this.\u0275fac=function(n){return new(n||r)(p(bt),p(_t),p(Y),p(et),p(it),p(lt),p(ot),p(vt),p(V))}}static{this.\u0275cmp=E({type:r,selectors:[["app-post-create"]],viewQuery:function(n,t){if(n&1&&N(I,7),n&2){let d;D(d=R())&&(t.portalContent=d.first)}},decls:28,vars:21,consts:[["autosize","cdkTextareaAutosize"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(n,t){if(n&1){let d=x();l(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),s(3),m()(),l(4,"mat-card-content",1)(5,"form",2),g("ngSubmit",function(){return f(d),C(t.onSubmit())})("reset",function(y){return f(d),C(t.onReset(y))}),l(6,"mat-form-field",3)(7,"mat-label"),s(8),o(9,"translate"),m(),_(10,"input",4),v(11,Ot,5,6,"button",5),m(),l(12,"mat-form-field",3)(13,"mat-label"),s(14),o(15,"translate"),m(),_(16,"textarea",6,0),o(18,"translate"),v(19,kt,5,6,"button",5),m(),l(20,"div",7)(21,"button",8),s(22),o(23,"translate"),m(),l(24,"button",9),s(25),o(26,"translate"),m()()()()(),v(27,Bt,11,19,"div",10)}n&2&&(e(3),u(t.form.controls.title.value),e(2),c("formGroup",t.form),e(3),u(a(9,11,"form.post.title.label")),e(3),P(t.form.controls.title.value?11:-1),e(3),u(a(15,13,"form.post.body.label")),e(2),c("placeholder",a(18,15,"form.post.body.placeholder")),e(3),P(t.form.controls.body.value?19:-1),e(2),c("disabled",t.form.pristine),e(),T(" ",a(23,17,"uni.reset")," "),e(2),c("disabled",t.form.pristine||t.form.invalid),e(),T(" ",a(26,19,"uni.submit")," "))},dependencies:[Z,J,q,H,W,K,X,St,xt,Mt,It,gt,dt,ct,Ct,ft,Q,U,G,ut,L,z,j,A,tt,$,F,I,nt,at,rt,pt,mt],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return r})();export{me as PostCreateComponent};