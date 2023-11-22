import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Divider, Text } from "@ui-kitten/components";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PostButtons from "../../components/buttons/postButtons";

const ViewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          style={styles.backArrow}
        />
        <Text category="h3" status="primary">
          View Post
        </Text>
      </View>

      <View style={styles.nameTag}>
        <Avatar
          source={require("../../assets/images/viewPostIcon1.png")}
          style={styles.avatar}
          size="large"
        />
        <View style={styles.textContainer}>
          <Text category="s1">Zoe</Text>
          <Text appearance="hint">just now</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.postArea}>
          <Text
            style={{ marginHorizontal: 15, marginVertical: 10 }}
            category="p1"
          >
            Everyone is welcomed to join the pottery event I just created!
          </Text>
          <Divider style={{ marginHorizontal: 15, marginVertical: 10 }} />
          <PostButtons />
        </View>
      </View>
      <View style={styles.commentContainer}>
        <Text style={{ color: "#4D4352" }} category="h5">
          Comments
        </Text>
        <View style={styles.comment}>
          <Avatar
            source={require("../../assets/images/notificationIcon1.png")}
            style={styles.avatar}
            size="medium"
          />
          <View style={styles.commentContent}>
            <Text category="h6" status="primary">
              Vincent
            </Text>
            <Text category="p1">
              I've never heard of this location! where is it?
            </Text>
          </View>
        </View>
        <Pressable style={styles.replyButton}>
          <Text category="label" status="primary">
            Reply ⏎
          </Text>
        </Pressable>
        <View style={styles.reply}>
          <Avatar
            source={require("../../assets/images/viewPostIcon1.png")}
            style={styles.avatar}
            size="medium"
          />
          <View style={styles.commentContent}>
            <Text category="h6" status="primary">
              Zoe
            </Text>
            <Text category="p1">It's near our favourite pizzeria!</Text>
          </View>
        </View>
        <Pressable style={styles.replyButton}>
          <Text category="label" status="primary">
            Reply ⏎
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ViewPost;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 5,
  },

  backArrow: {
    marginRight: 10,
  },

  avatar: {
    marginRight: 10,
  },

  nameTag: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    paddingVertical: 5,
  },
  card: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: "#fff",
  },
  postArea: {
    borderWidth: 0,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "white",
  },
  commentContainer: {
    paddingVertical: 10,
  },
  comment: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  commentContent: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: "stretch",
  },
  replyButton: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  reply: {
    flexDirection: "row",
    paddingVertical: 5,
    marginLeft: 50,
  },
});
