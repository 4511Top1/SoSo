import React from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Layout, Tab, TabView, Text } from "@ui-kitten/components";
import {
  MaterialCommunityIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Iconify } from "react-native-iconify";
import { StatusBar } from "expo-status-bar";

import { useFirstLaunch } from "../hook/FirstLaunchContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const { isFirstLaunch } = useFirstLaunch();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/images/SoSoWhite.png")}
          />
          <Text>Good Morning, Zoe!</Text>
        </View>

        <View style={styles.iconsContainer}>
          <MaterialCommunityIcons
            name="bell-ring"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Notification")}
          />
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
        </View>
      </View>

      <View style={styles.quickMatch}>
        <Text category="h4">Quick Matching</Text>
        <View style={styles.twoButton}>
          <Pressable style={styles.matchButton}>
            <Iconify size={30} icon="solar:calendar-outline" />
            <Text category="label">Quick Event Matching</Text>
          </Pressable>
          <Pressable style={styles.matchButton}>
            <FontAwesome name="users" size={30} color="black" />
            <Text category="label">Quick User Matching</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView>
        <View>
          <TabView
            selectedIndex={selectedIndex}
            shouldLoadComponent={shouldLoadComponent}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <Tab title="Your upcoming events">
              <Layout style={styles.tabContainer}>
                <Pressable style={styles.card} onClick={() => {}}>
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        28
                      </Text>
                      <Text category="h4" status="control">
                        Oct
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">WED, 11:00 AM</Text>
                        <Text category="h6">Whale Watching</Text>
                      </View>
                      <View style={styles.options}>
                        <Pressable
                          style={[styles.pressable, styles.center2FlexBox]}
                          onClick={() => {}}
                        >
                          <Text category="s1" status="control">
                            View ticket
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                  <View style={styles.chevron}>
                    <SimpleLineIcons
                      name="arrow-right"
                      size={24}
                      color="grey"
                    />
                  </View>
                </Pressable>
              </Layout>
            </Tab>
            <Tab title="Events you've funded">
              <Layout style={styles.tabContainer}>
                <Pressable style={styles.card} onClick={() => {}}>
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        28
                      </Text>
                      <Text category="h4" status="control">
                        Oct
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">WED, 11:00 AM</Text>
                        <Text category="h6">Whale Watching</Text>
                      </View>
                      <View style={styles.options}>
                        <Pressable
                          style={[styles.pressable, styles.center2FlexBox]}
                          onClick={() => {}}
                        >
                          <Text category="s1" status="control">
                            View ticket
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                  <View style={styles.chevron}>
                    <SimpleLineIcons
                      name="arrow-right"
                      size={24}
                      color="grey"
                    />
                  </View>
                </Pressable>
              </Layout>
            </Tab>
            <Tab title="Events you're hosting">
              <Layout style={styles.tabContainer}>
                <Text category="h5">Events you're hosting</Text>
              </Layout>
            </Tab>
          </TabView>
        </View>

        <View>
          {/* <Text>I am home page!</Text>
          {isFirstLaunch && <Text>This is the first launch!</Text>} */}
          <Button
            title="Click me to login"
            onPress={() => navigation.navigate("Login")}
          ></Button>
          <Button
            title="Click me to launch"
            onPress={() => navigation.navigate("Splash")}
          ></Button>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "coloum",
    justifyContent: "space-between",
    alignItems: "left",
  },
  logo: {
    width: 100,
    height: 50,
  },
  quickMatch: {
    position: "absolute",
    bottom: 0, // 距离底部导航栏的距离
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "left",
    shadowColor: "#4D4352", // Box shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  twoButton: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    alignItems: "flex-start",
    alignContent: "flex-start",
    gap: 20,
  },
  matchButton: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: 165,
    height: 80,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#4D4352", // Box shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  tabContainer: {
    // height: 64,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  //cards
  octTypo: {
    fontWeight: "600",
    letterSpacing: 0,
  },
  text: {
    textAlign: "center",
    lineHeight: 41,
  },
  date: {
    backgroundColor: "#4d4352",
    width: 68,
    paddingHorizontal: 10,
    height: 113,
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  center2FlexBox: {
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  dateSpaceBlock: {
    paddingVertical: 0,
    justifyContent: "center",
  },
  pressable: {
    width: 200,
    height: 40,
    backgroundColor: "#4d4352",
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: 15,
  },
  options: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    left: 77,
    height: 113,
    top: 0,
    position: "absolute",
  },
  subject: {
    // width: 1,
    height: 62,
  },
  info: {
    width: 275,
    height: 113,
  },
  chevron: {
    marginLeft: 50,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  card: {
    height: 113,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#FFF",
    shadowColor: "#4D4352", // Box shadow color
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
