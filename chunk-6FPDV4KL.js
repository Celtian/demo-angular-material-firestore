import{b as G,c as V}from"./chunk-L5B6EZZ7.js";import{a as b,e as S,g as I,h as u,j as _,k as y,o as P,p as E,q as N,r as O,t as R}from"./chunk-ZU5WPADN.js";import{a as q,b as L,c as U,e as k,f as z}from"./chunk-2QOWHTSX.js";import{m as j}from"./chunk-S5GNE353.js";import{a as v,d as w,i as F,o as D,r as A}from"./chunk-FLU2ZS4X.js";import{sa as C}from"./chunk-D2NTN7IT.js";import{Bd as T,Cd as B,Gb as m,Hb as n,Ja as i,Na as a,Ob as p,Pb as l,Ua as g,fb as x,n as h,nb as r,ob as t,pb as f,vb as M}from"./chunk-VN2F6PMP.js";import"./chunk-ZY7WU73K.js";var lt=(()=>{class d{constructor(o,e,s,c){this.fb=o,this.auth=e,this.router=s,this.lr=c,this.form=this.fb.nonNullable.group({email:["",[u.required,u.email]],password:["",[u.required]]})}onSubmit(){this.form.invalid||h(C(this.auth,this.form.controls.email.value,this.form.controls.password.value)).subscribe(()=>{let o=this.lr.translateRoute(`/${A.APP.POSTS}`);this.router.navigate([o])})}static{this.\u0275fac=function(e){return new(e||d)(a(O),a(j),a(F),a(D))}}static{this.\u0275cmp=g({type:d,selectors:[["app-register"]],decls:22,vars:13,consts:[[1,"flex","flex-col","gap-2","mt-4",3,"ngSubmit","formGroup"],[1,"flex","flex-col","gap-2"],[1,"w-full"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com"],["type","password","matInput","","formControlName","password","placeholder","Ex. ***"],[1,"flex","items-center","justify-center"],["mat-button","","color","primary","type","submit"]],template:function(e,s){e&1&&(r(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),m(3),p(4,"translate"),t()(),r(5,"mat-card-content")(6,"form",0),M("ngSubmit",function(){return s.onSubmit()}),r(7,"div",1)(8,"mat-form-field",2)(9,"mat-label"),m(10),p(11,"translate"),t(),f(12,"input",3),t(),r(13,"mat-form-field",2)(14,"mat-label"),m(15),p(16,"translate"),t(),f(17,"input",4),t()(),r(18,"div",5)(19,"button",6),m(20),p(21,"translate"),t()()()()()),e&2&&(i(3),n(l(4,5,"uni.register")),i(3),x("formGroup",s.form),i(4),n(l(11,7,"uni.email")),i(5),n(l(16,9,"uni.password")),i(5),n(l(21,11,"uni.submit")))},dependencies:[z,q,U,k,L,w,v,R,P,I,_,y,E,N,V,G,S,b,B,T],styles:["[_nghost-%COMP%]{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{display:block;max-width:24rem;padding-top:1rem;padding-bottom:1rem}"],changeDetection:0})}}return d})();export{lt as RegisterComponent};
