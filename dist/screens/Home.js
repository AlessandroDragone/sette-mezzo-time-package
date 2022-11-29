"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CustomButton = _interopRequireDefault(require("../components/CustomButton"));
var _BG = _interopRequireDefault(require("../assets/img/BG2.png"));
var _newLogoWhite = _interopRequireDefault(require("../assets/img/newLogoWhite.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//React functionalities

//Native components

//Components

// media

// colori
var brandColor = "#C40303";
var secondaryColor = "#7EBB64";
var tertiaryColor = "#688686";
var fourthColor = '#2D3E3E';
var fifthColor = '#445B3A';
var Home = function Home(props) {
  var isDesktop = false;
  if (_reactNative.Platform.OS === "web") {
    isDesktop = true;
  }
  var log = function log() {};
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.mainView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, {
    source: _BG.default,
    resizeMode: "cover",
    style: styles.ImageBackground
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: '20%',
      marginVertical: 30
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _newLogoWhite.default,
    style: styles.LogoImage,
    resizeMode: "contain"
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: log,
    label: "ENTRA IN LOBBY",
    isDesktop: isDesktop
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: log,
    label: "CREA LOBBY",
    isDesktop: isDesktop
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: log,
    label: "IMPOSTAZIONI",
    isDesktop: isDesktop
  })));
};
var _default = Home;
exports.default = _default;
var styles = _reactNative.StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  LogoImage: {
    width: 200,
    height: "100%",
    position: "absolute",
    top: 10,
    right: -20
  }
});