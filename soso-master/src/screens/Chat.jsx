import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScreenView } from "../components/CustomView";
import { useTheme, Text, Input, Layout, Card } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const ChatListItem = ({ username, message }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/pfp/mary.jpeg")} />
      <View style={styles.info}>
        <View style={styles.name}>
          <Text category="s1" status="primary">
            {username}
          </Text>
          <Text appearance="hint">02:00 PM</Text>
        </View>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const Chat = () => {
  const theme = useTheme();
  const [chatList, setChatList] = React.useState([
    {
      id: 1,
      name: "Mary",
      messages: [
        { id: 0, sender: 1, message: "what are you up to?" },
        { id: 1, sender: 0, message: "i'm catching the bus right now" },
        { id: 2, sender: 0, message: "talk to you later!" },
      ],
    },
    {
      id: 2,
      name: "Bob",
      messages: [
        { id: 0, sender: 1, message: "cool!" },
        { id: 1, sender: 0, message: "i'm going to go to the grocer" },
        { id: 2, sender: 0, message: "byeeeee" },
      ],
    },
    {
      id: 3,
      name: "Ralph",
      messages: [
        { id: 0, sender: 0, message: "wow" },
        { id: 1, sender: 1, message: "wow" },
        { id: 2, sender: 1, message: "thanks i had fun!" },
        { id: 3, sender: 0, message: "me too! are your legs ok?" },
        { id: 4, sender: 1, message: "yeah" },
        { id: 5, sender: 0, message: "should we go for a second round" },
        { id: 6, sender: 1, message: "u know what..." },
        { id: 7, sender: 1, message: "let's do something!" },
        { id: 8, sender: 0, message: "sure!" },
      ],
    },
  ]);

  return (
    <ScreenView>
      <Text category="h2" status="primary">
        Messages
      </Text>

      <ScrollView style={{ overflow: "visible" }}>
        <View style={styles.container}>
          <Input
            style={styles.input}
            accessoryLeft={
              <Iconify
                color={theme["color-basic-500"]}
                size={20}
                icon={"solar:minimalistic-magnifer-linear"}
              />
            }
            placeholder="Search for messages"
            // value={value}
            // onChangeText={(nextValue) => setValue(nextValue)}
          />
          <TouchableOpacity>
            <Iconify size={30} icon={"fluent:chat-add-20-regular"} />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {chatList.map((item) => (
            <ChatListItem
              username={item.name}
              message={item.messages.at(-1).message}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Chat;

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
  name: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
