import{b as D}from"./chunk-XRTU4RXL.js";import{o as C}from"./chunk-F4FAWKN6.js";import{Ea as h,Fb as M,Gb as s,Hb as y,Id as E,Jb as L,Jc as A,Kb as T,Rc as _,Sa as g,Xa as p,Ya as u,Za as v,ba as b,ca as f,ga as r,ha as i,mb as w,mc as n,nb as x,ud as m}from"./chunk-PEOUL2L6.js";var O=["*",[["mat-toolbar-row"]]],k=["*","mat-toolbar-row"],I=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275dir=v({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),Z=(()=>{class t{_elementRef=i(h);_platform=i(_);_document=i(n);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=p({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,a,l){if(o&1&&y(l,I,5),o&2){let d;L(d=T())&&(a._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,a){o&2&&(x(a.color?"mat-"+a.color:""),w("mat-toolbar-multiple-rows",a._toolbarRows.length>0)("mat-toolbar-single-row",a._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:k,decls:2,vars:0,template:function(o,a){o&1&&(M(O),s(0),s(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}"],encapsulation:2,changeDetection:0})}return t})();var J=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=u({type:t});static \u0275inj=f({imports:[m,m]})}return t})();var c=function(t){return t.en="en",t.cs="cs",t}(c||{});var j="en",R=Object.values(c),U={cs:"cs_CZ",en:"en_US"};var mt=(()=>{class t{constructor(e,o,a,l){this.doc=e,this.lr=o,this.translate=a,this.meta=l,this.language=g(j),this.language$=D(this.language)}initLang(){this.setLang(this.translate.currentLang)}setLang(e){this.lr.changeLanguage(e,{replaceUrl:!0},!0),this.setHtmlLang(e),this.setOgTags(e),this.language.set(e)}toggleLanguage(){this.setLang(this.language()==="en"?"cs":"en")}setHtmlLang(e){this?.doc?.documentElement&&(this.doc.documentElement.lang=e)}setOgTags(e){this.meta.removeTag(`content='${this.formatLang(e)}'`),this.meta.updateTag({property:"og:locale",content:this.formatLang(e)}),this.meta.addTags(R.filter(o=>o!==e).map(o=>({property:"og:locale:alternate",content:this.formatLang(o)})))}formatLang(e){return U[e]}static{this.\u0275fac=function(o){return new(o||t)(r(n),r(C),r(E),r(A))}}static{this.\u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{Z as a,J as b,mt as c};