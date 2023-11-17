import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Tab, TabView, Text } from "@ui-kitten/components";

export const NotificationTabs = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Tab title="All">
        <View style={styles.tabContainer}>
          <Text category="h5">1</Text>
        </View>
      </Tab>
      <Tab title="Events">
        <View style={styles.tabContainer}>
          <Text category="h5">2</Text>
        </View>
      </Tab>
      <Tab title="People">
        <View style={styles.tabContainer}>
          <Text category="h5">3</Text>
        </View>
      </Tab>
      <Tab title="Feed">
        <View style={styles.tabContainer}>
          <Text category="h5">4</Text>
        </View>
      </Tab>
    </TabView>
  );
};

const Notifications = () => {
  return (
    <View style={styles.title}>
      <Text category="h4" status="primary">
        Notifications
      </Text>
      <NotificationTabs />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    alignItems: "center",
  },
});
