(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-058a922c"],{"023d":function(t,e,n){"use strict";function i(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),o=i.overflowY;if("scroll"===o||"auto"===o)return n;n=n.parentNode}return e}function o(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function r(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function a(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function c(t){return(t===window?0:t.getBoundingClientRect().top)+o(window)}n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c})},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),o=n("e53d").document,r=i(o)&&i(o.createElement);t.exports=function(t){return r?o.createElement(t):{}}},2507:function(t,e,n){},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var i=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},3875:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=10;function o(t,e){return t>e&&t>i?"horizontal":e>t&&e>i?"vertical":""}var r={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||o(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"4d75":function(t,e,n){},5246:function(t,e,n){"use strict";n("68ef"),n("8a0b")},"56a8":function(t,e,n){"use strict";n.r(e);var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collect"},[n("van-nav-bar",{attrs:{title:"收藏菜谱"}}),n("van-row",{directives:[{name:"show",rawName:"v-show",value:t.istrue,expression:"istrue"}]},t._l(t.collects,function(e,i){return n("van-col",{key:i,staticClass:"nav-img",attrs:{span:"11"},nativeOn:{touchstart:function(e){return t.gotouchstart(e)},touchmove:function(e){return t.gotouchmove(e)},click:function(e){return t.goIndex({name:t.collects[i].router,params:{pid:t.collects[i].id}})}}},[n("div",{staticClass:"colse-box "},[n("img",{staticClass:"auto-img",attrs:{src:t.collects[i].imgs}})]),n("span",[t._v(t._s(t.collects[i].name))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"mistake",on:{click:function(e){return e.stopPropagation(),t.del(i)}}},[n("van-icon",{attrs:{name:"close"}})],1)])}),1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isfalse,expression:"isfalse"}],staticClass:"text"},[t._v("清先登陸")]),n("div",{staticClass:"text",on:{click:function(e){return t.goIndex({name:"Index"})}}},[n("span",[t._v("去收藏更多")])])],1)},r=[],a=n("bd86"),c=(n("e7e5"),n("d399")),s=(n("c3a6"),n("ad06")),u=(n("7f7f"),n("5246"),n("6b41")),l={name:"Collect",data:function(){return{collects:null,isOpen:!1,timeOutEvent:0,userLoginStatus:null,istrue:!1,isfalse:!1}},components:(i={},Object(a["a"])(i,u["a"].name,u["a"]),Object(a["a"])(i,s["a"].name,s["a"]),Object(a["a"])(i,c["a"].name,c["a"]),i),methods:{goIndex:function(t){this.$router.push(t)},gotouchstart:function(){var t=this;this.timeOutEvent=setTimeout(function(){t.timeOutEvent=0,t.isOpen=!0},500)},gotouchend:function(){if(clearTimeout(this.timeOutEvent),0!=this.timeOutEvent)for(var t=0;t<this.collects.length;t++)this.$router.push({name:this.collects[t].router,params:{pid:this.collects[t].id}})},gotouchmove:function(){clearTimeout(this.timeOutEvent),this.timeOutEvent=0},del:function(t){for(var e=void 0==t?this.collects.splice(0):this.collects.splice(t,1),n=JSON.parse(localStorage.getItem("collects")),i=0;i<n.length;i++)if(e.id==n[i].id){n.splice(i,1);break}localStorage.setItem("collects",JSON.stringify(this.collects))}},created:function(){var t=localStorage.getItem("userLogin");if(this.userLoginStatus=void 0==t?null:JSON.parse(t),this.userLoginStatus){if(this.userLoginStatus.loginStatus){var e=JSON.parse(localStorage.getItem("collects"));this.collects=e,this.istrue=!0,this.isfalse=!1}}else this.isfalse=!0,this.istrue=!1,alert("先去登錄吧！")}},f=l,d=(n("7827"),n("2877")),h=Object(d["a"])(f,o,r,!1,null,"9bea7086",null);e["default"]=h.exports},"584a":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var i=n("e53d"),o=n("584a"),r=n("d864"),a=n("35e8"),c=n("07e3"),s="prototype",u=function(t,e,n){var l,f,d,h=t&u.F,v=t&u.G,p=t&u.S,m=t&u.P,g=t&u.B,b=t&u.W,y=v?o:o[e]||(o[e]={}),O=y[s],x=v?i:p?i[e]:(i[e]||{})[s];for(l in v&&(n=e),n)f=!h&&x&&void 0!==x[l],f&&c(y,l)||(d=f?x[l]:n[l],y[l]=v&&"function"!=typeof x[l]?n[l]:g&&f?r(d,i):b&&x[l]==d?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[s]=t[s],e}(d):m&&"function"==typeof d?r(Function.call,d):d,m&&((y.virtual||(y.virtual={}))[l]=d,t&u.R&&O&&!O[l]&&a(O,l,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6605:function(t,e,n){"use strict";var i={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},o=n("3875"),r=n("db78"),a=n("c31d"),c=n("2638"),s=n.n(c),u=n("a142"),l=n("ba31"),f=Object(u["j"])("overlay"),d=f[0],h=f[1];function v(t,e,n,i){var o=Object(a["a"])({zIndex:e.zIndex},e.customStyle);return t("transition",{attrs:{name:"van-fade"}},[t("div",s()([{directives:[{name:"show",value:e.visible}],style:o,class:[h(),e.className],on:{touchmove:function(t){t.preventDefault(),t.stopPropagation()}}},Object(l["b"])(i,!0)]))])}v.props={zIndex:Number,className:null,visible:Boolean,customStyle:Object};var p,m=d(v),g={className:"",customStyle:{}};function b(){if(i.top){var t=i.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function y(){if(p||(p=Object(l["c"])(m,{on:{click:b}})),i.top){var t=i.top,e=t.vm,n=t.config,o=e.$el,r=o&&o.parentNode?o.parentNode:document.body;r&&r.appendChild(p.$el),Object(a["a"])(p,g,n,{visible:!0})}else p.visible=!1}function O(t,e){i.stack.some(function(e){return e.vm===t})||(i.stack.push({vm:t,config:e}),y())}function x(t){var e=i.stack;e.length&&(i.top.vm===t?(e.pop(),y()):i.stack=e.filter(function(e){return e.vm!==t}))}var w=n("023d");n.d(e,"a",function(){return S});var S={mixins:[o["a"]],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],getContainer:[String,Function],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var e=t?"open":"close";this.inited=this.inited||this.value,this[e](),this.$emit(e)},getContainer:function(){this.move()},overlay:function(){this.renderOverlay()}},mounted:function(){this.getContainer&&this.move(),this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(i.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(r["b"])(document,"touchstart",this.touchStart),Object(r["b"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.add("van-overflow-hidden"),i.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(i.lockCount--,Object(r["a"])(document,"touchstart",this.touchStart),Object(r["a"])(document,"touchmove",this.onTouchMove),i.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,x(this),this.$emit("input",!1))},move:function(){var t,e=this.getContainer;e?t="string"===typeof e?document.querySelector(e):e():this.$parent&&(t=this.$parent.$el),t&&t!==this.$el.parentNode&&t.appendChild(this.$el),this.overlay&&y()},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(w["c"])(t.target,this.$el),i=n.scrollHeight,o=n.offsetHeight,r=n.scrollTop,a="11";0===r?a=o>=i?"00":"01":r+o>=i&&(a="10"),!t.cancelable||"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||(t.preventDefault(),t.stopPropagation())},renderOverlay:function(){!this.$isServer&&this.value&&(this.overlay?O(this,{zIndex:i.zIndex++,className:this.overlayClass,customStyle:this.overlayStyle}):x(this),this.updateZIndex())},updateZIndex:function(){var t=this;this.$nextTick(function(){t.$el.style.zIndex=i.zIndex++})}}}},"6b41":function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),r=n("a142"),a=n("ba31"),c=n("ad06"),s=Object(r["j"])("nav-bar"),u=s[0],l=s[1];function f(t,e,n,i){return t("div",o()([{class:[l({fixed:e.fixed}),{"van-hairline--bottom":e.border}],style:{zIndex:e.zIndex}},Object(a["b"])(i)]),[t("div",{class:l("left"),on:{click:i.listeners["click-left"]||r["h"]}},[n.left?n.left():[e.leftArrow&&t(c["a"],{class:l("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:l("text")},[e.leftText])]]),t("div",{class:[l("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:l("right"),on:{click:i.listeners["click-right"]||r["h"]}},[n.right?n.right():e.rightText&&t("span",{class:l("text")},[e.rightText])])])}f.props={title:String,fixed:Boolean,leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},e["a"]=u(f)},"6f2f":function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),r=n("a142"),a=n("ba31"),c=Object(r["j"])("info"),s=c[0],u=c[1];function l(t,e,n,i){if(Object(r["c"])(e.info))return t("div",o()([{class:u()},Object(a["b"])(i,!0)]),[e.info])}l.props={info:[String,Number]},e["a"]=s(l)},7827:function(t,e,n){"use strict";var i=n("2507"),o=n.n(i);o.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7f7f":function(t,e,n){var i=n("86cc").f,o=Function.prototype,r=/^\s*function ([^ (]*)/,a="name";a in o||n("9e1e")&&i(o,a,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},"8a0b":function(t,e,n){},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},ad06:function(t,e,n){"use strict";var i=n("2638"),o=n.n(i),r=n("a142"),a=n("ba31"),c=n("6f2f");function s(t){return/^(https?:)?\/\/|data:image/.test(t)}var u=Object(r["j"])("icon"),l=u[0];function f(t,e,n,i){var r=s(e.name);return t(e.tag,o()([{class:[e.classPrefix,r?"van-icon--image":e.classPrefix+"-"+e.name],style:{color:e.color,fontSize:e.size}},Object(a["b"])(i,!0)]),[n["default"]&&n["default"](),r&&t("img",{attrs:{src:e.name}}),t(c["a"],{attrs:{info:e.info}})])}f.props={name:String,size:String,color:String,info:[String,Number],tag:{type:String,default:"i"},classPrefix:{type:String,default:"van-icon"}};e["a"]=l(f)},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b258:function(t,e,n){},bd86:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("85f2"),o=n.n(i);function r(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c3a6:function(t,e,n){"use strict";n("68ef")},d399:function(t,e,n){"use strict";var i=n("c31d"),o=n("2b0e"),r=n("a142"),a=n("6605"),c=n("ad06"),s=n("543e"),u=Object(r["j"])("toast"),l=u[0],f=u[1],d=["success","fail","loading"],h=l({mixins:[a["a"]],props:{className:null,forbidClick:Boolean,message:[String,Number],type:{type:String,default:"text"},loadingType:{type:String,default:"circular"},position:{type:String,default:"middle"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickale()},destroyed:function(){this.toggleClickale()},watch:{value:function(){this.toggleClickale()},forbidClick:function(){this.toggleClickale()}},methods:{toggleClickale:function(){var t=this.value&&this.forbidClick;if(this.clickable!==t){this.clickable=t;var e=t?"add":"remove";document.body.classList[e]("van-toast--unclickable")}}},render:function(t){var e=this,n=this.type,i=this.message,o=-1!==d.indexOf(n)?"default":n,a=function(){switch(o){case"text":return t("div",[i]);case"html":return t("div",{domProps:{innerHTML:i}});default:return["loading"===n?t(s["a"],{attrs:{color:"white",type:e.loadingType}}):t(c["a"],{class:f("icon"),attrs:{name:n}}),Object(r["c"])(i)&&t("div",{class:f("text")},[i])]}};return t("transition",{attrs:{name:"van-fade"}},[t("div",{directives:[{name:"show",value:this.value}],class:[f([o,this.position]),this.className]},[a()])])}}),v={type:"text",mask:!1,value:!0,message:"",className:"",onClose:null,duration:3e3,position:"middle",forbidClick:!1,loadingType:"circular",getContainer:"body",overlayStyle:null},p=function(t){return Object(r["f"])(t)?t:{message:t}},m=[],g=!1,b=Object(i["a"])({},v);function y(){if(r["g"])return{};if(!m.length||g||!Object(r["e"])(m[0].$el)){var t=new(o["a"].extend(h))({el:document.createElement("div")});m.push(t)}return m[m.length-1]}function O(t){return t.overlay=t.mask,t}function x(t){void 0===t&&(t={});var e=y();return e.value&&e.updateZIndex(),t=Object(i["a"])({},b,p(t),{clear:function(){if(e.value=!1,t.onClose&&t.onClose(),g&&!r["g"]){clearTimeout(e.timer),m=m.filter(function(t){return t!==e});var n=e.$el.parentNode;n&&n.removeChild(e.$el),e.$destroy()}}}),Object(i["a"])(e,O(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout(function(){e.clear()},t.duration)),e}var w=function(t){return function(e){return x(Object(i["a"])({type:t},p(e)))}};["loading","success","fail"].forEach(function(t){x[t]=w(t)}),x.clear=function(t){m.length&&(t?(m.forEach(function(t){t.clear()}),m=[]):g?m.shift().clear():m[0].clear())},x.setDefaultOptions=function(t){Object(i["a"])(b,t)},x.resetDefaultOptions=function(){b=Object(i["a"])({},v)},x.allowMultiple=function(t){void 0===t&&(t=!0),g=t},x.install=function(){o["a"].use(h)},o["a"].prototype.$toast=x;e["a"]=x},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),o=n("794b"),r=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),o)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},db78:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return c});var i=n("a142"),o=!1;if(!i["g"])try{var r={};Object.defineProperty(r,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,r)}catch(s){}function a(t,e,n,r){void 0===r&&(r=!1),i["g"]||t.addEventListener(e,n,!!o&&{capture:!1,passive:r})}function c(t,e,n){i["g"]||t.removeEventListener(e,n)}},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e7e5:function(t,e,n){"use strict";n("68ef"),n("4d75"),n("b258")},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-058a922c.f54a9ff2.js.map