import React from "react";
import { Image, StyleSheet } from "react-native";
import { Card, Text, Layout, List } from "@ui-kitten/components";

// export const EventCard = ({ event }) => {
//   const Header = (props) => (
//     <Layout {...props} style={styles.headerContainer}>
//       <Image source={event.imageUri} style={styles.image} />
//       <Layout style={styles.textContainer}>
//         <Text style={styles.headerTitle}>{event.title}</Text>
//         <Text style={styles.headerSubtitle}>{event.dateTime}</Text>
//       </Layout>
//     </Layout>
//   );

//   return (
//     <Card style={styles.card} header={Header}>
//       <Text style={styles.locationText}>{event.locationName}</Text>
//     </Card>
//   );
// };

const renderItemHeader = (headerProps, event) => (
  <Layout style={styles.headerContainer}>
    <Image source={event.imageUri} style={styles.image} />
    <Layout style={styles.textContainer}>
      <Text style={styles.headerTitle}>{event.title}</Text>
      <Text style={styles.headerSubtitle}>{event.dateTime}</Text>
    </Layout>
  </Layout>
);

const renderEventItem = ({ item }) => (
  <Card style={styles.card}  header={(headerProps) => renderItemHeader(headerProps, item)} >
    {/* <Text style={styles.locationText}>{event.locationName}</Text> */}
  </Card>
);

const EventList = ({ events }) => (
  <List
    data={events}
    renderItem={renderEventItem}
    // keyExtractor={(item, index) => index.toString()}
    style={styles.list}
  />
);

const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 16,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  locationText: {
    marginHorizontal: 16,
    fontSize: 15,
    fontWeight: "500",
  },
});

export default EventList;
