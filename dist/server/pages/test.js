exports.ids = [13];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test.vue?vue&type=template&id=c962ab5a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1 id=\"event-title\" data-v-c962ab5a>Events</h1> <div class=\"search-wrapper\" data-v-c962ab5a><input type=\"text\" placeholder=\"Search title..\""+(_vm._ssrAttr("value",(_vm.search)))+" data-v-c962ab5a></div> <div data-v-c962ab5a><div data-v-c962ab5a><ul data-v-c962ab5a>"+(_vm._ssrList((_vm.events),function(event){return ("<li class=\"list-item\" data-v-c962ab5a>"+(_vm._ssrList((_vm.filteredEvents),function(event){return ("<div class=\"list-item\" data-v-c962ab5a><h2 id=\"event-title\" data-v-c962ab5a>"+_vm._ssrEscape(" "+_vm._s(event.eventName)+" ")+"</h2></div>")}))+"</li>")}))+"</ul></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/test.vue?vue&type=template&id=c962ab5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/test.vue?vue&type=script&lang=js&
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
const GET_EVENTS = `
  query GetEvents {
    allEvents {
      id
      name
      eventName
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
      query: GET_EVENTS
    })
  }).then(function (result) {
    return result.json();
  });
}

/* harmony default export */ var testvue_type_script_lang_js_ = ({
  data() {
    return {
      newEvent: '',
      search: ''
    };
  },

  // Get the event on server side
  async asyncData() {
    const {
      data
    } = await graphql(GET_EVENTS);
    return {
      events: data.allEvents
    };
  },

  methods: {
    async getEvents() {
      const {
        data
      } = await graphql(GET_EVENTS);
      this.events = data.allEvents;
    }

  },

  mounted() {
    this.$nextTick(function () {
      window.addEventListener("scroll", function () {
        var navbar = document.getElementById("event-title-container");
        var nav_classes = navbar.classList;

        if (document.documentElement.scrollTop >= 5) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      });
    });
  } // computed: {
  //   eve: function() {
  //     return this.eventName.toUpperCase();
  //   }
  // }


});
// CONCATENATED MODULE: ./src/pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c962ab5a",
  "ee3f18be"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1aeee498", content, true, context)
};

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_c962ab5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_c962ab5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_c962ab5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_c962ab5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_c962ab5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_c962ab5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#event-title[data-v-c962ab5a]{color:#000;text-align:center;padding:1rem 1rem 0;font-size:1.8rem;transition:.3s;font-weight:300}.item-container[data-v-c962ab5a]{margin:2vw auto;align-items:center;justify-content:center}.page-title[data-v-c962ab5a]{font-size:2.5em}a[data-v-c962ab5a]{text-decoration:none;color:#111;display:block}ul[data-v-c962ab5a]{list-style:none}#event-item-container[data-v-c962ab5a]{border-radius:15px;box-shadow:0 .5px 5px .7px hsla(0,0%,50.2%,.363);padding:2vw}#event-title[data-v-c962ab5a]{font-size:2em;color:#1a73e8}@media screen and (max-width:900px){#event-title[data-v-c962ab5a]{font-size:1.5rem}.page-title[data-v-c962ab5a]{font-size:1.8rem;margin:.4rem 0 0;font-weight:400}#event-item-container[data-v-c962ab5a]{width:90%}}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=test.js.map