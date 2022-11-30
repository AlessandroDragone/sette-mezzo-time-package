"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CustomButton = _interopRequireDefault(require("../components/CustomButton"));
var _native = require("@react-navigation/native");
var _BG = _interopRequireDefault(require("../assets/img/BG3.png"));
var _newLogoWhite = _interopRequireDefault(require("../assets/img/newLogoWhite.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//Colori
var brandColor = "#C40303";
var secondaryColor = "#7EBB64";
var tertiaryColor = "#688686";
var fourthColor = '#2D3E3E';
var fifthColor = '#445B3A';
var Lobby = function Lobby(props) {
  var navigation = (0, _native.useNavigation)();
  var route = (0, _native.useRoute)();
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    lobbyID = _useState2[0],
    setLobbyID = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    users = _useState4[0],
    setUsers = _useState4[1];
  var isDesktop = false;
  if (_reactNative.Platform.OS === "web") {
    isDesktop = true;
  }
  (0, _react.useEffect)(function () {
    if (route.params !== undefined) {
      console.log(route.params);
      var id = route.params.lobbyID;
      var _users = route.params.users;
      setLobbyID(id);
      setUsers(_users);
    }
  }, []);
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
    style: styles.waitView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.textWait
  }, "LOBBY ID: ", lobbyID)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.playersView
  }, users === null || users === void 0 ? void 0 : users.map(function (obj, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.player,
      key: key
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, obj.username), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "PRONTO"));
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: log,
    label: "START",
    isDesktop: isDesktop
  })));
};
var _default = Lobby;
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
  },
  playersView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 295,
    height: '45%',
    borderRadius: 30,
    backgroundColor: tertiaryColor,
    opacity: 0.7
  },
  player: {
    backgroundColor: secondaryColor,
    borderRadius: 5,
    width: '80%',
    height: '15%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  waitView: {
    backgroundColor: tertiaryColor,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: fourthColor,
    height: '7%',
    marginBottom: 10,
    justifyContent: 'center'
  },
  textWait: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: '10%'
  }
});