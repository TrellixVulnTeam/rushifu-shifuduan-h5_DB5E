(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wode-zhanghaodenglu-zhuce"],{"1dfa":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uToast:n("0fd9").default,uField:n("c108").default,uButton:n("d5f7").default,uVerificationCode:n("3912").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"index"},[n("u-toast",{ref:"uToast"}),n("v-uni-image",{staticClass:"pic1",attrs:{src:"/static/image/mcz9.png",mode:""}}),n("v-uni-view",{staticClass:"nav1"},[n("v-uni-view",{staticClass:"txt1"},[e._v("基本信息")]),n("u-field",{attrs:{"border-bottom":!1,label:"手机号",placeholder:"请填写手机号"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),n("u-field",{attrs:{"border-bottom":!1,label:"验证码",placeholder:"请填写验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("u-button",{attrs:{slot:"right",size:"mini",type:"success"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}},slot:"right"},[e._v(e._s(e.codeText))])],1),n("u-verification-code",{ref:"uCode",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"nav2"},[n("u-field",{attrs:{type:"password","border-bottom":!1,label:"设置密码",placeholder:"请输入8~20位字符，包含字..."},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("u-field",{attrs:{type:"password","border-bottom":!1,label:"确认密码",placeholder:"请再次确认登录密码"},model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}})],1),n("v-uni-view",{staticClass:"nav3"},[n("v-uni-view",{staticClass:"tit3-1"},[e._v("+")]),n("v-uni-view",{staticClass:"tit3-2"},[e._v("添加备用手机号")])],1),n("v-uni-view",{staticClass:"nav4"},[e._v("注册号码无法接通的情况下，用户将可能通过备用号码 联系您，为不影响您的服务质量，建议填写备用号码")]),n("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmit.apply(void 0,arguments)}}},[e._v("提交")])],1)},o=[]},"26b3":function(e,t,n){"use strict";var a=n("6c15"),r=n.n(a);r.a},"3fa9":function(e,t,n){"use strict";n.r(t);var a=n("1dfa"),r=n("ec57");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("787e"),n("26b3");var i,s=n("f0c5"),d=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"5e8a6fb0",null,!1,a["a"],i);t["default"]=d.exports},6606:function(e,t,n){var a=n("a57e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("3251f9ce",a,!0,{sourceMap:!1,shadowMode:!1})},"6c15":function(e,t,n){var a=n("8d51");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("2d005978",a,!0,{sourceMap:!1,shadowMode:!1})},7232:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=a(n("1da1")),o={data:function(){return{mobile:"",code:"",codeText:"",password:"",password2:""}},methods:{codeChange:function(e){this.codeText=e},getCode:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.uCode.canGetCode){t.next=9;break}return uni.showLoading({title:"正在获取验证码"}),t.next=4,e.$api.sms({type:0,phone:e.mobile});case 4:n=t.sent,200==n.code?e.$refs.uToast.show({title:"已发送验证码",type:"success"}):e.$refs.uToast.show({title:n.msg,type:"warning"}),setTimeout((function(){uni.hideLoading(),e.$refs.uCode.start()}),1e3),t.next=10;break;case 9:e.$u.toast("倒计时结束后再发送");case 10:case"end":return t.stop()}}),t)})))()},onSubmit:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t,!(t.password.length<8||t.password.length>20)){n.next=5;break}t.$refs.uToast.show({title:"请输入正确长度的密码",type:"warning"}),n.next=14;break;case 5:if(t.password===t.password2){n.next=9;break}t.$refs.uToast.show({title:"密码输入不一致",type:"warning"}),n.next=14;break;case 9:return n.next=11,t.$api.craftsmanRegister({phone:t.mobile,password:t.password,code:t.code});case 11:r=n.sent,e("log",r," at pages/wode/zhanghaodenglu/zhuce.vue:95"),200==r.code?(uni.setStorageSync("myUser",r.data.user),e("log","222222"," at pages/wode/zhanghaodenglu/zhuce.vue:98"),uni.setStorage({key:"token",data:r.data.token_info.access_token,success:function(){e("log","1111111"," at pages/wode/zhanghaodenglu/zhuce.vue:103"),a.$refs.uToast.show({url:"/pages/wode/zhanghaodenglu/zhanghaodenglu",title:"注册成功",type:"success"})}})):t.$refs.uToast.show({title:r.msg,type:"warning"});case 14:case"end":return n.stop()}}),n)})))()}}};t.default=o}).call(this,n("0de9")["log"])},"787e":function(e,t,n){"use strict";var a=n("6606"),r=n.n(a);r.a},"8d51":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pic1[data-v-5e8a6fb0]{height:%?262?%;width:%?750?%}.nav1[data-v-5e8a6fb0]{-webkit-transform:translateY(%?-64?%);transform:translateY(%?-64?%);margin-left:%?20?%;width:%?710?%;height:%?274?%;background:#fff;border-radius:%?16?%}.nav1 .txt1[data-v-5e8a6fb0]{margin-bottom:%?22?%;font-size:%?32?%;font-family:Segoe UI;font-weight:700;line-height:%?42?%;color:#000;margin-left:%?38?%;padding-top:%?24?%}.nav1[data-v-5e8a6fb0] .u-field{border-top:%?2?% solid #e6e6e6;padding:%?20?% %?20?%;margin:0 %?20?%}.nav2[data-v-5e8a6fb0]{-webkit-transform:translateY(%?-44?%);transform:translateY(%?-44?%);margin-left:%?20?%;width:%?710?%;height:%?176?%;background:#fff;border-radius:%?16?%}.nav2[data-v-5e8a6fb0] .u-field{padding:%?20?% %?20?%;margin:0 %?20?%}.nav2[data-v-5e8a6fb0] .u-field:nth-child(1){border-bottom:%?2?% solid #e6e6e6}.nav3[data-v-5e8a6fb0]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.nav3 .tit3-1[data-v-5e8a6fb0]{font-size:%?30?%;font-family:Segoe UI;font-weight:400;line-height:%?38?%;color:#4d8bfd}.nav3 .tit3-2[data-v-5e8a6fb0]{margin-left:%?16?%;font-size:%?28?%;font-family:Segoe UI;font-weight:400;line-height:%?38?%;color:#4d8bfd}.nav4[data-v-5e8a6fb0]{margin-top:%?70?%;margin-left:%?40?%;width:%?672?%;font-size:%?28?%;font-family:Segoe UI;font-weight:400;line-height:%?38?%;color:#999}.btn[data-v-5e8a6fb0]{margin-top:%?82?%;margin-left:%?228?%;width:%?296?%;height:%?96?%;background:#4d8bfd;border-radius:%?16?%;line-height:%?96?%;font-size:%?32?%;font-family:Segoe UI;font-weight:400;text-align:center;color:#fff}',""]),e.exports=t},a57e:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-5e8a6fb0]{background:#f2f3f5}body.?%PAGE?%[data-v-5e8a6fb0]{background:#f2f3f5}',""]),e.exports=t},ec57:function(e,t,n){"use strict";n.r(t);var a=n("7232"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a}}]);