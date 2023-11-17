import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { Layout, Tab, TabView, Text, List, ListItem, TouchableOpacity } from "@ui-kitten/components";
import { TopNavigation } from '@ui-kitten/components';
// import BackIcon from '../backArrow';

const Feed = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text category="h3" status="primary">
          Feed
        </Text>
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="facebook-messenger" size={24} color="black"/>
          <Entypo name="new-message" size={24} color="black" onPress={() => navigation.navigate('NewPost')}/>
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
    paddingHorizontal: 10, 
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
});
