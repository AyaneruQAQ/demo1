"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MyContext = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _util = require("./util");

var _reactRouterDom = require("react-router-dom");

var _mid = _interopRequireDefault(require("./mid"));

var _refs = _interopRequireDefault(require("./refs"));

// registerPlugin(FilePondPluginImageExifOrientation,FilePondPluginImagePreview)
var MyContext = _react.default.createContext({
  value: 'light',
  toggle: function toggle() {} //使子组件可以改变context的值

});

exports.MyContext = MyContext;

var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(App, _React$Component);

  function App(props) {
    var _this;

    (0, _classCallCheck2.default)(this, App);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props)); //不能用ref，refs关键字作为变量名

    _this.mybar = (0, _react.createRef)();
    _this.myref = (0, _react.createRef)();

    _this.toggle = function () {
      if (_this.state.value === 'light') {
        _this.setState({
          value: 'dark'
        });
      } else {
        _this.setState({
          value: 'light'
        });
      }
    };

    _this.state = {
      msg: '',
      imgs: '',
      value: 'light',
      toggle: _this.toggle,
      isStore: false
    };
    _this.get_msg = _this.get_msg.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.myref);
      console.log(this.mybar);
    }
  }, {
    key: "get_msg",
    value: function get_msg() {
      // console.log('hello')
      var self = this;
      (0, _util.ajax)("GET", "http://127.0.0.1:3001/users/msg", '').then(function (res) {
        var msg = JSON.parse(res)[0].username;
        self.setState({
          msg: msg
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var self = this;
      var url = 'http://127.0.0.1:3001/register';
      var data = JSON.stringify({
        username: self.state.name,
        password: self.state.pwd,
        type: 1
      });
      self.setState({
        isStore: false
      });
      (0, _util.ajax)("POST", url, data).then(function (res) {
        var da = JSON.parse(res);

        if (da.code === 1) {
          alert(da.msg);
        } else {
          alert('注册成功');
        }
      }).catch();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.Prompt, {
        when: this.state.isStore,
        message: "\u6709\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\uFF0C\u662F\u5426\u9000\u51FA\u8BE5\u9875\u9762\uFF1F"
      }), _react.default.createElement(MyContext.Provider, {
        value: {
          value: this.state.value,
          toggle: this.state.toggle
        }
      }, _react.default.createElement(_mid.default, {
        ref: this.mybar
      })), _react.default.createElement(_reactRouterDom.Link, {
        to: "/hooks"
      }, "hooks"), _react.default.createElement(_reactRouterDom.Link, {
        to: "/banner"
      }, "banner"), _react.default.createElement(_refs.default, {
        ref: this.myref
      }), _react.default.createElement("form", {
        onSubmit: function onSubmit(e) {
          _this2.handleSubmit(e);
        }
      }, "\u7528\u6237\u540D\uFF1A", _react.default.createElement("input", {
        type: "text",
        autoComplete: "new-password",
        value: this.state.name || '',
        onChange: function onChange(e) {
          _this2.setState({
            name: e.target.value,
            isStore: true
          });
        }
      }), "\u5BC6\u7801\uFF1A", _react.default.createElement("input", {
        type: "password",
        autoComplete: "new-password",
        value: this.state.pwd || '',
        onChange: function onChange(e) {
          _this2.setState({
            pwd: e.target.value
          });
        }
      }), _react.default.createElement("input", {
        type: "submit",
        value: "\u6CE8\u518C"
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      console.log(state);
      return state;
    }
  }]);
  return App;
}(_react.default.Component);

var _default = App;
exports.default = _default;