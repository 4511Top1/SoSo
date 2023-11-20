import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Button, Text, Layout } from "@ui-kitten/components";
import { Image } from "react-native";

import { ScreenView } from "../../components/CustomView";

const ResetSuccess = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  return (
    <ScreenView>
      <View style={styles.container}>
        <Text status="primary" category="h5" style={styles.title}>
          Password reset request sent to your email!
        </Text>
        <Text style={styles.subtitle}>
          check your inbox and click the link to reset your password
        </Text>

        <Image
          style={styles.image}
          source={require("../../assets/images/ResetSuccess.png")}
        />
        <Layout style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => navigation.pop(2)}
          >
            Back to login
          </Button>
        </Layout>
        {/* <Button>Back to login</Button> */}
      </View>
    </ScreenView>
  );
};
export default ResetSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    marginTop: 104,
  },
  text: {
    // color:"43007C",
    fontSize: 15,
  },
  center: {
    flexDirection: "column",
  },
  image: {
    alignSelf: "center",
    marginTop: 52,
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
  button: {
    marginTop: 35,
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
    // height:29,
    padding: "10 14",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
