"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TabTitle = require("./TabTitle");

var _TabTitle2 = _interopRequireDefault(_TabTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    cursor: "default"
  },
  content: {
    flex: 1,
    border: "1px solid #ddd",
    padding: 5,
    borderRadius: "0 0 3px 3px"
  }
};

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = { active: 0 };

    return _this;
  }

  _createClass(Tabs, [{
    key: "handleClick",
    value: function handleClick(i) {

      this.setState({ active: i });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this2 = this;

      var active = this.state.active;


      return _react.Children.map(this.props.children, function (child, i) {
        var label = child.props.label;


        return _react2.default.createElement(
          _TabTitle2.default,
          {
            active: active === i,
            onClick: _this2.handleClick.bind(_this2, i),
            key: "panelTitle" + i
          },
          label
        );
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      var active = this.state.active;

      var children = _react.Children.toArray(nextProps.children);

      if (!children[active]) {
        while (!children[active]) {
          active--;
        }this.setState({ active: active });
      }
    }
  }, {
    key: "renderActivePanel",
    value: function renderActivePanel() {
      var children = this.props.children;
      var active = this.state.active;


      return _react.Children.toArray(children)[active];
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ["style"]);

      delete rest.children;

      return _react2.default.createElement(
        "div",
        _extends({}, rest, { style: _extends({}, styles.container, style) }),
        _react2.default.createElement(
          "ul",
          { style: styles.ul },
          this.renderHeader()
        ),
        _react2.default.createElement(
          "div",
          { style: styles.content },
          this.renderActivePanel()
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  style: _react.PropTypes.object,
  children: _react.PropTypes.node
};

exports.default = Tabs;