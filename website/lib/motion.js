"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rcBannerAnim = _interopRequireWildcard(require("rc-banner-anim"));

var _rcTweenOne = _interopRequireDefault(require("rc-tween-one"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function BannerDemo() {
  console.log((0, _dayjs.default)(1528361259484).format());
  return _react.default.createElement(_rcBannerAnim.default, null, _react.default.createElement(_rcBannerAnim.Element, {
    key: "demo1"
  }, _react.default.createElement(_rcTweenOne.default, {
    animation: {
      x: -30,
      type: 'from'
    }
  }, "ant motion demo1")), _react.default.createElement(_rcBannerAnim.Element, {
    key: "demo2"
  }, _react.default.createElement(_rcTweenOne.default, {
    animation: {
      x: -30,
      type: 'from'
    }
  }, "ant motion demo2")));
}

var _default = BannerDemo;
exports.default = _default;