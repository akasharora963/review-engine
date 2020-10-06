webpackHotUpdate(6,{

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(845);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new _web2.default(window.web3.currentProvider); //with metamask
} else {
  var provider = new _web2.default.providers.HttpProvider('' //Add infura link
  );
  web3 = new _web2.default(provider); //without metamask
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSjs7QUFFQSxJQUFHLE9BQUEsQUFBTyxXQUFQLEFBQWdCLGVBQWMsT0FBTyxPQUFQLEFBQWMsU0FBL0MsQUFBc0Q7U0FDN0MsQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FEeUMsQUFDaEUsQUFBTyxBQUFxQixpQkFEb0MsQUFDaEUsQ0FBOEMsQUFDL0M7QUFGRCxPQUVLLEFBQ0g7TUFBTSxlQUFlLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQW5CLEFBQ2YsR0FERixBQUFpQixBQUNaLEFBRUw7QUFIaUI7U0FHVixBQUFJLGtCQUpSLEFBSUgsQUFBTyxBQUFTLFdBQVcsQUFDNUI7QUFDRDtrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWthc2gvRGVza3RvcC9ibG9ja2NoYWluLWludGVybi9CbG9ja2NoYWluLVJldmlldy1FbmdpbmUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\ethereum\\web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\ethereum\\web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4xZTliOTU5MTI1YzljY2I3OGNkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz9mZjM2MDNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJiB0eXBlb2Ygd2luZG93LndlYjMhPT0ndW5kZWZpbmVkJyl7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7IC8vd2l0aCBtZXRhbWFza1xyXG59ZWxzZXtcclxuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXHJcbiAgICAnJyAvL0FkZCBpbmZ1cmEgbGlua1xyXG4gICk7XHJcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTsgLy93aXRob3V0IG1ldGFtYXNrXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUdBO0FBRUE7QUFBQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9