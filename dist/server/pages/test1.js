exports.ids = [14];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test1.vue?vue&type=template&id=d084cabe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"show-blogs"}},[_vm._ssrNode("<h1>All blog articles</h1> <input type=\"text\" placeholder=\"search blogs\""+(_vm._ssrAttr("value",(_vm.search)))+"> "+(_vm._ssrList((_vm.blogs),function(blog){return ("<div class=\"single-blog\"><h2>"+_vm._ssrEscape(" "+_vm._s(_vm._f("to-uppercase")(blog.title)))+"</h2> <article>"+_vm._ssrEscape(_vm._s(_vm._f("snippet")(blog.body)))+"</article></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/test1.vue?vue&type=template&id=d084cabe&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test1.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var test1vue_type_script_lang_js_ = ({
  data() {
    return {
      blogs: [],
      search: ''
    };
  },

  methods: {} // created() {
  //   this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
  //     this.blogs=data.body.slice(0,10);
  //   })
  // },

});
// CONCATENATED MODULE: ./src/pages/test1.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_test1vue_type_script_lang_js_ = (test1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/test1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_test1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d990db40"
  
)

/* harmony default export */ var test1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test1.js.map