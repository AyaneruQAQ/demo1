"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _App = require("./App");

function ThemeButton() {
  return _react.default.createElement(_App.MyContext.Consumer, null, function (_ref) {
    var value = _ref.value,
        toggle = _ref.toggle;
    return _react.default.createElement(_button.default, {
      onClick: toggle
    }, value);
  });
}

var _default = ThemeButton;
exports.default = _default;