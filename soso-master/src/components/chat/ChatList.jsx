import { Avatar, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export const ChatListItem = ({
  username,
  messages,
  lastMessage,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UserChat", {
          username: username,
          messages: messages,
        });
      }}
    >
      <View style={styles.card}>
        <Avatar source={require("../../assets/pfp/profile_placeholder.jpeg")} />
        <View style={styles.info}>
          <View style={styles.nameDate}>
            <Text category="s1" status="primary" style={styles.name}>
              {username}
            </Text>
            <Text appearance="hint">02:00 PM</Text>
          </View>
          <Text>{lastMessage}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  nameDate: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    textTransform: "capitalize",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,

    paddingHorizontal: 15,
    paddingVertical: 10,

    // borderStyle: "solid",
    // borderWidth: 1,
    borderRadius: 15,

    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    // borderColor: "#ccc",
  },
  info: {
    flex: 1,
    gap: 5,
  },
});
