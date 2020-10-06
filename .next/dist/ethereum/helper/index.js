'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signAndSendTransaction = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for implementing transection
var signAndSendTransaction = exports.signAndSendTransaction = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options, privateKey) {
        var signedTransaction;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _web2.default.eth.accounts.signTransaction(options, privateKey);

                    case 2:
                        signedTransaction = _context.sent;
                        _context.next = 5;
                        return _web2.default.eth.sendSignedTransaction(signedTransaction.rawTransaction);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function signAndSendTransaction(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxoZWxwZXJcXGluZGV4LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJvcHRpb25zIiwicHJpdmF0ZUtleSIsImV0aCIsImFjY291bnRzIiwic2lnblRyYW5zYWN0aW9uIiwic2lnbmVkVHJhbnNhY3Rpb24iLCJzZW5kU2lnbmVkVHJhbnNhY3Rpb24iLCJyYXdUcmFuc2FjdGlvbiIsInNpZ25BbmRTZW5kVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7Ozs7O0FBQ0EsQUFDQTswRUFBQTt3RkFBTyxpQkFBc0MsQUFBdEMsU0FBK0MsQUFBL0MsWUFBQTtZQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUFBO3dDQUFBOytCQUMyQixjQUFLLEFBQUwsSUFBUyxBQUFULFNBQWtCLEFBQWxCLGdCQUFrQyxBQUFsQyxTQUEyQyxBQUEzQyxBQUQzQjs7eUJBQ0M7QUFERCxxREFBQTt3Q0FBQTsrQkFFRyxjQUFLLEFBQUwsSUFBUyxBQUFULHNCQUErQixrQkFBa0IsQUFBakQsQUFGSDs7eUJBQUE7eUJBQUE7d0NBQUE7O0FBQUE7b0JBQUE7QUFBUDs7b0JBQXNCLEFBQXRCLGdDQUFBO2dDQUFBO0FBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWthc2gvRGVza3RvcC9ibG9ja2NoYWluLWludGVybi9CbG9ja2NoYWluLVJldmlldy1FbmdpbmUifQ==