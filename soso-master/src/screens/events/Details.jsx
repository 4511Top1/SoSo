import React from "react";
import { TopNavigation, Text, Layout, useTheme } from "@ui-kitten/components";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Iconify } from "react-native-iconify";

import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
import { EventCard } from "./EventCard";
import { ScreenNoSaveView } from "../../components/CustomView";

const ProgressBar = () => {
  const theme = useTheme();
  const filledWidth = 70 + "%";
  return (
    <Layout style={styles.progressBar}>
      <View style={[styles.filledProgressBar, { width: filledWidth }]}>
        <Text style={[styles.progressText]}>$7000</Text>
      </View>
      <Text style={styles.goalText}>/ $10000</Text>
    </Layout>
  );
};

const Details = ({ navigation, route }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const { fromScreen, event } = route.params;
  const imageUri = require("../../assets/images/DetailsImage1.png");
  const fullText = event.description;

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const getDisplayedText = (text) => {
    if (isExpanded) {
      return text;
    }

    return `${text.substring(0, 100)}...`;
  };

  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -16 }}
    >
      <BackAction navigation={navigation} />
      <Text category="h4" status="primary">
        Details
      </Text>
    </Layout>
  );

  return (
    <ScreenNoSaveView>
      <TopNavigation title={renderTitle} alignment="start" />
      <ScrollView>
        <View>
          <Image source={imageUri} />
        </View>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text category="h6">Winnie The Roo Musical</Text>
            <TouchableOpacity onPress={toggleBookmark}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"iconamoon:bookmark-thin"}
                style={[
                  styles.bookmarkIcon,
                  isBookmarked ? styles.bookmarked : styles.notBookmarked,
                ]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text category="p1" style={styles.paragraph}>
              {getDisplayedText(fullText)}
              {!isExpanded && (
                <TouchableOpacity onPress={() => setIsExpanded(true)}>
                  <Text
                    style={{
                      color: theme["color-primary-500"],
                    }}
                  >
                    Show more
                  </Text>
                </TouchableOpacity>
              )}
            </Text>

            <Text category="s1">Time and location</Text>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:clock-20-regular"}
              />
              <Text category="p1">05:00 AM</Text>
            </Layout>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:calendar-20-regular"}
              />
              <Text category="p1">Sat, 20 Nov 2021</Text>
            </Layout>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:location-20-regular"}
              />
              <Text category="p1">Sydney Opera House</Text>
            </Layout>
            <Text category="s1">Event status</Text>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={21}
                icon={"cil:ban"}
              />
              <Text category="p1">Verified users only</Text>
            </Layout>
            <Layout style={styles.oneLineContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={21}
                icon={"iconoir:coin"}
              />
              <ProgressBar />
            </Layout>
            <Text category="s1">Similar Events</Text>
            <EventCard event={event} onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </ScreenNoSaveView>
  );
};

export default Details;
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
  paragraph: {
    paddingRight: 40,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end", // Aligns the title and the bookmark icon vertically
    justifyContent: "space-between",
    // If you have padding or margins, adjust them here
  },
  showMoreButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
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
  oneLineContainer: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
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
  bookmarked: {
    tintColor: "purple", // Or any color when the item is bookmarked
  },
  notBookmarked: {
    tintColor: "gray", // Or any color when the item is not bookmarked
  },
});
