import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";


const ItemSeparator = () => <View style={styles.separator} />;

export default function RepositoryList() {

  const {repositories, loading} = useRepositories()
  

  if(loading) return <Text>Loading</Text>

  //console.log(repositories);

  return (
    <>
      <FlatList
        data={repositories}
        ItemSeparator={() => <ItemSeparator />}
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 20,
    width: 200,
    backgroundColor: "red",
  },
});
