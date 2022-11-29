//react functionalities
import React, {useState} from "react";
import propTypes from "prop-types";

//Native components
import { TextInput, View, StyleSheet } from "react-native";

const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';

const CustomInput = (props) => {

  const [state, setState] = useState({
    value: "",
  });

  const handleChange = (e) => {

    setState({
      value: e,
    });

    if(!!props.callback){
      props.callback(e);
    }
  };

  return (
    <View>
      <TextInput
        secureTextEntry={props.password}
        style={styles.input}
        onChangeText={handleChange}
        value={state.value}
        placeholder={props.placeholder}
        placeholderTextColor={fourthColor}
      />
    </View>
  );
};

CustomInput.propTypes = {
  callback: propTypes.any,
  styleCss: propTypes.object,
  placeholder: propTypes.string,
  password: propTypes.bool,
  placeholderColor: propTypes.any,
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 300,
    marginVertical: 12,
    borderWidth: 5,
    padding: 10,
    backgroundColor: tertiaryColor,
    borderRadius: 5,
    borderColor: fourthColor,
    borderWidth: 5,
  },
})

export default CustomInput;