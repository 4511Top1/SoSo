import React from "react";
import { View, Image } from "react-native";
import { Button, Input, Text, useTheme, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { ScreenView } from "../../components/CustomView";
import RegistrationSuccessIcon from "../../assets/svg/SuccessRegistraionIcon.svg";

const RegistraionSuccess = ({ navigation}) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");


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
        <Text category="h6" status="primary">
          Registration complete!
        </Text>
        <Text>
          You can now view your event and ticket under upcoming events!
        </Text>
        <RegistrationSuccessIcon style={styles.svg} />
        <Layout style={styles.buttonGroup}>
          <Button style={styles.viewEventButton}>View ticket</Button>
          <Button style={styles.viewEventButton}>Browse other events</Button>
        </Layout>
      </View>
    </ScreenView>
  );
};
export default RegistraionSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  buttonGroup: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  viewEventButton: {
    width: 271,
    height: 38,
    marginTop: 20,
  },
});
