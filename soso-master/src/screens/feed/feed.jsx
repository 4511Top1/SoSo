import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { FontAwesome5, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Divider, TabView, Text, Button, Card } from "@ui-kitten/components";
import { TopNavigation } from '@ui-kitten/components';
import PostButtons from "../../components/postButtons";
// import BackIcon from '../backArrow';

const Feed = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}> 
        <Text category="h3" status="primary">
          Feed
        </Text>
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" onPress={() => navigation.navigate('Chat')}/>
          <Entypo name="new-message" size={24} color="black" onPress={() => navigation.navigate('NewPost')}/>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.nameTag}>
          <View style={ {flexDirection:"row"}}>
            <Avatar
              source={require("../../assets/images/feedIcon1.png")} 
              style={styles.avatar}
              size="large"
            />
            <View style={styles.textContainer}>
              <Text category='s1'>Shrek</Text>
              <Text appearance='hint'>few minutes ago</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="information-outline" size={30} color="black" />
        </View>
        <View style={styles.postArea}>
          <Image
            style={{ width: "100%", height: 192 }}
            source={require("../../assets/images/feedImage1.png")}
          />
          <Text style={{ marginHorizontal: 15, marginTop: 10}} category='p1'>
            Went back to the swamp with Fiona. It was fun!
          </Text>
          <Divider style={{ marginHorizontal: 15, marginVertical:10 }}/>
          <PostButtons/>
        </View>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row', 
    justifyContent:"flex-start",
    flex: 1,
    paddingHorizontal: 15, 
    backgroundColor: "#fff",
  },

  topContainer:{
    flexDirection:"row",
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },

  iconsContainer: {
    flexDirection: 'row', 
    justifyContent:"space-between",
    width: 60,
    alignItems:"center",
  },
  card: {
    margin: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#fff'
  },
  headerImage: {
    height: 200,
  },

  nameTag: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between",
  },
  textContainer: {
    marginLeft: 8,
  },

  postArea:{
    borderWidth: 0,
    borderRadius: 15,
    overflow:"hidden",
  },
});
