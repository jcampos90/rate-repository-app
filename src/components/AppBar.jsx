import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingBottom: Constants.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: "#24292e",
  },

  link: {
    marginRight: 15,
  },
});

const TabOption = ({ path, text }) => (
  <Link to={path} style={styles.link}>
    <Text color="white" fontWeight="bold" fontSize="subheading">
      {text}
    </Text>
  </Link>
);

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TabOption path="/" text="Repositories" />
        <TabOption path="/signin" text="Sign In" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
