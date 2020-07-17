"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function Hooks() {
  var _useState = (0, _react.useState)(12),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      age = _useState2[0],
      setAge = _useState2[1]; // if(tof){
  //     const [fruit,setFruit] = useState('apple')
  //     tof = !tof
  // }


  var _useState3 = (0, _react.useState)([{
    text: 'learn hook'
  }]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      todos = _useState4[0],
      setTodos = _useState4[1];

  console.log(age, todos[0].text);
  return _react.default.createElement("div", null, "nihao");
}

var _default = Hooks;
exports.default = _default;