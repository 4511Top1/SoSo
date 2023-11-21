import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet, View, Image,TouchableWithoutFeedback } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFirstLaunch } from "../../hook/FirstLaunchContext";
import { ScreenNoSaveView } from "../../components/CustomView";

const Splash = ({ navigation }) => {
  const handleScreenPress = () => {

    navigation.navigate('Login');
  };
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
        <View style={styles.container}>
        {/* <Text>Welcome to the First Launch Page!</Text> */}
        <Image
          style={styles.image}
          source={require("../../assets/images/SoSoWhite.png")}
        />
        {/* <Button
          onPress={() =>
            navigation.navigate("Tabs", {
              screen: "Tabs",
              initial: true,
            })
          }
        >
          Go
        </Button> */}
      </View>
    </TouchableWithoutFeedback>


  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
  },
});
