import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  Datepicker,
  TopNavigation,
  TopNavigationAction,
  Layout,
  List,
  ListItem,
  Divider,
} from "@ui-kitten/components";
import Modal from "react-native-modal";
import { Iconify } from "react-native-iconify";

import { BackAction } from "../../components/backAction";
import { ScreenView } from "../../components/CustomView";
import { EventCard } from "./EventResultCard";

import FilterModal from "./FilterModal";
// import { TextDivider } from "../../components/TextDivider";

import FilterIconSvg from "../../assets/svg/filterIcon.svg";
import LocationIcon from "../../assets/svg/locationIcon.svg";

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

const TextDivider = ({ text }) => (
  <View style={styles.textDividerContainer}>
    <Divider style={styles.divider} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
    <Divider style={styles.divider} />
  </View>
);

const FilterIcon = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <FilterIconSvg width={24} height={24} />
  </TouchableOpacity>
);

const renderLocationIcon = () => (
  <Iconify icon="fluent:location-20-regular"/>
);
const SearchResults = ({ navigation }) => {
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -16 }}
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
      <Layout style={styles.container}>
        <Text category="h4">Results for "kangaroo"</Text>
        <FilterIcon onPress={toggleModal} style={styles.filterButton} />
      </Layout>
      {eventDetails.map((event) => (
        <EventCard event={event} />
      ))}
      <TextDivider text="End of search results" />

      <View style={{ flex: 1 }}>
        {/* <FilterModal isVisible={isModalVisible} toggleModal={toggleModal} /> */}
        <Modal
          isVisible={isModalVisible}
          style={styles.modal}
          onBackdropPress={toggleModal}
        >
          <View style={styles.modalContent}>
            <Text category="h4">Filter Search results</Text>
            <Input
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
              style={styles.input}
              accessoryLeft={renderLocationIcon}
            />
            <Datepicker
              date={date}
              onSelect={setDate}
              style={styles.input}
              placeholder="Pick Date"
            />
            <Input
              placeholder="Time"
              value={time}
              onChangeText={setTime}
              style={styles.input}
            />
            <View style={styles.buttonGroup}>
              <Button onPress={toggleModal} style={styles.button}>
                Reset
              </Button>
              <Button onPress={toggleModal} style={styles.button} onPressIn={() => navigation.navigate("FilterResults")}>
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
    flexDirection: "row",
  },
  filterButton: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  textDividerContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    flex: 1,
    marginHorizontal: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    backgroundColor: "white", // Adjust to match the background color of your app
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
    marginBottom: 10,
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
