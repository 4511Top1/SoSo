import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Button } from "@ui-kitten/components";
const Reset = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Reset password</Text>
      <Text>
        Please enter your email address to request for a password reset
      </Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(nextValue) => setEmail(nextValue)}
      />
      <Button  onPress={() => navigation.navigate("ResetSuccess")}>Send request</Button>
    </View>
  );
};
export default Reset;

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
    width: 308,
    height: 123,
    alignSelf: "center",
    marginTop: 52,
  },
});
