import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScreenView } from "../../components/CustomView";
import { useTheme, Text, Input, Layout, Card } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const UserChat = ({ route }) => {
  const { username, messages } = route.params;

  return (
    <ScreenView>
      <Text category="h2" status="primary" style={styles.name}>
        {username}
      </Text>
      <View>
        <Text>Hello there, {username}!</Text>
        {messages.map((message) => {
          return (
            <View>
              <Text>{message.message}</Text>
            </View>
          );
        })}
      </View>
    </ScreenView>
  );
};

export default UserChat;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
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
  list: {
    // maxHeight: 180,
    // flex: 1,
    gap: 15,
    marginVertical: 20,
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
    borderRadius: 5,

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
