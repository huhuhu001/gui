(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test1111-testSave222"],{"0ae3":function(t,e,n){"use strict";n.r(e);var i=n("54ab"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},2227:function(t,e,n){var i=n("cba5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("7278cbc3",i,!0,{sourceMap:!1,shadowMode:!1})},"2e52":function(t,e,n){"use strict";var i=n("84ea"),o=n.n(i);o.a},"30f2":function(t,e,n){"use strict";var i=n("2227"),o=n.n(i);o.a},"30f7":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("7a76"),n("c9b5")},3107:function(t,e,n){"use strict";n.r(e);var i=n("5451"),o=n("0ae3");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("30f2");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"ff35d9f8",null,!1,i["a"],void 0);e["default"]=s.exports},"335f":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("b7c7"));n("0c26"),n("f7a5"),n("c223");var a={data:function(){return{searchQuery:"",showError:!1,allKeywords:["AI","自动生成","新闻","GC"],displayedKeywords:[],hiddenKeywords:[],isDropdownOpen:!1,dropdownButtonText:"更多",navIndex:0,navArr:[],newsArr:[{title:"震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"},{title:"震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"},{title:"震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"},{title:"震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"},{title:"震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"},{title:"震惊我一百年的宇宙超级无敌无怨无语无敌的小机密",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介。"}],currentPage:1,currentId:50,loading:0,typedText:"",fullText:"欢迎来，获取最新资讯欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！欢迎来，获取最新资讯！！",readNums:6,topOffset:0,aiSumupHeight:0,heightCheckInterval:null,contentPaddingTop:40}},mounted:function(){this.updateKeywords(),this.startTyping(),this.initHeightCheck()},beforeDestroy:function(){clearInterval(this.heightCheckInterval)},onLoad:function(){this.getNavData(),this.getNewsData()},onReachBottom:function(){console.log("到底部了"),2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsData())},methods:{handleSearch:function(){this.showError=!1,""!==this.searchQuery.trim()?this.searchQuery.length<3?this.showError=!0:console.log("搜索内容:",this.searchQuery):this.showError=!0},selectKeyword:function(t){this.searchQuery=t,this.handleSearch()},toggleDropdown:function(){this.isDropdownOpen=!this.isDropdownOpen},updateKeywords:function(){var t=document.querySelector(".keywords-container").offsetWidth,e=Math.floor(t/65);this.displayedKeywords=this.allKeywords.slice(0,e),this.hiddenKeywords=this.allKeywords.slice(e)},updateMarginTop:function(){},clickNav:function(t,e){this.navIndex=t,this.currentPage=1,this.currentId=e,this.newsArr=[{title:"组件内默认的标题",author:"张三",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。"}],this.loading=0,this.getNewsData(e)},goDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(e){console.log(e),t.navArr=e.data}})},getNewsData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:this.currentId,page:this.currentPage},success:function(e){console.log(e),0==e.data.length&&(t.loading=2),t.newsArr=[].concat((0,o.default)(t.newsArr),(0,o.default)(e.data))}})},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},startTyping:function(){var t=this,e=0;(function n(){e<t.fullText.length&&(t.typedText+=t.fullText.charAt(e),e++,setTimeout(n,50))})(),setTimeout(this.updateMarginTop(),2e3)},initHeightCheck:function(){var t=this;this.$nextTick((function(){t.checkAiSumupHeight(),t.heightCheckInterval=setInterval((function(){t.checkAiSumupHeight()}),1500)}))},checkAiSumupHeight:function(){var t=document.querySelector(".aiSumup");if(t){var e=t.offsetHeight;if(e!==this.aiSumupHeight){this.aiSumupHeight=e-20,this.contentPaddingTop=80;var n=this.aiSumupHeight+this.contentPaddingTop;this.contentPaddingTop=n}}else this.aiSumupHeight=0,console.log(".aiSumup 未找到");console.log(".aiSumup 的高度为: ".concat(this.aiSumupHeight,"px")),console.log(" content的高度为: ".concat(this.contentPaddingTop,"px"))}}};e.default=a},4733:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,i.default)(t)};var i=function(t){return t&&t.__esModule?t:{default:t}}(n("8d0b"))},5451:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"newsbox"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.item.title))]),t.item.looktime?n("v-uni-view",{staticClass:"source"},[n("v-uni-text",[t._v("浏览时间："+t._s(t.item.looktime))])],1):n("v-uni-view",{staticClass:"source"},[n("v-uni-text",[t._v(t._s(t.item.author))]),n("v-uni-text",[t._v("- "+t._s(t.item.time))])],1),n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"summary"},[n("p",[t._v(t._s(t.item.summary))])])],1)},o=[]},"54ab":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"AI知天下",author:"AI知天下",hits:668,picurl:"../../static/images/0.jpg",time:"10月10日",looktime:null,summary:"这是一篇文章的简介.这是一篇文章的这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.这是一篇文章的简介.。简介.这是一篇文章的简介.这是一篇文章的简介.。"}}}},data:function(){return{}}};e.default=i},"75c4":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home[data-v-0e930cd7]{display:flex;flex-direction:column;height:100vh;padding:0;box-sizing:border-box}.fixed-top[data-v-0e930cd7]{position:fixed;top:0;left:0;right:0;background-color:#e7e7e7;z-index:1000;padding:10px 15px 10px 15px;box-shadow:0 2px 4px rgba(0,0,0,.1);display:flex;flex-direction:column;\r\n  /* 子元素垂直排列 */align-items:center;\r\n  /* 水平居中对齐 */border-radius:0 0 20px 20px}.aiSumup[data-v-0e930cd7]{margin-top:3px;background-color:#acacac;font-weight:bolder;z-index:1000;padding:5px 7px;display:flex;flex-direction:column;justify-content:space-between;\r\n  /* 主轴两端对齐 */width:100%;max-width:600px;align-items:center;border-radius:15px;color:#545454;font-size:10px}.aiSumup .typing-text[data-v-0e930cd7]{margin-top:0;font-size:15px;color:#000;text-align:left}.search-row[data-v-0e930cd7]{display:flex;align-items:center;width:100%;max-width:600px}.search-row .left-text[data-v-0e930cd7]{font-size:15px;color:#000;margin-right:10px;font-weight:bolder}.search-row .right-text[data-v-0e930cd7]{font-size:16px;color:#666;margin-left:10px}.search-row .input-wrapper[data-v-0e930cd7]{display:flex;height:%?70?%;align-items:center;border:1px solid #ccc;border-radius:50px;overflow:hidden;flex:1\r\n  /* 占据剩余空间 */}.search-row .search-input[data-v-0e930cd7]{flex:1;padding:10px;border:none;outline:none;font-size:16px}.search-row .search-button[data-v-0e930cd7]{padding:10px 8px;background-color:#225074;color:#fff;border:none;cursor:pointer;font-size:16px}.search-row .search-button[data-v-0e930cd7]:active{background-color:#00438b}.keywords-container[data-v-0e930cd7]{display:flex;align-items:center;justify-content:space-between;\r\n  /* 主轴两端对齐 */width:100%;max-width:600px;margin-top:0}.keywords-container .keywords[data-v-0e930cd7]{display:flex;flex-wrap:wrap}.keywords-container .keywords[data-v-0e930cd7] :active{background-color:#00438b;color:#fff}.keywords-container .keyword[data-v-0e930cd7]{background-color:#f0f0f0;padding:5px 10px;margin:5px;border-radius:50px;font-size:14px;cursor:pointer}.dropdown[data-v-0e930cd7]{position:relative}.dropdown .dropdown-button[data-v-0e930cd7]{padding:0 10px;background-color:#225074;color:#fff;border:none;cursor:pointer;font-size:10px;border-radius:15px}.dropdown .dropdown-button[data-v-0e930cd7]:active{background-color:#00438b}.dropdown .dropdown-content[data-v-0e930cd7]{position:absolute;padding-right:10px;top:100%;left:0;background-color:#fff;border:1px solid #ccc;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,.1);min-width:100px;z-index:1}.dropdown .dropdown-keyword[data-v-0e930cd7]{display:block;border-radius:%?10?%;padding:5px 10px;background-color:#f0f0f0;color:#333;text-decoration:none;\r\n  /* 无下划线 */font-size:14px;cursor:pointer}.dropdown .dropdown-keyword[data-v-0e930cd7]:hover{background-color:#ddd}.navscroll[data-v-0e930cd7]{height:%?200?%;background:#f7f8fa;white-space:nowrap;position:fixed;left:0;z-index:10}.navscroll[data-v-0e930cd7] ::-webkit-scrollbar{width:4px!important;height:1px!important;overflow:auto!important;background:transparent!important;-webkit-appearance:auto!important;display:block}.navscroll .item[data-v-0e930cd7]{border:1px solid #ccc;border-radius:20px;font-size:%?40?%;display:inline-block;line-height:%?80?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-0e930cd7]{color:#31c27c}.content[data-v-0e930cd7]{padding:%?30?%;padding-top:%?80?%;background:#ccc;max-width:%?750?%;min-width:%?320?%;margin:0 auto;width:100%;box-sizing:border-box}.content .row[data-v-0e930cd7]{border:1px solid #efefef;padding:%?20?% 10px;background:#fff;border-radius:20px;margin-bottom:5px}@media (min-width:%?1200?%){.content[data-v-0e930cd7]{max-width:%?1200?%\r\n    /* 设置更大的最大宽度 */}}.nodata[data-v-0e930cd7]{display:flex;justify-content:center;align-items:center;flex-direction:column}.nodata uni-image[data-v-0e930cd7]{width:%?360?%}.nodata .text[data-v-0e930cd7]{color:#999;font-size:%?20?%}.loading[data-v-0e930cd7]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}.back-to-top[data-v-0e930cd7]{position:fixed;bottom:%?50?%;right:%?20?%;padding:%?10?% %?20?%;background-color:#225074;color:#fff;border:none;cursor:pointer;font-size:16px;border-radius:50px;z-index:1001;\r\n  /* 确保按钮在最上层 */box-shadow:0 2px 4px rgba(0,0,0,.1)}.back-to-top[data-v-0e930cd7]:active{background-color:#00438b}',""]),t.exports=e},"84ea":function(t,e,n){var i=n("75c4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("824de1e6",i,!0,{sourceMap:!1,shadowMode:!1})},"8a4b":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={newsbox:n("3107").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home"},[i("v-uni-view",{staticClass:"fixed-top"},[i("v-uni-view",{staticClass:"search-row"},[i("v-uni-text",{staticClass:"left-text"},[t._v("AI知天下")]),i("v-uni-view",{staticClass:"input-wrapper"},[i("v-uni-input",{staticClass:"search-input",attrs:{type:"text",placeholder:"搜一搜"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),i("v-uni-button",{staticClass:"search-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSearch.apply(void 0,arguments)}}},[t._v("搜索")])],1),i("v-uni-text",{staticClass:"right-text"},[t._v("天气")])],1),i("v-uni-view",{staticClass:"keywords-container"},[i("v-uni-view",{staticClass:"keywords"},t._l(t.displayedKeywords,(function(e,n){return i("v-uni-text",{key:n,staticClass:"keyword",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectKeyword(e)}}},[t._v(t._s(e))])})),1),t.hiddenKeywords.length>0?i("v-uni-view",{staticClass:"dropdown"},[i("v-uni-button",{staticClass:"dropdown-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleDropdown.apply(void 0,arguments)}}},[t._v(t._s(t.dropdownButtonText))]),t.isDropdownOpen?i("v-uni-view",{staticClass:"dropdown-content"},t._l(t.hiddenKeywords,(function(e,n){return i("v-uni-text",{key:n,staticClass:"dropdown-keyword",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectKeyword(e)}}},[t._v(t._s(e))])})),1):t._e()],1):t._e()],1),t.readNums/5>1?i("v-uni-view",{staticClass:"aiSumup"},[i("v-uni-view",{ref:"typingText",staticClass:"typing-text"},[i("v-uni-text",{attrs:{"user-select":!0}},[t._v(t._s(t.typedText))])],1),0!=t.readNums?i("v-uni-view",{staticClass:"readNums"},[i("v-uni-text",[t._v("包含"+t._s(t.readNums)+"条新闻")])],1):t._e()],1):t._e()],1),t._v("2"),i("v-uni-view",{staticClass:"content",style:{"padding-top":t.contentPaddingTop+"px"}},[t._l(t.newsArr,(function(e){return i("div",{key:e.id,staticClass:"row"},[i("newsbox",{attrs:{item:e},nativeOn:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}})],1)})),i("v-uni-button",{staticClass:"back-to-top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToTop.apply(void 0,arguments)}}},[t._v("回到顶部")])],2),t.newsArr.length?t._e():i("v-uni-view",{staticClass:"nodata"},[i("v-uni-image",{attrs:{src:n("adf6"),mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v("快马加鞭中...")])],1),t.newsArr.length?i("v-uni-view",{staticClass:"loading"},[1==t.loading?i("v-uni-view",[t._v("数据加载中...")]):t._e(),2==t.loading?i("v-uni-view",[t._v("没有更多了~~")]):t._e()],1):t._e()],1)},a=[]},a8f6:function(t,e,n){"use strict";n.r(e);var i=n("335f"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},adf6:function(t,e,n){t.exports=n.p+"static/images/nodata.png"},b7c7:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,i.default)(t)||(0,o.default)(t)||(0,a.default)(t)||(0,r.default)()};var i=s(n("4733")),o=s(n("d14d")),a=s(n("5d6b")),r=s(n("30f7"));function s(t){return t&&t.__esModule?t:{default:t}}},cba5:function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-ff35d9f8]{display:flex;flex-direction:column}.newsbox .title[data-v-ff35d9f8]{padding-left:%?10?%;font-size:%?30?%;font-weight:bolder;color:#333;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.newsbox .source[data-v-ff35d9f8]{padding-left:%?10?%;font-size:%?26?%;color:#b3b3b3;margin-bottom:%?10?%}.newsbox .pic[data-v-ff35d9f8]{width:100%;height:%?350?%}.newsbox .pic uni-image[data-v-ff35d9f8]{width:100%;height:100%;border-radius:%?30?%}.newsbox .summary[data-v-ff35d9f8]{font-size:%?25?%;color:#848484;line-height:1.5;margin-top:%?10?%}.newsbox .summary p[data-v-ff35d9f8]{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}',""]),t.exports=e},d14d:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},n("01a2"),n("e39c"),n("bf0f"),n("844d"),n("18f7"),n("de6c"),n("08eb")},ec5a:function(t,e,n){"use strict";n.r(e);var i=n("8a4b"),o=n("a8f6");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("2e52");var r=n("828b"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"0e930cd7",null,!1,i["a"],void 0);e["default"]=s.exports}}]);