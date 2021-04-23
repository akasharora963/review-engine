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

var _jsxFileName = 'C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\pages\\users\\show.js?entry';


var UserShow = function (_Component) {
  (0, _inherits3.default)(UserShow, _Component);

  function UserShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserShow.__proto__ || (0, _getPrototypeOf2.default)(UserShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      productCount: 0,
      userCount: 0,
      products: [], // Auxillary array to store product details
      accounts: '',
      pageSize: 5,
      loading: false,
      errorMessage: '',
      privateKeyModal: false // default parameter to load page and create products array

      //things to be load first
    }, _this.closeModal = function () {
      _this.setState({ privateKeyModal: false });
    }, _this.addReview = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var privateKey, productId, productRating, x, options;
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
                productId = event.target.value;
                productRating = window.prompt("Choose a rating between 0 and 5:");

                _this.setState({ loading: true, errorMessage: '' });

                if (productRating) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return');

              case 13:
                window.alert("Adding Review, Please wait.."); // to alert  user
                _context.prev = 14;
                _context.next = 17;
                return _instance2.default.methods.addReview(productId, productRating);

              case 17:
                x = _context.sent;
                options = {
                  to: x._parent._address,
                  data: x.encodeABI(),
                  gas: '1000000'
                };
                _context.next = 21;
                return (0, _helper.signAndSendTransaction)(options, privateKey);

              case 21:

                console.log("oq voltou", x);; //ethereum block status details
                window.alert("Review Added, Refresh to see changes");
                _context.next = 31;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context['catch'](14);

                console.log(_context.t0);
                _this.setState({ errorMessage: _context.t0 });
                window.alert("Error Occured !!");

              case 31:
                _this.setState({ loading: false });

              case 32:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[14, 26]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserShow, [{
    key: 'componentDidMount',
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
                return _instance2.default.methods.userCount().call();

              case 11:
                _context2.t4 = _context2.sent;
                _context2.t5 = {
                  userCount: _context2.t4
                };

                _context2.t3.setState.call(_context2.t3, _context2.t5);

                this.getPage(0);

              case 15:
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
    //Auxillary function to load page and create products array

  }, {
    key: 'getPage',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(page) {
        var skip, limit, products, i, p;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(page < 0)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                _context3.t0 = this;
                _context3.next = 5;
                return _instance2.default.methods.productCount().call();

              case 5:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  productCount: _context3.t1
                };

                _context3.t0.setState.call(_context3.t0, _context3.t2);

                //productCount is set
                //Logic for creating product array
                skip = page * this.state.pageSize; // helper variables

                limit = skip + this.state.pageSize;

                if (!(skip > this.state.productCount)) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt('return');

              case 12:
                if (limit > this.state.productCount) {
                  limit = this.state.productCount;
                }
                // product array formation
                products = [];

                this.setState({ products: products });
                i = skip;

              case 16:
                if (!(i < limit)) {
                  _context3.next = 25;
                  break;
                }

                _context3.next = 19;
                return _instance2.default.methods.getProduct(i).call({ from: this.state.accounts[0] });

              case 19:
                p = _context3.sent;
                //product details fetched from contract
                products.push(p);
                this.setState({ products: products });

              case 22:
                i++;
                _context3.next = 16;
                break;

              case 25:

                console.log('products', this.state.products); //to know product array status

              case 26:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getPage(_x2) {
        return _ref4.apply(this, arguments);
      }

      return getPage;
    }()
    //function to add  REVIEW:

  }, {
    key: 'render',

    // frontend for show user page
    value: function render() {
      var _this3 = this;

      var privateKeyModal = this.state.privateKeyModal ? _react2.default.createElement(_privateKeyModal2.default, { closeModal: this.closeModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }) : '';
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_semanticUiReact.Segment, { raised: 'true', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'lightblue' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, color: 'violet', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'Blockchain Review Engine ')))), _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'facebook', floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), 'Sign Out')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, ' Products Info : '), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'Total Product Count  : ', this.state.productCount), _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, 'Total Voters : ', this.state.userCount - 1), _react2.default.createElement(_routes.Link, { route: '/users/voter-details', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'pink', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'eye', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), ' Voter Details ')), _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, this.state.products.length ? null : _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'No Product Added')), this.state.products.map(function (p) {
        return _react2.default.createElement('li', { className: 'list-group-item', key: p.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react2.default.createElement(_semanticUiReact.Divider, { section: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, value: p.id, onClick: _this3.addReview, loading: _this3.state.loading, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'arrow alternate circle up outline', __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }), 'Rate this product '), _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, label: 'Counts', value: p.reviewsCount, size: 'large', floated: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, compact: 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, p.title), _react2.default.createElement(_semanticUiReact.Segment, { inverted: true, compact: 'true', __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, 'Avg Rating :', (p.avgRating / 10).toFixed(1)));
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: '', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), privateKeyModal)));
    }
  }]);

  return UserShow;
}(_react.Component);

