(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(t,e,s){var i=s(12);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(4).default)("d6080fd0",i,!1,{})},12:function(t,e,s){(t.exports=s(3)(!1)).push([t.i,"\n.card[data-v-25159242]{\n  padding-bottom: 40px;\n  height: 100%;\n}\nfooter[data-v-25159242]{\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n}\n",""])},13:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-content"},[this._t("title"),this._v(" "),this._t("content")],2),this._v(" "),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",attrs:{href:this.link,target:"_blank"}},[this._v("Read More")])])])};i._withStripped=!0;var o=s(0),n=!1;var a=function(t){n||s(11)},r=Object(o.a)({props:["link"]},i,[],!1,a,"data-v-25159242",null);r.options.__file="src/theme/Post.vue";var l={components:{"app-post":r.exports},data:function(){return{id:this.$route.params.id,postFrontend:[{id:1,title:"PWA Stats",content:"A community-driven list of stats and news related to Progressive Web Apps",link:"https://www.pwastats.com/"},{id:2,title:"A Comprehensive Guide To HTTP/2 Server Push",content:"No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!",link:"https://www.smashingmagazine.com/2017/04/guide-http2-server-push/"},{id:3,title:"So what’s this GraphQL thing I keep hearing about?",content:"Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.",link:"https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf"}],postsMobile:[{id:4,title:"State of The Mobile Gap Between Native and Web",content:"Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?",link:"https://remysharp.com/2016/05/28/state-of-the-gap"},{id:5,title:"Learning JavaScript Design Patterns",content:"Design patterns are reusable solutions to commonly occurring problems in software design.",link:"https://addyosmani.com/resources/essentialjsdesignpatterns/book/"},{id:6,title:"The Power of Custom Directives in Vue",content:"The beautiful thing about Vue is that it's incredibly feature-rich.",link:"https://css-tricks.com/power-custom-directives-vue/"}],posts:[]}},methods:{loadPosts:function(){"front-end"===this.id?this.posts=this.postFrontend:this.posts=this.postsMobile},created:function(){this.loadPosts(),console.log(this.$route.query.page)}},watch:{$route:function(t,e){this.id=t.params.id,this.loadPosts()}}},c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},t._l(t.posts,function(e){return s("div",{key:e.id,staticClass:"column is-one-third"},[s("app-post",{attrs:{link:e.link}},[s("h3",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),t._v(" "),s("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.content))])])],1)}))};c._withStripped=!0;var h=Object(o.a)(l,c,[],!1,null,null,null);h.options.__file="src/theme/Category.vue";e.default=h.exports}}]);