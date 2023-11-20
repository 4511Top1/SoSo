import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>I am menu page!</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
