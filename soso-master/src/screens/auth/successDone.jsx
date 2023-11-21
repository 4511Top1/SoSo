import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { ScreenView } from "../../components/CustomView";

const SuccessDone = ({ navigation }) => {
  return (
    // <View >
    //   {/* <Text>All done!</Text> */}
    //   {/* <Text>You are now ready to use SoSo.</Text>

    //   <Image
    //     style={styles.image}
    //     source={require("../../assets/Reset_Success.png")}
    //   />
    //   <Button>Let's go</Button> */}
    // </View>
    <ScreenView>
      <View style={styles.container}>
        <Text status="primary" category="h5" style={styles.title}>
          All done!
        </Text>
        <Text style={styles.subtitle}>You are now ready to use SoSo.</Text>

        <Image
          style={styles.image}
          source={require("../../assets/images/Success.png")}
        />
        <Layout style={styles.buttonContainer}>
          {/* <Button style={styles.button} onPress={() => navigation.pop(2) }>
            Let's So So
          </Button> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Tabs")}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.text}>Let's </Text>
              <Image
                source={require("../../assets/images/SoSo.png")}
                style={styles.logoImage}
              />
            </View>
          </TouchableOpacity>
        </Layout>
        {/* <Button>Back to login</Button> */}
      </View>
    </ScreenView>
  );
};
export default SuccessDone;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 104,
    backgroundColor: "#fff",
  },
  text: {
    // color:"43007C",
    color: "white",
    fontSize: 18,
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
  // button: {
  // marginTop: 35,
  // backgroundColor: "#4D4352",
  // padding: 10,
  // borderRadius: 15,
  // width: 271,
  // // height:29,
  // padding: "10 14",
  // },
  button: {
    backgroundColor: "#C870FF", // 这是一个紫色的背景，您需要根据您的图片调整
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    width: 271,
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 50,
    height: 20,
    resizeMode: "contain",
  },
});
