import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, Layout, List } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

import BookMarkIcon from "../../assets/svg/bookmarkIcon.svg";
import LocationIcon from "../../assets/svg/locationIcon.svg";

export const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Layout style={styles.card} onPress={onPress}>
        <Layout style={styles.headerContainer}>
          <Image source={event.imageUri} style={styles.image} />
          <Layout style={styles.textContainer}>
            <Text style={styles.headerSubtitle}>{event.dateTime}</Text>
            <Text style={styles.headerTitle}>{event.title}</Text>
          </Layout>
        </Layout>
        <Layout style={styles.locationContainer}>
          <LocationIcon width={24} height={24} style={styles.locationIcon} />
          <Text style={styles.locationText}>{event.locationName}</Text>
        </Layout>

        <BookMarkIcon width={24} height={24} style={styles.bookmarkButton} />
      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 8,
    position: "relative",
    border: "1px solid #E4E9F2",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 16,
  },
  image: {
    width: 60,
    height: 60,
    // borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 16,
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
    marginHorizontal: 16,
    fontSize: 15,
    fontWeight: "500",
  },
  bookmarkButton: {
    position: "absolute",
    bottom: 10, // Adjust as needed
    right: 10, // Adjust as needed
    width: 32, // Adjust as needed
    height: 32, // Adjust as needed
  },
});
