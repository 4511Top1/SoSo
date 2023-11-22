import React from "react";
import {
  TopNavigation,
  Text,
  Layout,
  useTheme,
  Button,
} from "@ui-kitten/components";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import { Iconify } from "react-native-iconify";

import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
import { EventCard } from "./EventCard";
import { ScreenNormalView } from "../../components/CustomView";
import HorizontalCardScroll from "./HorizontalCardScroll";
const event = {
  title: "Sea-labration",
  description:
    "Sea-labration is a fundraising event to raise money for the conservation of the Great Barrier Reef. The event will be held at the Sydney Opera House and will feature a live performance by the Sydney Symphony Orchestra. The event will also feature a silent auction with items donated by local businesses and artists. The event will be held on Saturday, November 20th at 7:00pm. Tickets are $100 and can be purchased online or at the door.",
  date: "SUN, 29 SEP 04:30 PM",
  location: "Sydney Opera House",
  image: require("../../assets/images/DetailsImage2.png"),
};
const ProgressBar = () => {
  const filledWidth = 67 + "%";
  return (
    <Layout style={styles.progressBar}>
      <View style={[styles.filledProgressBar, { width: filledWidth }]}>
        <Text style={[styles.progressText]}>$7000</Text>
      </View>
      <Text style={styles.goalText}>/ $10000</Text>
    </Layout>
  );
};

const DetailsRegist = ({ navigation }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  //   const { fromScreen, event } = route.params;
  const imageUri = require("../../assets/images/DetailsImage1.png");
  const fullText = event.description;

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const navigateToFund = (event) => {
    console.log("Navigating to fund with event:", event);
    navigation.navigate("FundEvent", {
      event: event,
      fromScreen: "DetailsRegist",
    });
  };

  const renderBookmarkIcon = (props) => (
    <TouchableOpacity onPress={toggleBookmark}>
      {isBookmarked ? (
        <Iconify
          color={theme["color-primary-500"]}
          size={27}
          icon={"iconoir:bookmark-solid"}
          style={[
            styles.bookmarkIcon,
            isBookmarked ? styles.bookmarked : styles.notBookmarked,
          ]}
        />
      ) : (
        <Iconify
          color={theme["color-primary-500"]}
          size={27}
          icon={"iconoir:bookmark"}
          style={[
            styles.bookmarkIcon,
            isBookmarked ? styles.bookmarked : styles.notBookmarked,
          ]}
        />
      )}
    </TouchableOpacity>
  );

  const getDisplayedText = (text) => {
    if (isExpanded) {
      return text;
    }

    return `${text.substring(0, 100)}...`;
  };

  const renderTitle = () => (
    <Layout style={{ flexDirection: "row", alignItems: "center" }}>
      <BackAction navigation={navigation} />
      <Text category="h2" status="primary">
        Details
      </Text>
    </Layout>
  );

  return (
    <ScreenNormalView>
      <TopNavigation title={renderTitle} alignment="start" />
      <ScrollView>
        <View>
          <Image source={imageUri} />
        </View>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text category="h4" status="primary">
              Winnie The Roo Musical
            </Text>
            {renderBookmarkIcon()}
          </View>

          <View style={styles.content}>
            <Text style={styles.paragraph}>{getDisplayedText(fullText)}</Text>
            <View style={styles.showMoreButton}>
              {!isExpanded && (
                <TouchableOpacity onPress={() => setIsExpanded(true)}>
                  <Text
                    style={{
                      color: theme["color-primary-500"],
                      // alignItems: "center",
                      // contentAlign: "center",
                      // justifyContent: "center",
                    }}
                  >
                    Show more
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Text category="s1" style={styles.timeSubtitle}>
              Time and location
            </Text>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                style={styles.icon}
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:clock-20-regular"}
              />
              <Text category="p1" style={styles.text}>
                05:00 AM
              </Text>
            </Layout>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                style={styles.icon}
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:calendar-20-regular"}
              />
              <Text category="p1" style={styles.text}>
                Sat, 20 Nov 2021
              </Text>
            </Layout>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                style={styles.icon}
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:location-20-regular"}
              />
              <Text category="p1" style={styles.text}>
                Sydney Opera House
              </Text>
            </Layout>
            <Text category="s1" style={styles.eventTitle}>
              Event status
            </Text>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={21}
                icon={"cil:ban"}
              />
              <Text category="p1" style={styles.eventText}>
                Verified users only
              </Text>
            </Layout>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={21}
                icon={"iconoir:coin"}
              />
              <ProgressBar />
            </Layout>
            <Text category="s1" style={styles.similarTitle}>
              Who's coming
            </Text>
                <HorizontalCardScroll />
            {/* <EventCard event={event} onPress={() => {}} /> */}
          </View>
          {/* <Button
            style={styles.fundButton}
            onPress={() => navigateToFund(event)}
          >
            Fund
          </Button> */}
          <Button
            style={styles.fundButton}
            onPress={() => navigation.navigate("RegisterEvent")}
          >
            Register
          </Button>
        </View>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default DetailsRegist;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    // position: "relative",
    // backgroundColor: "#fff",
  },
  content: {
    position: "relative",
  },
  timeSubtitle: {
    marginTop: 10,
  },
  paragraph: {
    paddingRight: 40,
    alignContent: "center",
    // contentAlign: "center",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end", // Aligns the title and the bookmark icon vertically
    justifyContent: "space-between",
    // If you have padding or margins, adjust them here
  },
  showMoreButton: {
    alignItems: "flex-end",
  },
  fundButton: {
    display: "flex",
    marginTop: 10,
    padding: 10,
    // padding: 10 14,
    justifyContent: "center",
    alignItems: "center",
    gap: -30,

    borderRadius: "15px",
    background: "#4D4352",
    boxShadow: "0px 10px 35px 0px #4D4352",
  },
  eventTitle: {
    marginTop: 16,
  },
  bookmarkButton: {
    position: "absolute",
    top: 0, // Adjust as necessary
    right: 0,
    // Set the size of the bookmark icon or use padding
    width: 24,
    height: 24,
    // Use your bookmark icon image
    // backgroundColor: "#6200EE", //
  },
  icon: {
    marginRight: -1,
    marginLeft: -2,
  },
  oneLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
    marginTop: 5,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
  },
  progressBar: {
    flexDirection: "row", // Align child views in a row
    height: 25, // Set the height of the progress bar
    backgroundColor: "#D6D6D6", // Light grey color for the unfilled part of the progress bar
    borderRadius: 15,
    overflow: "hidden", // Ensur
    marginLeft: 10,
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

  text: {
    marginLeft: 8,
  },
  eventText: {
    marginLeft: 12,
    // color: "#775987",
  },
  similarTitle: {
    marginTop: 22,
  },

});
