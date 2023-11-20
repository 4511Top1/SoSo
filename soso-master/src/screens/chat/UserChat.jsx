import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenView } from "../../components/CustomView";
import {
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  TopNavigation,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const ChatBubble = ({ message, sender }) => {
  const theme = useTheme();

  return (
    <View
      style={
        sender == 0
          ? [styles.myBubble, { backgroundColor: theme["color-primary-100"] }]
          : [styles.otherBubble, { backgroundColor: theme["color-basic-500"] }]
      }
    >
      <Text>{message}</Text>
    </View>
  );
};

const UserChat = ({ route, navigation }) => {
  const { username, messages } = route.params;

  return (
    <Layout style={{ flex: 1 }}>
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
        <View>
          {messages.map((message) => {
            return (
              <ChatBubble message={message.message} sender={message.sender} />
            );
          })}
        </View>
      </ScreenView>
    </Layout>
  );
};

export default UserChat;

const styles = StyleSheet.create({
  myBubble: {
    backgroundColor: "#e1e1e1",
    padding: 10,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  otherBubble: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    alignSelf: "flex-start",
    marginVertical: 5,
  },
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
