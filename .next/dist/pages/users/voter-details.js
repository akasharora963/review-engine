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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\pages\\users\\voter-details.js?entry';


var VoterDetails = function (_Component) {
  (0, _inherits3.default)(VoterDetails, _Component);

  function VoterDetails() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, VoterDetails);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = VoterDetails.__proto__ || (0, _getPrototypeOf2.default)(VoterDetails)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      products: [],
      accounts: '',
      productCount: 0,
      pageSize: 5 //default parameter to load page
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(VoterDetails, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_web2.default) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _context.t0 = this;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                _context.t1 = _context.sent;
                _context.t2 = {
                  accounts: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                this.getPage(0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()

    //Auxillary function load page

  }, {
    key: 'getPage',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(page) {
        var skip, limit, products, i, p;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(page < 0)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return');

              case 2:
                _context2.t0 = this;
                _context2.next = 5;
                return _instance2.default.methods.productCount().call();

              case 5:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  productCount: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

                skip = page * this.state.pageSize;
                limit = skip + this.state.pageSize;

                if (!(skip > this.state.productCount)) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt('return');

              case 12:
                if (limit > this.state.productCount) {
                  limit = this.state.productCount;
                }

                products = []; //set products array

                this.setState({ products: products });
                i = skip;

              case 16:
                if (!(i < limit)) {
                  _context2.next = 25;
                  break;
                }

                _context2.next = 19;
                return _instance2.default.methods.getProduct(i).call({ from: this.state.accounts[0] });

              case 19:
                p = _context2.sent;
                // get details of product
                products.push(p);
                this.setState({ products: products });

              case 22:
                i++;
                _context2.next = 16;
                break;

              case 25:

                console.log('products', this.state.products);

              case 26:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPage(_x) {
        return _ref3.apply(this, arguments);
      }

      return getPage;
    }()

    //frontend to load details  page

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { raised: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'lightblue' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_routes.Link, { route: '/users/show', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'facebook', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), 'Go to Home page')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, ' Voters Info : '), _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.state.products.length ? null : _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'No info available'), this.state.products.map(function (p) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement('li', { className: 'list-group-item', key: p.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement(_semanticUiReact.Header, { size: 'medium', __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, 'Product  : ', p.title, ' '), p.pvoters.length ? _react2.default.createElement(_semanticUiReact.Grid, { columns: 3, divided: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, _react2.default.createElement(_semanticUiReact.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, 'Address')), _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react2.default.createElement(_semanticUiReact.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, 'Mobile Number')), _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, _react2.default.createElement(_semanticUiReact.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, 'Rating'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, p.pvoters.map(function (arr) {
          return _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, arr);
        })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        }, p.pvoter_number.map(function (arr) {
          return _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, arr);
        })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, p.rating.map(function (arr) {
          return _react2.default.createElement('p', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          }, arr);
        })))) : null, _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        })));
      })))));
    }
  }]);

  return VoterDetails;
}(_react.Component);

exports.default = VoterDetails;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx1c2Vyc1xcdm90ZXItZGV0YWlscy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJhdGluZyIsIkZvcm0iLCJJbnB1dCIsIkdyaWQiLCJTZWdtZW50IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiU3RhdGlzdGljIiwiRGl2aWRlciIsIk1lc3NhZ2UiLCJIZWFkZXIiLCJJY29uIiwiTGluayIsIndlYjMiLCJWb3RlckRldGFpbHMiLCJzdGF0ZSIsInByb2R1Y3RzIiwiYWNjb3VudHMiLCJwcm9kdWN0Q291bnQiLCJwYWdlU2l6ZSIsImV0aCIsImdldEFjY291bnRzIiwic2V0U3RhdGUiLCJnZXRQYWdlIiwicGFnZSIsIm1ldGhvZHMiLCJjYWxsIiwic2tpcCIsImxpbWl0IiwiaSIsImdldFByb2R1Y3QiLCJmcm9tIiwicCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJ0aXRsZSIsInB2b3RlcnMiLCJhcnIiLCJwdm90ZXJfbnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBSyxBQUFNLEFBQUssQUFBUSxBQUFPLEFBQVUsQUFBVSxBQUFRLEFBQVEsQUFBTzs7QUFDbEYsQUFBUSxBQUFXOztBQUNuQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7O3dOLEFBRUo7Z0JBQVEsQUFDSyxBQUNYO2dCQUZNLEFBRUssQUFDWDtvQkFITSxBQUdTLEFBQ2Y7Z0JBSk0sQUFJSyxFLEFBSkwsQUFJTztBQUpQLEFBQ047Ozs7Ozs7Ozs7O0EsQUFPSTs7Ozs7Ozs7OEIsQUFDSjs7dUJBQStCLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7Ozs7QTtBQUF6Qjs7NEIsQUFBVixvQ0FDTDs7cUJBQUEsQUFBSyxRQUFMLEFBQWE7Ozs7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