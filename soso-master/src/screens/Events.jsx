import { Input, Layout, Text } from "@ui-kitten/components";
import React, { useRef } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

import { useTheme } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { ScreenView } from "../components/CustomView";
import EventContext from "../hook/EventContext";
import DiscoveryWeekly from "./events/DiscoveryWeekly";
import Trending from "./events/Trending";

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
  const [showTutorial, setShowTutorial] = React.useState(true);
  const { events } = React.useContext(EventContext);

  const handleFocus = () => {
    navigation.navigate("SearchEvents");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const toggleModal = () => {
    setShowTutorial(!showTutorial);
  };

  return (
    <ScreenView>
      <Layout style={styles.title}>
        {/* <BackAction navigation={navigation} /> */}
        <Text category="h2" status="primary">
          Events
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateEvent")}>
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
        <View style={{ flex: 1 }}>
          <Modal
            // animationType="slide"
            // transparent={false}
            isVisible={showTutorial}
            onRequestClose={() => {
              setShowTutorial(false);
            }}
            style={styles.modal}
            onBackdropPress={toggleModal}
          >
            <View style={styles.modalContent}>
              <Text category="h4" status="primary">
                Do you want to host an event?
              </Text>
              <Layout style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                <Text category="s1">If you want to host an event</Text>
                <Text style={{ marginTop: 10 }} category="s1">
                  Please click{" "}
                  <Iconify icon="solar:calendar-add-linear" size={20} /> to to
                  create an event
                </Text>
              </Layout>
            </View>
          </Modal>
        </View>
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    // flex: 1,
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
