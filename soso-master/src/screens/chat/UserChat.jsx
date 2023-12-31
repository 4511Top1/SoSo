import {
  Avatar,
  Input,
  Layout,
  Text,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
import { ChatBubble } from "../../components/chat/ChatBubble";

const UserChat = ({ route, navigation }) => {
  const theme = useTheme();
  const { username, messages } = route.params;
  const [newMessage, setNewMessage] = React.useState("");

  const handleMessage = ({ message }) => {
    let tempMessages = messages;

    console.log(tempMessages);

    tempMessages.push({
      id: tempMessages.length,
      sender: 0,
      message: message,
    });

    messages = tempMessages;

    setNewMessage("");
  };

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UserProfile", { username: username })
            }
          >
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
            {messages.map((message, index) => {
              return (
                <ChatBubble
                  key={index}
                  message={message.message}
                  sender={message.sender}
                />
              );
            })}
          </ScrollView>
        </ScreenView>
        <Layout
          style={[
            styles.inputContainer,
            { borderColor: theme["color-basic-400"] },
          ]}
        >
          <View style={styles.inputGroup}>
            <Input
              style={styles.input}
              placeholder="Message"
              onChangeText={(v) => {
                setNewMessage(v);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                newMessage.trim().length &&
                  handleMessage({ message: newMessage });
              }}
            >
              <View
                style={[
                  styles.sendButton,
                  { backgroundColor: theme["color-primary-500"] },
                ]}
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
  input: {
    flex: 1,
    borderRadius: 20,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  name: {
    textTransform: "capitalize",
  },
  sendButton: {
    height: 38,
    width: 38,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    paddingVertical: 8,
    borderStyle: "solid",
    borderTopWidth: 1,
  },
  inputGroup: {
    gap: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  userProfile: {
    flexDirection: "row",
    gap: 10,
  },
});
