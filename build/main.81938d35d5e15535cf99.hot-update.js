exports.id = "main";
exports.modules = {

/***/ "./src/app/components/ReduxCounter.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/ReduxCounter.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/oreo/Projets/create_appeo/src/app/components/ReduxCounter.jsx";



var ReduxCounter = function ReduxCounter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.decrement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "-"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.increment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "+"));
};

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function increment() {
      return dispatch({
        type: 'INCREMENT'
      });
    },
    decrement: function decrement() {
      return dispatch({
        type: 'DECREMENT'
      });
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ReduxCounter));

/***/ })

};
//# sourceMappingURL=main.81938d35d5e15535cf99.hot-update.js.map