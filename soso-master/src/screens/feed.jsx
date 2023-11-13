import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>I am feed page!</Text>
    </View>
  );
};
export default Feed;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
