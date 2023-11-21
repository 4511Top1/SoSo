import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Button,
  Input,
  Layout,
  Card,
  TopNavigation,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { EventCard } from "../events/EventCard";
import TextDivider from "../../components/TextDivider";

const eventDetails = [
  {
    title: "Who's That Kangaroo",
    dateTime: "WED, 28 OCT • 04:30 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum.",
    locationName: "Taronga Zoo",
    imageUri: require("../../assets/images/SearchResultsImage1.png"),
  },
  {
    title: "Real Life Roo Sighting",
    dateTime: "WED, 28 OCT • 07:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum.",
    locationName: "Dharawal National Park",
    imageUri: require("../../assets/images/SearchResultsImage2.png"),
  },
  {
    title: "Whinnie The Roo Musical",
    dateTime: "THU, 29 OCT • 05:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum.",
    locationName: "Sydney Opera House",
    imageUri: require("../../assets/images/SearchResultsImage3.png"),
  },
];

const Saved = ({ navigation, route }) => {
  const [filteredEvents, setFilteredEvents] = React.useState(eventDetails);
  const navigateToDetails = (event) => {
    console.log("Navigating to details with event:", event);
    navigation.navigate("Details", {
      event: event,
      fromScreen: "Saved",
    });
  };

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Saved
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        <View style={styles.content}>
          {filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onPress={() => navigateToDetails(event)}
            />
          ))}
          <TextDivider text="End of Saved Events" />
        </View>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default Saved;
const styles = StyleSheet.create({
  content: {
    margin: 20,
  },
});
