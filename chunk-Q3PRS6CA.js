import{$a as g,Ga as l,Ic as M,Na as n,Ob as y,Qb as w,Rb as x,Va as p,ba as f,ca as s,ec as S,fa as u,ia as b,ja as a,ka as c,qd as d,sd as C,vb as v,wb as m}from"./chunk-NRVZXI7R.js";var T="padding",E='[role="main"]',D=(()=>{let t=class t{constructor(){this.cssAttribute=T,this.containerSelector=E}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var I=e=>{let t=new D;return e&&(e.containerSelector&&(t.containerSelector=e.containerSelector),e.cssAttribute&&(t.cssAttribute=e.cssAttribute)),t},O=new u("forRoot() NgxFixedFooterOptionsService configuration."),Q=(()=>{let t=class t{static forRoot(i){return{ngModule:t,providers:[{provide:O,useValue:i},{provide:D,useFactory:I,deps:[O]}]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a({type:t}),t.\u0275inj=s({});let e=t;return e})();var P={version:"0.0.0",date:"2023-12-25T14:45:54.321Z",author:{name:"Dominik Hlad\xEDk",email:"dominik.hladik@seznam.cz",url:"https://github.com/Celtian"},git:{branch:"master",commit:"f978025a707b1c6b228ea5f08c6a51ddb06a470f"}};var j=["*",[["mat-toolbar-row"]]],k=["*","mat-toolbar-row"],z=C(class{constructor(e){this._elementRef=e}}),F=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=c({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]});let e=t;return e})(),W=(()=>{let t=class t extends z{constructor(i,o,r){super(i),this._platform=o,this._document=r}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};t.\u0275fac=function(o){return new(o||t)(n(l),n(M),n(S))},t.\u0275cmp=b({type:t,selectors:[["mat-toolbar"]],contentQueries:function(o,r,A){if(o&1&&w(A,F,5),o&2){let h;y(h=x())&&(r._toolbarRows=h)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(o,r){o&2&&g("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0)},inputs:{color:"color"},exportAs:["matToolbar"],features:[p],ngContentSelectors:k,decls:2,vars:0,template:function(o,r){o&1&&(v(j),m(0),m(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let e=t;return e})();var X=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a({type:t}),t.\u0275inj=s({imports:[d,d]});let e=t;return e})();export{Q as a,P as b,W as c,X as d};
