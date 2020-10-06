'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _semanticUiReact = require('semantic-ui-react');

var _helper = require('../helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\akash\\Desktop\\blockchain-intern\\Blockchain-Review-Engine\\component\\private-key-modal\\private-key-modal.js';


var PrivateKeyModal = function (_Component) {
    (0, _inherits3.default)(PrivateKeyModal, _Component);

    function PrivateKeyModal() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PrivateKeyModal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PrivateKeyModal.__proto__ || (0, _getPrototypeOf2.default)(PrivateKeyModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            modalSize: 'tiny',
            error: '',
            privateKey: ''
        }, _this.onModalChange = function (event) {
            return _this.setState({ privateKey: event.target.value });
        }, _this.onSubmitPrivateKey = function () {

            _this.setState({ error: '' });

            var privateKey = _this.state.privateKey;

            var firstTowChars = privateKey.substr(0, 2);

            if (firstTowChars !== '0x') {
                privateKey = '0x' + privateKey;
            }

            var validation = privateKey.match(/^0x[a-fA-F0-9]{64}$/g);

            if (!validation) {
                _this.setState({ error: 'Please enter a valid private key' });
            } else {
                sessionStorage.setItem('pkencoded', (0, _helper.encode)(privateKey));
                _this.props.closeModal();
            }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PrivateKeyModal, [{
        key: 'render',
        value: function render() {

            var errorMessage = this.state.error ? _react2.default.createElement(_semanticUiReact.Message, { error: true, content: this.state.error, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }) : '';

            return _react2.default.createElement(_semanticUiReact.Modal, { size: this.modalSize, open: true, onClose: this.props.closeModal, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Please Enter Your Private Key'), _react2.default.createElement(_semanticUiReact.Modal.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { placeholder: 'Example : 0x1c0247fe3b0a8ab339eedccdb269732d4436e617f2f35d4060320107332b2570', fluid: true, onChange: this.onModalChange, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }), errorMessage), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, onClick: this.props.closeModal, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Cancel'), _react2.default.createElement(_semanticUiReact.Button, { positive: true, onClick: this.onSubmitPrivateKey, content: 'OK', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })));
        }
    }]);

    return PrivateKeyModal;
}(_react.Component);

exports.default = PrivateKeyModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudFxccHJpdmF0ZS1rZXktbW9kYWxcXHByaXZhdGUta2V5LW1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTW9kYWwiLCJJbnB1dCIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJlbmNvZGUiLCJQcml2YXRlS2V5TW9kYWwiLCJzdGF0ZSIsIm1vZGFsU2l6ZSIsImVycm9yIiwicHJpdmF0ZUtleSIsIm9uTW9kYWxDaGFuZ2UiLCJzZXRTdGF0ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdFByaXZhdGVLZXkiLCJmaXJzdFRvd0NoYXJzIiwic3Vic3RyIiwidmFsaWRhdGlvbiIsIm1hdGNoIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicHJvcHMiLCJjbG9zZU1vZGFsIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU8sQUFBTyxBQUFROztBQUMvQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVGOzs7Ozs7Ozs7Ozs7OztrTyxBQUVqQjt1QkFBUSxBQUNPLEFBQ1g7bUJBRkksQUFFRyxBQUNQO3dCLEFBSEksQUFHUTtBQUhSLEFBQ0osaUIsQUFLSixnQkFBZ0IsaUJBQUE7bUJBQVMsTUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QSxpQixBQUVsRSxxQkFBcUIsWUFBTSxBQUV2Qjs7a0JBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTLEFBRXZCOztnQkFBSSxhQUFhLE1BQUEsQUFBSyxNQUF0QixBQUE0QixBQUU1Qjs7Z0JBQU0sZ0JBQWdCLFdBQUEsQUFBVyxPQUFYLEFBQWtCLEdBQXhDLEFBQXNCLEFBQXFCLEFBRTNDOztnQkFBSSxrQkFBSixBQUFzQixNQUFNLEFBQ3hCO29DQUFBLEFBQWtCLEFBQ3JCO0FBRUQ7O2dCQUFJLGFBQWEsV0FBQSxBQUFXLE1BQTVCLEFBQWlCLEFBQWlCLEFBRWxDOztnQkFBSSxDQUFKLEFBQUssWUFBWSxBQUNiO3NCQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUMxQjtBQUZELG1CQUVPLEFBQ0g7K0JBQUEsQUFBZSxRQUFmLEFBQXVCLGFBQWEsb0JBQXBDLEFBQW9DLEFBQU8sQUFDM0M7c0JBQUEsQUFBSyxNQUFMLEFBQVcsQUFDZDtBQUNKO0E7Ozs7O2lDQUVRLEFBRUw7O2dCQUFNLG9CQUFlLEFBQUssTUFBTCxBQUFXLHdCQUFRLEFBQUMsMENBQVEsT0FBVCxNQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTdCLEFBQW1DOzhCQUFuQztnQ0FBbkIsQUFBbUI7QUFBQTthQUFBLENBQW5CLEdBQXJCLEFBQXVGLEFBRXZGOzttQ0FDSSxBQUFDLHdDQUFNLE1BQU0sS0FBYixBQUFrQixXQUFXLE1BQTdCLEFBQW1DLE1BQU0sU0FBUyxLQUFBLEFBQUssTUFBdkQsQUFBNkQ7OEJBQTdEO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGtEQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx3Q0FBTSxhQUFQLEFBQW1CLGdGQUErRSxPQUFsRyxNQUF3RyxVQUFVLEtBQWxILEFBQXVIOzhCQUF2SDtnQ0FESixBQUNJLEFBQ0M7QUFERDtnQkFIUixBQUVJLEFBSUEsK0JBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLE9BQVIsTUFBYyxTQUFTLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs4QkFBbEM7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSwyQkFBQSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsU0FBUyxLQUExQixBQUErQixvQkFBb0IsU0FBbkQsQUFBMkQ7OEJBQTNEO2dDQVRaLEFBQ0ksQUFNSSxBQUVJLEFBSWY7QUFKZTs7Ozs7O0EsQUE3Q3lCOztrQixBQUF4QiIsImZpbGUiOiJwcml2YXRlLWtleS1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ha2FzaC9EZXNrdG9wL2Jsb2NrY2hhaW4taW50ZXJuL0Jsb2NrY2hhaW4tUmV2aWV3LUVuZ2luZSJ9