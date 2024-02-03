import{c as W,d as Y,f as R,h as G,i as X,l as J,p as Q}from"./chunk-UZEUMAJ5.js";import{$a as P,B as A,E as k,Ic as E,Ja as v,Jc as M,Lb as z,Mc as w,Nc as f,Oc as H,Pc as Z,Ra as o,Xa as m,Y as N,ca as L,cb as O,da as _,ec as q,f as u,fb as B,ga as D,ha as b,ic as U,ja as d,l as F,la as p,ma as g,md as C,nd as $,oa as j,pd as K,tb as V,wb as y}from"./chunk-SFF4OQ2U.js";var ee=Z({passive:!0}),te=(()=>{let s=class s{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return F;let t=w(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new u,a="cdk-text-field-autofilled",l=h=>{h.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0}))):h.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",l,ee),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",l,ee)}}),r}stopMonitoring(e){let t=w(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}};s.\u0275fac=function(t){return new(t||s)(b(f),b(m))},s.\u0275prov=L({token:s,factory:s.\u0275fac,providedIn:"root"});let n=s;return n})();var we=(()=>{let s=class s{get minRows(){return this._minRows}set minRows(e){this._minRows=M(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=M(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}constructor(e,t,i,r){this._elementRef=e,this._platform=t,this._ngZone=i,this._destroyed=new u,this._enabled=!0,this._previousMinRows=-1,this._isViewInited=!1,this._handleFocusEvent=a=>{this._hasFocus=a.type==="focus"},this._document=r,this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();A(e,"resize").pipe(k(16),N(this._destroyed)).subscribe(()=>this.resizeToFitContent(!0)),this._textareaElement.addEventListener("focus",this._handleFocusEvent),this._textareaElement.addEventListener("blur",this._handleFocusEvent)}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._textareaElement.removeEventListener("focus",this._handleFocusEvent),this._textareaElement.removeEventListener("blur",this._handleFocusEvent),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1);e.rows=1,e.style.position="absolute",e.style.visibility="hidden",e.style.border="none",e.style.padding="0",e.style.height="",e.style.minHeight="",e.style.maxHeight="",e.style.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||"",i=this._platform.FIREFOX,r=i&&this._hasFocus,a=i?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";r&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(a);let l=e.scrollHeight-4;return e.classList.remove(a),r&&(e.style.marginBottom=t),l}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,i=t.value;if(!e&&this._minRows===this._previousMinRows&&i===this._previousValue)return;let r=this._measureScrollHeight(),a=Math.max(r,this._cachedPlaceholderHeight||0);t.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=i,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:i}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,i)}};s.\u0275fac=function(t){return new(t||s)(o(v),o(f),o(m),o(U,8))},s.\u0275dir=g({type:s,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(t,i){t&1&&y("input",function(){return i._noopInputHandler()})},inputs:{minRows:[d.None,"cdkAutosizeMinRows","minRows"],maxRows:[d.None,"cdkAutosizeMaxRows","maxRows"],enabled:[d.HasDecoratorInputTransform,"cdkTextareaAutosize","enabled",q],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"],standalone:!0,features:[P]});let n=s;return n})(),ie=(()=>{let s=class s{};s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=p({type:s}),s.\u0275inj=_({});let n=s;return n})();var le=new D("MAT_INPUT_VALUE_ACCESSOR"),he=["button","checkbox","file","hidden","image","radio","range","reset","submit"],de=0,ze=(()=>{let s=class s{get disabled(){return this._disabled}set disabled(e){this._disabled=E(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(G.required)??!1}set required(e){this._required=E(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&H().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=E(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,a,l,h,se,ne,S){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=se,this._formField=S,this._uid=`mat-input-${de++}`,this.focused=!1,this.stateChanges=new u,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(I=>H().has(I)),this._iOSKeyupListener=I=>{let c=I.target;!c.value&&c.selectionStart===0&&c.selectionEnd===0&&(c.setSelectionRange(1,1),c.setSelectionRange(0,0))};let x=this._elementRef.nativeElement,T=x.nodeName.toLowerCase();this._inputValueAccessor=h||x,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&ne.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new $(l,i,a,r,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=T==="select",this._isTextarea=T==="textarea",this._isInFormField=!!S,this._isNativeSelect&&(this.controlType=x.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){he.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}};s.\u0275fac=function(t){return new(t||s)(o(v),o(f),o(X,10),o(J,8),o(Q,8),o(K),o(le,10),o(te),o(m),o(Y,8))},s.\u0275dir=g({type:s,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){t&1&&y("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(V("id",i.id)("disabled",i.disabled)("required",i.required),O("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),B("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[d.None,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[z([{provide:W,useExisting:s}]),j]});let n=s;return n})(),qe=(()=>{let s=class s{};s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=p({type:s}),s.\u0275inj=_({imports:[C,R,R,ie,C]});let n=s;return n})();export{we as a,ze as b,qe as c};
