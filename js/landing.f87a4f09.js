(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["landing"],{5732:function(t,a,r){},8958:function(t,a,r){"use strict";r("5732")},a523:function(t,a,r){"use strict";r("4de4"),r("b64b"),r("2ca0"),r("99af"),r("20f6"),r("4b85"),r("498a"),r("a15b");var e=r("2b0e");function n(t){return e["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,r){var e=r.props,n=r.data,s=r.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var o=n.attrs;if(o){n.attrs={};var i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));i.length&&(n.staticClass+=" ".concat(i.join(" ")))}return e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),a(e.tag,n,s)}})}var s=r("d9f7");a["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var r,e=a.props,n=a.data,o=a.children,i=n.attrs;return i&&(n.attrs={},r=Object.keys(i).filter((function(t){if("slot"===t)return!1;var a=i[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),o)}})},bede:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-container",{staticClass:"landing mt-n8 mt-xl-16"},[r("v-row",[r("v-card-title",{staticClass:"landing__title mx-auto text-uppercase text-center pa-0 pa-md-4 mb-0 mb-md-16"},[t._v(t._s(t.title))])],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"},on:{click:t.changeToCreators}},[r("router-link",{staticClass:"landing__link",attrs:{to:{name:"Home"}}},[r("v-img",{staticClass:"home__image mx-auto mt-0 mt-md-16 mt-lg-6 mt-xl-8 mb-0 mb-md-16",attrs:{width:"405",src:t.creatorsLogo,"lazy-src":t.creatorsLogoLazy},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),r("v-row",[r("v-card-title",{staticClass:"landing__subtitle landing__subtitle--creators mx-auto text-center my-0 my-xl-6"},[t._v(" "+t._s(t.creatordsSubtitle))])],1)],1)],1),r("v-spacer"),r("v-col",{attrs:{cols:"12",md:"5"},on:{click:t.changeToStandard}},[r("router-link",{staticClass:"landing__link",attrs:{to:{name:"Home"}}},[r("v-img",{staticClass:"home__image mx-auto mt-8 mt-md-12 mt-xl-16 mb-0 mb-md-16",attrs:{"max-height":"350",width:"350",src:t.standardLogo,"lazy-src":t.standardLogoLazy},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),r("v-row",[r("v-card-title",{staticClass:"landing__subtitle landing__subtitle--standard mx-auto text-uppercase text-center my-10 my-xl-16"},[t._v(" "+t._s(t.standardSubtitle))])],1)],1)],1)],1)],1)},n=[],s=r("5a50"),o={name:"Landing",components:{},data:function(){return{title:s["d"].title,creatorsLogo:s["d"].creatorsLogo,creatorsLogoLazy:s["d"].creatorsLogoLazy,creatordsSubtitle:s["d"].creatorsSubtitle,standardLogo:s["d"].standardLogo,standardLogoLazy:s["d"].standardLogoLazy,standardSubtitle:s["d"].standardSubtitle}},computed:{site:function(){return this.$store.state.site}},methods:{changeToCreators:function(){this.$store.dispatch("changeToCreators")},changeToStandard:function(){this.$store.dispatch("changeToStandard")}}},i=o,c=(r("8958"),r("2877")),d=r("6544"),l=r.n(d),u=r("99d9"),m=r("62ad"),g=r("a523"),f=r("adda"),p=r("490a"),v=r("0fd9b"),h=r("2fa4"),b=Object(c["a"])(i,e,n,!1,null,"4f648398",null);a["default"]=b.exports;l()(b,{VCardTitle:u["d"],VCol:m["a"],VContainer:g["a"],VImg:f["a"],VProgressCircular:p["a"],VRow:v["a"],VSpacer:h["a"]})}}]);
//# sourceMappingURL=landing.f87a4f09.js.map