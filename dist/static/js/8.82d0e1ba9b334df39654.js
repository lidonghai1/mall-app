webpackJsonp([8],{FWz8:function(t,s,a){"use strict";s.b=function(t){return Object(e.a)({url:"/order/create.do",params:{shippingId:t}})},s.c=function(){return Object(e.a)({url:"/order/get_order_cart_product.do"})},s.d=function(t,s){return Object(e.a)({url:"/order/list.do",params:{pageNum:t,pageSize:s}})},s.a=function(t){return Object(e.a)({url:"/order/cancel.do",params:{orderNo:t}})};var e=a("him/")},kxLQ:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("fZjL"),r=a.n(e),i=a("Dd8w"),n=a.n(i),d=a("qwAB"),o=a("1npG"),c=a("y/jF"),u=a("FWz8"),l=a("NYxO"),v={name:"settlement",data:function(){return{submitOrderList:{}}},created:function(){var t=this;setTimeout(function(){t._getOrderCartList()},20)},computed:n()({hasAddressInfo:function(){return r()(this.addressInfo).length>0}},Object(l.c)(["addressInfo"])),methods:{handleCreateOrder:function(){var t=this;this.addressInfo.id?Object(u.b)(this.addressInfo.id).then(function(s){t.$router.push({name:"pay",params:{orderNo:s.data.orderNo}})}):this.$notice("请选择收货地址")},back:function(){this.$router.push("/shopcart")},_getOrderCartList:function(){var t=this;Object(u.c)().then(function(s){t.submitOrderList=s.data}).catch(function(s){t.$notice(s.msg),setTimeout(function(){t.$router.push("/shopcart")},1e3)})}},components:{Scroll:d.a,RedTitle:o.a,Loading:c.a}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",[a("red-title",{on:{back:t.back}}),t._v(" "),a("scroll",{staticClass:"confirm-order-info"},[a("div",{staticClass:"order-wrap"},[a("router-link",{attrs:{tag:"div",to:"/add-address"}},[t.hasAddressInfo?a("div",{staticClass:"address-wrap"},[a("i",{staticClass:"iconfont icon-address"},[t._v("")]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"name"},[a("span",{staticClass:"person"},[t._v("收件人: "+t._s(t.addressInfo.name))]),t._v(" "),a("span",{staticClass:"phone"},[t._v(t._s(t.addressInfo.phone))])]),t._v(" "),a("div",{staticClass:"detail-address"},[a("p",{staticClass:"address-text"},[t._v(t._s(t.addressInfo.province)+t._s(t.addressInfo.city)+t._s(t.addressInfo.address))]),t._v(" "),a("i",{staticClass:"iconfont"},[t._v("")])])])]):a("div",{staticClass:"no-address"},[t._v("\n            还没有选择默认地址，去选择"),a("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),a("ul",{staticClass:"product-info-wrap"},t._l(t.submitOrderList.orderItemVoList,function(s){return a("router-link",{key:s.productId,staticClass:"product-info-item",attrs:{tag:"li",to:"/product-list/"+s.productId}},[a("div",{staticClass:"img"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.submitOrderList.imageHost+s.productImage,expression:"submitOrderList.imageHost+item.productImage"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"product-info"},[a("p",{staticClass:"title"},[t._v(t._s(s.productName))]),t._v(" "),a("p",{staticClass:"price-info"},[a("span",{staticClass:"price"},[t._v("￥"+t._s(s.totalPrice))]),t._v(" "),a("span",{staticClass:"total"},[t._v("x"+t._s(s.quantity))])])])])}),1)],1),t._v(" "),0===Object.keys(t.submitOrderList).length?a("div",{staticClass:"loading-wrap"},[a("loading")],1):t._e()]),t._v(" "),a("div",{staticClass:"submit-wrap"},[a("div",{staticClass:"submit-btn",on:{click:t.handleCreateOrder}},[t._v("提交订单")]),t._v(" "),a("p",{staticClass:"total-all"},[t._v("合计金额: "),a("span",[t._v("￥"+t._s(t.submitOrderList.productTotalPrice))])])])],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var f=a("VU/8")(v,p,!1,function(t){a("wK2W")},"data-v-f4f5f3e2",null);s.default=f.exports},wK2W:function(t,s){}});
//# sourceMappingURL=8.82d0e1ba9b334df39654.js.map