import { Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";

export const ChatBubble = ({ message, sender }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.bubble,
        sender == 0
          ? [styles.myBubble, { backgroundColor: theme["color-primary-100"] }]
          : [styles.otherBubble, { backgroundColor: theme["color-basic-500"] }],
      ]}
    >
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginVertical: 5,
  },
  myBubble: {
    backgroundColor: "#e1e1e1",
    borderBottomRightRadius: 0,
    alignSelf: "flex-end",
  },
  otherBubble: {
    backgroundColor: "#ccc",
    borderBottomLeftRadius: 0,
    alignSelf: "flex-start",
  },
  input: {
    flex: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  name: {
    textTransform: "capitalize",
  },
});
