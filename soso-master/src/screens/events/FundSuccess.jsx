import React from "react";
import { View, Image } from "react-native";
import { Button, Input, Text, useTheme, Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { ScreenView } from "../../components/CustomView";
import SuccessSuportSVG from "../../assets/svg/SuccessSupportIcon.svg";

const FundSuccess = ({ navigation, route }) => {
  const theme = useTheme();
  const [email, setEmail] = React.useState("");
  const { event, fromScreen } = route.params;

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
          Thanks for your support!
        </Text>
        <Text>
          You have successfully funded 20 AUD to "Winnie The Roo Musical".
        </Text>
        <SuccessSuportSVG style={styles.svg} />
        <Layout style={styles.buttonGroup}>
          <Button
            style={styles.viewEventButton}
            onPress={() => {
              navigation.pop(2);
            }}
          >
            View event
          </Button>
          <Button
            style={styles.viewEventButton}
            onPress={() => {
              navigation.pop(5);
            }}
          >
            Browse other events
          </Button>
        </Layout>
      </View>
    </ScreenView>
  );
};
export default FundSuccess;
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
