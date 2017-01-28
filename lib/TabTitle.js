"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  common: {
    minWidth: 35,
    flex: "0 1 125px",
    height: 20,
    border: "1px solid #ddd",
    borderBottom: "none",
    padding: "0px 10px",
    backgroundColor: "#eee",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderRadius: "3px 3px 0 0"
  },
  active: {
    height: 23,
    backgroundColor: "white",
    transform: "translateY(1px)"
  },
  hover: { backgroundColor: "#f5f5f5" }
};

var TabTitle = function (_Component) {
  _inherits(TabTitle, _Component);

  function TabTitle(props) {
    _classCallCheck(this, TabTitle);

    var _this = _possibleConstructorReturn(this, (TabTitle.__proto__ || Object.getPrototypeOf(TabTitle)).call(this, props));

    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);

    _this.state = { hover: false };
    return _this;
  }

  _createClass(TabTitle, [{
    key: "handleMouseOver",
    value: function handleMouseOver(e) {

      this.setState({ hover: true });

      if (this.props.onMouseOver) this.props.onMouseOver(e);
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut(e) {

      this.setState({ hover: false });

      if (this.props.onMouseOut) this.props.onMouseOut(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          style = _props.style,
          active = _props.active,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["style", "active", "children"]);

      var defaultStyle = _extends({}, styles.common);

      if (active) defaultStyle = _extends({}, defaultStyle, styles.active);else if (this.state.hover) defaultStyle = _extends({}, defaultStyle, styles.hover);

      return _react2.default.createElement(
        "li",
        _extends({}, rest, {
          style: _extends({}, defaultStyle, style),
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut
        }),
        children
      );
    }
  }]);

  return TabTitle;
}(_react.Component);

TabTitle.propTypes = {
  style: _react.PropTypes.object,
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  onMouseOver: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func
};

exports.default = TabTitle;