exports.default = UserShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx1c2Vyc1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInJhdGluZyIsIkZvcm0iLCJJbnB1dCIsIlNlZ21lbnQiLCJCdXR0b24iLCJDb250YWluZXIiLCJTdGF0aXN0aWMiLCJEaXZpZGVyIiwiTWVzc2FnZSIsIkhlYWRlciIsIkljb24iLCJMaW5rIiwid2ViMyIsInNpZ25BbmRTZW5kVHJhbnNhY3Rpb24iLCJQcml2YXRlS2V5TW9kYWwiLCJkZWNvZGUiLCJVc2VyU2hvdyIsInN0YXRlIiwicHJvZHVjdENvdW50IiwidXNlckNvdW50IiwicHJvZHVjdHMiLCJhY2NvdW50cyIsInBhZ2VTaXplIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInByaXZhdGVLZXlNb2RhbCIsImNsb3NlTW9kYWwiLCJzZXRTdGF0ZSIsImFkZFJldmlldyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcml2YXRlS2V5Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicHJvZHVjdElkIiwidGFyZ2V0IiwidmFsdWUiLCJwcm9kdWN0UmF0aW5nIiwid2luZG93IiwicHJvbXB0IiwiYWxlcnQiLCJtZXRob2RzIiwieCIsIm9wdGlvbnMiLCJ0byIsIl9wYXJlbnQiLCJfYWRkcmVzcyIsImRhdGEiLCJlbmNvZGVBQkkiLCJnYXMiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJjYWxsIiwiZ2V0UGFnZSIsInBhZ2UiLCJza2lwIiwibGltaXQiLCJpIiwiZ2V0UHJvZHVjdCIsImZyb20iLCJwIiwicHVzaCIsImJhY2tncm91bmRDb2xvciIsImxlbmd0aCIsIm1hcCIsImlkIiwicmV2aWV3c0NvdW50IiwidGl0bGUiLCJhdmdSYXRpbmciLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFB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QUFKO0FBQUEsT0FBQSxrQkFBSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEM0MsQUFDdUMsQUFBSSxBQUN4QywyQkFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksYUFBQTsrQkFDckIsY0FBQSxRQUFJLFdBQUosQUFBYyxtQkFBa0IsS0FBSyxFQUFyQyxBQUF1QztzQkFBdkM7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQywwQ0FBUSxTQUFUO3NCQUFBO3dCQURGLEFBQ0UsQUFDQTtBQURBOzRCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixPQUFPLEVBQXZCLEFBQXlCLElBQUksU0FBUyxPQUF0QyxBQUEyQyxXQUFXLFNBQVMsT0FBQSxBQUFLLE1BQXBFLEFBQTBFO3NCQUExRTt3QkFBQSxBQUFtRjtBQUFuRjsyQkFBbUYsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQW5GLEFBQW1GO0FBQUE7WUFGckYsQUFFRSxBQUNBLHVDQUFBLEFBQUMsNENBQVUsWUFBWCxNQUFzQixPQUF0QixBQUE0QixVQUFTLE9BQU8sRUFBNUMsQUFBOEMsY0FBYyxNQUE1RCxBQUFpRSxTQUFRLFNBQXpFLEFBQWlGO3NCQUFqRjt3QkFIRixBQUdFLEFBQ0E7QUFEQTs0QkFDQSxBQUFDLDBDQUFRLFVBQVQsTUFBa0IsU0FBbEIsQUFBMEI7c0JBQTFCO3dCQUFBLEFBQWtDO0FBQWxDO2FBSkYsQUFJRSxBQUFvQyxBQUNwQyx3QkFBQSxBQUFDLDBDQUFRLFVBQVQsTUFBa0IsU0FBbEIsQUFBMEI7c0JBQTFCO3dCQUFBO0FBQUE7V0FBOEMsaUJBQUMsRUFBQSxBQUFFLFlBQUgsQUFBYSxJQUFiLEFBQWlCLFFBTjVDLEFBQ3JCLEFBS0UsQUFBOEMsQUFBeUI7QUF4QmpGLEFBZ0JFLEFBRUcsQUFVSCwyQkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXVCLElBQUcsU0FBVyxLQUFBLEFBQUssTUFBMUMsQUFBZ0Q7b0JBQWhEO3NCQTVCRixBQTRCRSxBQUNDO0FBREQ7VUFoQ1IsQUFDRSxBQUVFLEFBQ0UsQUFrQ1A7Ozs7O0FBR0gsQSxBQS9IdUI7O2tCQStIdkIsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2FrYXNoL0Rlc2t0b3AvYmxvY2tjaGFpbi1pbnRlcm4vQmxvY2tjaGFpbi1SZXZpZXctRW5naW5lIn0=