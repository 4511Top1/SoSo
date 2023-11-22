import React from "react";
import {
  // Button,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  Layout,
  Tab,
  TabView,
  Text,
  useTheme,
  Button,
} from "@ui-kitten/components";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Entypo,
} from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Iconify } from "react-native-iconify";
import { StatusBar } from "expo-status-bar";

import { useFirstLaunch } from "../hook/FirstLaunchContext";
import { SafeAreaView } from "react-native-safe-area-context";

const ProgressBar = () => {
  const theme = useTheme();
  const filledWidth = 50 + "%";
  return (
    <Layout style={styles.progressBar}>
      <View style={[styles.filledProgressBar, { width: filledWidth }]}>
        <Text style={[styles.progressText]}>$5000</Text>
      </View>
      <Text style={styles.goalText}>/ $10000</Text>
    </Layout>
  );
};

const HomeTutorial = ({ showTutorial, setShowTutorial, toggleModal }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        // animationType="slide"
        // transparent={false}
        // isVisible={showTutorial}
        isVisible={false}
        onRequestClose={() => {
          setShowTutorial(false);
        }}
        style={styles.modal}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modalContent}>
          <Text category="h4" status="primary">
            Getting Started
          </Text>
          <Layout style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <Text category="p1">
              Try out our QuickMatch™ feature that guides you to events and
              friends aligned with your interests in seconds.
            </Text>
            <View style={{ alignItems: "center", gap: 5, marginBottom: 10 }}>
              <Text style={{ marginTop: 10 }} category="s1">
                1. Tap on the Quick Event Matching to quickly match with an
                event.
              </Text>
              <MenuCard
                title="Quick Event Matching"
                icon={<Iconify size={40} icon="solar:calendar-outline" />}
              />
            </View>
            <View style={{ alignItems: "center", gap: 5, marginBottom: 20 }}>
              <Text style={{ marginTop: 10 }} category="s1">
                2. Tap on the Quick User Matching to quickly matched with a
                user.
              </Text>
              <MenuCard
                title="Quick User Matching"
                icon={
                  <Iconify size={40} icon="solar:users-group-rounded-linear" />
                }
              />
            </View>
            <Button>Continue</Button>
            {/* <Text style={{ marginTop: 10 }} category="p1">
              Please click{" "}
              <Text category="s1" status="primary">
                fund button
              </Text>{" "}
              to fund for this event
            </Text> */}
          </Layout>

          {/* <Image source={imageUri} /> */}
        </View>
      </Modal>
    </View>
  );
};

