import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  Button,
  TopNavigation,
  Icon,
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
  const theme = useTheme();
  const { username, messages } = route.params;

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Avatar
                source={require("../../assets/pfp/profile_placeholder.jpeg")}
              />
              <Text category="h2" status="primary" style={styles.name}>
                {username}
              </Text>
            </View>
          </TouchableOpacity>
        }
        alignment="start"
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={47}
        style={{ flex: 1 }}
        behavior="padding"
      >
        <ScreenView>
          <ScrollView style={{ flex: 1 }}>
            {messages.map((message) => {
              return (
                <ChatBubble
                  key={message.id}
                  message={message.message}
                  sender={message.sender}
                />
              );
            })}
          </ScrollView>
        </ScreenView>
        <Layout
          style={{
            paddingVertical: 8,
            borderStyle: "solid",
            borderColor: theme["color-basic-400"],
            borderTopWidth: 1,
          }}
        >
          <View
            style={{
              gap: 10,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Input
              style={{ flex: 1, borderRadius: 20 }}
              placeholder="Message"
            />
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: theme["color-primary-500"],
                  height: 38,
                  width: 38,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Iconify
                  size={25}
                  color={theme["color-basic-100"]}
                  icon="solar:arrow-up-linear"
                />
              </View>
            </TouchableOpacity>
          </View>
        </Layout>
      </KeyboardAvoidingView>
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
