import { View, Image, StyleSheet, Button } from "react-native";
import React from "react";
import Text from "./Text";

export default function RepositoryItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.ownerAvatarUrl }}
            style={{ height: 80, width: 80 }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text>{item.fullName}</Text>
          <Text numberOfLines={2}>{item.description}</Text>
          <Button title={item.language} />
        </View>
      </View>

      <View style={styles.stadisticsContainer}>
        <View style={styles.stadisticsElement}>
          <Text fontWeight="bold">{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.stadisticsElement}>
          <Text fontWeight="bold">{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.stadisticsElement}>
          <Text fontWeight="bold">{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.stadisticsElement}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 15,
    borderBottomColor: "lightgray",
  },
  titleContainer: {

    flexDirection: "row",
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    flex:1,
    padding: 10,
  },
  stadisticsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
  },
  stadisticsElement: {
    alignItems: "center",
  },
});