const MenuCard = ({ title, icon, navigation, dest }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(dest);
      }}
    >
      <Layout
        style={{
          width: 165,
          minHeight: 80,
          justifyContent: "center",
          gap: 3,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 15,
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        {icon}
        <Text category="s1">{title}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const [showTutorial, setShowTutorial] = React.useState(true);

  const theme = useTheme();
  const { isFirstLaunch } = useFirstLaunch();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const shouldLoadComponent = (index) => index === selectedIndex;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            // resizeMode="contain"
            source={require("../assets/images/SoSoWhite.png")}
          />
          <Text>Good Morning, Zoe!</Text>
        </View>

        <View style={styles.iconsContainer}>
          <Iconify
            icon="solar:bell-linear"
            size={30}
            color="black"
            // color={theme["color-basic-900"]}
            onPress={() => navigation.navigate("Notification")}
          />
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="black"
            onPress={() => navigation.navigate("Scanner")}
          />
        </View>
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ overflow: "visible" }}
      >
        <View style={styles.quickMatch}>
          <Text category="h4" status="primary" style={{ marginBottom: 5 }}>
            Shortcuts
          </Text>
          <View style={[styles.twoButton, { marginBottom: 10 }]}>
            <MenuCard
              title="Quick Event Matching"
              icon={<Iconify size={40} icon="solar:calendar-outline" />}
              navigation={navigation}
              dest="DetailsRegist"
            />
            <MenuCard
              title="Quick User Matching"
              icon={
                <Iconify size={40} icon="solar:users-group-rounded-linear" />
              }
              navigation={navigation}
              dest="MyUserProfile"
            />
            <MenuCard
              title="Create New Event"
              icon={<Iconify icon="solar:calendar-add-linear" size={40} />}
              navigation={navigation}
              dest="CreateEvent"
            />
            <MenuCard
              title="Create New Post"
              icon={<Iconify icon="solar:document-add-linear" size={40} />}
              navigation={navigation}
              dest="NewPost"
            />
          </View>
        </View>

        <View style={[styles.tab]}>
          <Text category="h4" status="primary">
            Your events
          </Text>

          <TabView
            selectedIndex={selectedIndex}
            shouldLoadComponent={shouldLoadComponent}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <Tab
              title={(evaProps) => (
                <Text {...evaProps} style={[evaProps.style, styles.tabTitle]}>
                  Upcoming
                </Text>
              )}
              style={
                {
                  // alignItems: "flex-start",
                  // justifyContent: "flex-start",
                  // alignSelf: "flex-start",
                  // backgroundColor: "red",
                }
              }
            >
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
                          onPress={toggleModal}
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
                <Pressable
                  style={[styles.card, styles.cardShadowBox]}
                  onClick={() => navigation.navigate("Details")}
                >
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        12
                      </Text>
                      <Text category="h4" status="control">
                        Dec
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">SUN, 3:00 PM</Text>
                        <Text category="h6">Sea-labration!</Text>
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
            <Tab
              title={(evaProps) => (
                <Text {...evaProps} style={[evaProps.style, styles.tabTitle]}>
                  Funded
                </Text>
              )}
            >
              <Layout style={styles.tabContainer}>
                <Pressable
                  style={[styles.card, styles.cardShadowBox]}
                  onClick={() => navigation.navigate("Details")}
                >
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        12
                      </Text>
                      <Text category="h4" status="control">
                        Dec
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">SUN, 3:00 PM</Text>
                        <Text category="h6">Sea-labration!</Text>
                      </View>
                      <View style={styles.options}>
                        <Pressable
                          style={[styles.pressable, styles.center2FlexBox]}
                          onPress={() => navigation.navigate("DetailsRegist")}
                        >
                          <Text category="s1" status="control">
                            Registration Open!
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
                <Pressable
                  style={styles.card}
                  onClick={() => navigation.navigate("Details")}
                >
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        20
                      </Text>
                      <Text category="h4" status="control">
                        Nov
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">SAT, 5:00 AM</Text>
                        <Text category="h6">Winnie The Roo Musical</Text>
                      </View>
                      <View style={styles.options}>
                        <ProgressBar />
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
            <Tab
              title={(evaProps) => (
                <Text {...evaProps} style={[evaProps.style, styles.tabTitle]}>
                  Hosting
                </Text>
              )}
            >
              <Layout style={styles.tabContainer}>
                <Pressable style={styles.card} onClick={() => {}}>
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        20
                      </Text>
                      <Text category="h4" status="control">
                        Nov
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">WED, 11:00 AM</Text>
                        <Text category="h6">Whale Watching</Text>
                      </View>
                      <View style={styles.options}>
                        <TouchableOpacity
                          style={[styles.pressable, styles.center2FlexBox]}
                          onPress={() => navigation.navigate("DetailsRegist")}
                        >
                          <Text category="s1" status="control">
                            Fully Funded!
                          </Text>
                        </TouchableOpacity>
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
                <Pressable
                  style={[styles.card, styles.cardShadowBox]}
                  onClick={() => navigation.navigate("Details")}
                >
                  <View style={styles.info}>
                    <View style={[styles.date, styles.dateSpaceBlock]}>
                      <Text category="h4" status="control">
                        12
                      </Text>
                      <Text category="h4" status="control">
                        Dec
                      </Text>
                    </View>
                    <View style={styles.content}>
                      <View style={styles.subject}>
                        <Text category="p2">SUN, 3:00 PM</Text>
                        <Text category="h6">Sea-labration!</Text>
                      </View>
                      <View style={styles.options}>
                        <Pressable
                          style={[styles.pressable, styles.center2FlexBox]}
                          onPress={() => navigation.navigate("DetailsRegist")}
                        >
                          <Text category="s1" status="control">
                            Fully Funded!
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
          </TabView>
        </View>

        <View>
          {/* <Text>I am home page!</Text>
          {isFirstLaunch && <Text>This is the first launch!</Text>} */}
          {/* <Button
            title="Click me to login"
            onPress={() => navigation.navigate("Login")}
          ></Button>
          <Button
            title="Click me to launch"
            onPress={() => navigation.navigate("Splash")}
          ></Button> */}
          <StatusBar style="auto" />
        </View>

        <View style={{ flex: 1 }}>
          <Modal
            isVisible={isModalVisible}
            style={styles.modal}
            onBackdropPress={toggleModal}
          >
            <View style={styles.modalContent}>
              <Text category="h4" status="primary">
                Whale Watching
              </Text>
              <Image
                style={styles.qrCode}
                resizeMode="contain"
                source={require("../assets/images/QR.png")}
              />
              <View style={styles.details}>
                <View style={[styles.label, styles.labelFlexBox]}>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:clock-20-regular"}
                  />
                  <Text category="p1">11:00 AM</Text>
                </View>
                <View style={[styles.label, styles.labelFlexBox]}>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:calendar-20-regular"}
                  />
                  <Text category="p1">Wednesday, 28 oct 202</Text>
                </View>
                <View style={[styles.label, styles.labelFlexBox]}>
                  <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"fluent:location-20-regular"}
                  />
                  <Text category="p1">SEA LIFE Sydney Aquarium</Text>
                </View>
                <View style={styles.ticketButton}>
                  <Pressable
                    style={[styles.pressable, styles.center2FlexBox]}
                    onClick={() => {}}
                  >
                    <Text category="s1" status="control">
                      View Event
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>

      <HomeTutorial
        showTutorial={showTutorial}
        setShowTutorial={setShowTutorial}
        toggleModal={toggleModal}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    justifyContent: "flex-start",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "blue",
  },

  iconsContainer: {
    flexDirection: "row",
    // backgroundColor: "red",
    // marginRight: 10,
    // justifyContent: "space-between",
    // width: 60,
    // alignItems: "center",
    marginTop: 5,
    gap: 15,
  },
  logoContainer: {
    flexDirection: "coloum",
    justifyContent: "space-between",
    alignItems: "left",
  },
  logo: {
    width: 108,
    height: 50,
  },
  quickMatch: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    justifyContent: "center",
  },

  twoButton: {
    // padding: 5,
    overflow: "visible",
    flexDirection: "row",
    gap: 20,
    flexWrap: true,
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
    // padding: 20,
    marginTop: 10,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 300,
    // textAlign: "left",
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
    width: 70,
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
    backgroundColor: "#775987",
    // backgroundColor: "#4d4352",
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
    paddingVertical: 10,
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
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    height: 113,
    borderRadius: 15,
    alignSelf: "stretch",
    marginBottom: 20,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(77, 67, 82, 0.2)",
    backgroundColor: "#fff",
  },

  progressBar: {
    flexDirection: "row", // Align child views in a row
    height: 40, // Set the height of the progress bar
    width: 200,
    backgroundColor: "#D6D6D6", // Light grey color for the unfilled part of the progress bar
    borderRadius: 15,
    overflow: "hidden", // Ensur
  },
  filledProgressBar: {
    backgroundColor: "#775987", // Purple color for the filled part
    justifyContent: "center", // Center the text vertically
  },
  progressText: {
    color: "white", // White color for the progress text
    marginLeft: 10, // Spacing from the left edge of the filled progress bar
  },
  goalText: {
    color: "#775987", // Purple color to match the filled part
    alignSelf: "center", // Center the text vertically
    marginLeft: "auto", // Push the goal text to the end of the progress bar
    marginRight: 10, // Spacing from the right edge of the progress bar
  },
  qrCode: {
    height: 250,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  labelFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginTop: 10,
    alignItems: "center",
  },
  ticketButton: {
    width: 200,
    paddingVertical: 10,
  },
});
