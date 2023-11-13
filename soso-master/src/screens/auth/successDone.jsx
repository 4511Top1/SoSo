import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
const SuccessDone = ({ navigation }) => {
  return (
    <View >
      {/* <Text>All done!</Text> */}
      {/* <Text>You are now ready to use SoSo.</Text>

      <Image
        style={styles.image}
        source={require("../../assets/Reset_Success.png")}
      />
      <Button>Let's go</Button> */}
    </View>
  );
};
export default SuccessDone;
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
