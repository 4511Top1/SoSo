import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Divider, Text } from "@ui-kitten/components";
import colors from '../../theme2.json'; 
import PostButtons from "../components/buttons/postButtons";


const ViewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <MaterialCommunityIcons 
          name="keyboard-backspace" 
          size={24} 
          color="black" 
          onPress={() => navigation.goBack()} 
          style={styles.backArrow}
        />
        <Text category="h3" status="primary">
          View Post
        </Text>
      </View>

      <View style={styles.nameTag}>
        <Avatar
          source={ require("../assets/images/viewPostIcon1.png") }
          style={styles.avatar}
          size="large"
        />
        <View style={styles.textContainer}>
          <Text category='s1'>Zoe</Text>
          <Text appearance='hint'>just now</Text>
        </View>
      </View>

      <View style={styles.postArea}>
          <Text style={{ marginHorizontal: 15, marginVertical: 10}} category='p1'>
            Everyone is welcomed to join the pottery event I just created!
          </Text>
          <Divider style={{ marginHorizontal: 15, marginVertical:10 }}/>
          <PostButtons/>
        </View>
    </View>
  );
};


export default ViewPost;

const styles = StyleSheet.create({
  container: {
    justifyContent:"flex-start",
    flex: 1,
    paddingHorizontal: 20, 
    backgroundColor: "#fff",
  },

  topContainer:{
    flexDirection: "row",
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingVertical: 5,
  },
  
  backArrow: {
    marginRight: 10,
  },
  
  avatar: {
    marginRight: 10,
  },

  nameTag:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:15,
    paddingVertical:5,
  },

  postArea:{
    borderWidth: 0,
    borderRadius: 15,
    overflow:"hidden",
    backgroundColor:"white",
  },
});