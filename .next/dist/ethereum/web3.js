'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

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