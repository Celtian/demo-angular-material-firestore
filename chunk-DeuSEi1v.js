import {g,B,bE as di,bF as sd,cw as I2,Q as Qn,cx as Yl,c3 as C$1,a1 as vo,h as Ft,ae as P$1,c as fl,a5 as ke,a6 as ve,a9 as H2,aw as Jw,ax as Xw,bz as gC,aH as Yg,aN as $g,aL as tC,aM as nC}from'./main-3N7APKKC.js';var j=["*",[["mat-toolbar-row"]]],O=["*","mat-toolbar-row"],k=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=vo({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),P=(()=>{class t{_elementRef=g(Ft);_platform=g(P$1);_document=g(B);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=fl({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,r,N){if(o&1&&$g(N,k,5),o&2){let s;tC(s=nC())&&(r._toolbarRows=s);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,r){o&2&&(gC(r.color?"mat-"+r.color:""),Yg("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:O,decls:2,vars:0,template:function(o,r){o&1&&(Jw(j),Xw(0),Xw(1,1));},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var $=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=ke({type:t});static \u0275inj=ve({imports:[H2]})}return t})();var l=(function(t){return t.en="en",t.cs="cs",t})(l||{});var C="en",D=Object.values(l),R={cs:"cs_CZ",en:"en_US"};var rt=(()=>{class t{constructor(){this.doc=g(B),this.lr=g(di),this.translate=g(sd),this.meta=g(I2),this.language=Qn(C),this.language$=Yl(this.language);}initLang(){this.setLang(this.translate.currentLang);}setLang(e){this.lr.changeLanguage(e,{replaceUrl:true},true),this.setHtmlLang(e),this.setOgTags(e),this.language.set(e);}toggleLanguage(){this.setLang(this.language()==="en"?"cs":"en");}setHtmlLang(e){this?.doc?.documentElement&&(this.doc.documentElement.lang=e);}setOgTags(e){this.meta.removeTag(`content='${this.formatLang(e)}'`),this.meta.updateTag({property:"og:locale",content:this.formatLang(e)}),this.meta.addTags(D.filter(o=>o!==e).map(o=>({property:"og:locale:alternate",content:this.formatLang(o)})));}formatLang(e){return R[e]}static{this.\u0275fac=function(o){return new(o||t)};}static{this.\u0275prov=C$1({token:t,factory:t.\u0275fac,providedIn:"root"});}}return t})();export{$,P,rt as r};