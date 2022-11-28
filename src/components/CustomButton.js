import React from "react";

import {
  TouchableOpacity,
  Text,
  View,
} from "react-native";

function CustomButton(props) {
    
  const handleClick = () => {
    if (!!props.callback) {
      props.callback();
    }
  };

  return (
    <TouchableOpacity
      disabled={props.disable}
      onPress={handleClick}
    >
      <View>
        <Text>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CustomButton;