import{b as V,c as q}from"./chunk-WMUQHGLN.js";import{a as S,e as I,g as y,h as u,j as P,k as E,o as _,p as N,q as O,r as F,t as T}from"./chunk-UZEUMAJ5.js";import"./chunk-AESYL7IM.js";import{a as k,b as z,c as H,e as U,f as W}from"./chunk-36ELO7DU.js";import{A as G,w as A}from"./chunk-Y4M62QSP.js";import{a as w,d as b,i as B,o as j,r as L}from"./chunk-WJ4JSTVP.js";import"./chunk-OAMQ53XU.js";import{Bd as D,Cd as R,Ib as m,Jb as l,Ob as C,Qa as r,Ra as n,Tb as p,Ub as d,db as M,ka as x,mb as a,nb as t,o as g,ob as c,wb as v}from"./chunk-SFF4OQ2U.js";import"./chunk-CQCHLVVT.js";var st=(()=>{let e=class e{constructor(o,i,s,h){this.fb=o,this.router=i,this.lr=s,this.auth=h,this.form=this.fb.nonNullable.group({email:["",[u.required,u.email]],password:["",[u.required]]})}onSubmit(){this.form.invalid||g(G(this.auth,this.form.controls.email.value,this.form.controls.password.value)).subscribe(()=>{let o=this.lr.translateRoute(`/${L.APP.POSTS}`);this.router.navigate([o])})}};e.\u0275fac=function(i){return new(i||e)(n(F),n(B),n(j),n(A))},e.\u0275cmp=x({type:e,selectors:[["app-login"]],standalone:!0,features:[C],decls:22,vars:13,consts:[[1,"flex","flex-col","gap-2","mt-4",3,"formGroup","ngSubmit"],[1,"flex","flex-col","gap-2"],[1,"w-full"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com"],["type","password","matInput","","formControlName","password","placeholder","Ex. ***"],[1,"flex","items-center","justify-center"],["mat-button","","color","primary","type","submit"]],template:function(i,s){i&1&&(a(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3),p(4,"translate"),t()(),a(5,"mat-card-content")(6,"form",0),v("ngSubmit",function(){return s.onSubmit()}),a(7,"div",1)(8,"mat-form-field",2)(9,"mat-label"),m(10),p(11,"translate"),t(),c(12,"input",3),t(),a(13,"mat-form-field",2)(14,"mat-label"),m(15),p(16,"translate"),t(),c(17,"input",4),t()(),a(18,"div",5)(19,"button",6),m(20),p(21,"translate"),t()()()()()),i&2&&(r(3),l(d(4,5,"uni.login")),r(3),M("formGroup",s.form),r(4),l(d(11,7,"uni.email")),r(5),l(d(16,9,"uni.password")),r(5),l(d(21,11,"uni.submit")))},dependencies:[W,k,H,U,z,b,w,T,_,y,P,E,N,O,q,V,I,S,R,D],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block;max-width:24rem;padding-top:1rem;padding-bottom:1rem}"],changeDetection:0});let f=e;return f})();export{st as LoginComponent};
