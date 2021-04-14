webpackJsonp([5],{"/lZI":function(t,s,i){"use strict";var a=i("GQaK"),r={props:{sliderDate:{type:Array,default:function(){return[]}},dotsNumber:{type:Boolean,default:!1},loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:3e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;setTimeout(function(){t.initSliderWidth(),t.initDots(),t.initSlider(),t.autoPlay&&t.play()},20),window.addEventListener("resize",function(){t.slider&&(t.initSliderWidth(!0),t.slider.refresh())})},methods:{initSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;for(var s=0,i=this.$refs.slider.clientWidth,a=0;a<this.children.length;a++){this.children[a].style.width=i+"px",s+=i}this.loop&&!t&&(s+=2*i),this.$refs.sliderGroup.style.width=s+"px"},initDots:function(){this.dots=new Array(this.children.length)},initSlider:function(){var t=this;this.slider=new a.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400},click:!0}),this.slider.on("scrollEnd",function(){var s=t.slider.getCurrentPage().pageX;t.currentPageIndex=s,clearTimeout(t.timer),t.autoPlay&&t.play()})},play:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.slider.next()},this.interval)}},destroyed:function(){clearTimeout(this.timer)}},e={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"slider",staticClass:"slider"},[i("ul",{ref:"sliderGroup",staticClass:"slider-group"},t._l(t.sliderDate,function(t,s){return i("router-link",{key:s,staticClass:"slider-item",attrs:{tag:"li",to:t.router}},[i("img",{attrs:{src:t.imgUrl,alt:""}})])}),1),t._v(" "),t.dotsNumber?t._e():i("div",{staticClass:"dots"},t._l(t.dots,function(s,a){return i("span",{key:a,staticClass:"dot",class:{active:a===t.currentPageIndex}})}),0),t._v(" "),t.dotsNumber?i("div",{staticClass:"dotsNumber"},[i("span",[t._v(t._s(t.currentPageIndex+1)+" / "+t._s(t.dots.length))])]):t._e()])},staticRenderFns:[]};var n=i("VU/8")(r,e,!1,function(t){i("vbym")},"data-v-812c6a4a",null);s.a=n.exports},"52Vv":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("fZjL"),r=i.n(a),e=i("qwAB"),n=i("/lZI"),o=i("ATju"),c=i("XEAW"),l=i("y/jF"),u=i("UgCr"),d=i("c+FZ"),p={data:function(){return{isShowTop:!1,scrollY:-1,curIndex:0,switches:["商品","详情"],productInfo:{},showCartCount:!1,cartCount:1,cartProductAllNum:0}},created:function(){var t=this;this.probeType=3,this.listenScroll=!0,this.loop=!1,this.autoPlay=!1,this.dotsNumber=!0,setTimeout(function(){t._getProductDetail(t.$route.params.id),t._getCartNum()},20)},activated:function(){this._getProductDetail(this.$route.params.id),this._getCartNum()},computed:{sliderDate:function(){var t=this;if(r()(this.productInfo).length>0){var s=[];return"string"==typeof this.productInfo.subImages&&this.productInfo.subImages.split(",").forEach(function(i,a){s[a]={},s[a].imgUrl=t.productInfo.imageHost+i,s[a].router=""}),s}},detailList:function(){if(r()(this.productInfo).length>0){return this.productInfo.detail.match(/http.+?(jpg|jpeg|png)/gi)}}},methods:{backProductList:function(){this.$router.back()},toCartLook:function(){var t=this;setTimeout(function(){t.$router.push({path:"/shopcart"})},100)},addToCart:function(){var t=this;Object(d.a)(this.$route.params.id,this.cartCount).then(function(s){t.$refs.toCartConfrim.show()}).catch(function(s){t.$notice(s.msg)})},handleCartCount:function(t){-1===t&&this.cartCount>1?this.cartCount--:1===t&&this.cartCount<this.productInfo.stock&&this.cartCount++},packUpCartCount:function(){this.showCartCount=!1},addProduct:function(){this.showCartCount=!0},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back(),this.$destroy()},selectSwitchItem:function(t){this.curIndex=t,0===t?this.$refs.detailWrap.scrollTo(0,0,500):1===t&&this.$refs.detailWrap.scrollToElement(this.$refs.detail,500)},_getCartNum:function(){var t=this;Object(d.c)().then(function(s){t.cartProductAllNum=s.data}).catch(function(s){t.$notice(s.msg)})},_getProductDetail:function(t){var s=this;Object(u.a)(t).then(function(t){s.productInfo=t.data}).catch(function(t){s.$notice(t.msg)})}},watch:{scrollY:function(t){-t>56?this.isShowTop=!0:-t<1&&(this.isShowTop=!1),-t>this.$refs.productInfo.clientHeight+this.$refs.slider.$el.clientHeight?this.curIndex=1:this.curIndex=0}},components:{Scroll:e.a,Slider:n.a,TransiBase:o.a,Confirm:c.a,Loading:l.a}},f={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transi-base",{attrs:{name:"slide"}},[i("div",{staticClass:"product-detail-wrap"},[i("div",{ref:"back",staticClass:"back-btn",on:{click:t.back}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("transi-base",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowTop,expression:"isShowTop"}],ref:"topSwithes",staticClass:"head-top"},[i("div",{staticClass:"icon-back",on:{click:t.back}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("ul",{staticClass:"switches"},t._l(t.switches,function(s,a){return i("li",{key:a,staticClass:"switches-item",class:{active:t.curIndex===a},on:{click:function(s){return t.selectSwitchItem(a)}}},[t._v("\n            "+t._s(s)+"\n          ")])}),0)])]),t._v(" "),i("scroll",{ref:"detailWrap",staticClass:"scroll-wrap",attrs:{listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[i("div",[t.sliderDate&&t.sliderDate.length>0?i("slider",{ref:"slider",attrs:{sliderDate:t.sliderDate,loop:t.loop,autoPlay:t.autoPlay,dotsNumber:t.dotsNumber}}):t._e(),t._v(" "),Object.keys(t.productInfo).length>0?i("div",{ref:"productInfo",staticClass:"product-info"},[i("div",{staticClass:"price-wrap"},[i("div",{staticClass:"price"},[i("span",[t._v("￥")]),t._v("\n              "+t._s(t.productInfo.price)+"\n            ")]),t._v(" "),i("div",{staticClass:"original"},[t._v("\n              ￥"+t._s(t.productInfo.price/.8)+"\n            ")]),t._v(" "),i("div",{staticClass:"sales"},[t._v("\n              销量："+t._s(Math.floor(t.productInfo.stock*Math.random()))+"\n            ")])]),t._v(" "),i("p",{staticClass:"name"},[i("span",{staticClass:"title-tips"},[t._v(t._s(Math.random()>.3?"今日特价":Math.random()>.6?"8折特惠":"买2送1"))]),t._v("\n            "+t._s(t.productInfo.name)+"\n          ")]),t._v(" "),i("p",{staticClass:"sub-title"},[i("span",{staticClass:"sub"},[t._v(t._s(t.productInfo.subtitle))]),t._v(" "),i("span",{staticClass:"stock"},[t._v("库存: "+t._s(t.productInfo.stock))])])]):i("div",{staticClass:"product-loading"},[i("loading")],1),t._v(" "),i("div",{ref:"detail",staticClass:"product-detail"},t._l(t.detailList,function(t){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],key:t,staticClass:"img-item",attrs:{alt:""}})}),0)],1)]),t._v(" "),i("div",{staticClass:"add-cart"},[i("router-link",{staticClass:"cart",attrs:{tag:"div",to:"/shopcart"}},[t._v("\n        购物车\n        "),i("i",{staticClass:"iconfont icon-cart"},[t._v("")]),t._v(" "),i("span",{staticClass:"num"},[t._v(t._s(t.cartProductAllNum))])]),t._v(" "),i("div",{staticClass:"add-btn",on:{click:t.addProduct}},[t._v("加入购物车")])],1),t._v(" "),i("transition",{attrs:{name:"up"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showCartCount,expression:"showCartCount"}],staticClass:"cart-count-wrap"},[i("div",{staticClass:"close-cart-count",on:{click:t.packUpCartCount}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("div",{staticClass:"add-cart-info"},[i("div",{staticClass:"img-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.productInfo.imageHost+t.productInfo.mainImage,expression:"productInfo.imageHost+productInfo.mainImage"}],staticClass:"go-cart-img",attrs:{alt:""}})]),t._v(" "),i("p",{staticClass:"go-cart-price"},[t._v("￥:"+t._s(t.productInfo.price))])]),t._v(" "),i("div",{staticClass:"input-count"},[i("span",{on:{click:function(s){return t.handleCartCount(-1)}}},[t._v("-")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cartCount,expression:"cartCount"}],attrs:{type:"text"},domProps:{value:t.cartCount},on:{input:function(s){s.target.composing||(t.cartCount=s.target.value)}}}),t._v(" "),i("span",{on:{click:function(s){return t.handleCartCount(1)}}},[t._v("+")])]),t._v(" "),i("div",{staticClass:"confirm-add",on:{click:t.addToCart}},[t._v("确定")])])]),t._v(" "),i("confirm",{ref:"toCartConfrim",attrs:{cancelBtn:"返回",confirmBtn:"查看",title:"添加成功, 是否去购物车查看？"},on:{confirm:t.toCartLook,cancel:t.backProductList}})],1)])},staticRenderFns:[]};var h=i("VU/8")(p,f,!1,function(t){i("aNjM")},"data-v-27da627e",null);s.default=h.exports},UgCr:function(t,s,i){"use strict";s.b=function(t){return Object(a.a)({url:"/product/list.do",params:t})},s.a=function(t){return Object(a.a)({url:"/product/detail.do",params:{productId:t}})};var a=i("him/")},aNjM:function(t,s){},"c+FZ":function(t,s,i){"use strict";s.b=function(){return Object(a.a)({url:"/cart/list.do"})},s.a=function(t,s){return Object(a.a)({url:"/cart/add.do",params:{productId:t,count:s}})},s.i=function(t,s){return Object(a.a)({url:"/cart/update.do",params:{productId:t,count:s}})},s.d=function(t){return Object(a.a)({url:"/cart/delete_product.do",params:{productIds:t}})},s.f=function(t){return Object(a.a)({url:"/cart/select.do",params:{productId:t}})},s.h=function(t){return Object(a.a)({url:"/cart/un_select.do",params:{productId:t}})},s.c=function(){return Object(a.a)({url:"/cart/get_cart_product_count.do"})},s.e=function(){return Object(a.a)({url:"/cart/select_all.do"})},s.g=function(){return Object(a.a)({url:"/cart/un_select_all.do"})};var a=i("him/")},vbym:function(t,s){}});
//# sourceMappingURL=5.c84ed7e07ad8da1506bf.js.map