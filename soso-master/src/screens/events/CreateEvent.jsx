import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Input,
  Layout,
  Text,
  Toggle,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
import EventContext from "../../hook/EventContext";

const CreateEvent = ({ navigation }) => {
  const theme = useTheme();
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);
  const [location, setLocation] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const { events, setEvents } = React.useContext(EventContext);

  const openImagePickerAsync = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(pickerResult);
    if (pickerResult.canceled === true) {
      return;
    }
    setSelectedImage(pickerResult.assets[0]);
  };

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const renderTitle = () => (
    <Layout style={{ flexDirection: "row", alignItems: "center" }}>
      <BackAction navigation={navigation} />

      <Text category="h2" status="primary">
        New Event
      </Text>
    </Layout>
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    // setShow(false);
    setDate(currentDate);
  };
  const handleSubmit = () => {
    const options = {
      weekday: "short", // e.g., SUN
      day: "2-digit", // e.g., 29
      month: "short", // e.g., Sep
      hour: "2-digit", // e.g., 04
      minute: "2-digit", // e.g., 40
      hour12: true,
    };

    const formattedDateStr = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    // console.log(formattedDateStr);

    const newEvent = {
      id: "event" + events.length + 1,
      title: eventName,
      date: formattedDateStr,
      subtitle: eventDescription,
      location: location,
      image: selectedImage,
    };

    // console.log(newEvent);
    setEvents((events) => [...events, newEvent]);
    navigation.goBack();
  };
  return (
    <ScreenNormalView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={47}
        style={{ flex: 1 }}
        behavior="padding"
      >
        <TopNavigation title={renderTitle} alignment="start" />
        <Layout style={styles.container}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
          >
            {selectedImage === null ? (
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={openImagePickerAsync}
              >
                <Iconify icon="fluent:camera-28-regular" size={28} />
                <Text style={styles.uploadText}>Upload photo</Text>
              </TouchableOpacity>
            ) : (
              <Image source={selectedImage} style={styles.uploadPhoto} />
            )}
            <Text category="h5" style={styles.timeSubtitle}>
              Title and Description
            </Text>
            <Input
              style={styles.input}
              placeholder="Event Title"
              value={eventName}
              onChangeText={setEventName}
              // disabled={true}
            />
            <Input
              style={styles.input}
              placeholder="Event desciption"
              value={eventDescription}
              onChangeText={setEventDescription}
            />
            <Text category="h5" style={styles.timeSubtitle}>
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
              <Layout
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "flex-start",
                  marginLeft: 38,
                }}
              >
                <Iconify
                  color={theme["color-primary-500"]}
                  size={27}
                  icon={"fluent:clock-20-regular"}
                />
                <DateTimePicker
                  value={date}
                  onChange={onChange}
                  mode="datetime"
                />
              </Layout>
              {/* <Datepicker
                date={date}
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
                //   value={date}
              /> */}
              {/* <Input
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
              /> */}
            </View>
            <Text category="h5" style={styles.timeSubtitle}>
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
              {/* <Button
              style={styles.button}
              onPress={() => navigation.navigate("Tabs")}
            >
              Create
            </Button> */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Create</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Layout>
      </KeyboardAvoidingView>
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
  buttonGroup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
