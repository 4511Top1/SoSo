import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import {
  Button,
  Input,
  Datepicker,
  Layout,
  Text,
  Toggle,
} from "@ui-kitten/components";
import { ScreenNormalView } from "../../components/CustomView";
import { TopNavigation, useTheme } from "@ui-kitten/components";
import { BackAction } from "../../components/backAction";
import { Iconify } from "react-native-iconify";

const CreateEvent = ({ navigation, onEventreated }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const theme = useTheme();

  const renderTitle = () => (
    <Layout style={{ flexDirection: "row", alignItems: "center" }}>
      <BackAction navigation={navigation} />

      <Text category="h4" status="primary">
        New Event
      </Text>
    </Layout>
  );
  const handleSubmit = () => {
    const newEvent = {
      name: eventName,
      description: eventDescription,
      time: eventTime,
      date: eventDate,
      location: eventLocation,
      verifiedOnly: isVerifiedOnly,
    };

    console.log(newEvent);

    navigation.goBack();
  };
  return (
    <ScreenNormalView>
      <TopNavigation title={renderTitle} alignment="start" />
      <Layout style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          <TouchableOpacity style={styles.uploadButton}>
            <Iconify icon="fluent:camera-28-regular" size={28} />
            <Text style={styles.uploadText}>Upload photo</Text>
          </TouchableOpacity>

          <Input
            style={styles.input}
            placeholder="Pottery"
            value={eventName}
            onChangeText={setEventName}
            disabled={true}
          />
          <Input
            style={styles.input}
            placeholder="Event desciption"
            value={eventName}
            onChangeText={setEventName}
          />
          <Text category="s1" style={styles.timeSubtitle}>
            Time and location
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
          <Text category="s1" style={styles.timeSubtitle}>
            Event status
          </Text>

          {/* <Toggle value={isVerifiedOnly} onValueChange={setIsVerifiedOnly} >
            Verified users only
        </Toggle> */}
          <Toggle
            status="primary"
            style={styles.toggle}
            checked={checked}
            onChange={onCheckedChange}
          >
            <Text category="s1" style={{ marginLeft: 9 }}>
              Use saved details
            </Text>
          </Toggle>
          {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity> */}
          <View style={styles.buttonGroup}>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("Tabs")}
            >
              Create
            </Button>
          </View>
        </ScrollView>
      </Layout>
    </ScreenNormalView>
  );
};

export default CreateEvent;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "coloumn",
    flex: 1,
  },
  uploadPhoto: {
    width: "100%",
    height: 400,

    // backgroundColor: "#4D4352",
  },
  uploadButton: {
    width: "100%",
    backgroundColor: "#4D4352",
    height: 306,
    flexDirection: "row",
    justifyContent: "center",
    opacity: 0.5,
    alignItems: "center",
  },
  uploadText: {
    color: "black",
    opacity: 1,
    fontSize: 16,
    fontWeight: "bold",
    // textAlign: "center",
    // marginTop: 140,
  },
  oneLine: {
    flexDirection: "row",
  },
  input: {
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
    marginTop: 10,
    marginHorizontal: 20,
    // marginBottom: 10,
  },
  timeSubtitle: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  toggle: {
    // marginHorizontal: 20,
    marginTop: 10,
    marginLeft: -160,
  },
  button: {
    marginTop: 35,
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // height:29,
    // padding: "10 14",
  },
  scrollView: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  buttonGroup:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
