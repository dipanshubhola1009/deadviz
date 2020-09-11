webpackHotUpdate("index.834c56f7",{

/***/ "./src/popup/deadlineList.js":
/*!***********************************!*\
  !*** ./src/popup/deadlineList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _pinnedDeadline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pinnedDeadline */ "./src/popup/pinnedDeadline.js");
var _jsxFileName = "/Users/alfian/Documents/Project/OSS/extension/deadviz/src/popup/deadlineList.js";





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  height: 100%;  
`;
const StyledList = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"])`
    padding: 16px;
`;

const DeadlineList = ({
  pinned,
  data,
  onPin,
  onUnpin,
  onDelete
}) => {
  const formatDate = date => `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  const formatDescription = item => `${formatDate(new Date(item.start))} ~ ${formatDate(new Date(item.end))}`;

  console.log(pinned);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, pinned ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pinnedDeadline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: pinned.name,
    description: formatDescription(pinned),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 23
    }
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledList, {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: (item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
      actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
        title: "Are you sure\uFF1F",
        okText: "Yes",
        placement: "left",
        cancelText: "No",
        onConfirm: () => onPin(index),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PushpinTwoTone"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 33
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
        title: "Are you sure\uFF1F",
        okText: "Yes",
        placement: "left",
        cancelText: "No",
        onConfirm: () => onDelete(item.id, index),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        danger: true,
        shape: "circle",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DeleteOutlined"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 41
          }
        }),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 33
        }
      }))],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
      title: item.name,
      description: formatDescription(item),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DeadlineList);

/***/ })

})
//# sourceMappingURL=index.834c56f7.0a58204b3a3f1adc3b0d.hot-update.js.map