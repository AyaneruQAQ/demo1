"use strict";

var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireWildcard3(require("react"));

var _reactRouterDom = require("react-router-dom");

var Hooks = (0, _react.lazy)(function () {
  return slowImport(Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('./hooks'));
  }));
});
var BannerDemo = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('./motion'));
  });
});
var App = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(require('./App'));
  });
});

function slowImport(value) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(value);
    }, ms);
  });
} //修改 默认阻止页面跳转的modal


var getUserConfirmation = function getUserConfirmation(message, callback) {
  _modal.default.confirm({
    title: message,
    onCancel: function onCancel() {
      callback(false);
    },
    onOk: function onOk() {
      callback(true);
    }
  });
};

function Routes() {
  return _react.default.createElement(_reactRouterDom.BrowserRouter, {
    getUserConfirmation: getUserConfirmation
  }, _react.default.createElement(_react.Suspense, {
    fallback: _react.default.createElement("div", null, "loading...")
  }, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    path: "/banner",
    component: BannerDemo
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/app",
    component: App
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/hooks",
    component: Hooks
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    component: App
  }))));
}

var _default = Routes;
exports.default = _default;