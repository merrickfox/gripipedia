
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__(551);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/merrick/Projects/gripipedia/app/pages/index.js?entry';


var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',

		// static async getInitialProps ({ query }) {
		// 	console.log(query)
		// }

		value: function render() {
			var _props = this.props,
			    page = _props.page,
			    url = _props.url,
			    stories = _props.stories;

			var offset = (page - 1) * 30;
			return _react2.default.createElement(_page2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			});
		}
	}]);

	return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/merrick/Projects/gripipedia/app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/merrick/Projects/gripipedia/app/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(542);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(552);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(565);

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/merrick/Projects/gripipedia/app/components/page.js';

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement('div', { className: 'main', 'data-jsx': 4573259,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_meta2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('div', { className: 'page', 'data-jsx': 4573259,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: 4573259,
    css: '.main[data-jsx="4573259"]{width:85%;margin:auto;padding:10px 0 0 0}.page[data-jsx="4573259"]{color:#828282;background:#fff;padding:3px 10px}@media (max-width:750px){.main[data-jsx="4573259"]{padding:0;width:auto}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZYyxBQUdtQixBQUtJLEFBTUYsVUFWQSxBQVdDLElBTkcsT0FPaEIsQ0FYbUIsUUFLRixXQUpuQixNQUtBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVycmljay9Qcm9qZWN0cy9ncmlwaXBlZGlhL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgTWV0YSBmcm9tICcuL21ldGEnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG5cdFx0PE1ldGEgLz5cblx0XHQ8SGVhZGVyIC8+XG5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cblx0XHRcdHsgY2hpbGRyZW4gfVxuXHRcdDwvZGl2PlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4ge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgICB9XG4gICAgICAucGFnZSB7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblx0PC9kaXY+XG4pIl19 */\n/*@ sourceURL=components/page.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/merrick/Projects/gripipedia/app/components/page.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/merrick/Projects/gripipedia/app/components/page.js"); } } })();

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(542);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _nav = __webpack_require__(553);

var _nav2 = _interopRequireDefault(_nav);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/merrick/Projects/gripipedia/app/components/header.js';

exports.default = function () {
  return _react2.default.createElement('header', {
    'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', { className: 'left', 'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('span', { className: 'logo', 'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('span', { className: 'title', 'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Gripipedia'))), _react2.default.createElement('div', { className: 'nav', 'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_nav2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }))), _react2.default.createElement('div', { className: 'right', 'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/login', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { className: 'login', 'data-jsx': 2562175078,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'login'))), _react2.default.createElement(_style2.default, {
    styleId: 2562175078,
    css: 'header[data-jsx="2562175078"]{background:#57a5bf;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:14px}.logo[data-jsx="2562175078"]{margin:4px 5px 2px 4px;display:inline-block}.left[data-jsx="2562175078"]{-webkit-flex:9;-ms-flex:9;flex:9}.right[data-jsx="2562175078"]{-webkit-flex:1;-ms-flex:1;flex:1;text-align:right}.title[data-jsx="2562175078"]{font-weight:bold;display:inline-block;font-size:14px;text-decoration:none;padding:8px 10px 8px 4px;color:#000;vertical-align:top}a.login[data-jsx="2562175078"]{padding:10px;display:inline-block;font-size:11px;text-transform:uppercase;text-decoration:none;color:#000}.login[data-jsx="2562175078"]:hover{color:#fff}.nav[data-jsx="2562175078"]{display:inline-block;vertical-align:top}@media (max-width:750px){.title[data-jsx="2562175078"]{font-size:16px;padding-bottom:0}a.login[data-jsx="2562175078"]{padding:24px 10px 23px}.nav[data-jsx="2562175078"]{display:block}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCYyxBQUc0QixBQU1JLEFBS2hCLEFBSUEsQUFLVSxBQVVKLEFBU0YsQUFJVSxBQU1KLEFBS1EsQUFJVCxXQWxCbEIsRUFUdUIsQ0E0QnJCLENBVG1CLEVBN0JFLEVBcEJSLEVBMkNNLEVBckNFLEFBZ0RyQixTQUpBLENBdkNGLEFBSW1CLENBZ0JGLElBVkEsRUF1QmpCLElBckNBLEtBeUIyQixDQWhCM0IsR0FNdUIscUJBQ0ksQUFVSixtQkFoQ04sRUFpQ0osSUFWQSxPQVdiLEVBakNBLEVBdUJxQixtQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21lcnJpY2svUHJvamVjdHMvZ3JpcGlwZWRpYS9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxoZWFkZXI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG5cdFx0XHQ8TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPlxuXHRcdFx0XHQ8YT5cbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkdyaXBpcGVkaWE8L3NwYW4+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG5cdFx0XHRcdDxOYXYgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cblx0XHRcdDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWU9XCJsb2dpblwiPmxvZ2luPC9hPjwvTGluaz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1N2E1YmY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW46IDRweCA1cHggMnB4IDRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAubGVmdCB7XG4gICAgICAgIGZsZXg6IDk7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG5cbiAgICAgIGEubG9naW4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgLmxvZ2luOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5uYXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEubG9naW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTBweCAyM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cdDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=components/header.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/merrick/Projects/gripipedia/app/components/header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/merrick/Projects/gripipedia/app/components/header.js"); } } })();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(542);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(546);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/merrick/Projects/gripipedia/app/components/nav.js";

exports.default = function () {
  return _react2.default.createElement("ul", {
    "data-jsx": 1430221436,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(Item, { href: "/newest", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "new"), _react2.default.createElement(_style2.default, {
    styleId: 1430221436,
    css: "ul[data-jsx=\"1430221436\"]{list-style-type:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1jLEFBRzhCLHFCQUN2QiIsImZpbGUiOiJjb21wb25lbnRzL25hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVycmljay9Qcm9qZWN0cy9ncmlwaXBlZGlhL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8dWw+XG5cdFx0PEl0ZW0gaHJlZj1cIi9uZXdlc3RcIj5uZXc8L0l0ZW0+XG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cdDwvdWw+XG4pXG5cbmNvbnN0IEl0ZW0gPSAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiAoXG5cdDxsaT5cblx0XHQ8TGluayBwcmVmZXRjaCBocmVmPXtocmVmfT5cblx0XHRcdDxhPnsgY2hpbGRyZW4gfTwvYT5cblx0XHQ8L0xpbms+XG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L2xpPlxuKSJdfQ== */\n/*@ sourceURL=components/nav.js */"
  }));
};

var Item = function Item(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return _react2.default.createElement("li", {
    "data-jsx": 2236644831,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("a", {
    "data-jsx": 2236644831,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, children)), _react2.default.createElement(_style2.default, {
    styleId: 2236644831,
    css: "li[data-jsx=\"2236644831\"]{display:inline-block}a[data-jsx=\"2236644831\"]{display:inline-block;padding:10px;font-size:11px;text-transform:uppercase;text-decoration:none;color:#000}a[data-jsx=\"2236644831\"]:hover{color:#fff}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CYyxBQUc4QixBQUlBLEFBU1YsV0FDYixVQWJBLEFBSWUsYUFDRSxlQUNVLHlCQUNKLHFCQUNWLFdBQ2IiLCJmaWxlIjoiY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21lcnJpY2svUHJvamVjdHMvZ3JpcGlwZWRpYS9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcblx0PHVsPlxuXHRcdDxJdGVtIGhyZWY9XCIvbmV3ZXN0XCI+bmV3PC9JdGVtPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L3VsPlxuKVxuXG5jb25zdCBJdGVtID0gKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj17aHJlZn0+XG5cdFx0XHQ8YT57IGNoaWxkcmVuIH08L2E+XG5cdFx0PC9MaW5rPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblx0PC9saT5cbikiXX0= */\n/*@ sourceURL=components/nav.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/merrick/Projects/gripipedia/app/components/nav.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/merrick/Projects/gripipedia/app/components/nav.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(542);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _index = __webpack_require__(71);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/merrick/Projects/gripipedia/app/components/meta.js';
// import NProgress from 'nprogress'

// Router.onRouteChangeStart = () => NProgress.start()
// Router.onRouteChangeComplete = () => NProgress.done()
// Router.onRouteChangeError = () => NProgress.done()

exports.default = function () {
  return _react2.default.createElement('div', {
    'data-jsx': 1386891012,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', 'data-jsx': 1386891012,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1386891012,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/favicon.ico', 'data-jsx': 1386891012,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 1386891012,
    css: 'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;background:#eee}*{margin:0;padding:0;box-sizing:border-box}#nprogress{pointer-events:none}#nprogress .bar{background:#ff9300;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #ff9300,0 0 5px #ff9300;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlcUIsQUFHdUssQUFLckosQUFPVyxBQUlELEFBVUwsU0FwQkosS0FxQlEsS0FwQkksQUFVUCxDQUpqQixZQWVZLEVBVkcsT0FWZixDQXFCYyxLQVZOLE1BQ0MsQ0FVSyxNQVRELE1BVWtDLEtBVGxDLFdBQ2IsNEJBU2MsWUFDZ0MsMEJBaEM1QixnQkFDbEIsbUdBZ0NBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWV0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWVycmljay9Qcm9qZWN0cy9ncmlwaXBlZGlhL2FwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuLy8gUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG4vLyBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuLy8gUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxIZWFkPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjkzMDA7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmY5MzAwLCAwIDAgNXB4ICNmZjkzMDA7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/meta.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/merrick/Projects/gripipedia/app/components/meta.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/merrick/Projects/gripipedia/app/components/meta.js"); } } })();

/***/ })

},[540]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzQ0ODBlYzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmpzPzQ0ODBlYzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanM/NDQ4MGVjMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi5qcz80NDgwZWMzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWV0YS5qcz80NDgwZWMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnkgfSkge1xuXHQvLyBcdGNvbnNvbGUubG9nKHF1ZXJ5KVxuXHQvLyB9XG5cblx0cmVuZGVyICgpIHtcblx0XHRjb25zdCB7IHBhZ2UsIHVybCwgc3RvcmllcyB9ID0gdGhpcy5wcm9wc1xuXHRcdGNvbnN0IG9mZnNldCA9IChwYWdlIC0gMSkgKiAzMFxuXHRcdHJldHVybiA8UGFnZT48L1BhZ2U+XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBNZXRhIGZyb20gJy4vbWV0YSdcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cblx0XHQ8TWV0YSAvPlxuXHRcdDxIZWFkZXIgLz5cblxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuXHRcdFx0eyBjaGlsZHJlbiB9XG5cdFx0PC9kaXY+XG5cblx0XHQ8c3R5bGUganN4PntgXG4gICAgICAubWFpbiB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICAgIH1cbiAgICAgIC5wYWdlIHtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L2Rpdj5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3BhZ2UuanMiLCJpbXBvcnQgTmF2IGZyb20gJy4vbmF2J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxoZWFkZXI+XG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG5cdFx0XHQ8TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPlxuXHRcdFx0XHQ8YT5cbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgIDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkdyaXBpcGVkaWE8L3NwYW4+XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG5cdFx0XHRcdDxOYXYgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cblx0XHRcdDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWU9XCJsb2dpblwiPmxvZ2luPC9hPjwvTGluaz5cblx0XHQ8L2Rpdj5cblxuXHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1N2E1YmY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLmxvZ28ge1xuICAgICAgICBtYXJnaW46IDRweCA1cHggMnB4IDRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAubGVmdCB7XG4gICAgICAgIGZsZXg6IDk7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHggOHB4IDRweDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG5cbiAgICAgIGEubG9naW4ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgLmxvZ2luOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5uYXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEubG9naW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTBweCAyM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cdDwvaGVhZGVyPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcblx0PHVsPlxuXHRcdDxJdGVtIGhyZWY9XCIvbmV3ZXN0XCI+bmV3PC9JdGVtPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L3VsPlxuKVxuXG5jb25zdCBJdGVtID0gKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgcHJlZmV0Y2ggaHJlZj17aHJlZn0+XG5cdFx0XHQ8YT57IGNoaWxkcmVuIH08L2E+XG5cdFx0PC9MaW5rPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblx0PC9saT5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL25hdi5qcyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuLy8gUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG4vLyBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuLy8gUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxIZWFkPlxuXHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHQ8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuXHRcdDwvSGVhZD5cblx0XHQ8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjkzMDA7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmY5MzAwLCAwIDAgNXB4ICNmZjkzMDA7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWV0YS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7O0FBVEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFKQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7O0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTs7QUFKQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        