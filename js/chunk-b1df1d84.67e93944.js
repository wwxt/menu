(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1df1d84"],{"023d":function(t,i,e){"use strict";function n(t,i){void 0===i&&(i=window);var e=t;while(e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType&&e!==i){var n=window.getComputedStyle(e),o=n.overflowY;if("scroll"===o||"auto"===o)return e;e=e.parentNode}return i}function o(t){return"scrollTop"in t?t.scrollTop:t.pageYOffset}function s(t,i){"scrollTop"in t?t.scrollTop=i:t.scrollTo(t.scrollX,i)}function a(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function c(t){return(t===window?0:t.getBoundingClientRect().top)+o(window)}e.d(i,"c",function(){return n}),e.d(i,"d",function(){return o}),e.d(i,"e",function(){return s}),e.d(i,"b",function(){return a}),e.d(i,"a",function(){return c})},"1eaa":function(t,i,e){"use strict";var n=e("e56a"),o=e.n(n);o.a},"2bb1":function(t,i,e){"use strict";var n=e("c31d"),o=e("a142"),s=Object(o["j"])("swipe-item"),a=s[0],c=s[1];i["a"]=a({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(t){var i=this.$parent,e=i.vertical,o=i.computedWidth,s=i.computedHeight,a={width:o+"px",height:e?s+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:c(),style:a,on:Object(n["a"])({},this.$listeners)},[this.slots()])}})},3875:function(t,i,e){"use strict";e.d(i,"a",function(){return s});var n=10;function o(t,i){return t>i&&t>n?"horizontal":i>t&&i>n?"vertical":""}var s={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var i=t.touches[0];this.deltaX=i.clientX-this.startX,this.deltaY=i.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||o(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}}},"480b":function(t,i,e){"use strict";e("68ef"),e("9ee3")},"4d75":function(t,i,e){},"504b":function(t,i,e){},5596:function(t,i,e){"use strict";var n=e("a142"),o=e("db78"),s=e("3875"),a=Object(n["j"])("swipe"),c=a[0],r=a[1];i["a"]=c({mixins:[s["a"]],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,initialSwipe:Number,indicatorColor:String,loop:{type:Boolean,default:!0},touchable:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},duration:{type:Number,default:500}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},mounted:function(){this.initialize(),this.$isServer||Object(o["b"])(window,"resize",this.onResize,!0)},activated:function(){this.rendered&&this.initialize(),this.rendered=!0},destroyed:function(){this.clear(),this.$isServer||Object(o["a"])(window,"resize",this.onResize,!0)},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(t.preventDefault(),t.stopPropagation(),this.move({offset:Math.min(Math.max(this.delta,-this.size),this.size)})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},move:function(t){var i=t.pace,e=void 0===i?0:i,n=t.offset,o=void 0===n?0:n,s=t.emitChange,a=this.delta,c=this.active,r=this.count,h=this.swipes,l=this.trackSize,u=0===c,d=c===r-1,f=!this.loop&&(u&&(o>0||e<0)||d&&(o<0||e>0));f||r<=1||(h[0]&&(h[0].offset=d&&(a<0||e>0)?l:0),h[r-1]&&(h[r-1].offset=u&&(a>0||e<0)?-l:0),e&&c+e>=-1&&c+e<=r&&(this.active+=e,s&&this.$emit("change",this.activeIndicator)),this.offset=Math.round(o-this.active*this.size))},swipeTo:function(t){var i=this;this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),setTimeout(function(){i.swiping=!1,i.move({pace:t%i.count-i.active,emitChange:!0})},30)},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),setTimeout(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()},30)},i))}},render:function(t){var i=this,e=this.count,n=this.activeIndicator,o=this.slots("indicator")||this.showIndicators&&e>1&&t("div",{class:r("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,o){return t("i",{class:r("indicator",{active:o===n}),style:o===n?i.indicatorStyle:null})})]);return t("div",{class:r()},[t("div",{ref:"track",style:this.trackStyle,class:r("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),o])}})},6605:function(t,i,e){"use strict";var n={zIndex:2e3,lockCount:0,stack:[],get top(){return this.stack[this.stack.length-1]}},o=e("3875"),s=e("db78"),a=e("c31d"),c=e("2638"),r=e.n(c),h=e("a142"),l=e("ba31"),u=Object(h["j"])("overlay"),d=u[0],f=u[1];function v(t,i,e,n){var o=Object(a["a"])({zIndex:i.zIndex},i.customStyle);return t("transition",{attrs:{name:"van-fade"}},[t("div",r()([{directives:[{name:"show",value:i.visible}],style:o,class:[f(),i.className],on:{touchmove:function(t){t.preventDefault(),t.stopPropagation()}}},Object(l["b"])(n,!0)]))])}v.props={zIndex:Number,className:null,visible:Boolean,customStyle:Object};var m,p=d(v),g={className:"",customStyle:{}};function b(){if(n.top){var t=n.top.vm;t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}function w(){if(m||(m=Object(l["c"])(p,{on:{click:b}})),n.top){var t=n.top,i=t.vm,e=t.config,o=i.$el,s=o&&o.parentNode?o.parentNode:document.body;s&&s.appendChild(m.$el),Object(a["a"])(m,g,e,{visible:!0})}else m.visible=!1}function y(t,i){n.stack.some(function(i){return i.vm===t})||(n.stack.push({vm:t,config:i}),w())}function S(t){var i=n.stack;i.length&&(n.top.vm===t?(i.pop(),w()):n.stack=i.filter(function(i){return i.vm!==t}))}var x=e("023d");e.d(i,"a",function(){return C});var C={mixins:[o["a"]],props:{value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[String,Number],getContainer:[String,Function],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}},data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(t){var i=t?"open":"close";this.inited=this.inited||this.value,this[i](),this.$emit(i)},getContainer:function(){this.move()},overlay:function(){this.renderOverlay()}},mounted:function(){this.getContainer&&this.move(),this.value&&this.open()},activated:function(){this.value&&this.open()},beforeDestroy:function(){this.close(),this.getContainer&&this.$parent&&this.$parent.$el&&this.$parent.$el.appendChild(this.$el)},deactivated:function(){this.close()},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(n.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.lockScroll&&(Object(s["b"])(document,"touchstart",this.touchStart),Object(s["b"])(document,"touchmove",this.onTouchMove),n.lockCount||document.body.classList.add("van-overflow-hidden"),n.lockCount++))},close:function(){this.opened&&(this.lockScroll&&(n.lockCount--,Object(s["a"])(document,"touchstart",this.touchStart),Object(s["a"])(document,"touchmove",this.onTouchMove),n.lockCount||document.body.classList.remove("van-overflow-hidden")),this.opened=!1,S(this),this.$emit("input",!1))},move:function(){var t,i=this.getContainer;i?t="string"===typeof i?document.querySelector(i):i():this.$parent&&(t=this.$parent.$el),t&&t!==this.$el.parentNode&&t.appendChild(this.$el),this.overlay&&w()},onTouchMove:function(t){this.touchMove(t);var i=this.deltaY>0?"10":"01",e=Object(x["c"])(t.target,this.$el),n=e.scrollHeight,o=e.offsetHeight,s=e.scrollTop,a="11";0===s?a=o>=n?"00":"01":s+o>=n&&(a="10"),!t.cancelable||"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(i,2)||(t.preventDefault(),t.stopPropagation())},renderOverlay:function(){!this.$isServer&&this.value&&(this.overlay?y(this,{zIndex:n.zIndex++,className:this.overlayClass,customStyle:this.overlayStyle}):S(this),this.updateZIndex())},updateZIndex:function(){var t=this;this.$nextTick(function(){t.$el.style.zIndex=n.zIndex++})}}}},"786d":function(t,i,e){},8270:function(t,i,e){},"864c":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"test"},[e("van-notice-bar",{attrs:{text:"欢迎大家来到这个梦幻般的网址！在这里会体验到其他地方体验不到的危险。","left-icon":"volume-o"}}),e("button",{on:{click:t.addProducts}},[t._v("添加商品")]),e("button",{on:{click:t.addTypes}},[t._v("添加类型")]),e("button",{on:{click:t.addMenu}},[t._v(" 添加菜单")]),e("van-button",{staticClass:"btn",attrs:{type:"danger"},on:{click:function(i){return t.showImagePreview(3)}}},[t._v("危险按钮")])],1)},o=[],s=e("bd86"),a=(e("68ef"),e("4d75"),e("8270"),e("786d"),e("504b"),e("c31d")),c=e("2b0e"),r=e("2638"),h=e.n(r),l=e("a142"),u=e("6605"),d=e("3875"),f=e("5596"),v=e("2bb1"),m=Object(l["j"])("image-preview"),p=m[0],g=m[1];function b(t){return Math.sqrt(Math.abs((t[0].clientX-t[1].clientX)*(t[0].clientY-t[1].clientY)))}var w,y=p({mixins:[u["a"],d["a"]],props:{images:Array,className:null,lazyLoad:Boolean,asyncClose:Boolean,startPosition:Number,showIndicators:Boolean,loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:"van-image-preview__overlay"},closeOnClickOverlay:{type:Boolean,default:!0}},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,active:0}},computed:{imageStyle:function(){var t=this.scale,i={transition:this.zooming||this.moving?"":".3s all"};return 1!==t&&(i.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),i}},watch:{value:function(){this.active=this.startPosition},startPosition:function(t){this.active=t}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){t.preventDefault();var i=new Date-this.touchStartTime,e=this.$refs.swipe||{},n=e.offsetX,o=void 0===n?0:n,s=e.offsetY,a=void 0===s?0:s;if(i<300&&o<10&&a<10){var c=this.active;this.resetScale(),this.$emit("close",{index:c,url:this.images[c]}),this.asyncClose||this.$emit("input",!1)}},startMove:function(t){var i=t.currentTarget,e=i.getBoundingClientRect(),n=window.innerWidth,o=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(e.width-n)/2),this.maxMoveY=Math.max(0,(e.height-o)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=b(t.touches)},onTouchStart:function(t){var i=t.touches,e=this.$refs.swipe||{},n=e.offsetX,o=void 0===n?0:n;1===i.length&&1!==this.scale?this.startMove(t):2!==i.length||o||this.startZoom(t)},onTouchMove:function(t){var i=t.touches;if((this.moving||this.zooming)&&(t.preventDefault(),t.stopPropagation()),this.moving){this.touchMove(t);var e=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(l["i"])(e,-this.maxMoveX,this.maxMoveX),this.moveY=Object(l["i"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var o=b(i),s=this.startScale*o/this.startDistance;this.scale=Object(l["i"])(s,this.minZoom,this.maxZoom)}},onTouchEnd:function(t){if(this.moving||this.zooming){var i=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),i&&(t.preventDefault(),t.stopPropagation())}},onChange:function(t){this.resetScale(),this.active=t,this.$emit("change",t)},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0}},render:function(t){var i=this;if(this.value){var e=this.active,n=this.images,o=this.showIndex&&t("div",{class:g("index")},[this.slots("index")||e+1+"/"+n.length]),s=t(f["a"],{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",initialSwipe:this.startPosition,showIndicators:this.showIndicators},on:{change:this.onChange}},[n.map(function(n,o){var s={class:g("image"),style:o===e?i.imageStyle:null,on:{touchstart:i.onTouchStart,touchmove:i.onTouchMove,touchend:i.onTouchEnd,touchcancel:i.onTouchEnd}};return t(v["a"],[i.lazyLoad?t("img",h()([{directives:[{name:"lazy",value:n}]},s])):t("img",h()([{attrs:{src:n}},s]))])})]);return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[g(),this.className],on:{touchstart:this.onWrapperTouchStart,touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[o,s])])}}}),S={images:[],loop:!0,value:!0,minZoom:1/3,maxZoom:3,className:"",lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,showIndicators:!1},x=function(){w=new(c["a"].extend(y))({el:document.createElement("div")}),document.body.appendChild(w.$el)},C=function(t,i){if(void 0===i&&(i=0),!l["g"]){w||x();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return Object(a["a"])(w,S,e),w.$once("input",function(t){w.value=t}),e.onClose&&w.$once("close",e.onClose),w}};C.install=function(){c["a"].use(y)};var z,T=C,k=(e("7f7f"),e("480b"),e("a37c")),O=e("d5c7"),$=e("bdac"),I=e("9539"),M=["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554908765019&di=8cba8c02476fd3efe7772d79f9505130&imgtype=0&src=http%3A%2F%2Fpic112.nipic.com%2Ffile%2F20161021%2F20180988_102939240000_2.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554908765012&di=648143b18a33f98c6dcc3977a4bbb2be&imgtype=0&src=http%3A%2F%2Fwww.deyu.ln.cn%2Fimages%2Fo5qw46tbn4zc4yrqfz2xayljpf2w4ltdn5wq%2Fsystem%2Fpictures%2F27365415%2Foriginal%2F1439369364_640x371.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554908916791&di=ff62f9d6864c00b715758f1ed38658e6&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F57%2F86%2F75Q58PICMhI.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554908916791&di=d0e0317b3d136f56df175be525ecddfe&imgtype=0&src=http%3A%2F%2Fwww.ps-xxw.cn%2Fuploadfile%2F201506%2F16%2F35133814625.jpg"],j={name:"Test",components:(z={},Object(s["a"])(z,k["a"].name,k["a"]),Object(s["a"])(z,T.name,T),z),methods:{showImagePreview:function(t,i){var e=T({images:M,asyncClose:!!i,startPosition:"number"===typeof t?t:0});i&&setTimeout(function(){e.close()},i)},addProducts:function(){localStorage.setItem("products",JSON.stringify(O["a"]))},addTypes:function(){localStorage.setItem("types",JSON.stringify($["a"]))},addMenu:function(){localStorage.setItem("menu",JSON.stringify(I["a"]))}}},Y=j,X=(e("1eaa"),e("2877")),N=Object(X["a"])(Y,n,o,!1,null,"717a65b4",null);i["default"]=N.exports},"9ee3":function(t,i,e){},a37c:function(t,i,e){"use strict";var n=e("a142"),o=e("ad06"),s=Object(n["j"])("notice-bar"),a=s[0],c=s[1];i["a"]=a({props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,delay:{type:[String,Number],default:1},scrollable:{type:Boolean,default:!0},speed:{type:Number,default:50}},data:function(){return{wrapWidth:0,firstRound:!0,duration:0,offsetWidth:0,showNoticeBar:!0,animationClass:""}},watch:{text:{handler:function(){var t=this;this.$nextTick(function(){var i=t.$refs,e=i.wrap,n=i.content;if(e&&n){var o=e.getBoundingClientRect().width,s=n.getBoundingClientRect().width;t.scrollable&&s>o&&(t.wrapWidth=o,t.offsetWidth=s,t.duration=s/t.speed,t.animationClass=c("play"))}})},immediate:!0}},methods:{onClickIcon:function(){"closeable"===this.mode&&(this.showNoticeBar=!1,this.$emit("close"))},onAnimationEnd:function(){var t=this;this.firstRound=!1,this.$nextTick(function(){t.duration=(t.offsetWidth+t.wrapWidth)/t.speed,t.animationClass=c("play--infinite")})}},render:function(t){var i=this,e=this.mode,n="closeable"===e?"cross":"link"===e?"arrow":"",s={color:this.color,background:this.background},a={paddingLeft:this.firstRound?0:this.wrapWidth+"px",animationDelay:(this.firstRound?this.delay:0)+"s",animationDuration:this.duration+"s"};return t("div",{directives:[{name:"show",value:this.showNoticeBar}],class:c({withicon:e,wrapable:this.wrapable}),style:s,on:{click:function(){i.$emit("click")}}},[this.leftIcon&&t(o["a"],{class:c("left-icon"),attrs:{name:this.leftIcon}}),t("div",{ref:"wrap",class:c("wrap")},[t("div",{ref:"content",class:[c("content"),this.animationClass,{"van-ellipsis":!this.scrollable&&!this.wrapable}],style:a,on:{animationend:this.onAnimationEnd,webkitAnimationEnd:this.onAnimationEnd}},[this.slots()||this.text])]),n&&t(o["a"],{class:c("right-icon"),attrs:{name:n},on:{click:this.onClickIcon}})])}})},db78:function(t,i,e){"use strict";e.d(i,"b",function(){return a}),e.d(i,"a",function(){return c});var n=e("a142"),o=!1;if(!n["g"])try{var s={};Object.defineProperty(s,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,s)}catch(r){}function a(t,i,e,s){void 0===s&&(s=!1),n["g"]||t.addEventListener(i,e,!!o&&{capture:!1,passive:s})}function c(t,i,e){n["g"]||t.removeEventListener(i,e)}},e56a:function(t,i,e){}}]);
//# sourceMappingURL=chunk-b1df1d84.67e93944.js.map