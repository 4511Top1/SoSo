import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Divider,
  Layout,
  List,
  ListItem,
  Tab,
  TabView,
  Text,
} from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const allNotifications = [
  {
    id: "1",
    type: "Feed",
    message: "Vincent commented on your post.",
    time: "just now",
    image: "icon1",
  },
  {
    id: "2",
    type: "Feed",
    message: "Vincent liked your post.",
    time: "just now",
    image: "icon1",
  },
  {
    id: "3",
    type: "Events",
    message: "Send ❤️ to event host of Hiking Everest Until Dawn.",
    time: "1 min ago",
    image: "icon2",
  },
  {
    id: "4",
    type: "Events",
    message: "Check out Marathon Sundays!",
    time: "3 mins ago",
    image: "icon3",
  },
  {
    id: "5",
    type: "Events",
    message: "Sea-labration registration is open.",
    time: "5 hrs ago",
    image: "icon4",
  },
  {
    id: "6",
    type: "Events",
    message: "Scuba-Scuba-Doo have reached 50% of their funding goal.",
    time: "yesterday",
    image: "icon5",
  },
  {
    id: "7",
    type: "Events",
    message: "Hiking Everest Until Dawn is starting tomorrow!",
    time: "yesterday",
    image: "icon6",
  },
  {
    id: "8",
    type: "Events",
    message: "Mary and 30 others sent you a ❤️ for Cinemarvel.",
    time: "yesterday",
    image: "icon7",
  },
  {
    id: "9",
    type: "People",
    message: "Vincent sent you a friend request.",
    time: "yesterday",
    image: "icon1",
  },
  {
    id: "10",
    type: "Events",
    message: "Send ❤️ to event host of Summer Moon.",
    time: "last month",
    image: "icon2",
  },
  {
    id: "11",
    type: "People",
    message: "Ralph sent you a message.",
    time: "last month",
    image: "icon8",
  },
  {
    id: "12",
    type: "People",
    message: "Ralph accepted your friend request.",
    time: "2 weeks ago",
    image: "icon8",
  },
];

const imageMap = {
  icon1: require("../assets/images/notificationIcon1.png"),
  icon2: require("../assets/images/notificationIcon2.png"),
  icon3: require("../assets/images/notificationIcon3.png"),
  icon4: require("../assets/images/notificationIcon4.png"),
  icon5: require("../assets/images/notificationIcon5.png"),
  icon6: require("../assets/images/notificationIcon6.png"),
  icon7: require("../assets/images/notificationIcon7.png"),
  icon8: require("../assets/images/notificationIcon8.png"),
};

export const NotificationTabs = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const visibleNotifications = (tabIndex) => {
    switch (tabIndex) {
      case 0: // All
        return allNotifications;
      case 1: // Events
        return allNotifications.filter((n) => n.type === "Events");
      case 2: // People
        return allNotifications.filter((n) => n.type === "People");
      case 3: // Feed
        return allNotifications.filter((n) => n.type === "Feed");
      default:
        return allNotifications;
    }
  };

  const renderNotification = ({ item }) => (
    <ListItem
      style={{ flexDirection: "row", alignItems: "flex-start" }}
      onPress={() => {
        (item.id == "1" || item.id == "2") && navigation.navigate("ViewPost");
      }}
    >
      <Image source={imageMap[item.image]} style={styles.notificationIcon} />
      <View style={{ flex: 1, marginHorizontal: 10, maxWidth: 224 }}>
        <Text style={{ fontSize: 16 }}>{item.message}</Text>
      </View>

      <View>
        <Text
          category="c1"
          style={{ flex: 1, fontSize: 14, fontWeight: 400, color: "#a6a1a8" }}
        >
          {item.time}
        </Text>
      </View>
    </ListItem>
  );

  return (
    <Layout style={{ flex: 1 }}>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        {["All", "Events", "People", "Feed"].map((title, index) => (
          <Tab
            key={title}
            title={(evaProps) => (
              <Text {...evaProps} style={[evaProps.style, styles.tabTitle]}>
                {title}
              </Text>
            )}
          >
            <List
              data={visibleNotifications(index)}
              renderItem={renderNotification}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={Divider}
              style={{ backgroundColor: "#fff", marginHorizontal: 20 }}
            />
          </Tab>
        ))}
      </TabView>
    </Layout>
  );
};

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
          style={styles.backArrow}
        />
        <Text category="h3" status="primary">
          Notifications
        </Text>
      </View>
      <NotificationTabs navigation={navigation} />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  tabContainer: {
    alignItems: "center",
  },
  tabTitle: {
    fontSize: 24,
  },
  backArrow: {
    marginRight: 20,
    marginTop: 5,
  },
});
