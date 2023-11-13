import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
const VerifyIDSubmitted = ({ navigation }) => {
  return (
    <View>
      <Text>Request submitted!</Text>
      <Text>
        We will notify you when your identity has been successfully verified
      </Text>
      <Image
        style={styles.image}
        source={require("../../assets/Submitted.png")}
      />
      <Button onPress={() => navigation.navigate("SuccessDone")}>
        Continue
      </Button>
    </View>
  );
};
export default VerifyIDSubmitted;
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
  image: {
    alignSelf: "center",
    marginTop: 52,
  },
});
