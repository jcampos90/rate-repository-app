import React from "react";
import { TextInput as NativeTextInput, StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  textContainer:{
    borderColor:'gray',
    borderWidth:1,
    borderRadius:10,
    marginVertical:10,
    padding:10,

  },
  text:{
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles, style];

  return (
  <View style={[styles.textContainer,{borderColor: error? theme.colors.danger: 'gray'}]}>
    <NativeTextInput style={textInputStyle} {...props} />
    
  </View>);
};

export default TextInput;
