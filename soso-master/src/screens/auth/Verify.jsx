import { Button, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScreenView } from "../../components/CustomView";

const Verify = ({ navigation }) => {
  return (
    <ScreenView>
      <View style={styles.container}>
        <View>
          <Text status="primary" category="h4">
            Why verify your account?
          </Text>
          <Text>
            In an effort to make SoSo a safer community, we recommend that you
            verify your identity. Your data will be deleted once verified, and
            you will be able to gain a few perks as well!
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle1} category="s1">
            Access to all events
          </Text>
          <Text>
            You will be able to fund and register events that are restricted for
            verified users only.
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle} category="s1">
            Restrict events
          </Text>
          <Text>
            Similar to how you gain access to all events, once verified, you
            will be able to configure the restriction for your event.
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle} category="s1">
            Safe community
          </Text>
          <Text>
            Verified identity ensures other users that you are a real person and
            vice-versa.
          </Text>
        </View>
        <Layout style={styles.buttonGroup}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("VerifyID")}
          >
            Verify
          </Button>
          <Text status="primary">Skip for now</Text>
        </Layout>
        {/* <Button onPress={() => navigation.navigate("VerifyID")}>Verify</Button>
        <Text>Skip for now</Text> */}
      </View>
    </ScreenView>
  );
};
export default Verify;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 104,
  },
  title: {},
  subtitle1: {
    marginTop: 22,
  },
  subtitle: {
    marginTop: 10,
  },
  buttonGroup: {
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
    // height:29,
    // padding: "10 14",
    marginBottom: 20,
  },
});
