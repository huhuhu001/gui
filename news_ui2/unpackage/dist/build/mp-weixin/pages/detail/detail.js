(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"18b2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("4b03"),a={data:function(){return{options:null,detail:{}}},onLoad:function(t){this.options=t,this.getDetail()},methods:{getDetail:function(){var e=this;t.request({url:"https://ku.qingnian8.com/dataApi/news/detail.php",data:this.options,success:function(i){console.log(i),i.data.posttime=(0,n.parseTime)(i.data.posttime),i.data.content=i.data.content.replace(/<img/gi,'<img style="max-width:100%"'),e.detail=i.data,e.saveHistory(),t.setNavigationBarTitle({title:e.detail.title})}})},saveHistory:function(){var e=this,i=t.getStorageSync("historyArr")||[],a={id:this.detail.id,classid:this.detail.classid,picurl:this.detail.picurl,title:this.detail.title,looktime:(0,n.parseTime)(Date.now())},o=i.findIndex((function(t){return t.id==e.detail.id}));o>=0&&i.splice(o,1),i.unshift(a),i=i.slice(0,10),t.setStorageSync("historyArr",i)}}};e.default=a}).call(this,i("543d")["default"])},"210a":function(t,e,i){"use strict";i.r(e);var n=i("18b2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4fb1":function(t,e,i){"use strict";var n=i("a3e6"),a=i.n(n);a.a},"57f1":function(t,e,i){"use strict";i.r(e);var n=i("bd10"),a=i("210a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4fb1");var r,u=i("f0c5"),s=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);e["default"]=s.exports},a3e6:function(t,e,i){},ae49:function(t,e,i){"use strict";(function(t){i("0886");n(i("66fd"));var e=n(i("57f1"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=i,t(e.default)}).call(this,i("543d")["createPage"])},bd10:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["ae49","common/runtime","common/vendor"]]]);