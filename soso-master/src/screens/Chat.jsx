// Sub-screens
import UserChat from "./chat/UserChat";
export { UserChat };

import {
  Input,
  Layout,
  Text,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import Toast from "react-native-root-toast";
import { ScreenNormalView, ScreenView } from "../components/CustomView";
import { ChatListItem } from "../components/chat/ChatList";

const Chat = ({ navigation }) => {
  const theme = useTheme();
  const [chatList, setChatList] = React.useState([
    {
      name: "Mary",
      messages: [
        { sender: 1, message: "what are you up to?" },
        { sender: 0, message: "i'm catching the bus right now" },
        { sender: 0, message: "talk to you later!" },
      ],
    },
    {
      name: "Bob",
      messages: [
        { sender: 1, message: "cool!" },
        { sender: 0, message: "i'm going to go to the grocer" },
        { sender: 0, message: "byeeeee" },
      ],
    },
    {
      name: "Ralph",
      messages: [
        { sender: 0, message: "wow" },
        { sender: 1, message: "wow" },
        { sender: 1, message: "thanks i had fun!" },
        { sender: 0, message: "me too! are your legs ok?" },
        { sender: 1, message: "yeah" },
        { sender: 0, message: "should we go for a second round" },
        { sender: 1, message: "u know what..." },
        { sender: 1, message: "let's do something!" },
        { sender: 0, message: "sure!" },
      ],
    },
  ]);

  return (
    <ScreenNormalView>
      <TopNavigation
        style={{ marginLeft: 10 }}
        title={
          <Layout>
            <Text category="h2" status="primary" style={styles.name}>
              Chat
            </Text>
          </Layout>
        }
        alignment="start"
      />
      <ScrollView>
        <ScreenView>
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
            />
            <TouchableOpacity
              onPress={() => {
                Toast.show("In development", {
                  duration: Toast.durations.SHORT,
                  position: Toast.positions.TOP,
                  shadow: true,
                  hideOnPress: true,
                });
              }}
            >
              <Iconify size={30} icon={"fluent:chat-add-20-regular"} />
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            {chatList.map((item, index) => (
              <ChatListItem
                key={index}
                username={item.name}
                messages={item.messages}
                lastMessage={item.messages.at(-1).message}
                navigation={navigation}
              />
            ))}
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
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
  list: {
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
    borderRadius: 15,

    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    // borderColor: "#ccc",
  },
  info: {
    flex: 1,
    gap: 5,
  },
});
