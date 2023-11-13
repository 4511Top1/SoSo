import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Button } from "@ui-kitten/components";
import { Image } from "react-native";
const ResetSuccess = () => {
  const [email, setEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Password reset request sent to your email!</Text>
      <Text>check your inbox and click the link to reset your password</Text>

      <Image
        style={styles.image}
        source={require("../../assets/Reset_Success.png")}
      />
      <Button>Back to login</Button>
    </View>
  );
};
export default ResetSuccess;

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
