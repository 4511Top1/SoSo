import {
  Button,
  Datepicker,
  Input,
  Layout,
  Text,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import Modal from "react-native-modal";
import FilterIconSvg from "../../assets/svg/filterIcon.svg";
import { ScreenView } from "../../components/CustomView";
import TextDivider from "../../components/dividers/TextDivider";
import { BackAction } from "../../components/backAction";
import { EventCard } from "./EventCard";

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

const FilterIcon = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <FilterIconSvg width={24} height={24} />
  </TouchableOpacity>
);

const renderLocationIcon = () => <Iconify icon="fluent:location-20-regular" />;

const SearchResults = ({ navigation }) => {
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [filteredEvents, setFilteredEvents] = React.useState(eventDetails);
  const theme = useTheme();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleApply = () => {
    setFilteredEvents([eventDetails[2]]);
    toggleModal();
  };

  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -16 }}
    >
      <BackAction navigation={navigation} />
      <Text category="h2" status="primary">
        Search Events
      </Text>
    </Layout>
  );

  const navigateToDetails = (event) => {
    // console.log("Navigating to details with event:", event);
    navigation.navigate("Details", {
      event: event,
      fromScreen: "SearchResults",
    });
  };

  return (
    <ScreenView>
      <TopNavigation title={renderTitle} alignment="start" />
      <Layout style={styles.container}>
        <Text category="h4">Results for "kangaroo"</Text>
        <FilterIcon onPress={toggleModal} />
      </Layout>
      {filteredEvents.map((event, index) => (
        <EventCard
          key={index}
          event={event}
          onPress={() => navigateToDetails(event)}
        />
      ))}
      <TextDivider text="End of search results" />
      {/* <FilterModal isVisible={isModalVisible} onClose={toggleModal} /> */}
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          style={styles.modal}
          onBackdropPress={toggleModal}
        >
          <View style={styles.modalContent}>
            <Text category="h4" status="primary">
              Filter Search results
            </Text>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
                style={styles.input}
                accessoryLeft={
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:location-20-regular"}
                  />
                }
              />
              <Datepicker
                // date={date}
                onSelect={setDate}
                style={styles.input}
                placeholder="Pick Date"
                accessoryLeft={
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:calendar-20-regular"}
                  />
                }
              />
              <Input
                placeholder="Time"
                value={time}
                onChangeText={setTime}
                style={styles.input}
                accessoryLeft={
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:clock-20-regular"}
                  />
                }
              />
            </View>

            <View style={styles.buttonGroup}>
              <Button onPress={toggleModal} style={styles.button}>
                Reset
              </Button>
              <Button style={styles.button} onPress={handleApply}>
                Apply
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    </ScreenView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainer: {
    marginTop: 2,
    marginBottom: 30,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  input: {
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
    marginTop: 20,
    // marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: 2,
    flexGrow: 1,
  },
});
