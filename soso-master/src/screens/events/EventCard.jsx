import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text, Layout, List, useTheme } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

import BookMarkIcon from "../../assets/svg/bookmarkIcon.svg";
import LocationIcon from "../../assets/svg/locationIcon.svg";

export const EventCard = ({ event, onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card} onPress={onPress}>
        <Image source={event.imageUri} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.headerSubtitle}>{event.dateTime}</Text>
            <Text style={styles.headerTitle}>{event.title}</Text>
          </View>
          <View style={styles.locationContainer}>
            <View style={styles.leftContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                style={styles.LocationIcon}
                icon={"fluent:location-20-filled"}
              />
              <Text style={styles.locationText}>{event.locationName}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"iconoir:bookmark"}
                style={[
                  styles.bookmarkIcon,
                  // isBookmarked ? styles.bookmarked : styles.notBookmarked,
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // margin: 4,
    marginTop: 20,
    borderRadius: 16,
    // position: "relative",
    flexDirection: "row",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000",
    elevation: 5,
    backgroundColor: "#fff",
    // border: "1px solid #E4E9F2",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  locationContainer: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
    marginTop:12,
    // paddingTop:-10,
    // justifyContent: "space-between",
    marginLeft: 12,
  },
  rightContainer: {
    paddingRight: 12,
  },
  content: {
    flex: 1,
    gap: 5,
  },
  image: {
    // width: 60,
    // height: 60,
    // borderRadius: 30,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textContainer: {
    // backgroundColor:"red",
    // flex: 1,
    justifyContent: "center",
    marginLeft: 16,
    marginTop: 19,

  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
  locationText: {
    // marginHorizontal: 16,
    marginLeft: 10,
    fontSize: 15,
    opacity: 0.7,
    // fontWeight: "500",
  },
  bookmarkButton: {
    marginLeft: 40,
    // position: "absolute",
    // bottom: 10, // Adjust as needed
    // right: 10, // Adjust as needed
    // width: 32, // Adjust as needed
    // height: 32, // Adjust as needed
  },
});
