import{a as bt,b as St,c as gt}from"./chunk-L5B6EZZ7.js";import{a as ot,b as nt}from"./chunk-T7DORWZJ.js";import{a as H,b as W,e as J,f as K,g as X,h as y,j as Y,k as Z,o as $,p as tt,q as et,r as it,t as at}from"./chunk-ZU5WPADN.js";import{a as Rt,b as Vt,c as Ft}from"./chunk-HK4HLS5W.js";import{a as Et}from"./chunk-GRBBDNUB.js";import{a as Pt,b as It,c as yt}from"./chunk-WNODKWIY.js";import{x as rt}from"./chunk-L63PVE5F.js";import{a as Tt,b as wt,c as Dt,d as Bt,e as Ot,f as kt}from"./chunk-2QOWHTSX.js";import{a as Ct}from"./chunk-GBBV7C3C.js";import{a as Mt}from"./chunk-ZXLYFFLL.js";import{e as E,g as L}from"./chunk-NKIJLC2J.js";import"./chunk-S5GNE353.js";import{a as U,b as G,c as Q,d as q,f as lt,i as dt,j as pt,o as ut,p as ft,q as _t,r as xt}from"./chunk-FLU2ZS4X.js";import"./chunk-D2NTN7IT.js";import{a as ht,b as vt}from"./chunk-K5HEWCSR.js";import{Ab as k,Ad as mt,Bb as R,Bd as ct,Cb as V,Cd as st,Gb as d,Hb as f,Ib as I,J as T,Ja as i,Lb as F,Mb as N,Na as c,Nb as j,Ob as a,Pb as o,R as w,Ua as O,Wb as A,_a as S,ca as D,eb as x,fb as s,gb as M,jb as _,la as v,ma as b,nb as r,ob as l,pb as C,rc as z,ta as B,tb as g,vb as P,wb as u}from"./chunk-VN2F6PMP.js";import"./chunk-ZY7WU73K.js";var Gt=e=>[e],Qt=(e,m)=>[e,m],qt=(e,m,t)=>[e,m,t];function Ht(e,m){if(e&1){let t=g();r(0,"div",2)(1,"button",12),P("deleted",function(){v(t);let n=u(2);return b(n.onDeleted())}),d(2),a(3,"translate"),l()()}if(e&2){let t=u(2);i(),s("appPostDelete",t.dataSource.data().id),i(),I(" ",o(3,2,"uni.delete")," ")}}function Wt(e,m){if(e&1){let t=g();r(0,"button",13),a(1,"translate"),a(2,"translate"),P("click",function(){v(t);let n=u(2);return n.form.controls.title.setValue(""),b(n.form.controls.body.markAsDirty())}),r(3,"mat-icon"),d(4,"close"),l()()}e&2&&(s("matTooltip",o(1,2,"uni.clear")),x("aria-label",o(2,4,"uni.clear")))}function Jt(e,m){if(e&1){let t=g();r(0,"button",13),a(1,"translate"),a(2,"translate"),P("click",function(){v(t);let n=u(2);return n.form.controls.body.setValue(""),b(n.form.controls.body.markAsDirty())}),r(3,"mat-icon"),d(4,"close"),l()()}e&2&&(s("matTooltip",o(1,2,"uni.clear")),x("aria-label",o(2,4,"uni.clear")))}function Kt(e,m){if(e&1){let t=g();S(0,Ht,4,4,"div",2),r(1,"mat-card")(2,"mat-card-header")(3,"mat-card-subtitle"),d(4),l(),r(5,"mat-card-title"),d(6),l()(),r(7,"mat-card-content",3)(8,"form",4),P("ngSubmit",function(){v(t);let n=u();return b(n.onSubmit())})("reset",function(n){v(t);let h=u();return b(h.onReset(n))}),r(9,"mat-form-field",5)(10,"mat-label"),d(11),a(12,"translate"),l(),C(13,"input",6),S(14,Wt,5,6,"button",7),l(),r(15,"mat-form-field",5)(16,"mat-label"),d(17),a(18,"translate"),l(),C(19,"textarea",8,0),a(21,"translate"),S(22,Jt,5,6,"button",7),l(),r(23,"div",9)(24,"button",10),d(25),a(26,"translate"),l(),r(27,"button",11),d(28),a(29,"translate"),l()()()()()}if(e&2){let t=u();_(t.dataSource.state()==="data"?0:-1),i(3),M("blur-sm",t.dataSource.state()!=="data"),i(),f("#"+t.dataSource.data().id),i(),M("blur-sm",t.dataSource.state()!=="data"),i(),f(t.dataSource.data().title),i(2),s("formGroup",t.form),i(3),f(o(12,17,"form.post.title.label")),i(3),_(t.form.controls.title.value?14:-1),i(3),f(o(18,19,"form.post.body.label")),i(2),s("placeholder",o(21,21,"form.post.body.placeholder")),i(3),_(t.form.controls.body.value?22:-1),i(2),s("disabled",t.form.pristine),i(),I(" ",o(26,23,"uni.reset")," "),i(2),s("disabled",t.form.pristine||t.form.invalid),i(),I(" ",o(29,25,"uni.submit")," ")}}function Xt(e,m){if(e&1&&(r(0,"mat-card")(1,"mat-card-content",14),C(2,"mat-icon",15),a(3,"translate"),r(4,"div"),d(5),l()()()),e&2){let t=u();i(2),x("aria-label",o(3,2,"uni.aria-label.error-icon")),i(3),f(t.dataSource.error())}}function Yt(e,m){e&1&&(r(0,"mat-card")(1,"mat-card-content",14),C(2,"mat-icon",16),a(3,"translate"),r(4,"div"),d(5),a(6,"translate"),l()()()),e&2&&(i(2),x("aria-label",o(3,2,"uni.aria-label.warning-icon")),i(3),f(o(6,4,"error.post-was-not-found")))}function Zt(e,m){if(e&1&&(C(0,"mat-icon",19),a(1,"translate"),r(2,"a",18),a(3,"localize"),d(4),l(),C(5,"mat-icon",19),a(6,"translate"),r(7,"a",18),a(8,"localize"),a(9,"localize"),d(10),a(11,"translate"),l()),e&2){let t=u(2);x("aria-label",o(1,6,"uni.aria-label.arrow-icon")),i(2),s("routerLink",N(18,Qt,o(3,8,"/"+t.ROUTE_DEFINITION.APP.POSTS),t.dataSource.data().id)),i(2),f(t.dataSource.data().id),i(),x("aria-label",o(6,10,"uni.aria-label.arrow-icon")),i(2),s("routerLink",j(21,qt,o(8,12,"/"+t.ROUTE_DEFINITION.APP.POSTS),t.dataSource.data().id,o(9,14,t.ROUTE_DEFINITION.POSTS.EDIT))),i(3),I(" ",o(11,16,"breadcrumbs.posts.edit"),"")}}function $t(e,m){if(e&1&&(r(0,"div",17)(1,"a",18),a(2,"localize"),d(3),a(4,"translate"),l(),S(5,Zt,12,25),l()),e&2){let t=u();i(),s("routerLink",F(7,Gt,o(2,3,"/"+t.ROUTE_DEFINITION.APP.POSTS))),i(2),f(o(4,5,"breadcrumbs.app.posts")),i(2),_(t.dataSource.state()==="data"?5:-1)}}var Le=(()=>{class e{constructor(t,p,n,h,Nt,jt,At,zt,Lt,Ut){this.breadcrumbsPortalService=t,this.cdr=p,this.confirm=n,this.fb=h,this.route=Nt,this.apiService=jt,this.translate=At,this.lr=zt,this.snackBar=Lt,this.router=Ut,this.destroyRef=D(B),this.dataSource=new Rt(Vt),this.ROUTE_DEFINITION=xt,this.form=this.fb.nonNullable.group({title:["",[y.required,y.min(3)]],body:["",[y.required,y.min(3)]]})}canDeactivate(){return this.form.pristine||this.confirm.openCustomConfirmDialog(Pt.UnsavedWork)}ngOnDestroy(){this.portalContent?.detach()}ngOnInit(){setTimeout(()=>{this.breadcrumbsPortalService.setPortal(this.portalContent),this.cdr.markForCheck()}),this.route.paramMap.pipe(Ft(),w(t=>this.apiService.detail(t)),Ct(this.destroyRef)).subscribe({next:t=>{this.dataSource.setData(t),this.form.patchValue(t)},error:()=>{let t=this.translate.instant("error.unexpected-exception");this.dataSource.setError(t)}})}onSubmit(){this.apiService.patch(this.dataSource.data().id,this.form.value).pipe(T()).subscribe({next:t=>{this.dataSource.setData(t),this.form.reset(t),this.snackBar.open(this.translate.instant("response.update.success"),this.translate.instant("uni.close"))},error:()=>{this.snackBar.open(this.translate.instant("response.update.failed"),this.translate.instant("uni.close"))}})}onReset(t){t.preventDefault(),this.form.reset(this.dataSource.data())}onDeleted(){let t=this.lr.translateRoute("/");this.router.navigate([t])}static{this.\u0275fac=function(p){return new(p||e)(c(Mt),c(A),c(It),c(it),c(lt),c(yt),c(mt),c(ut),c(rt),c(dt))}}static{this.\u0275cmp=O({type:e,selectors:[["app-post-edit"]],viewQuery:function(p,n){if(p&1&&k(E,7),p&2){let h;R(h=V())&&(n.portalContent=h.first)}},decls:4,vars:3,consts:[["autosize","cdkTextareaAutosize"],["class","container flex items-center gap-1 py-4",4,"cdkPortal"],[1,"flex","items-end","justify-end","gap-2"],[1,"flex","flex-col","gap-2","mt-2","text-center"],[3,"ngSubmit","reset","formGroup"],[1,"w-full"],["matInput","","type","text","formControlName","title"],["matSuffix","","mat-icon-button","",3,"matTooltip"],["matInput","","cdkTextareaAutosize","","formControlName","body",3,"placeholder"],[1,"flex","justify-center","gap-2"],["mat-button","","color","primary","type","reset",3,"disabled"],["mat-flat-button","","color","primary","type","submit",3,"disabled"],["mat-button","","color","accent",3,"deleted","appPostDelete"],["matSuffix","","mat-icon-button","",3,"click","matTooltip"],[1,"flex","flex-col","gap-2","text-center"],["aria-hidden","false","fontIcon","error"],["aria-hidden","false","fontIcon","warning"],[1,"container","flex","items-center","gap-1","py-4"],["mat-button","","color","primary",3,"routerLink"],["aria-hidden","false","fontIcon","chevron_right"]],template:function(p,n){p&1&&S(0,Kt,30,27)(1,Xt,6,4,"mat-card")(2,Yt,7,6,"mat-card")(3,$t,6,9,"div",1),p&2&&(_(n.dataSource.state()==="loading"||n.dataSource.state()==="data"?0:-1),i(),_(n.dataSource.state()==="error"?1:-1),i(),_(n.dataSource.state()==="empty"?2:-1))},dependencies:[z,_t,ft,q,G,U,Q,kt,Tt,Dt,Ot,Bt,wt,K,J,H,W,vt,ht,nt,ot,gt,St,bt,L,E,at,$,X,Y,Z,tt,et,pt,st,ct,Et],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}[_nghost-%COMP%]{padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return e})();export{Le as PostEditComponent};
