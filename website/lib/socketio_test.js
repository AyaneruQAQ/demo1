"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _socket = _interopRequireDefault(require("socket.io-client"));

var socket = (0, _socket.default)('http://localhost:3001');
socket.emit('sendMsg', {
  name: 'lizz'
});
socket.on('receiveMsg', function (data) {
  console.log('客户端接收到消息', data);
});