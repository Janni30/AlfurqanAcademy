(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9939],{4223:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return n(1778)}])},1778:function(t,e,n){"use strict";n.r(e);var i=n(5893);n(7294);var r=n(3212),s=n(2698),o=n(8722),l=n.n(o);let a=()=>{let t=[{name:"Starter",price:9,features:["✔","✔","✔","X","X","X"]},{name:"Business",price:21,features:["✔","✔","✔","✔","✔","X"]},{name:"Professional",price:42,features:["✔","✔","✔","✔","✔","✔"]},{name:"Premium",price:51,features:["✔","✔","✔","✔","✔","✔"]}];return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{pageName:"Pricing"}),(0,i.jsx)("div",{className:l().pricingContainer,children:(0,i.jsxs)("div",{className:l().table,children:[(0,i.jsxs)("div",{className:"".concat(l().row," ").concat(l().headerRow),children:[(0,i.jsx)("div",{className:l().cell,children:"Features"}),t.map(t=>(0,i.jsxs)("div",{className:l().cell,children:[(0,i.jsxs)("div",{className:l().polygon,children:[(0,i.jsx)("div",{className:"polygon",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",width:"190",height:"100",preserveAspectRatio:"none",children:(0,i.jsx)("path",{d:"M 100 10 Q 15 90 50 180 Q 100 160 150 180 Q 185 90 100 10 Z",fill:"#161d25"})})}),(0,i.jsx)("h2",{className:l().planName,style:{marginBottom:"22px"},children:t.name})]}),(0,i.jsx)("div",{className:l().round,children:(0,i.jsxs)("p",{className:l().planPrice,children:["$",t.price,(0,i.jsx)("span",{className:l().perMonth,children:"/hour"})]})})]}))]}),["Put any text here","Another text can be here","Some Description","Column Content","Put any text here","Another text can be here"].map((e,n)=>(0,i.jsxs)("div",{className:l().row,children:[(0,i.jsx)("div",{className:l().cell,style:{color:"black"},children:e}),t.map((t,e)=>(0,i.jsx)("div",{className:l().cell,children:t.features[n]},e))]},n))]})})]})};e.default=a},3212:function(t,e,n){"use strict";var i=n(5893),r=n(1664),s=n.n(r);let o=t=>{let{pageName:e}=t;return(0,i.jsx)("div",{className:"breadcumb-area d-flex align-items-center",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row d-flex align-items-center",children:[(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsx)("div",{className:"breadcumb-content",children:(0,i.jsxs)("h1",{children:[" ",e," "]})})}),(0,i.jsx)("div",{className:"britcam-shape",children:(0,i.jsx)("div",{className:"breadcumb-content upp",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)(s(),{href:"/",children:"Home"})}),(0,i.jsxs)("li",{children:[" ",e," "]})]})})})]})})})};e.Z=o},8722:function(t){t.exports={pricingContainer:"PricingTable_pricingContainer__LYiBu",title:"PricingTable_title__NTZ_R",round:"PricingTable_round__QIvoX",polygon:"PricingTable_polygon__D4zcK",subtitle:"PricingTable_subtitle__GbyWD",table:"PricingTable_table__4nEcP",row:"PricingTable_row__3y4UL",cell:"PricingTable_cell__tVE6l",headerRow:"PricingTable_headerRow__L1zBb",planName:"PricingTable_planName__Y9VWl",planPrice:"PricingTable_planPrice__aleVK",perMonth:"PricingTable_perMonth__z9Bz4",checkmark:"PricingTable_checkmark__EKEm8"}},5541:function(){(function(){var t,e,n,i,r,s=function(t,e){return function(){return t.apply(e,arguments)}},o=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return -1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var r;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(r=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(r=document.createEventObject()).eventType=t:r.eventName=t,r},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,r;for(r=this.keys,e=n=0,i=r.length;n<i;e=++n)if(r[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,r,s;for(s=this.keys,n=i=0,r=s.length;i<r;n=++i)if(s[n]===t){this.values[n]=e;return}return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),r.test(e)&&e.replace(r,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},r=/(\-([a-z]){1})/g,this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=s(this.scrollCallback,this),this.scrollHandler=s(this.scrollHandler,this),this.resetAnimation=s(this.resetAnimation,this),this.start=s(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,i,r,s;if(this.stopped=!1,this.boxes=(function(){var t,n,i,r;for(t=0,i=this.element.querySelectorAll("."+this.config.boxClass),r=[],n=i.length;t<n;t++)e=i[t],r.push(e);return r}).call(this),this.all=(function(){var t,n,i,r;for(t=0,i=this.boxes,r=[],n=i.length;t<n;t++)e=i[t],r.push(e);return r}).call(this),this.boxes.length){if(this.disabled())this.resetStyle();else for(n=0,i=(r=this.boxes).length;n<i;n++)e=r[n],this.applyStyle(e,!0)}if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((s=this,function(t){var e,n,i,r,o;for(e=0,o=[],n=t.length;e<n;e++)r=t[e],o.push((function(){var t,e,n,s;for(t=0,n=r.addedNodes||[],s=[],e=n.length;t<e;t++)i=n[t],s.push(this.doSync(i));return s}).call(s));return o})).observe(document.body,{childList:!0,subtree:!0})},r.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},r.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},r.prototype.doSync=function(t){var e,n,i,r,s;if(null==t&&(t=this.element),1===t.nodeType){for(n=0,r=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass),s=[],i=r.length;n<i;n++)e=r[n],0>o.call(this.all,e)?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),s.push(this.scrolled=!0)):s.push(void 0);return s}},r.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},r.prototype.applyStyle=function(t,e){var n,i,r,s;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration"),this.animate((s=this,function(){return s.customStyle(t,e,i,n,r)}))},r.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},r.prototype.resetStyle=function(){var t,e,n,i,r;for(e=0,i=this.boxes,r=[],n=i.length;e<n;e++)t=i[e],r.push(t.style.visibility="visible");return r},r.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},r.prototype.customStyle=function(t,e,n,i,r){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),r&&this.vendorSet(t.style,{animationIterationCount:r}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,i,r,s;for(n in i=[],e)r=e[n],t[""+n]=r,i.push((function(){var e,i,o,l;for(e=0,o=this.vendors,l=[],i=o.length;e<i;e++)s=o[e],l.push(t[""+s+n.charAt(0).toUpperCase()+n.substr(1)]=r);return l}).call(this));return i},r.prototype.vendorCSS=function(t,e){var n,r,s,o,l,a;for(n=0,o=(l=i(t)).getPropertyCSSValue(e),r=(s=this.vendors).length;n<r;n++)a=s[n],o=o||l.getPropertyCSSValue("-"+a+"-"+e);return o},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var e,n,i,r;for(e=0,i=this.boxes,r=[],n=i.length;e<n;e++)if(t=i[e]){if(this.isVisible(t)){this.show(t);continue}r.push(t)}return r}).call(this),!(this.boxes.length||this.config.live)))return this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r.prototype.isVisible=function(t){var e,n,i,r,s;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=(s=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=r&&e>=s},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this)}},function(t){t.O(0,[5675,1664,2698,9774,2888,179],function(){return t(t.s=4223)}),_N_E=t.O()}]);