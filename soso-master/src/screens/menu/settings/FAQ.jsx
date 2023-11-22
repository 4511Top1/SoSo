import { Text, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ScreenNormalView } from "../../../components/CustomView";
import { BackAction } from "../../../components/backAction";

const FAQ = ({ navigation, route }) => {
  const infos = [
    {
      title: "1. What is ID Verify?",
      content:
        "ID Verify is a security feature in SoSo that ensures the authenticity of user profiles. It helps maintain a safe and trustworthy community by verifying the identity of our users.",
    },
    {
      title: "2. What is Quick Match (Event/Friend)?",
      content:
        "Quick Match is a dynamic feature that guides you to events and friends aligned with your interests in seconds. It's conveniently located on the home page. Simply click on it, and you'll be quickly matched with relevant events and potential friends.",
    },
    {
      title: "3. How to Create an Event?",
      content:
        "To create an event, navigate to the events section in the app. In the top right corner, you'll find a button labelled (Create Event) Clicking this button will take you through the steps to set up your own event.",
    },
    {
      title: "4. How to Register and Fund an Event?",
      content:
        "Once you find an event you're interested in, simply click on it to visit the event's detailed page. Here, you will find options to both register for the event and contribute funds if necessary.",
    },
    {
      title: "5. How to Create a New Post?",
      content:
        "To create a new post, go to the feed page. In the top right corner, you'll see two buttons: (Message) and (Create Post) Click on (Create Post) to start uploading photos and writing content for your post!",
    },
  ];
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              FAQ
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        {infos.map((info) => (
          <View style={styles.card}>
            <Text category="s1" style={styles.title}>
              {info.title}
            </Text>
            <Text category="p1">{info.content}</Text>
          </View>
        ))}
      </ScrollView>
    </ScreenNormalView>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  card: {
    marginBottom: 25,
    marginHorizontal: 20,
  },
  title: {
    marginVertical: 15,
    fontWeight: "bold",
  },
});
