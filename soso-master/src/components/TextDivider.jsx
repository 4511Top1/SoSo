import React from "react";
import { View,  StyleSheet } from "react-native";
import {Text, Divider } from "@ui-kitten/components";

const TextDivider = ({ text }) => (
  <View style={styles.textDividerContainer}>
    <Divider style={styles.divider} />
    <View style={styles.textContainer}>
      <Text category="p1">{text}</Text>
    </View>
    <Divider style={styles.divider} />
  </View>
);

const styles = StyleSheet.create({
  textDividerContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    flex: 1,
    marginHorizontal: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    backgroundColor: "white", // Adjust to match the background color of your app
  },
  text: {
    // Styling for the text
  },
});

export default TextDivider;
