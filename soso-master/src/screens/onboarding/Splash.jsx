import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Splash = ({ navigation }) => {
  const handleScreenPress = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        {/* <Text>Welcome to the First Launch Page!</Text> */}
        <Image
          style={styles.image}
          source={require("../../assets/images/SoSoWhite.png")}
        />
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
