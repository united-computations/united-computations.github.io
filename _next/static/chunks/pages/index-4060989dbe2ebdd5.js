(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2724)}])},2724:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return al}});var d,e=c(5893),f=c(9008),g=c.n(f);function h(){return(0,e.jsxs)("header",{className:"container",children:[(0,e.jsxs)("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10",children:["United Computations",(0,e.jsx)("span",{className:"animate-blink",children:"_"})]}),(0,e.jsxs)("div",{className:"flex flex-col gap-3 mb-9 mx-auto",children:[(0,e.jsx)(i,{children:"United Computations is one of the largest and longest running CS clubs at Gunn."}),(0,e.jsx)(i,{children:"Through regular lunch meetings, ___, we aim to spread interest in computer science and create a passionate community of programmers."}),(0,e.jsx)(i,{children:"Join our community Wednesdays at lunch in N-215 and ___."})]}),(0,e.jsxs)("div",{className:"flex flex-col md:flex-row justify-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-tertiary mb-12",children:[(0,e.jsxs)(j,{children:[(0,e.jsx)("p",{className:"text-sm text-secondary",children:"Room:"}),(0,e.jsx)("strong",{className:"text-2xl",children:"N-215"})]}),(0,e.jsxs)(j,{children:[(0,e.jsx)("p",{className:"text-sm text-secondary",children:"Day:"}),(0,e.jsx)("strong",{className:"text-2xl",children:"Wednesday"})]}),(0,e.jsxs)(j,{children:[(0,e.jsx)("p",{className:"text-sm text-secondary",children:"Time:"}),(0,e.jsx)("strong",{className:"text-2xl",children:"Lunch"})]})]})]})}function i(a){return(0,e.jsxs)("p",{className:"text-lg text-center font-mono flex gap-3 items-center justify-center",children:[(0,e.jsxs)("code",{className:"hidden md:block text-gray-300/40",children:["<",(0,e.jsx)("span",{className:"text-[#7ee787]",children:"p"}),">"]}),(0,e.jsx)("span",{className:"opacity-70",children:a.children}),(0,e.jsxs)("code",{className:"hidden md:block text-gray-300/40",children:["<","/",(0,e.jsx)("span",{className:"text-[#7ee787]",children:"p"}),">"]})]})}function j(a){return(0,e.jsx)("div",{className:"flex flex-col py-4 md:py-0 md:px-6 justify-center",children:a.children})}var k=c(7294);function l(a,b,...c){if(a in b){let d=b[a];return"function"==typeof d?d(...c):d}let e=Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,l),e}var m,n,o=((m=o||{})[m.None=0]="None",m[m.RenderStrategy=1]="RenderStrategy",m[m.Static=2]="Static",m),p=((n=p||{})[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden",n);function q({ourProps:a,theirProps:b,slot:c,defaultTag:d,features:e,visible:f=!0,name:g}){let h=t(b,a);if(f)return r(h,c,d,g);let i=null!=e?e:0;if(2&i){let{static:j=!1,...k}=h;if(j)return r(k,c,d,g)}if(1&i){let{unmount:m=!0,...n}=h;return l(m?0:1,{0:()=>null,1:()=>r({...n,hidden:!0,style:{display:"none"}},c,d,g)})}return r(h,c,d,g)}function r(a,b={},c,d){let{as:e=c,children:f,refName:g="ref",...h}=w(a,["unmount","static"]),i=void 0!==a.ref?{[g]:a.ref}:{},j="function"==typeof f?f(b):f;h.className&&"function"==typeof h.className&&(h.className=h.className(b));let l={};if(b){let m=!1,n=[];for(let[o,p]of Object.entries(b))"boolean"==typeof p&&(m=!0),!0===p&&n.push(o);m&&(l["data-headlessui-state"]=n.join(" "))}if(e===k.Fragment&&Object.keys(v(h)).length>0){if(!(0,k.isValidElement)(j)||Array.isArray(j)&&j.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${d} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(h).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));return(0,k.cloneElement)(j,Object.assign({},t(j.props,v(w(h,["ref"]))),l,i,s(j.ref,i.ref)))}return(0,k.createElement)(e,Object.assign({},w(h,["ref"]),e!==k.Fragment&&i,e!==k.Fragment&&l),j)}function s(...a){return{ref:a.every(a=>null==a)?void 0:b=>{for(let c of a)null!=c&&("function"==typeof c?c(b):c.current=b)}}}function t(...a){if(0===a.length)return{};if(1===a.length)return a[0];let b={},c={};for(let d of a)for(let e in d)e.startsWith("on")&&"function"==typeof d[e]?(null!=c[e]||(c[e]=[]),c[e].push(d[e])):b[e]=d[e];if(b.disabled||b["aria-disabled"])return Object.assign(b,Object.fromEntries(Object.keys(c).map(a=>[a,void 0])));for(let f in c)Object.assign(b,{[f](a,...b){let d=c[f];for(let e of d){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;e(a,...b)}}});return b}function u(a){var b;return Object.assign((0,k.forwardRef)(a),{displayName:null!=(b=a.displayName)?b:a.name})}function v(a){let b=Object.assign({},a);for(let c in b)void 0===b[c]&&delete b[c];return b}function w(a,b=[]){let c=Object.assign({},a);for(let d of b)d in c&&delete c[d];return c}let x=(0,k.createContext)(null);x.displayName="OpenClosedContext";var y=((N=y||{})[N.Open=0]="Open",N[N.Closed=1]="Closed",N);function z(){return(0,k.useContext)(x)}function A({value:a,children:b}){return k.createElement(x.Provider,{value:a},b)}let B="undefined"==typeof window||"undefined"==typeof document,C=B?k.useEffect:k.useLayoutEffect;function D(){let a=(0,k.useRef)(!1);return C(()=>(a.current=!0,()=>{a.current=!1}),[]),a}function E(a){let b=(0,k.useRef)(a);return C(()=>{b.current=a},[a]),b}let F={serverHandoffComplete:!1};function G(){let[a,b]=(0,k.useState)(F.serverHandoffComplete);return(0,k.useEffect)(()=>{!0!==a&&b(!0)},[a]),(0,k.useEffect)(()=>{!1===F.serverHandoffComplete&&(F.serverHandoffComplete=!0)},[]),a}let H=function(a){let b=E(a);return k.useCallback((...a)=>b.current(...a),[b])},I=Symbol();function J(...a){let b=(0,k.useRef)(a);(0,k.useEffect)(()=>{b.current=a},[a]);let c=H(a=>{for(let c of b.current)null!=c&&("function"==typeof c?c(a):c.current=a)});return a.every(a=>null==a||(null==a?void 0:a[I]))?void 0:c}function K(){let a=[],b=[],c={enqueue(a){b.push(a)},addEventListener:(a,b,d,e)=>(a.addEventListener(b,d,e),c.add(()=>a.removeEventListener(b,d,e))),requestAnimationFrame(...a){let b=requestAnimationFrame(...a);return c.add(()=>cancelAnimationFrame(b))},nextFrame:(...a)=>c.requestAnimationFrame(()=>c.requestAnimationFrame(...a)),setTimeout(...a){let b=setTimeout(...a);return c.add(()=>clearTimeout(b))},microTask(...a){let b={current:!0};return function(a){"function"==typeof queueMicrotask?queueMicrotask(a):Promise.resolve().then(a).catch(a=>setTimeout(()=>{throw a}))}(()=>{b.current&&a[0]()}),c.add(()=>{b.current=!1})},add:b=>(a.push(b),()=>{let c=a.indexOf(b);if(c>=0){let[d]=a.splice(c,1);d()}}),dispose(){for(let b of a.splice(0))b()},async workQueue(){for(let a of b.splice(0))await a()}};return c}function L(a,...b){a&&b.length>0&&a.classList.add(...b)}function M(a,...b){a&&b.length>0&&a.classList.remove(...b)}var N,O,P=((O=P||{}).Ended="ended",O.Cancelled="cancelled",O);function Q(){let[a]=(0,k.useState)(K);return(0,k.useEffect)(()=>()=>a.dispose(),[a]),a}function R(a=""){return a.split(" ").filter(a=>a.trim().length>1)}let S=(0,k.createContext)(null);S.displayName="TransitionContext";var T=((d=T||{}).Visible="visible",d.Hidden="hidden",d);let U=(0,k.createContext)(null);function V(a){return"children"in a?V(a.children):a.current.filter(({el:a})=>null!==a.current).filter(({state:a})=>"visible"===a).length>0}function W(a,b){let c=E(a),d=(0,k.useRef)([]),e=D(),f=Q(),g=H((a,b=p.Hidden)=>{let g=d.current.findIndex(({el:b})=>b===a);-1!==g&&(l(b,{[p.Unmount](){d.current.splice(g,1)},[p.Hidden](){d.current[g].state="hidden"}}),f.microTask(()=>{var a;!V(d)&&e.current&&(null==(a=c.current)||a.call(c))}))}),h=H(a=>{let b=d.current.find(({el:b})=>b===a);return b?"visible"!==b.state&&(b.state="visible"):d.current.push({el:a,state:"visible"}),()=>g(a,p.Unmount)}),i=(0,k.useRef)([]),j=(0,k.useRef)(Promise.resolve()),m=(0,k.useRef)({enter:[],leave:[],idle:[]}),n=H((a,c,d)=>{i.current.splice(0),b&&(b.chains.current[c]=b.chains.current[c].filter(([b])=>b!==a)),null==b||b.chains.current[c].push([a,new Promise(a=>{i.current.push(a)})]),null==b||b.chains.current[c].push([a,new Promise(a=>{Promise.all(m.current[c].map(([a,b])=>b)).then(()=>a())})]),"enter"===c?j.current=j.current.then(()=>null==b?void 0:b.wait.current).then(()=>d(c)):d(c)}),o=H((a,b,c)=>{Promise.all(m.current[b].splice(0).map(([a,b])=>b)).then(()=>{var a;null==(a=i.current.shift())||a()}).then(()=>c(b))});return(0,k.useMemo)(()=>({children:d,register:h,unregister:g,onStart:n,onStop:o,wait:j,chains:m}),[h,g,d,n,o,m,j])}function X(){}U.displayName="NestingContext";let Y=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Z(a){var b;let c={};for(let d of Y)c[d]=null!=(b=a[d])?b:X;return c}let $=o.RenderStrategy,_=u(function(a,b){var c;let{beforeEnter:d,afterEnter:e,beforeLeave:f,afterLeave:g,enter:h,enterFrom:i,enterTo:j,entered:m,leave:n,leaveFrom:o,leaveTo:r,...s}=a,t=(0,k.useRef)(null),u=J(t,b),v=s.unmount?p.Unmount:p.Hidden,{show:w,appear:x,initial:z}=function(){let a=(0,k.useContext)(S);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),[B,F]=(0,k.useState)(w?"visible":"hidden"),I=function(){let a=(0,k.useContext)(U);if(null===a)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return a}(),{register:N,unregister:O}=I,T=(0,k.useRef)(null);(0,k.useEffect)(()=>N(t),[N,t]),(0,k.useEffect)(()=>{if(v===p.Hidden&&t.current){if(w&&"visible"!==B){F("visible");return}return l(B,{hidden:()=>O(t),visible:()=>N(t)})}},[B,t,N,O,w,v]);let X,Y=E({enter:R(h),enterFrom:R(i),enterTo:R(j),entered:R(m),leave:R(n),leaveFrom:R(o),leaveTo:R(r)}),_=(c={beforeEnter:d,afterEnter:e,beforeLeave:f,afterLeave:g},X=(0,k.useRef)(Z(c)),(0,k.useEffect)(()=>{X.current=Z(c)},[c]),X),aa=G();(0,k.useEffect)(()=>{if(aa&&"visible"===B&&null===t.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,B,aa]);let ab=z&&!x,ac=!aa||ab||T.current===w?"idle":w?"enter":"leave",ad=H(a=>l(a,{enter:()=>_.current.beforeEnter(),leave:()=>_.current.beforeLeave(),idle(){}})),ae=H(a=>l(a,{enter:()=>_.current.afterEnter(),leave:()=>_.current.afterLeave(),idle(){}})),af=W(()=>{F("hidden"),O(t)},I);return function({container:a,direction:b,classes:c,onStart:d,onStop:e}){let f=D(),g=Q(),h=E(b);C(()=>{let b=K();g.add(b.dispose);let i=a.current;if(i&&"idle"!==h.current&&f.current)return b.dispose(),d.current(h.current),b.add(function(a,b,c,d){var e;let f,g=c?"enter":"leave",h=K(),i=void 0!==d?(e=d,f={called:!1},(...a)=>{if(!f.called)return f.called=!0,e(...a)}):()=>{};"enter"===g&&(a.removeAttribute("hidden"),a.style.display="");let j=l(g,{enter:()=>b.enter,leave:()=>b.leave}),k=l(g,{enter:()=>b.enterTo,leave:()=>b.leaveTo}),m=l(g,{enter:()=>b.enterFrom,leave:()=>b.leaveFrom});return M(a,...b.enter,...b.enterTo,...b.enterFrom,...b.leave,...b.leaveFrom,...b.leaveTo,...b.entered),L(a,...j,...m),h.nextFrame(()=>{M(a,...m),L(a,...k),function(a,b){let c=K();if(!a)return c.dispose;let{transitionDuration:d,transitionDelay:e}=getComputedStyle(a),[f,g]=[d,e].map(a=>{let[b=0]=a.split(",").filter(Boolean).map(a=>a.includes("ms")?parseFloat(a):1e3*parseFloat(a)).sort((a,b)=>b-a);return b});if(f+g!==0){let h=[];h.push(c.addEventListener(a,"transitionrun",d=>{d.target===d.currentTarget&&(h.splice(0).forEach(a=>a()),h.push(c.addEventListener(a,"transitionend",a=>{a.target===a.currentTarget&&(b("ended"),h.splice(0).forEach(a=>a()))}),c.addEventListener(a,"transitioncancel",a=>{a.target===a.currentTarget&&(b("cancelled"),h.splice(0).forEach(a=>a()))})))}))}else b("ended");c.add(()=>b("cancelled")),c.dispose}(a,c=>("ended"===c&&(M(a,...j),L(a,...b.entered)),i(c)))}),h.dispose}(i,c.current,"enter"===h.current,a=>{b.dispose(),l(a,{[P.Ended](){e.current(h.current)},[P.Cancelled](){}})})),b.dispose},[b])}({container:t,classes:Y,direction:ac,onStart:E(a=>{af.onStart(t,a,ad)}),onStop:E(a=>{af.onStop(t,a,ae),"leave"!==a||V(af)||(F("hidden"),O(t))})}),(0,k.useEffect)(()=>{ab&&(v===p.Hidden?T.current=null:T.current=w)},[w,ab,B]),k.createElement(U.Provider,{value:af},k.createElement(A,{value:l(B,{visible:y.Open,hidden:y.Closed})},q({ourProps:{ref:u},theirProps:s,defaultTag:"div",features:$,visible:"visible"===B,name:"Transition.Child"})))}),aa=u(function(a,b){let{show:c,appear:d=!1,unmount:e,...f}=a,g=(0,k.useRef)(null),h=J(g,b);G();let i=z();if(void 0===c&&null!==i&&(c=l(i,{[y.Open]:!0,[y.Closed]:!1})),![!0,!1].includes(c))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[j,m]=(0,k.useState)(c?"visible":"hidden"),n=W(()=>{m("hidden")}),[o,p]=(0,k.useState)(!0),r=(0,k.useRef)([c]);C(()=>{!1!==o&&r.current[r.current.length-1]!==c&&(r.current.push(c),p(!1))},[r,c]);let s=(0,k.useMemo)(()=>({show:c,appear:d,initial:o}),[c,d,o]);(0,k.useEffect)(()=>{if(c)m("visible");else if(V(n)){let a=g.current;if(!a)return;let b=a.getBoundingClientRect();0===b.x&&0===b.y&&0===b.width&&0===b.height&&m("hidden")}else m("hidden")},[c,n]);let t={unmount:e};return k.createElement(U.Provider,{value:n},k.createElement(S.Provider,{value:s},q({ourProps:{...t,as:k.Fragment,children:k.createElement(_,{ref:h,...t,...f})},theirProps:{},defaultTag:k.Fragment,features:$,visible:"visible"===j,name:"Transition"})))}),ab=u(function(a,b){let c=null!==(0,k.useContext)(S),d=null!==z();return k.createElement(k.Fragment,null,!c&&d?k.createElement(aa,{ref:b,...a}):k.createElement(_,{ref:b,...a}))}),ac=Object.assign(aa,{Child:ab,Root:aa});function ad(a){return(0,e.jsx)("section",{className:"py-16"+(a.secondary?" dark:bg-dark":""),children:(0,e.jsx)("div",{className:"container",children:a.children})})}function ae(){var a=(0,k.useState)(0),b=a[0],c=a[1],d=["/ghacks/ghacks-1.png","/ghacks/ghacks-2.png","/ghacks/ghacks-3.png"];return(0,k.useEffect)(function(){var a=setInterval(function(){return c(function(a){return(a+1)%d.length})},8e3);return function(){return clearInterval(a)}},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("section",{className:"flex gap-3 px-20 py-8 dark:bg-grape overflow-x-auto snap-x scrollbar-thin",children:[(0,e.jsx)(ag,{name:"8.0",href:"https://www.gunnhacks.com/",children:"February 5-6, 2022"}),(0,e.jsx)(ag,{name:"7.0",href:"https://7.0.gunnhacks.com/",children:"February 12-14, 2021"}),(0,e.jsx)(ag,{name:"6.0",href:"https://6.0.gunnhacks.com/",children:"Cancelled"}),(0,e.jsx)(ag,{name:"4.0",href:"https://4.0.gunnhacks.com/",children:"October 27-28, 2017"}),(0,e.jsx)(ag,{name:"3.0",href:"https://3.0.gunnhacks.com/",children:"November 11-12, 2016"}),(0,e.jsx)(ag,{name:"2.0",href:"https://2.0.gunnhacks.com/",children:"March 25-26, 2016"}),(0,e.jsx)(ag,{name:"1.0",href:"https://1.0.gunnhacks.com/",children:"March 14-15, 2015"})]}),(0,e.jsx)(ad,{secondary:!0,children:(0,e.jsxs)("div",{className:"flex gap-10",children:[(0,e.jsx)("div",{className:"relative rounded shadow-xl overflow-hidden w-[28rem] h-[19rem] flex-none",children:d.map(function(a,c){return(0,e.jsx)(ah,{src:a,show:b===c},a)})}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{className:"font-bold text-4xl mb-4 underline underline-offset-4 decoration-4 decoration-red-500",children:"GunnHacks"}),(0,e.jsx)("p",{className:"mb-6",children:"Make, Build, Create & Learn at Gunn's annual hackathon, GunnHacks, organized by United Computations! Every year, hundreds of students across the bay create projects, attend workshops, participate in activities, and compete for prizes our in-person, 24-hour hackathon."}),(0,e.jsxs)("div",{className:"flex gap-4",children:[(0,e.jsx)(af,{href:"https://www.gunnhacks.com",children:"Go to website"}),(0,e.jsxs)(af,{href:"...",children:[" ","Register for organizer"]})]})]})]})})]})}function af(a){return(0,e.jsx)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:"block py-2 px-4 rounded-md font-medium bg-gradient-to-br from-rose-500 via-red-500 to-pink-500 shadow-md hover:shadow-lg !shadow-red-700 transition-shadow duration-200 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9]",children:a.children})}function ag(a){return(0,e.jsxs)("a",{className:"snap-center flex-none rounded-md bg-midnight shadow-lg overflow-hidden border dark:border-tertiary dark:hover:border-secondary transition duration-200 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9]",href:a.href,target:"_blank",rel:"noopener noreferrer",children:[(0,e.jsx)("img",{src:"/ghacks/".concat(a.name,".png"),alt:a.name,className:"w-72 h-44 object-cover"}),(0,e.jsxs)("div",{className:"px-5 py-4 flex gap-3 items-center",children:[(0,e.jsx)("h5",{className:"font-mono font-medium",children:a.name}),(0,e.jsx)("p",{className:"text-sm text-secondary",children:a.children})]})]})}function ah(a){return(0,e.jsx)(ac,{as:k.Fragment,show:a.show,leave:"transition-opacity duration-500 z-10",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,e.jsx)("img",{src:a.src,alt:"GunnHacks",className:"absolute inset-0 w-full h-full object-cover object-center"})})}function ai(){return(0,e.jsxs)(ad,{children:[(0,e.jsx)("h2",{className:"font-bold text-4xl mb-6",children:"Meet our officers:"}),(0,e.jsxs)("div",{className:"max-w-3xl mx-auto divide-y divide-tertiary/50",children:[(0,e.jsx)(aj,{name:"Saumya Singhal",position:"Co-president",src:"/officers/saumya.png",children:"A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab."}),(0,e.jsx)(aj,{name:"Alec Petridis",position:"Co-president",src:"/officers/alec.png",reverse:!0,children:"A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab."}),(0,e.jsx)(aj,{name:"Kevin Yu",position:"Co-vice-president",src:"/officers/kevin.png",children:"A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab."}),(0,e.jsx)(aj,{name:"Roger Fan",position:"Co-vice-president",src:"/officers/roger.JPG",reverse:!0,children:"A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab."}),(0,e.jsx)(aj,{name:"Anthony Ho",position:"Secretary",src:"/officers/anthony.jpg",children:"A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab."}),(0,e.jsx)(aj,{name:"Vivien Chen",position:"Treasurer",src:"/officers/vivien.png",reverse:!0,children:"A cantilever is a rigid structural element that extends horizontally and is supported at only one end. Typically it extends from a flat vertical surface such as a wall, to which it must be firmly attached. Like other structural elements, a cantilever can be formed as a beam, plate, truss, or slab."})]})]})}function aj(a){var b=a.name,c=a.position,d=a.src,f=a.children,g=a.reverse;return(0,e.jsxs)("div",{className:"flex gap-8 md:gap-10 py-7"+(g?" flex-row-reverse":""),children:[(0,e.jsx)("img",{src:d,alt:b,className:"w-24 h-24 md:w-36 md:h-36 rounded-full object-cover flex-none"}),(0,e.jsxs)("div",{className:"flex-grow py-2.5",children:[(0,e.jsx)("h3",{className:"text-3xl font-bold mb-1 underline underline-offset-4 decoration-[3px] "+("Co-president"===c?"decoration-rose-500":"Co-vice-president"===c?"decoration-orange-500":"Secretary"===c?"decoration-amber-500":"decoration-yellow-500"),children:b}),(0,e.jsx)("h4",{className:"text-sm text-secondary mb-2",children:c}),(0,e.jsx)("p",{children:f})]})]})}function ak(){return(0,e.jsx)("footer",{className:"bg-grape pt-16 pb-24",children:(0,e.jsx)("div",{className:"container text-center text-sm text-secondary",children:"Made with love by the United Computations club."})})}function al(){return(0,e.jsxs)("div",{className:"pt-36",children:[(0,e.jsxs)(g(),{children:[(0,e.jsx)("title",{children:"United Computations"}),(0,e.jsx)("meta",{name:"description",content:"One of the longest-running CS clubs at Gunn!"}),(0,e.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,e.jsx)(h,{}),(0,e.jsx)(ae,{}),(0,e.jsx)(ai,{}),(0,e.jsx)(ak,{})]})}},9008:function(a,b,c){a.exports=c(5443)}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])