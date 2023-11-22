import React, { useRef } from "react";
import { ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  Icon,
  Layout,
} from "@ui-kitten/components";

import { ScreenView } from "../components/CustomView";
import { useTheme } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import DiscoveryWeekly from "./events/DiscoveryWeekly";
import Trending from "./events/Trending";

const eventData = [
  {
    id: "event1",
    title: "Marathon Sundays",
    date: "SUN, 29 SEP 04:30 PM",
    subtitle:
      "Lorem ipsum olor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum.",
    image: require("../assets/images/Marathon.png"),
    location: "Sydney Olympic Park",
  },
  {
    id: "event2",
    title: "Community Yoga",
    date: "SUN, 29 SEP 04:30 PM",
    subtitle:
      "Join us for a relaxing session of yoga in the park every Saturday morning.",
    image: require("../assets/images/Marathon.png"),
    location: "Central Park",
  },
  {
    id: "event3",
    title: "Community Yoga",
    date: "SUN, 29 SEP 04:30 PM",
    subtitle:
      "Join us for a relaxing session of yoga in the park every Saturday morning.",
    image: require("../assets/images/Marathon.png"),
    location: "Central Park",
  },
];

const treandingData = [
  {
    id: "event1",
    title: "Who's That Kangaroo",
    date: "WED, 28 OCT 04:30 PM",
    location: "Taronga Zoo",
    image: require("../assets/images/EventImage1.png"),
  },
  {
    id: "event2",
    title: "Let's Eat Purple Tree",
    date: "WED, 28 OCT 04:30 PM",
    location: "UNSW",
    image: require("../assets/images/EventImage2.png"),
  },
  {
    id: "event3",
    title: "Elephant Appreciation",
    date: "WED, 28 OCT 04:30 PM",
    location: "Taronga Zoo",
    image: require("../assets/images/EventImage3.png"),
  },
];

const Events = ({ navigation }) => {
  const theme = useTheme();
  const inputRef = useRef(null);
  const [value, setValue] = React.useState("");
  const [events, setEvents] = React.useState(eventData);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const handleFocus = () => {
    navigation.navigate("SearchEvents");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <ScreenView>
      <Layout style={styles.title}>
        {/* <BackAction navigation={navigation} /> */}
        <Text category="h2" status="primary">
          Events
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CreateEvent", { onEventCreated: addEvent })
          }
        >
          <Iconify icon="solar:calendar-add-linear" size={34} />
        </TouchableOpacity>
      </Layout>
      {/* <Text category="h2" status="primary" >
        Events
      </Text> */}
      <Input
        placeholder="Search"
        value={value}
        style={{ marginTop: 20 }}
        onChangeText={(nextValue) => setValue(nextValue)}
        accessoryLeft={
          <Iconify
            color={theme["color-basic-500"]}
            size={20}
            icon={"solar:minimalistic-magnifer-linear"}
          />
        }
        onFocus={handleFocus}
        ref={inputRef}
      />
      <ScrollView>
        <Text category="h4" status="primary" style={{ marginTop: 20 }}>
          Discovery weekly
        </Text>
        <DiscoveryWeekly data={eventData} />
        <Text category="h4" status="primary" style={{ marginTop: 20 }}>
          Trending near you
        </Text>
        <Trending data={treandingData} />
        <Text category="h4" status="primary" style={{ marginTop: 20 }}>
          Based on your last event
        </Text>
        <Trending data={treandingData} />
      </ScrollView>
    </ScreenView>
  );
};
export default Events;

const styles = StyleSheet.create({
  search: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
