// Sub-screens
import Notifications from "./home/Notifications";
import Scanner from "./home/Scanner";
export { Notifications, Scanner };

import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import {
  Layout,
  Tab,
  TabView,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import MenuCard from "../components/cards/MenuCard";
import QRCode from "../modals/QR";
import { HomeTutorial } from "../modals/Tutorials";
import { default as s } from "./HomeStyle";

const ProgressBar = () => {
  const styles = useStyleSheet(s);
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

const ViewTicket = ({ toggleQRModal }) => {
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      style={[styles.pressable, styles.center2FlexBox]}
      onPress={toggleQRModal}
    >
      <Text category="s1" status="control">
        View ticket
      </Text>
    </TouchableOpacity>
  );
};

const RegisterOpen = ({ navigation, destination }) => {
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      style={[styles.pressable, styles.center2FlexBox]}
      onPress={() => navigation.navigate(destination)}
    >
      {}
      <Text category="s1" status="control">
        Registration Open!
      </Text>
    </TouchableOpacity>
  );
};

const FullyFunded = ({ navigation }) => {
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      style={[styles.pressable, styles.center2FlexBox]}
      onPress={() => navigation.navigate("DetailsRegist")}
    >
      <Text category="s1" status="control">
        Fully Funded!
      </Text>
    </TouchableOpacity>
  );
};

const EventsCard = ({
  navigation,
  date,
  month,
  daytime,
  title,
  destination,
  type,
  toggleQRModal,
}) => {
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          fromScreen: "Home",
          event: {
            title: "Whinnie The Roo Musical",
            dateTime: "THU, 29 OCT • 05:00 PM",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum.",
            locationName: "Sydney Opera House",
            imageUri: require("../assets/images/SearchResultsImage3.png"),
          },
        })
      }
    >
      <View style={styles.cardShadow}>
        <View style={styles.card}>
          <View style={styles.info}>
            <View style={[styles.date, styles.dateSpaceBlock]}>
              <Text category="h4" status="control">
                {date}
              </Text>
              <Text category="h5" status="control">
                {month}
              </Text>
            </View>
            <View style={styles.content}>
              <View style={styles.subject}>
                <Text category="p2" appearance="hint">
                  {daytime}
                </Text>
                <Text category="h6">{title}</Text>
              </View>
              <View style={styles.options}>
                {type === "ticket" ? (
                  <ViewTicket toggleQRModal={toggleQRModal} />
                ) : type === "progress" ? (
                  <ProgressBar />
                ) : type === "register" ? (
                  <RegisterOpen
                    navigation={navigation}
                    destination={destination}
                  />
                ) : (
                  <FullyFunded navigation={navigation} />
                )}
              </View>
            </View>
          </View>
          <View style={styles.chevron}>
            <SimpleLineIcons name="arrow-right" size={24} color="grey" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const styles = useStyleSheet(s);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [showTutorial, setShowTutorial] = React.useState(true);
  const [showQR, setShowQR] = React.useState(false);

  const toggleQRModal = () => {
    setShowQR(!showQR);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            // resizeMode="cover"
            source={require("../assets/images/SoSoWhite.png")}
          />
          <Text>Good Morning, Zoe!</Text>
        </View>

        <View style={styles.iconsContainer}>
          <Iconify
            icon="solar:bell-linear"
            size={30}
            color="black"
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

      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.quickMatch}>
          <Text category="h4" status="primary" style={{ marginBottom: 5 }}>
            Shortcuts
          </Text>
          <View style={[styles.twoButton, { marginBottom: 10 }]}>
            <MenuCard
              title="Quick Event Matching"
              icon={<Iconify size={40} icon="solar:calendar-outline" />}
              navigation={navigation}
              destination="DetailsRegist"
            />
            <MenuCard
              title="Quick User Matching"
              icon={
                <Iconify size={40} icon="solar:users-group-rounded-linear" />
              }
              navigation={navigation}
              destination="MyUserProfile"
            />
            <MenuCard
              title="Create New Event"
              icon={<Iconify icon="solar:calendar-add-linear" size={40} />}
              navigation={navigation}
              destination="CreateEvent"
            />
            <MenuCard
              title="Create New Post"
              icon={<Iconify icon="solar:document-add-linear" size={40} />}
              navigation={navigation}
              destination="NewPost"
            />
          </View>
        </View>

        <View style={[styles.tab]}>
          <Text category="h4" status="primary">
            Your events
          </Text>

          <TabView
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <Tab
              title={(evaProps) => (
                <Text {...evaProps} style={[evaProps.style, styles.tabTitle]}>
                  Upcoming
                </Text>
              )}
            >
              <Layout style={styles.tabContainer}>
                <EventsCard
                  navigation={navigation}
                  date="28"
                  month="Oct"
                  daytime="WED, 11:00 AM"
                  title="Whale Watching"
                  type="ticket"
                  toggleQRModal={toggleQRModal}
                />
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
                <EventsCard
                  navigation={navigation}
                  destination={"DetailsRegist"}
                  date="12"
                  month="Dec"
                  daytime="SUN, 3:00 PM"
                  title="Sea-labration!"
                  type="register"
                />
                <EventsCard
                  navigation={navigation}
                  date="20"
                  month="Nov"
                  daytime="SAT, 5:00 AM"
                  title="Winnie the Roo Musical"
                  type="progress"
                />
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
                <EventsCard
                  navigation={navigation}
                  date="24"
                  month="Dec"
                  daytime="TUE, 12:34 PM"
                  title="Someone's Birthday"
                />
              </Layout>
            </Tab>
          </TabView>
        </View>
      </ScrollView>

      {/* Modals */}
      <QRCode
        showModal={showQR}
        setShowModal={setShowQR}
        toggleModal={toggleQRModal}
      />
      <HomeTutorial
        showTutorial={showTutorial}
        setShowTutorial={setShowTutorial}
      />
    </View>
  );
};

export default Home;
