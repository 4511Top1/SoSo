import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import UserChat from "./chat/UserChat";
import { ScreenNormalView, ScreenView } from "../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  TopNavigation,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { ChatListItem } from "../components/chat/ChatList";

const Chat = ({ navigation }) => {
  const theme = useTheme();
  const [chatList, setChatList] = React.useState([
    {
      id: 1,
      name: "mary",
      messages: [
        { id: 0, sender: 1, message: "what are you up to?" },
        { id: 1, sender: 0, message: "i'm catching the bus right now" },
        { id: 2, sender: 0, message: "talk to you later!" },
      ],
    },
    {
      id: 2,
      name: "bob",
      messages: [
        { id: 0, sender: 1, message: "cool!" },
        { id: 1, sender: 0, message: "i'm going to go to the grocer" },
        { id: 2, sender: 0, message: "byeeeee" },
      ],
    },
    {
      id: 3,
      name: "ralph",
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
      <ScreenView>
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
              onChangeText={(nextValue) => setValue(nextValue)}
            />
            <TouchableOpacity>
              <Iconify size={30} icon={"fluent:chat-add-20-regular"} />
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            {chatList.map((item) => (
              <ChatListItem
                key={item.id}
                username={item.name}
                messages={item.messages}
                lastMessage={item.messages.at(-1).message}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      </ScreenView>
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
});
