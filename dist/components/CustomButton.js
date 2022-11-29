"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//React functionalities

//Native components

var secondaryColor = "#7EBB64";
var fifthColor = '#445B3A';
var CustomButton = function CustomButton(props) {
  var handleClick = function handleClick() {
    props.onClickCallback();
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPressOut: handleClick,
    style: [mobile.container, props.container],
    hitSlop: 20
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.isDesktop ? [mobile.text, mobile.desktop] : mobile.text
  }, props.label), props.children);
};
CustomButton.propTypes = {
  onClickCallback: _propTypes.default.func,
  children: _propTypes.default.any,
  label: _propTypes.default.any,
  container: _propTypes.default.any,
  textStyle: _propTypes.default.any,
  textStyleDesktop: _propTypes.default.any
};
var mobile = _reactNative.StyleSheet.create({
  container: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: fifthColor,
    width: 200,
    height: 80,
    marginVertical: 30,
    backgroundColor: secondaryColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: [{
      rotate: "-10deg"
    }]
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'black',
    transform: [{
      rotate: "10deg"
    }]
  }
});
var desktop = _reactNative.StyleSheet.create({
  TextTrackCue: {
    fontSize: 25
  }
});
var _default = CustomButton;
exports.default = _default;