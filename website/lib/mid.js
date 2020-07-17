"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _themebutton = _interopRequireDefault(require("./themebutton.jsx"));

var ToolBar = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement("div", null, _react.default.createElement("button", {
    ref: ref
  }, "ref"), _react.default.createElement(_themebutton.default, null));
});

var _default = ToolBar;
exports.default = _default;