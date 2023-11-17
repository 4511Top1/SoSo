import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Layout, Avatar, TabView, Text, List, ListItem } from "@ui-kitten/components";

const NewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" onPress={() => navigation.goBack()} style={styles.backArrow}/>
        <Text category="h3" status="primary">
          New Post
        </Text>
      </View>

      <View style={styles.nameTag}>
        <Avatar
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Zoe_Kravitz_2020_dvna_studio.jpg' }} 
          style={styles.avatar}
          size="medium"
        />
        <Text category="s1">Zoe</Text>
      </View>
    </View>
  );
};


export default NewPost;

const styles = StyleSheet.create({
  container: {
    justifyContent:"flex-start",
    flex: 1,
    paddingHorizontal: 10, 
    backgroundColor: "#fff",
  },

  topContainer:{
    flexDirection:"row",
    justifyContent: 'flex-start', 
    alignItems: 'center', 
  },
  
  backArrow: {
    marginRight:10,
  },
  
  avatar: {
    marginRight: 10,
  },

  nameTag:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:20,
  },
});
