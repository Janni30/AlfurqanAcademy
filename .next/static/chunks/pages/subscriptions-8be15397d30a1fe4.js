(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5027],{1993:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/subscriptions",function(){return n(9880)}])},9665:function(e,t,n){"use strict";n.r(t);var a=n(5893);n(7294);let o=e=>{let{email:t,mongoId:n,deleteEmail:o,date:s}=e,r=new Date(s);return(0,a.jsxs)("tr",{className:"bg-white border-b text-left",children:[(0,a.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",children:t||"No Email"}),(0,a.jsx)("td",{className:"px-6 py-4 hidden sm:block",children:r.toDateString()}),(0,a.jsx)("td",{className:"px-6 py-4 cursor-pointer",onClick:()=>o(n),children:"x"})]})};t.default=o},9880:function(e,t,n){"use strict";n.r(t);var a=n(5893),o=n(9665),s=n(7066),r=n(7294),l=n(4173);let i=()=>{let[e,t]=(0,r.useState)([]),n=async()=>{let e=await s.Z.get("/api/email");t(e.data.emails)},i=async e=>{let t=await s.Z.delete("/api/email",{params:{id:e}});t.data.success?(l.Am.success(t.data.msg),n()):l.Am.error("Error")};return(0,r.useEffect)(()=>{n()},[]),(0,a.jsxs)("div",{className:"flex-1 pt-5 px-5 sm:pt-12 sm:pl-16",children:[(0,a.jsx)("h1",{children:"All Subscription"}),(0,a.jsx)("div",{className:"relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scollbar-hide",children:(0,a.jsxs)("table",{className:"w-full text-sm text-gray-500",children:[(0,a.jsx)("thead",{className:"text-xs text-left text-gray-700 uppercase bg-gray-50 ",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Email Subscription"}),(0,a.jsx)("th",{scope:"col",className:"hidden sm:block px-6 py-3",children:"Date"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),(0,a.jsx)("tbody",{children:e.map((e,t)=>(0,a.jsx)(o.default,{mongoId:e._id,deleteEmail:i,email:e.email,date:e.date},t))})]})})]})};t.default=i},4173:function(e,t,n){"use strict";n.d(t,{Ix:function(){return M},Am:function(){return C}});var a=n(7294),o=function(){for(var e,t,n=0,a="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var s=t.length;for(n=0;n<s;n++)t[n]&&(a=e(t[n]))&&(o&&(o+=" "),o+=a)}else for(a in t)t[a]&&(o&&(o+=" "),o+=a)}return o}(e))&&(a&&(a+=" "),a+=t);return a};let s=e=>"number"==typeof e&&!isNaN(e),r=e=>"string"==typeof e,l=e=>"function"==typeof e,i=e=>r(e)||l(e)?e:null,c=e=>(0,a.isValidElement)(e)||r(e)||l(e)||s(e);function d(e){let{enter:t,exit:n,appendPosition:o=!1,collapse:s=!0,collapseDuration:r=300}=e;return function(e){let{children:l,position:i,preventExitTransition:c,done:d,nodeRef:u,isIn:p,playToast:f}=e,m=o?`${t}--${i}`:t,g=o?`${n}--${i}`:n,y=(0,a.useRef)(0);return(0,a.useLayoutEffect)(()=>{let e=u.current,t=m.split(" "),n=a=>{a.target===u.current&&(f(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===y.current&&"animationcancel"!==a.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,a.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:a,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=a+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}(e,d,r):d()};p||(c?t():(y.current=1,e.className+=` ${g}`,e.addEventListener("animationend",t)))},[p]),a.createElement(a.Fragment,null,l)}}function u(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let p=new Map,f=[],m=new Set,g=e=>m.forEach(t=>t(e)),y=()=>p.size>0;function h(e,t){var n;if(t)return!(null==(n=p.get(t))||!n.isToastActive(e));let a=!1;return p.forEach(t=>{t.isToastActive(e)&&(a=!0)}),a}function v(e,t){c(e)&&(y()||f.push({content:e,options:t}),p.forEach(n=>{n.buildToast(e,t)}))}function E(e,t){p.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function b(e){let{delay:t,isRunning:n,closeToast:s,type:r="default",hide:i,className:c,style:d,controlledProgress:u,progress:p,rtl:f,isIn:m,theme:g}=e,y=i||u&&0===p,h={...d,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};u&&(h.transform=`scaleX(${p})`);let v=o("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":f}),E=l(c)?c({rtl:f,type:r,defaultClassName:v}):o(v,c);return a.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},a.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`}),a.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:h,[u&&p>=1?"onTransitionEnd":"onAnimationEnd"]:u&&p<1?null:()=>{m&&s()}}))}let T=1,_=()=>""+T++;function I(e,t){return v(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:t&&(r(t.toastId)||s(t.toastId))?t.toastId:_()}}function N(e){return(t,n)=>I(t,x(e,n))}function C(e,t){return I(e,x("default",t))}C.loading=(e,t)=>I(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),C.promise=function(e,t,n){let a,{pending:o,error:s,success:i}=t;o&&(a=r(o)?C.loading(o,n):C.loading(o.render,{...n,...o}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(e,t,o)=>{if(null==t)return void C.dismiss(a);let s={type:e,...c,...n,data:o},l=r(t)?{render:t}:t;return a?C.update(a,{...s,...l}):C(l.render,{...s,...l}),o},u=l(e)?e():e;return u.then(e=>d("success",i,e)).catch(e=>d("error",s,e)),u},C.success=N("success"),C.info=N("info"),C.error=N("error"),C.warning=N("warning"),C.warn=C.warning,C.dark=(e,t)=>I(e,x("default",{theme:"dark",...t})),C.dismiss=function(e){!function(e){var t;if(y()){if(null==e||r(t=e)||s(t))p.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){let t=p.get(e.containerId);t?t.removeToast(e.id):p.forEach(t=>{t.removeToast(e.id)})}}else f=f.filter(t=>null!=e&&t.options.toastId!==e)}(e)},C.clearWaitingQueue=function(e){void 0===e&&(e={}),p.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},C.isActive=h,C.update=function(e,t){void 0===t&&(t={});let n=((e,t)=>{var n;let{containerId:a}=t;return null==(n=p.get(a||1))?void 0:n.toasts.get(e)})(e,t);if(n){let{props:a,content:o}=n,s={delay:100,...a,...t,toastId:t.toastId||e,updateId:_()};s.toastId!==e&&(s.staleId=e);let r=s.render||o;delete s.render,I(r,s)}},C.done=e=>{C.update(e,{progress:1})},C.onChange=function(e){return m.add(e),()=>{m.delete(e)}},C.play=e=>E(!0,e),C.pause=e=>E(!1,e);let w="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,L=e=>{let{theme:t,type:n,isLoading:o,...s}=e;return a.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},k={info:function(e){return a.createElement(L,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return a.createElement(L,{...e},a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return a.createElement(L,{...e},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return a.createElement(L,{...e},a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}},P=e=>{let{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:r,playToast:i}=function(e){var t,n;let[o,s]=(0,a.useState)(!1),[r,l]=(0,a.useState)(!1),i=(0,a.useRef)(null),c=(0,a.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:f,onClick:m,closeOnClick:g}=e;function y(){s(!0)}function h(){s(!1)}function v(t){let n=i.current;c.canDrag&&n&&(c.didMove=!0,o&&h(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),n.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,n.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function E(){document.removeEventListener("pointermove",v),document.removeEventListener("pointerup",E);let t=i.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return l(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(n=p.get((t={id:e.toastId,containerId:e.containerId,fn:s}).containerId||1))||n.setToggle(t.id,t.fn),(0,a.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||h(),window.addEventListener("focus",y),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",h)}},[e.pauseOnFocusLoss]);let b={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",v),document.addEventListener("pointerup",E);let n=i.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:n,bottom:a,left:o,right:s}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=o&&t.clientX<=s&&t.clientY>=n&&t.clientY<=a?h():y()}};return d&&u&&(b.onMouseEnter=h,e.stacked||(b.onMouseLeave=y)),g&&(b.onClick=e=>{m&&m(e),c.canCloseOnClick&&f()}),{playToast:y,pauseToast:h,isRunning:o,preventExitTransition:r,toastRef:i,eventHandlers:b}}(e),{closeButton:c,children:d,autoClose:u,onClick:f,type:m,hideProgressBar:g,closeToast:y,transition:h,position:v,className:E,style:T,bodyClassName:_,bodyStyle:I,progressClassName:x,progressStyle:N,updateId:C,role:w,progress:L,rtl:P,toastId:$,deleteToast:A,isIn:D,isLoading:M,closeOnClick:O,theme:S}=e,j=o("Toastify__toast",`Toastify__toast-theme--${S}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":O}),B=l(E)?E({rtl:P,position:v,type:m,defaultClassName:j}):o(j,E),R=function(e){let{theme:t,type:n,isLoading:o,icon:s}=e,r=null,i={theme:t,type:n};return!1===s||(l(s)?r=s({...i,isLoading:o}):(0,a.isValidElement)(s)?r=(0,a.cloneElement)(s,i):o?r=k.spinner():n in k&&(r=k[n](i))),r}(e),z=!!L||!u,H={closeToast:y,type:m,theme:S},X=null;return!1===c||(X=l(c)?c(H):(0,a.isValidElement)(c)?(0,a.cloneElement)(c,H):function(e){let{closeToast:t,theme:n,ariaLabel:o="close"}=e;return a.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":o},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(H)),a.createElement(h,{isIn:D,done:A,position:v,preventExitTransition:n,nodeRef:s,playToast:i},a.createElement("div",{id:$,onClick:f,"data-in":D,className:B,...r,style:T,ref:s},a.createElement("div",{...D&&{role:w},className:l(_)?_({type:m}):o("Toastify__toast-body",_),style:I},null!=R&&a.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},R),a.createElement("div",null,d)),X,a.createElement(b,{...C&&!z?{key:`pb-${C}`}:{},rtl:P,theme:S,delay:u,isRunning:t,isIn:D,closeToast:y,hide:g,type:m,style:N,className:x,controlledProgress:z,progress:L||0})))},$=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},A=d($("bounce",!0)),D=(d($("slide",!0)),d($("zoom")),d($("flip")),{position:"top-right",transition:A,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function M(e){let t={...D,...e},n=e.stacked,[d,m]=(0,a.useState)(!0),y=(0,a.useRef)(null),{getToastToRender:E,isToastActive:b,count:T}=function(e){let{subscribe:t,getSnapshot:n,setProps:o}=(0,a.useRef)(function(e){let t=e.containerId||1;return{subscribe(n){let o=function(e,t,n){let o=1,d=0,p=[],f=[],m=[],g=t,y=new Map,h=new Set,v=()=>{m=Array.from(y.values()),h.forEach(e=>e())},E=e=>{f=null==e?[]:f.filter(t=>t!==e),v()},b=e=>{let{toastId:t,onOpen:o,updateId:s,children:r}=e.props,i=null==s;e.staleId&&y.delete(e.staleId),y.set(t,e),f=[...f,e.props.toastId].filter(t=>t!==e.staleId),v(),n(u(e,i?"added":"updated")),i&&l(o)&&o((0,a.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{y.forEach(n=>{null!=t&&t!==n.props.toastId||l(n.toggle)&&n.toggle(e)})},removeToast:E,toasts:y,clearQueue:()=>{d-=p.length,p=[]},buildToast:(t,f)=>{var m,h;if((t=>{let{containerId:n,toastId:a,updateId:o}=t,s=y.has(a)&&null==o;return(n?n!==e:1!==e)||s})(f))return;let{toastId:T,updateId:_,data:I,staleId:x,delay:N}=f,C=()=>{E(T)},w=null==_;w&&d++;let L={...g,style:g.toastStyle,key:o++,...Object.fromEntries(Object.entries(f).filter(e=>{let[t,n]=e;return null!=n})),toastId:T,updateId:_,data:I,closeToast:C,isIn:!1,className:i(f.className||g.toastClassName),bodyClassName:i(f.bodyClassName||g.bodyClassName),progressClassName:i(f.progressClassName||g.progressClassName),autoClose:!f.isLoading&&(m=f.autoClose,h=g.autoClose,!1===m||s(m)&&m>0?m:h),deleteToast(){let e=y.get(T),{onClose:t,children:o}=e.props;l(t)&&t((0,a.isValidElement)(o)&&o.props),n(u(e,"removed")),y.delete(T),--d<0&&(d=0),p.length>0?b(p.shift()):v()}};L.closeButton=g.closeButton,!1===f.closeButton||c(f.closeButton)?L.closeButton=f.closeButton:!0===f.closeButton&&(L.closeButton=!c(g.closeButton)||g.closeButton);let k=t;(0,a.isValidElement)(t)&&!r(t.type)?k=(0,a.cloneElement)(t,{closeToast:C,toastProps:L,data:I}):l(t)&&(k=t({closeToast:C,toastProps:L,data:I}));let P={content:k,props:L,staleId:x};g.limit&&g.limit>0&&d>g.limit&&w?p.push(P):s(N)?setTimeout(()=>{b(P)},N):b(P)},setProps(e){g=e},setToggle:(e,t)=>{y.get(e).toggle=t},isToastActive:e=>f.some(t=>t===e),getSnapshot:()=>m}}(t,e,g);p.set(t,o);let d=o.observe(n);return f.forEach(e=>v(e.content,e.options)),f=[],()=>{d(),p.delete(t)}},setProps(e){var n;null==(n=p.get(t))||n.setProps(e)},getSnapshot(){var e;return null==(e=p.get(t))?void 0:e.getSnapshot()}}}(e)).current;o(e);let d=(0,a.useSyncExternalStore)(t,n,n);return{getToastToRender:function(t){if(!d)return[];let n=new Map;return e.newestOnTop&&d.reverse(),d.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},isToastActive:h,count:null==d?void 0:d.length}}(t),{className:_,style:I,rtl:x,containerId:N}=t;function L(){n&&(m(!0),C.play())}return w(()=>{if(n){var e;let n=y.current.querySelectorAll('[data-in="true"]'),a=null==(e=t.position)?void 0:e.includes("top"),o=0,s=0;Array.from(n).reverse().forEach((e,t)=>{let n=e;n.classList.add("Toastify__toast--stacked"),t>0&&(n.dataset.collapsed=`${d}`),n.dataset.pos||(n.dataset.pos=a?"top":"bot");let r=o*(d?.2:1)+(d?0:12*t);n.style.setProperty("--y",`${a?r:-1*r}px`),n.style.setProperty("--g","12"),n.style.setProperty("--s",""+(1-(d?s:0))),o+=n.offsetHeight,s+=.025})}},[d,T,n]),a.createElement("div",{ref:y,className:"Toastify",id:N,onMouseEnter:()=>{n&&(m(!1),C.pause())},onMouseLeave:L},E((e,t)=>{let s=t.length?{...I}:{...I,pointerEvents:"none"};return a.createElement("div",{className:function(e){let t=o("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":x});return l(_)?_({position:e,rtl:x,defaultClassName:t}):o(t,i(_))}(e),style:s,key:`container-${e}`},t.map(e=>{let{content:t,props:o}=e;return a.createElement(P,{...o,stacked:n,collapseAll:L,isIn:b(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},t)}))}))}}},function(e){e.O(0,[7066,9774,2888,179],function(){return e(e.s=1993)}),_N_E=e.O()}]);