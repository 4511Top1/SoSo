import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import {
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  Button,
  TopNavigation,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const ChatBubble = ({ message, sender }) => {
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

const UserChat = ({ route, navigation }) => {
  const { username, messages } = route.params;

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary" style={styles.name}>
              {username}
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScreenView>
        <ScrollView>
          {messages.map((message) => {
            return (
              <ChatBubble message={message.message} sender={message.sender} />
            );
          })}
        </ScrollView>
      </ScreenView>
      <View>
        <Input
          style={{ marginHorizontal: 10, borderRadius: 20 }}
          placeholder="Message"
          accessoryRight={
            <TouchableOpacity>
              <Text>asdf</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </ScreenNormalView>
  );
};

export default UserChat;

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
