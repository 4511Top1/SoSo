import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Layout,
  List,
  ListItem,
  Divider,
} from "@ui-kitten/components";
import { BackAction } from "../../components/backAction";
import { ScreenView } from "../../components/CustomView";

import EventList, { EventCard } from "./EventResultCard";
const event = {
  title: "Who's That Kangaroo",
  dateTime: "WED, 28 OCT • 04:30 PM",
  locationName: "Taronga Zoo",
  imageUri: require("../../assets/images/SearchResultsImage1.png"),
};

const eventDetails = [
  {
    title: "Who's That Kangaroo",
    dateTime: "WED, 28 OCT • 04:30 PM",
    locationName: "Taronga Zoo",
    imageUri: require("../../assets/images/SearchResultsImage1.png"),
  },
  {
    title: "Real Life Roo Sighting",
    dateTime: "WED, 28 OCT • 07:00 PM",
    locationName: "Dharawal National Park",
    imageUri: require("../../assets/images/SearchResultsImage2.png"),
  },
  {
    title: "Whinnie The Roo Musical",
    dateTime: "THU, 29 OCT • 05:00 PM",
    locationName: "Sydney Opera House",
    imageUri: require("../../assets/images/SearchResultsImage3.png"),
  },
];

const SearchResults = ({ navigation }) => {
  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -20 }}
    >
      <BackAction navigation={navigation} />
      <Text category="h4" status="primary">
        Search Results
      </Text>
    </Layout>
  );

  return (
    <ScreenView>
      <TopNavigation title={renderTitle} alignment="start" />
      <Text category="h4">Results for "kangaroo"</Text>
      <EventList event={eventDetails} />;
      {/* <EventCard event={event} /> */}
    </ScreenView>
  );
};
export default SearchResults;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
