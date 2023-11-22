import { Button, Layout, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Iconify } from "react-native-iconify";
import Modal from "react-native-modal";
import RegistrationSuccessIcon from "../../assets/svg/SuccessRegistraionIcon.svg";
import { ScreenView } from "../../components/CustomView";

const RegistrationSuccess = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //   const navigateToDetails = (event) => {
  //     console.log("Navigating to details with event:", event);
  //     navigation.navigate("Details", {
  //       event: event,
  //       fromScreen: "FundSuccess",
  //     });
  //   };

  return (
    <ScreenView>
      <View style={styles.container}>
        <Text category="h5" status="primary" style={styles.title}>
          Registration complete!
        </Text>
        <Text style={styles.subTitle}>
          You can now view your event and ticket under upcoming events!
        </Text>
        <RegistrationSuccessIcon style={styles.svg} />
        <Layout style={styles.buttonGroup}>
          <Button style={styles.viewEventButton} onPress={toggleModal}>
            View ticket
          </Button>
          <Button
            style={styles.browseEventButton}
            onPress={() => {
              // console.log("Navigating to browse events");
              navigation.pop(3);
            }}
          >
            Browse other events
          </Button>
        </Layout>
        <View style={{ flex: 1 }}>
          <Modal
            isVisible={isModalVisible}
            style={styles.modal}
            onBackdropPress={toggleModal}
          >
            <View style={styles.modalContent}>
              <Text category="h4">Sea-labration</Text>
              <Image
                source={require("../../assets/images/QRCode.png")}
                style={styles.qrCode}
              />
              <Image
                source={require("../../assets/images/SoSoWhite.png")}
                style={styles.logo}
              />
              <Layout style={styles.dateAndLocation}>
                <Layout style={styles.oneLineContainer}>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:clock-20-regular"}
                  />
                  <Text category="p1">05:00 AM</Text>
                </Layout>
                <Layout style={styles.oneLineContainer}>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:calendar-20-regular"}
                  />
                  <Text category="p1">Sat, 20 Nov 2021</Text>
                </Layout>
                <Layout style={styles.oneLineContainer}>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:location-20-regular"}
                  />
                  <Text category="p1">Sydney Opera House</Text>
                </Layout>
              </Layout>
              <Button
                style={styles.button}
                onPress={() => {
                  navigation.pop(2);
                }}
              >
                View event
              </Button>
            </View>
          </Modal>
        </View>
      </View>
    </ScreenView>
  );
};
export default RegistrationSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 104,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
  },
  text: {
    // color:"43007C",
    fontSize: 15,
  },
  center: {
    flexDirection: "column",
  },
  svg: {
    alignSelf: "center",
    marginTop: 52,
  },
  subTitle: {
    textAlign: "center",
  },
  buttonGroup: {
    flex: 1,
    // backgroundColor:"yellow",
    // justifyContent: "center",
    alignItems: "center",
  },
  viewEventButton: {
    marginTop: 35,
    backgroundColor: "#C870FF",
    padding: 10,
    borderRadius: 15,
    width: 271,
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
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  qrCode: {
    width: 200, // Adjust the size accordingly
    height: 200, // Adjust the size accordingly
    // Include any other styles you might want for your QR code
  },
  logo: {
    position: "absolute", // This is important for overlaying the image on top of the QR code
    width: 103, // Adjust the size of the logo as needed
    height: 41, // Adjust the size of the logo as needed
    // Center the logo over the QR code:
    top: "50%", // Adjust top position as needed
    left: "50%", // Adjust left position as needed
    marginTop: 20, // Adjust margin top as half of the height of the logo to center it
    marginLeft: -30, // Adjust margin left as half of the width of the logo to center it
  },
  oneLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 85,
    // padding: 16,
  },
  dateAndLocation: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    width: 271,
    height: 50,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#4D4352",
  },
  browseEventButton: {
    marginTop: 20,
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
  },
});
