function v(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var E={exports:{}};(function(c){(function(g){let u=0;const m=function(h,p){const f=this;let d=!1;if(Array.isArray(h))return!!h.length&&h.map(t=>new m(t,p));const n={init(){this.options=Object.assign({duration:500,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:()=>{},onOpen:()=>{},beforeClose:()=>{},onClose:()=>{}},p);const t=typeof h=="string";this.container=t?document.querySelector(h):h,this.createDefinitions(),f.attachEvents()},createDefinitions(){const{elementClass:t,openOnInit:e,onlyChildNodes:s}=this.options,o=s?this.container.childNodes:this.container.querySelectorAll(a(t));this.elements=Array.from(o).filter(i=>i.classList&&i.classList.contains(t)),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter(i=>!i.classList.contains("js-enabled")).forEach(i=>{i.classList.add("js-enabled"),this.generateIDs(i),this.setARIA(i),this.setTransition(i);const r=this.elements.indexOf(i);u++,e.includes(r)?this.showElement(i,!1):this.closeElement(i,!1)})},setTransition(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const{duration:s,panelClass:o}=this.options;t.querySelector(a(o)).style.transitionDuration=e?null:"".concat(s,"ms")},generateIDs(t){const{triggerClass:e,panelClass:s}=this.options,o=t.querySelector(a(e)),i=t.querySelector(a(s));t.setAttribute("id",t.id||"ac-".concat(u)),o.setAttribute("id",o.id||"ac-trigger-".concat(u)),i.setAttribute("id",i.id||"ac-panel-".concat(u))},removeIDs(t){const{triggerClass:e,panelClass:s}=this.options,o=t.querySelector(a(e)),i=t.querySelector(a(s));t.id.startsWith("ac-")&&t.removeAttribute("id"),o.id.startsWith("ac-")&&o.removeAttribute("id"),i.id.startsWith("ac-")&&i.removeAttribute("id")},setARIA(t){const{ariaEnabled:e,triggerClass:s,panelClass:o}=this.options;if(!e)return;const i=t.querySelector(a(s)),r=t.querySelector(a(o));i.setAttribute("role","button"),i.setAttribute("aria-controls",r.id),i.setAttribute("aria-disabled",!1),i.setAttribute("aria-expanded",!1),r.setAttribute("role","region"),r.setAttribute("aria-labelledby",i.id)},updateARIA(t,e){let{ariaExpanded:s,ariaDisabled:o}=e;const{ariaEnabled:i,triggerClass:r}=this.options;if(!i)return;const l=t.querySelector(a(r));l.setAttribute("aria-expanded",s),l.setAttribute("aria-disabled",o)},removeARIA(t){const{ariaEnabled:e,triggerClass:s,panelClass:o}=this.options;if(!e)return;const i=t.querySelector(a(s)),r=t.querySelector(a(o));i.removeAttribute("role"),i.removeAttribute("aria-controls"),i.removeAttribute("aria-disabled"),i.removeAttribute("aria-expanded"),r.removeAttribute("role"),r.removeAttribute("aria-labelledby")},focus(t,e){t.preventDefault();const{triggerClass:s}=this.options;e.querySelector(a(s)).focus()},focusFirstElement(t){this.focus(t,this.firstElement),this.currFocusedIdx=0},focusLastElement(t){this.focus(t,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement(t){const e=this.currFocusedIdx+1;if(e>this.elements.length-1)return this.focusFirstElement(t);this.focus(t,this.elements[e]),this.currFocusedIdx=e},focusPrevElement(t){const e=this.currFocusedIdx-1;if(e<0)return this.focusLastElement(t);this.focus(t,this.elements[e]),this.currFocusedIdx=e},showElement(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const{panelClass:s,activeClass:o,collapse:i,beforeOpen:r}=this.options;e&&r(t);const l=t.querySelector(a(s)),A=l.scrollHeight;t.classList.add(o),requestAnimationFrame(()=>{requestAnimationFrame(()=>{l.style.height=e?"".concat(A,"px"):"auto"})}),this.updateARIA(t,{ariaExpanded:!0,ariaDisabled:!i})},closeElement(t){let e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const{panelClass:s,activeClass:o,beforeClose:i}=this.options,r=t.querySelector(a(s)),l=r.scrollHeight;t.classList.remove(o),e?(i(t),requestAnimationFrame(()=>{r.style.height="".concat(l,"px"),requestAnimationFrame(()=>{r.style.height=0})})):r.style.height=0,this.updateARIA(t,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement(t){const{activeClass:e,collapse:s}=this.options,o=t.classList.contains(e);if(!o||s)return o?this.closeElement(t):this.showElement(t)},closeElements(){const{activeClass:t,showMultiple:e}=this.options;e||this.elements.forEach((s,o)=>{s.classList.contains(t)&&o!==this.currFocusedIdx&&this.closeElement(s)})},handleClick(t){const e=t.currentTarget;this.elements.forEach((s,o)=>{s.contains(e)&&t.target.nodeName!=="A"&&(this.currFocusedIdx=o,this.closeElements(),this.focus(t,s),this.toggleElement(s))})},handleKeydown(t){switch(t.key){case"ArrowUp":return this.focusPrevElement(t);case"ArrowDown":return this.focusNextElement(t);case"Home":return this.focusFirstElement(t);case"End":return this.focusLastElement(t);default:return null}},handleFocus(t){const e=t.currentTarget,s=this.elements.find(o=>o.contains(e));this.currFocusedIdx=this.elements.indexOf(s)},handleTransitionEnd(t){if(t.stopPropagation(),t.propertyName!=="height")return;const{onOpen:e,onClose:s}=this.options,o=t.currentTarget,i=parseInt(o.style.height),r=this.elements.find(l=>l.contains(o));i>0?(o.style.height="auto",e(r)):s(r)}};this.attachEvents=()=>{if(d)return;const{triggerClass:t,panelClass:e}=n.options;n.handleClick=n.handleClick.bind(n),n.handleKeydown=n.handleKeydown.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.elements.forEach(s=>{const o=s.querySelector(a(t)),i=s.querySelector(a(e));o.addEventListener("click",n.handleClick),o.addEventListener("keydown",n.handleKeydown),o.addEventListener("focus",n.handleFocus),i.addEventListener("transitionend",n.handleTransitionEnd)}),d=!0},this.detachEvents=()=>{if(!d)return;const{triggerClass:t,panelClass:e}=n.options;n.elements.forEach(s=>{const o=s.querySelector(a(t)),i=s.querySelector(a(e));o.removeEventListener("click",n.handleClick),o.removeEventListener("keydown",n.handleKeydown),o.removeEventListener("focus",n.handleFocus),i.removeEventListener("transitionend",n.handleTransitionEnd)}),d=!1},this.toggle=t=>{const e=n.elements[t];e&&n.toggleElement(e)},this.open=t=>{const e=n.elements[t];e&&n.showElement(e)},this.openAll=()=>{const{activeClass:t,onOpen:e}=n.options;n.elements.forEach(s=>{s.classList.contains(t)||(n.showElement(s,!1),e(s))})},this.close=t=>{const e=n.elements[t];e&&n.closeElement(e)},this.closeAll=()=>{const{activeClass:t,onClose:e}=n.options;n.elements.forEach(s=>{s.classList.contains(t)&&(n.closeElement(s,!1),e(s))})},this.destroy=()=>{this.detachEvents(),this.openAll(),n.elements.forEach(t=>{n.removeIDs(t),n.removeARIA(t),n.setTransition(t,!0)}),d=!0},this.update=()=>{n.createDefinitions(),this.detachEvents(),this.attachEvents()};const a=t=>".".concat(CSS.escape(t));n.init()};c.exports!==void 0?c.exports=m:g.Accordion=m})(window)})(E);var b=E.exports;const y=v(b);export{y as A};
//# sourceMappingURL=vendor-9aP1-DBJ.js.map
