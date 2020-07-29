exports.ids = [8];
exports.modules = {

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/announcements/index.vue?vue&type=template&id=67e417a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_vm._ssrNode("<div class=\"container\">","</div>",[_c('BackButton',{attrs:{"pageTitle":"News"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(!_vm.announcements.length)?_vm._ssrNode("<p>","</p>",[_vm._ssrNode("No announcement yet.")],2):_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.announcements),function(announcement){return _vm._ssrNode("<li class=\"list-item\">","</li>",[_c('Announcement',{attrs:{"name":announcement.name,"description":announcement.description,"id":announcement.id}})],1)}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/announcements/index.vue?vue&type=template&id=67e417a4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Page/Announcement.vue?vue&type=template&id=b1e477c0&scoped=true&
var Announcementvue_type_template_id_b1e477c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result css-1 container"},[_vm._ssrNode("<article id=\"announcement-item-container\" class=\"item-container\" data-v-b1e477c0><a id=\"nuxtlink\""+(_vm._ssrAttr("href",'/announcements/' + _vm.id))+" data-v-b1e477c0><div id=\"news-title-desc\" data-v-b1e477c0><h2 id=\"announcement-title\" data-v-b1e477c0>"+_vm._ssrEscape(" "+_vm._s(_vm.name)+" ")+"</h2> <p class=\"block-with-text\" data-v-b1e477c0>"+_vm._ssrEscape(" "+_vm._s(_vm.description)+" ")+"</p></div></a></article>")])}
var Announcementvue_type_template_id_b1e477c0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Page/Announcement.vue?vue&type=template&id=b1e477c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Page/Announcement.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var Announcementvue_type_script_lang_js_ = ({
  props: ["id", "name", "description"]
});
// CONCATENATED MODULE: ./src/components/Page/Announcement.vue?vue&type=script&lang=js&
 /* harmony default export */ var Page_Announcementvue_type_script_lang_js_ = (Announcementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Page/Announcement.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(68)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Page_Announcementvue_type_script_lang_js_,
  Announcementvue_type_template_id_b1e477c0_scoped_true_render,
  Announcementvue_type_template_id_b1e477c0_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "b1e477c0",
  "82d3d39c"
  
)

/* harmony default export */ var Announcement = (component.exports);
// EXTERNAL MODULE: ./src/components/BackButton.vue + 4 modules
var BackButton = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/announcements/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var announcementsvue_type_script_lang_js_ = ({
  head: {
    title: 'News',
    meta: [{
      name: "viewport",
      content: 'width=device-width, initial-scale=1'
    }],
    return: {
      script: [{
        src: 'https://widget.cloudinary.com/v2.0/global/all.js'
      }]
    }
  },
  components: {
    Announcement: Announcement,
    BackButton: BackButton["a" /* default */]
  },

  data() {
    return {
      newAnnouncement: ''
    };
  },

  // Get the event on server side
  async asyncData() {
    const {
      data
    } = await graphql(GET_ANNOUNCEMENTS);
    return {
      announcements: data.allAnnouncements
    };
  },

  methods: {
    async getannouncements() {
      const {
        data
      } = await graphql(GET_ANNOUNCEMENTS);
      this.announcements = data.allAnnouncements;
    }

  }
});
// CONCATENATED MODULE: ./src/pages/announcements/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_announcementsvue_type_script_lang_js_ = (announcementsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/announcements/index.vue





/* normalize component */

var announcements_component = Object(componentNormalizer["a" /* default */])(
  pages_announcementsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e035dc60"
  
)

/* harmony default export */ var announcements = __webpack_exports__["default"] = (announcements_component.exports);

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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cf4d1d56", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_style_index_0_id_b1e477c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_style_index_0_id_b1e477c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_style_index_0_id_b1e477c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_style_index_0_id_b1e477c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_style_index_0_id_b1e477c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_style_index_0_id_b1e477c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".item-container[data-v-b1e477c0]{margin:2vw auto;align-items:center;justify-content:center}.page-title[data-v-b1e477c0]{font-size:2.5em}p[data-v-b1e477c0]{font-size:1rem;color:#414141}#announcement-title[data-v-b1e477c0]{font-size:20px;color:#1a73e8}#nuxtlink[data-v-b1e477c0]{text-decoration:none}#nuxtlink #image-container[data-v-b1e477c0]{width:100%;height:100%}#nuxtlink #image-container #announcement-image[data-v-b1e477c0]{width:100%;max-height:100vh;-o-object-fit:fill;object-fit:fill;border-radius:15px 15px 0 0}#nuxtlink #news-title-desc[data-v-b1e477c0]{padding:.4em 0 0 .4em}#announcement-item-container[data-v-b1e477c0]{border:1px solid #17a2b8;border-radius:15px;background-color:#fbfafd}.block-with-text[data-v-b1e477c0]{overflow:hidden;position:relative;line-height:1.3em;max-height:3.9em;text-align:justify;padding-right:1em}@media screen and (max-width:900px){.block-with-text[data-v-b1e477c0]{padding-right:1.1em}}@media screen and (min-width:900px){.block-with-text[data-v-b1e477c0]{padding-right:1.3em}}@media screen and (min-width:1200px){.block-with-text[data-v-b1e477c0]{padding-right:1.5em}}.block-with-text[data-v-b1e477c0]:before{content:\"...\";position:absolute;bottom:1px;right:1px}@media screen and (max-width:900px){.block-with-text[data-v-b1e477c0]:before{right:.8vw}}@media screen and (min-width:900px){.block-with-text[data-v-b1e477c0]:before{right:.5vw}}@media screen and (min-width:1200px){.block-with-text[data-v-b1e477c0]:before{right:.6vw}}.block-with-text[data-v-b1e477c0]:after{content:\"\";position:absolute;right:0;width:1em;height:1em}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=index.js.map