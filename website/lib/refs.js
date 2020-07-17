"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

//refs转发
function hocComponent(WrappedComponent) {
  var HocComponent =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(HocComponent, _React$Component);

    function HocComponent() {
      (0, _classCallCheck2.default)(this, HocComponent);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HocComponent).apply(this, arguments));
    }

    (0, _createClass2.default)(HocComponent, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prev) {
        console.log('old', prev);
        console.log('new', this.props);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            forwardRef = _this$props.forwardRef,
            rest = (0, _objectWithoutProperties2.default)(_this$props, ["forwardRef"]);
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({
          ref: forwardRef
        }, rest));
      }
    }]);
    return HocComponent;
  }(_react.default.Component);

  return _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(HocComponent, (0, _extends2.default)({}, props, {
      forwardRef: ref
    }));
  });
} // function InnerComponent(props) {
//     return(
//         <Button className="inner">按钮</Button>
//     )
// }


var InnerComponent = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(_button.default, (0, _extends2.default)({
    className: "inner",
    ref: ref
  }, props), "\u6309\u94AE");
});

var _default = hocComponent(InnerComponent);

exports.default = _default;