//React functionalities
import React from "react";
import propTypes from "prop-types";

//Native components
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const secondaryColor = "#7EBB64";
const fifthColor = '#445B3A';

const CustomButton = (props) => {

  const handleClick = () => {
    props.onClickCallback();
  };

  return (
    <TouchableOpacity
      onPressOut={handleClick}
      style={[mobile.container, props.container]}
      hitSlop={20}
    >
      <Text style={props.isDesktop ? [mobile.text, mobile.desktop] : mobile.text}>
        {props.label}
      </Text>
      {props.children}
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onClickCallback: propTypes.func,
  children: propTypes.any,
  label: propTypes.any,
  container: propTypes.any,
  textStyle: propTypes.any,
  textStyleDesktop: propTypes.any,
};

const mobile = StyleSheet.create({
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
    transform: [{ rotate: "-10deg" }],
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'black',
    transform: [{ rotate: "10deg" }],
  },
})

const desktop = StyleSheet.create({
  TextTrackCue: {
    fontSize: 25,
  }
})

export default CustomButton;