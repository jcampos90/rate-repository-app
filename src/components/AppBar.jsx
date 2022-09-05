import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

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

const AppBar = ({isSignedIn,setIsSignedIn}) => {

  const { checkSignedIn, signOut } = useSignIn()
  const navigate = useNavigate()
  // const [isSignedIn,setIsSignedIn]=useState(false)


  useEffect(() => {
     setIsSignedIn( checkSignedIn() ? true:false)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    navigate('/signin')
    setIsSignedIn(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TabOption path="/" text="Repositories" />
        {
          isSignedIn
            ? (
              <TouchableOpacity onPress={handleSignOut}>
                <Text color="white" fontWeight="bold" fontSize="subheading">Sign Out</Text>
              </TouchableOpacity>
            )
            : <TabOption path="/signin" text="Sign In" />
        }

      </ScrollView>
    </View>
  );
};

export default AppBar;
