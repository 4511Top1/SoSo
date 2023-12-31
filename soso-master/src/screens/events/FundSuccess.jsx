import { Button, Layout, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import SuccessSuportSVG from "../../assets/svg/SuccessSupportIcon.svg";
import { ScreenView } from "../../components/CustomView";

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
        <Text category="h4" status="primary" style={styles.title}>
          Thanks for your support!
        </Text>
        <Text style={styles.subTitle}>
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
            style={styles.browseEventButton}
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
  subTitle: {
    textAlign: "center",
  },
  svg: {
    alignSelf: "center",
    marginTop: 52,
  },
  buttonGroup: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  viewEventButton: {
    // width: 271,
    // height: 38,
    // marginTop: 20,
    marginTop: 35,
    backgroundColor: "#C870FF",
    padding: 10,
    borderRadius: 15,
    width: 271,
  },
  browseEventButton: {
    marginTop: 20,
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
  },
});
