webpackJsonp([16],{"3xv7":function(t,e){},"76E/":function(t,e){},JbTh:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"addHistory",function(){return p}),n.d(o,"removeARecord",function(){return v}),n.d(o,"removeAddress",function(){return b});var i={};n.d(i,"keyword",function(){return _}),n.d(i,"historyList",function(){return y}),n.d(i,"addressInfo",function(){return g});var r=n("7+uW"),a={props:{isShowBar:{type:Boolean,default:!0}},data:function(){return{bars:[{name:"首页",router:"/home",icon:"&#xe751;"},{name:"订单",router:"/order",icon:"&#xe76a;"},{name:"购物车",router:"/shopcart",icon:"&#xe622;"},{name:"我的",router:"/mycenter",icon:"&#xe658;"}]}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShowBar?n("ul",{staticClass:"bar-list"},t._l(t.bars,function(e){return n("router-link",{key:e.icon,staticClass:"bar-item",attrs:{tag:"li",to:e.router}},[n("i",{staticClass:"iconfont icon",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(e.name))])])}),1):t._e()},staticRenderFns:[]};var c={components:{TabBar:n("VU/8")(a,s,!1,function(t){n("3xv7")},"data-v-2c4ea806",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"product-list,settlement,shopcart,order"}},[e("router-view")],1),this._v(" "),e("tab-bar")],1)},staticRenderFns:[]};var l,d=n("VU/8")(c,u,!1,function(t){n("Qcho")},null,null).exports,m=n("NYxO"),h=n("mvHQ"),f=n.n(h),p=function(t,e){var n=t.commit,o=t.state.historyList.slice(),i=o.findIndex(function(t){return t===e});i>-1?(o.splice(i,1),o.unshift(e)):o.push(e),o.length>50&&(o=o.slice(0,50)),localStorage.setItem("historyList",f()(o)),n("ADD_HISTORY_LIST",o)},v=function(t,e){var n=t.commit,o=t.state.historyList.slice();o.splice(e,1),localStorage.setItem("historyList",f()(o)),n("ADD_HISTORY_LIST",o)},b=function(t,e){var n=t.commit;e===t.state.addressInfo.id&&(n("SAVE_ADDRESS_INFO",{}),localStorage.removeItem("addressInfo"))},_=function(t){return t.keyword},y=function(t){return t.historyList},g=function(t){return t.addressInfo},S={keyword:"",historyList:JSON.parse(localStorage.getItem("historyList"))||[],addressInfo:JSON.parse(localStorage.getItem("addressInfo"))||{}},I=n("bOdI"),P=n.n(I),A=(l={},P()(l,"SET_KEYWORD",function(t,e){t.keyword=e}),P()(l,"ADD_HISTORY_LIST",function(t,e){0===e.length&&localStorage.removeItem("historyList"),t.historyList=e}),P()(l,"SAVE_ADDRESS_INFO",function(t,e){t.addressInfo=e,localStorage.setItem("addressInfo",f()(e))}),l);n("sax8");r.a.use(m.a);var x=new m.a.Store({actions:o,getters:i,state:S,mutations:A,strict:!1,plugins:[]}),T=n("/ocq");r.a.use(T.a);var w=function(t){Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"52Vv")).then(function(e){t(e)})},L=new T.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(t){Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"nU8l")).then(function(e){t(e)})},children:[{path:":id",component:w}]},{path:"/product-list",name:"product-list",component:function(t){Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"24PT")).then(function(e){t(e)})},children:[{path:":id",name:"detail",component:w}]},{path:"/mycenter",name:"mycenter",component:function(t){Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"Hl5c")).then(function(e){t(e)})},children:[{path:"/mycenter/person-info",component:function(t){Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"mCGD")).then(function(e){t(e)})},meta:{requireAuth:!0}},{path:"/mycenter/update-pwd",component:function(t){Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"WGge")).then(function(e){t(e)})},meta:{requireAuth:!0}}]},{path:"/shopcart",name:"shopcart",component:function(t){Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"MYfb")).then(function(e){t(e)})},meta:{requireAuth:!0}},{path:"/login",name:"login",component:function(t){Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"QlWu")).then(function(e){t(e)})},beforeEnter:function(t,e,n){"/add-address"===e.fullPath?n({path:"/mycenter"}):n()}},{path:"/register",component:function(t){Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"Xaqj")).then(function(e){t(e)})}},{path:"/find-pwd",name:"find-pwd",component:function(t){Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"DsfB")).then(function(e){t(e)})}},{path:"/order",name:"order",component:function(t){Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"1SgU")).then(function(e){t(e)})},meta:{requireAuth:!0}},{path:"/settlement",name:"settlement",component:function(t){Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"kxLQ")).then(function(e){t(e)})},meta:{requireAuth:!0},children:[{path:"/settlement/pay",name:"pay",component:function(t){Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"DC+l")).then(function(e){t(e)})}}]},{path:"/add-address",name:"add-address",component:function(t){Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"74Fp")).then(function(e){t(e)})},meta:{requireAuth:!0}}]}),D=n("AXdl"),k={data:function(){return{visible:!1,content:""}},methods:{setTimer:function(){var t=this;setTimeout(function(){t.close()},1200)},close:function(){var t=this;this.visible=!1,setTimeout(function(){t.$destroy(!0),t.$el.parentNode.removeChild(t.$el)},100)}},mounted:function(){this.setTimer()}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",[this.visible?e("div",{staticClass:"notice"},[e("div",{staticClass:"content"},[e("i",{staticClass:"iconfont icon-ok"},[this._v("")]),this._v(" "),e("span",{staticClass:"text"},[this._v(this._s(this.content))])])]):this._e()])},staticRenderFns:[]};var O=n("VU/8")(k,E,!1,function(t){n("JbTh")},"data-v-2fdd2bd1",null).exports,C=r.a.extend(O),q=function(t){var e=new C({data:{content:t}});return e.vm=e.$mount(),e.vm.visible=!0,e.dom=e.vm.$el,document.body.appendChild(e.dom),e.vm},R={install:function(t){t.prototype.$notice=q}};n("dgXP"),n("76E/");L.beforeEach(function(t,e,n){t.meta.requireAuth?sessionStorage.getItem("token")?n():n({path:"/login",query:{redirect:t.fullPath}}):n()}),r.a.use(D.a,{loading:n("kTO4")}),r.a.use(R),new r.a({el:"#app",router:L,store:x,components:{App:d},template:"<App/>"})},Qcho:function(t,e){},dgXP:function(t,e){},kTO4:function(t,e,n){t.exports=n.p+"static/img/load.bcf4673.jpg"}},["NHnr"]);
//# sourceMappingURL=app.c64264c5706352c428c0.js.map