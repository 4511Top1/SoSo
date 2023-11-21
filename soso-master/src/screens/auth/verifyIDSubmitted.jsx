import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

import { ScreenView } from "../../components/CustomView";

const VerifyIDSubmitted = ({ navigation }) => {
  return (
    <ScreenView>
      <View style={styles.container}>
        <Text category="h5" status="primary" style={styles.title}>
          Request submitted!
        </Text>
        <Text style={styles.subtitle}>
          We will notify you when your identity has been successfully verified
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/Submitted.png")}
        />
        <Layout style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("SuccessDone")}
          >
            Continue
          </Button>
        </Layout>
      </View>
    </ScreenView>
  );
};
export default VerifyIDSubmitted;
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
    // padding: "10px 10px  14px 14px",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
