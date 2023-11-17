import { Layout, Text, Button } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFirstLaunch } from "../../hook/FirstLaunchContext";

const FirstLaunch = ({ navigation }) => {
  const { setIsFirstLaunch } = useFirstLaunch();
  const handleFinish = () => {
    setIsFirstLaunch(false);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.fullscreen}>
      <Text>Welcome to the First Launch Page!</Text>
      <Button title="Finish First Launch" onPress={handleFinish} />
    </View>
  );
};
export default FirstLaunch;
const styles = StyleSheet.create({
  fullscreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#C870FF", // 你的页面背景色
  },
  container: {
    flex: 1,
    // 其他全局样式
  },
});
