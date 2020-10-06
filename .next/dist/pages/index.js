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

var _instance = require('../ethereum/instance');

var _instance2 = _interopRequireDefault(_instance);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _helper = require('../ethereum/helper');

var _privateKeyModal = require('../component/private-key-modal/private-key-modal');

var _privateKeyModal2 = _interopRequireDefault(_privateKeyModal);

var _helper2 = require('../component/helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\pages\\index.js?entry'; //impotant functionality of semantic ui is used


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      owner: '',
      userName: '',
      userNumber: '',
      userCount: 0,
      accounts: '',
      status: '', // user status
      errorMessage: '',
      loading: false,
      pageSize: 5,
      users: [],
      flag: '',
      privateKeyModal: false
    }, _this.closeModal = function () {
      _this.setState({ privateKeyModal: false });
    }, _this.loginUser = function () {
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
                _this.setState({ status: 'Logging in...' });
                _context.prev = 10;
                _context.next = 13;
                return _instance2.default.methods.login(_this.state.userName, _this.state.userNumber);

              case 13:
                rate = _context.sent;

                console.log(rate);
                options = {
                  to: rate._parent._address,
                  data: rate.encodeABI(),
                  gas: '1000000'
                };
                _context.next = 18;
                return (0, _helper.signAndSendTransaction)(options, privateKey);

              case 18:
                if (rate.arguments[0] === 'Akash' && rate.arguments[1] === '1234567890') {
                  //Enter admin details for checking
                  _routes.Router.pushRoute('/products/');
                } else _routes.Router.pushRoute('/users/show');
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context['catch'](10);

                _this.setState({ errorMessage: _context.t0.message });
                _this.setState({ status: 'Try again!' });

              case 25:
                _this.setState({ loading: false });

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[10, 21]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
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
    //private key


    //Function to login

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      //if MetaMask is not there a msg display
      if (!_web2.default) return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'You need to install the MetaMask extension.');
      //main page outlook
      var privateKeyModal = this.state.privateKeyModal ? _react2.default.createElement(_privateKeyModal2.default, { closeModal: this.closeModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }) : '';

      return _react2.default.createElement(_react2.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { raised: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'lightblue' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'violet', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Blockchain Review Engine ')))), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_routes.Link, { route: '/users/register', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'google plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, ' Register '))), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.loginUser, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'Username')), _react2.default.createElement(_semanticUiReact.Input, { focus: true, placeholder: 'Type user name..', value: this.state.userName, onChange: function onChange(event) {
          _this3.setState({ userName: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'Mobile Number')), _react2.default.createElement(_semanticUiReact.Input, { focus: true, placeholder: 'Type mobile number..', value: this.state.userNumber, onChange: function onChange(event) {
          _this3.setState({ userNumber: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'facebook', loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add circle', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), 'Log In'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }))), privateKeyModal, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, this.state.status)), _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })))));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJhdGluZyIsIkZvcm0iLCJJbnB1dCIsIlNlZ21lbnQiLCJCdXR0b24iLCJDb250YWluZXIiLCJEaXZpZGVyIiwiTWVzc2FnZSIsIkljb24iLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsInNpZ25BbmRTZW5kVHJhbnNhY3Rpb24iLCJQcml2YXRlS2V5TW9kYWwiLCJkZWNvZGUiLCJJbmRleCIsInN0YXRlIiwib3duZXIiLCJ1c2VyTmFtZSIsInVzZXJOdW1iZXIiLCJ1c2VyQ291bnQiLCJhY2NvdW50cyIsInN0YXR1cyIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJwYWdlU2l6ZSIsInVzZXJzIiwiZmxhZyIsInByaXZhdGVLZXlNb2RhbCIsImNsb3NlTW9kYWwiLCJzZXRTdGF0ZSIsImxvZ2luVXNlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcml2YXRlS2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibWV0aG9kcyIsImxvZ2luIiwicmF0ZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwidG8iLCJfcGFyZW50IiwiX2FkZHJlc3MiLCJkYXRhIiwiZW5jb2RlQUJJIiwiZ2FzIiwiYXJndW1lbnRzIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwiY2FsbCIsImJhY2tncm91bmRDb2xvciIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0EsQUFDbkIsQUFBUSxBQUFLLEFBQU0sQUFBUSxBQUFPLEFBQVUsQUFBUSxBQUFROztBQUM1RCxBQUFRLEFBQUssQUFBYTs7QUFDMUIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBOEI7O0FBQ3ZDLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBUyxB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QTtzQkFBQSxBQUFrQjtBQUFsQjt5QkFBa0IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRHBCLEFBQ0UsQUFBa0IsQUFDbEIsOEJBQUEsQUFBQyx3Q0FBTyxPQUFSLE1BQWMsYUFBZCxBQUEwQixvQkFBbUIsT0FBUSxLQUFBLEFBQUssTUFBMUQsQUFBZ0UsVUFBVSxVQUFVLHlCQUFTLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsVUFBVyxNQUFBLEFBQU0sT0FBaEMsQUFBYyxBQUF5QixBQUFRO0FBQTdJO29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsMENBQVEsVUFBVDtvQkFBQTtzQkFBQSxBQUFrQjtBQUFsQjt5QkFBa0IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSHBCLEFBR0UsQUFBa0IsQUFDbEIsbUNBQUEsQUFBQyx3Q0FBTyxPQUFSLE1BQWMsYUFBZCxBQUEwQix3QkFBdUIsT0FBUSxLQUFBLEFBQUssTUFBOUQsQUFBb0UsWUFBWSxVQUFVLHlCQUFTLEFBQUM7aUJBQUEsQUFBSyxTQUFTLEVBQUMsWUFBYSxNQUFBLEFBQU0sT0FBbEMsQUFBYyxBQUEyQixBQUFRO0FBQXJKO29CQUFBO3NCQUxKLEFBQ0UsQUFJRSxBQUVBO0FBRkE7MkJBRUEsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFlBQVcsU0FBUyxLQUFBLEFBQUssTUFBaEQsQUFBc0Q7b0JBQXREO3NCQUFBLEFBQStEO0FBQS9EO3lCQUErRCxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBL0QsQUFBK0Q7QUFBQTtVQVBuRSxBQU9JLEFBQ0EsMkJBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUF1QixVQUFTLFNBQVcsS0FBQSxBQUFLLE1BQWhELEFBQXNEO29CQUF0RDtzQkFiUixBQUlBLEFBQ0ksQUFRSSxBQUdMO0FBSEs7WUFiUixBQWlCRSxpQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUF4QmQsQUFPRSxBQWlCRSxBQUFnQixBQUVsQiwwQkFBQSxBQUFDLDBDQUFRLFNBQVQ7b0JBQUE7c0JBL0JaLEFBQ0UsQUFDRSxBQUVJLEFBQ0UsQUEwQkUsQUFNYjtBQU5hOzs7Ozs7QUFVZixBLEFBakhtQjs7a0JBaUhuQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2FrYXNoL0Rlc2t0b3AvYmxvY2tjaGFpbi1pbnRlcm4vQmxvY2tjaGFpbi1SZXZpZXctRW5naW5lIn0=