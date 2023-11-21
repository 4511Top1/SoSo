import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  Avatar,
  Divider,
  TabView,
  Text,
  Button,
  Card,
} from "@ui-kitten/components";
import { TopNavigation } from "@ui-kitten/components";
import PostButtons from "../../components/buttons/postButtons";

const posts = [
  {
    id: "1",
    user: "Shrek",
    time: "a few minutes ago",
    image: "icon1",
    postImage: "image1",
    content: "Went back to the swamp with Fiona. It was fun!",
  },
  {
    id: "2",
    user: "Jolene",
    time: "a few hours ago",
    image: "icon2",
    postImage: "",
    content: "Anyone in for the new hiking trail at Taronga Trail?",
  },
  {
    id: "3",
    user: "Bob",
    time: "2 hours ago",
    image: "icon2",
    postImage: "",
    content: "Hi I'm new to SoSo",
  },
];

const imageMap = {
  icon1: require("../../assets/images/feedIcon1.png"),
  icon2: require("../../assets/images/feedIcon2.png"),
  image1: require("../../assets/images/feedImage1.png"),
};

const Feed = ({ navigation, route }) => {
  if (!route || !route.params) {
    id = "";
    text = "";
  } else {
    id = route.params.userParams.id;
    // console.log("id:", route.params.userParams.id);
  }
  // const { id = '', text = '' } = route.params ?? {};
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text category="h3" status="primary">
          Feed{id}
        </Text>
        <View style={styles.iconsContainer}>
          <FontAwesome5
            name="facebook-messenger"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Chat")}
          />
          <Entypo
            name="new-message"
            size={24}
            color="black"
            onPress={() => navigation.navigate("NewPost")}
          />
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 0 }}>
        {posts.map((post) => (
          <View key={post.id} style={styles.post}>
            <View style={styles.nameTag}>
              <View style={{ flexDirection: "row" }}>
                <Avatar
                  source={imageMap[post.image]}
                  style={styles.avatar}
                  // size="large"
                />
                <View style={styles.textContainer}>
                  <Text category="s1">{post.user}</Text>
                  <Text appearance="hint">{post.time}</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="information-outline"
                size={30}
                color="black"
              />
            </View>
            <View style={styles.card}>
              <View style={styles.postArea}>
                {post.postImage ? (
                  <Image
                    style={{ width: "100%", height: 192 }}
                    source={imageMap[post.postImage]}
                  />
                ) : null}
                <Text
                  style={{ marginHorizontal: 15, marginTop: 10 }}
                  category="p1"
                >
                  {post.content}
                </Text>
                <Divider style={{ marginHorizontal: 15, marginVertical: 10 }} />
                <PostButtons />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    height: 50,
    width: 50,
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
    alignItems: "center",
  },

  post: {
    marginVertical: 16,
  },

  card: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: "#fff",
  },
  headerImage: {
    height: 200,
  },

  nameTag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textContainer: {
    marginLeft: 8,
    justifyContent: "center",
  },

  postArea: {
    borderWidth: 0,
    borderRadius: 15,
    overflow: "hidden",
  },
});
