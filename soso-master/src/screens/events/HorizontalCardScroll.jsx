import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const users = [
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
  { name: "Shrek", image: require("../../assets/images/viewPostIcon1.png") },
];
const HorizontalCardScroll = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {users.map((user, index) => (
        <View key={index} style={styles.card}>
          <Image source={user.image} style={styles.image} />
          <Text style={styles.name}>{user.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: "center",
  },
  card: {
    marginTop: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 50, // 图像宽度
    height: 50, // 图像高度
    borderRadius: 25, // 使图像呈圆形
  },
  name: {
    marginTop: 5, // 名字与图像之间的间距
  },
});

export default HorizontalCardScroll;
