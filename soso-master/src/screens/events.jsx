import React, { useRef, useContext } from "react";
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
import EventContext from "../hook/EventContext";

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
  // const [events, setEvents] = React.useState(ev/entData);
  const { events } = React.useContext(EventContext);
  // updateEventList(eventData);

  // const addEvent = (newEvent) => {
  //   // console.log("Adding event:", newEvent);
  //   setEvents([...events, newEvent]);
  // };

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
            navigation.navigate("CreateEvent", )
          }
        >
          <Iconify icon="solar:calendar-add-linear" size={34} />
        </TouchableOpacity>
      </Layout>

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
        <DiscoveryWeekly data={events} />
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
