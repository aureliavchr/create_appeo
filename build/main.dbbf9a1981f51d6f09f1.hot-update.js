exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/counter */ "./src/reducers/counter.js");
var _jsxFileName = "/Users/oreo/Projets/create_appeo/src/server.js";









var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_reducers_counter__WEBPACK_IMPORTED_MODULE_7__["default"]);
var server = express__WEBPACK_IMPORTED_MODULE_3___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_3___default.a["static"]("/Users/oreo/Projets/create_appeo/public")).get('/*', function (req, res) {
  var context = {};
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["StaticRouter"], {
    context: context,
    location: req.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }))));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send("<!doctype html>\n    <html lang=\"\">\n    <head>\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n        <meta charset=\"utf-8\" />\n        <title>Welcome to Razzle</title>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n        ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n    </head>\n    <body>\n        <div id=\"root\">").concat(markup, "</div>\n    </body>\n</html>"));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.dbbf9a1981f51d6f09f1.hot-update.js.map