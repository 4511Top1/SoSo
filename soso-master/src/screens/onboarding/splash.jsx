import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFirstLaunch } from "../../hook/FirstLaunchContext";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to the First Launch Page!</Text> */}
      <Image style={styles.image} source={require("../../assets/SoSo.png")} />
      <Button
        onPress={() =>
          navigation.navigate("Tabs", {
            screen: "Tabs",
            initial: true,
          })
        }
      >
        Go
      </Button>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#C870FF",
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
