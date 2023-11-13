import React from "react";
import { View, Text } from "react-native";
import { Button, Input } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
const VerifyID = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Identity verification</Text>

      <Input
        placeholder="Full Name"
        value={name}
        onChangeText={(nextValue) => setName(nextValue)}
      />
      <Input
        placeholder="Phone Number"
        value={number}
        onChangeText={(nextValue) => setNumber(nextValue)}
      />
      <Text>
        Please upload a photo of your government issued ID (e.g., driver;s
        license, passport)
      </Text>
      <Button>Upload photo</Button>
      <Button onPress={() => navigation.navigate("VerifyIDSubmitted")}>
        Submit
      </Button>
    </View>
  );
};
export default VerifyID;
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
