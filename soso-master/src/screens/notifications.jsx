import React from "react";
import { StyleSheet, View } from "react-native";
import { Layout, Tab, TabView, Text, List, ListItem } from "@ui-kitten/components";

const allNotifications = [
  { id: '1', type: 'All', message: 'Vincent commented on your post.', time: 'just now' },
  { id: '2', type: 'Events', message: 'Send ❤️ to event host of Hiking Everest Until Dawn.', time: '1 min ago' },
  { id: '3', type: 'People', message: 'I am someone.', time: '10 min ago' },
];

export const NotificationTabs = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const visibleNotifications = (tabIndex) => {
    switch (tabIndex) {
      case 0: // All
        return allNotifications;
      case 1: // Events
        return allNotifications.filter(n => n.type === 'Events');
      case 2: // People
        return allNotifications.filter(n => n.type === 'People');
      case 3: // Feed
        return allNotifications.filter(n => n.type === 'Feed');
      default:
        return allNotifications;
    }
  };

  const renderNotification = ({ item }) => (
    <ListItem
      title={item.message}
      description={item.time}
    />
  );
  

  return (
    <Layout style={{ flex: 1 }}>
      <TabView
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}
      >
        {['All', 'Events', 'People', 'Feed'].map((title, index) => (
          <Tab key={title} title={evaProps => <Text {...evaProps} style={[evaProps.style, styles.tabTitle]}>{title}</Text>}>
            <List
              data={visibleNotifications(index)}
              renderItem={renderNotification}
              keyExtractor={item => item.id}
            />
          </Tab>
        ))}
      </TabView>
    </Layout>
  );
};

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text category="h3" status="primary">
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
  tabTitle: {
    fontSize: 16, 
  },
});