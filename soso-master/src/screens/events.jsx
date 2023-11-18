import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  Layout,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { ScreenView } from "../components/CustomView";
import { useTheme,  } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import DiscoveryWeekly from "./events/DiscoveryWeekly";

const SearchIcon = (props) => <Icon {...props} name="search" />;

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
];

const Events = ({ navigation }) => {
  const theme = useTheme();
  const inputRef = useRef(null);
  const [value, setValue] = React.useState("");

  const handleFocus = () => {
    navigation.navigate("SearchEvents");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };


  return (
    <ScreenView>
      <Text category="h2" status="primary">
        Events
      </Text>
      <Input
        placeholder="Search"
        value={value}
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
      <Text category="h4">Discovery weekly</Text>
      <DiscoveryWeekly data={eventData} />
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
});
