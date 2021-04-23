'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _instance = require('../../ethereum/instance');

var _instance2 = _interopRequireDefault(_instance);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _helper = require('../../ethereum/helper');

var _privateKeyModal = require('../../component/private-key-modal/private-key-modal');

var _privateKeyModal2 = _interopRequireDefault(_privateKeyModal);

var _helper2 = require('../../component/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\pages\\products\\index.js?entry'; //impotant functionality of semantic ui is used


var ProductIndex = function (_Component) {
  (0, _inherits3.default)(ProductIndex, _Component);

  function ProductIndex() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProductIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProductIndex.__proto__ || (0, _getPrototypeOf2.default)(ProductIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      owner: '', // Host address in our case account[0]
      newProductName: '', //product name
      accounts: '',
      status: '', // product status
      loading: false, //  loading status
      errorMessage: '',
      privateKeyModal: false
    }, _this.closeModal = function () {
      _this.setState({ privateKeyModal: false });
    }, _this.addProduct = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var privateKey, rate, options;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                privateKey = sessionStorage.getItem('pkencoded');

                if (privateKey) {
                  _context.next = 7;
                  break;
                }

                _this.setState({ privateKeyModal: true });
                return _context.abrupt('return');

              case 7:
                privateKey = (0, _helper2.decode)(privateKey);

              case 8:

                _this.setState({ loading: true, errorMessage: '' });
                _this.setState({ status: 'Adding product...' });
                _context.prev = 10;
                _context.next = 13;
                return _instance2.default.methods.addProduct(_this.state.newProductName);

              case 13:
                rate = _context.sent;
                options = {
                  to: rate._parent._address,
                  data: rate.encodeABI(),
                  gas: '1000000'
                };
                _context.next = 17;
                return (0, _helper.signAndSendTransaction)(options, privateKey);

              case 17:
                _this.setState({ status: 'Product added!' });
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](10);

                _this.setState({ errorMessage: _context.t0.message });
                _this.setState({ status: 'Try again!' });

              case 24:
                _this.setState({ loading: false });

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[10, 20]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProductIndex, [{
    key: 'componentDidMount',

    //Things to be loaded first
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_web2.default) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.t0 = this;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  accounts: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

                _context2.t3 = this;
                _context2.next = 11;
                return _instance2.default.methods.owner().call();

              case 11:
                _context2.t4 = _context2.sent;
                _context2.t5 = {
                  owner: _context2.t4
                };

                _context2.t3.setState.call(_context2.t3, _context2.t5);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()

    //Function to add products

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      //if MetaMask is not there a msg display
      if (!_web2.default) return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'You need to install the MetaMask extension.');
      var privateKeyModal = this.state.privateKeyModal ? _react2.default.createElement(_privateKeyModal2.default, { closeModal: this.closeModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }) : '';
      //main page outlook
      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { raised: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'lightblue' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'violet', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Blockchain Review Engine ')))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.addProduct, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { focus: true, placeholder: 'Type product name...', value: this.state.newProductName, onChange: function onChange(event) {
          _this3.setState({ newProductName: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'facebook', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), 'Add new product'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), privateKeyModal, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, this.state.status)), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement(_routes.Link, { route: '/products/user-details', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tv', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), ' View User Details ')), _react2.default.createElement(_routes.Link, { route: '/products/show', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tv', __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), ' View Product Details ')), _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'tv', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), ' Sign Out '))))));
    }
  }]);

  return ProductIndex;
}(_react.Component);

exports.default = ProductIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9kdWN0c1xcaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJyYXRpbmciLCJGb3JtIiwiSW5wdXQiLCJTZWdtZW50IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRGl2aWRlciIsIk1lc3NhZ2UiLCJJY29uIiwiTGluayIsIndlYjMiLCJzaWduQW5kU2VuZFRyYW5zYWN0aW9uIiwiUHJpdmF0ZUtleU1vZGFsIiwiZGVjb2RlIiwiUHJvZHVjdEluZGV4Iiwic3RhdGUiLCJvd25lciIsIm5ld1Byb2R1Y3ROYW1lIiwiYWNjb3VudHMiLCJzdGF0dXMiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwicHJpdmF0ZUtleU1vZGFsIiwiY2xvc2VNb2RhbCIsInNldFN0YXRlIiwiYWRkUHJvZHVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcml2YXRlS2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibWV0aG9kcyIsInJhdGUiLCJvcHRpb25zIiwidG8iLCJfcGFyZW50IiwiX2FkZHJlc3MiLCJkYXRhIiwiZW5jb2RlQUJJIiwiZ2FzIiwibWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwiY2FsbCIsImJhY2tncm91bmRDb2xvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0EsQUFDbkIsQUFBUSxBQUFLLEFBQU0sQUFBUSxBQUFPLEFBQVUsQUFBUSxBQUFROztBQUM1RCxBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQThCOztBQUN2QyxBQUFPLEFBQXFCOzs7O0FBQzVCLEFBQVMsQUFBYzs7Ozs4SEFMcUU7OztJLEFBT3RGOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDSjthQUFRLEFBQ0MsSUFBSSxBQUNYO3NCQUZNLEFBRVUsSUFBRyxBQUNuQjtn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LDBCQUFBLEFBQUMsMENBQVEsU0FBVDtvQkFBQTtzQkFwQkYsQUFvQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0k7QUFESjt5QkFDSSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUEsQUFBZ0I7QUFBaEI7eUJBQWdCLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFoQixBQUFnQjtBQUFBO1VBdEJ0QixBQXFCRSxBQUNJLEFBRUoseUNBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDSTtBQURKO3lCQUNJLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQSxBQUFnQjtBQUFoQjt5QkFBZ0IsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQWhCLEFBQWdCO0FBQUE7VUF6QnRCLEFBd0JFLEFBQ0ksQUFFSiw0Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksQUFBQyx5Q0FBTyxXQUFSO29CQUFBO3NCQUFBLEFBQW1CO0FBQW5CO3lCQUFtQixBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBbkIsQUFBbUI7QUFBQTtVQWpDbkMsQUFDRSxBQUNFLEFBRUksQUFDRSxBQTJCRSxBQUNJLEFBT2pCOzs7OztBQUlGLEEsQUE3RzBCOztrQkE2RzFCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWthc2gvRGVza3RvcC9ibG9ja2NoYWluLWludGVybi9CbG9ja2NoYWluLVJldmlldy1FbmdpbmUifQ==