exports.ids = [7];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".result[data-v-113f40f8]{background-color:#fff}.css-1[data-v-113f40f8]{display:flex;flex-wrap:wrap;flex-direction:column;padding-bottom:5rem}.css-1[data-v-113f40f8],.item-container[data-v-113f40f8]{align-items:center;justify-content:center}.item-container[data-v-113f40f8]{margin:2vw auto}@media screen and (max-width:900px){#detail-item-container[data-v-113f40f8]{width:95%}#image-title-desc[data-v-113f40f8]{padding:0 .8em}#image-title-desc h1[data-v-113f40f8]{font-size:1.5em}#image-title-desc p[data-v-113f40f8]{font-size:1em;color:#555}}@media screen and (min-width:900px){#detail-item-container[data-v-113f40f8]{width:85%}#image-title-desc h1[data-v-113f40f8]{font-size:1.7em}#image-title-desc p[data-v-113f40f8]{font-size:1.2em;color:#555}}@media screen and (min-width:1200px){#detail-item-container[data-v-113f40f8]{width:60%}#back-boot[data-v-113f40f8]{visibility:hidden}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/announcements/_id/index.vue?vue&type=template&id=113f40f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result css-1"},[_vm._ssrNode("<div id=\"detail-item-container\" class=\"item-container\" data-v-113f40f8>","</div>",[_c('BackButton'),_vm._ssrNode(" <div id=\"image-title-desc\" data-v-113f40f8><h1 data-v-113f40f8>"+_vm._ssrEscape(" "+_vm._s(_vm.announcement.name)+" ")+"</h1> <p data-v-113f40f8>"+_vm._ssrEscape(" "+_vm._s(_vm.announcement.description)+" ")+"</p></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/announcements/_id/index.vue?vue&type=template&id=113f40f8&scoped=true&

// EXTERNAL MODULE: ./src/components/BackButton.vue + 4 modules
var BackButton = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/announcements/_id/index.vue?vue&type=script&lang=js&
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
//
const GET_ANNOUNCEMENTS = `
  query GetAnnouncements {
    allAnnouncements {
      id
      name
      announcementName
      description
    }
  }
`;

function graphql(query, variables = {}) {
  return fetch('http://localhost:3000/admin/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      variables,
      query
    })
  }).then(function (result) {
    return result.json();
  });
}


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head: {
    title: 'Announcements',
    meta: [{
      name: "viewport",
      content: 'width=device-width, initial-scale=1'
    }]
  },

  data() {
    return {
      newAnnouncement: ''
    };
  },

  // Get the event on server side
  async asyncData(context) {
    const {
      data
    } = await graphql(GET_ANNOUNCEMENTS);
    return {
      announcement: data.allAnnouncements.find(el => el.id === context.params.id)
    };
  },

  methods: {
    async getannouncements() {
      const {
        data
      } = await graphql(GET_ANNOUNCEMENTS);
      this.announcement = data.allAnnouncements.find(el => el.id === context.params.id);
    }

  },
  components: {
    BackButton: BackButton["a" /* default */]
  }
});
// CONCATENATED MODULE: ./src/pages/announcements/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var announcements_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/announcements/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  announcements_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "113f40f8",
  "f17e768a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1ae4ce68", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_style_index_0_id_5a71707a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_style_index_0_id_5a71707a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_style_index_0_id_5a71707a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_style_index_0_id_5a71707a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_style_index_0_id_5a71707a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackButton_vue_vue_type_style_index_0_id_5a71707a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#pageTitle[data-v-5a71707a]{text-align:center;flex:1 0 auto;font-size:1.5em}#pageTitle h1[data-v-5a71707a]{font-size:1.6rem;font-weight:300;margin-top:7px;margin-right:35px}#backarrow-title[data-v-5a71707a]{display:flex;position:-webkit-sticky;position:sticky;top:0;z-index:0;background-color:#fff}#back-button-container[data-v-5a71707a]:hover{background-color:hsla(0,0%,50.2%,.295);height:40px;border-radius:1.5rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BackButton.vue?vue&type=template&id=5a71707a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"backarrow-title"}},[_vm._ssrNode("<div id=\"back-button-container\" data-v-5a71707a>","</div>",[_c('b-icon',{attrs:{"id":"one","icon":"arrow-left-short","font-scale":"2.5","onclick":"history.back(-1)"}})],1),_vm._ssrNode(" <div id=\"pageTitle\" data-v-5a71707a><h1 data-v-5a71707a>"+_vm._ssrEscape(" "+_vm._s(_vm.pageTitle)+" ")+"</h1></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BackButton.vue?vue&type=template&id=5a71707a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BackButton.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BackButtonvue_type_script_lang_js_ = ({
  props: ["pageTitle"]
});
// CONCATENATED MODULE: ./src/components/BackButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BackButtonvue_type_script_lang_js_ = (BackButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/BackButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BackButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a71707a",
  "0e3f823e"
  
)

/* harmony default export */ var BackButton = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("c848b400", content, true, context)
};

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_113f40f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_113f40f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_113f40f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_113f40f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_113f40f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_113f40f8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

};;
//# sourceMappingURL=index.js.map