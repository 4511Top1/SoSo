import React from "react";
import { View } from "react-native";
import { Button, Input, Layout, Text, useTheme } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { Iconify } from "react-native-iconify";

import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";

const VerifyID = ({ navigation }) => {
  const theme = useTheme();
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  return (
    <ScreenView>
      <View style={styles.container}>
        <BackAction navigation={navigation} />
        <Text category="h5" status="primary" style={styles.title}>
          Identity verification
        </Text>

        <Input
          placeholder="Full Name"
          value={name}
          style={styles.fullName}
          onChangeText={(nextValue) => setName(nextValue)}
          accessoryLeft={
            <Iconify
              color={theme["color-basic-500"]}
              size={20}
              icon={"solar:user-rounded-outline"}
            />
          }
        />
        <Input
          placeholder="Phone Number"
          value={number}
          style={styles.number}
          accessoryLeft={
            <Iconify
              color={theme["color-basic-500"]}
              size={20}
              icon={"solar:phone-linear"}
            />
          }
          onChangeText={(nextValue) => setNumber(nextValue)}
        />
        <Text style={styles.paragraph}>
          Please upload a photo of your government issued ID (e.g., driver;s
          license, passport)
        </Text>
        <Button
          style={styles.uploadButton}
          accessoryLeft={
            <Iconify
              color={theme["color-basic-500"]}
              size={20}
              icon={"solar:camera-linear"}
            />
          }
        >
          Upload photo
        </Button>
        <Layout style={styles.buttonContainer}>
          <Button
            style={styles.submitButton}
            onPress={() => navigation.navigate("VerifyIDSubmitted")}
          >
            Submit
          </Button>
        </Layout>
      </View>
    </ScreenView>
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
  title: {
    marginTop: 80,
  },
  paragraph: {
    marginTop: 20,
  },
  fullName: {
    paddingTop: 22,
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
  },
  number: {
    marginTop: 20,
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
  },
  uploadButton: {
    marginTop: 10,
    borderRadius: 15,
  },
  submitButton: {
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
