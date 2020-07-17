"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ajax = ajax;

//封装常用函数
function ajax(method, url, data) {
  return new Promise(function (resolve, reject) {
    var handler = function handler() {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status === 200) {
        // console.log(xhr.responseText)
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText);
      }
    };

    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    xhr.send(data);
    xhr.onreadystatechange = handler;
  });
}