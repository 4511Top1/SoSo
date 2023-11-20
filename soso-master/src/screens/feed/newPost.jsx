import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { Layout, Avatar, TabView, Text, List, Input } from "@ui-kitten/components";
import * as ImagePicker from 'expo-image-picker';
import colors from '../../../theme2.json'; 

const NewPost = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState(null);  
  const [text, setText] = useState('');

  const handleChoosePhoto = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
       
    if (!result.cancelled) {
        setPhotoUri(result.assets[0].uri);
      }
}

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
          New Post
        </Text>
      </View>

      <View style={styles.nameTag}>
        <Avatar
          source={require("../../assets/images/viewPostIcon1.png")} 
          style={styles.avatar}
          size="medium"
        />
        <Text category="s1">Zoe</Text>
      </View>

      <View style={styles.postArea}>
        <TouchableOpacity onPress={handleChoosePhoto} style={styles.uploadArea}>
          <Fontisto name="camera" size={24} color="black" />
          <Text style={styles.uploadText}>Upload photo</Text>
          {photoUri && (
            <Image
              source={{ uri: photoUri}}
              style={styles.preview}
            />
          )}
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Type anything'
            value={text}
            onChangeText={nextValue => setText(nextValue)}
            style={styles.inputText}
          />

          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText} category="h6" appearance='hint'>{300-text.length} characters left</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


export default NewPost;

const styles = StyleSheet.create({
  container: {
    justifyContent:"flex-start",
    flex: 1,
    paddingHorizontal: 20, 
    backgroundColor: "#fff",
  },

  topContainer:{
    flexDirection:"row",
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingVertical:5,
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
    marginTop:15,
    paddingVertical:5,
  },

  postArea:{
    borderWidth: 0,
    borderRadius: 15,
    overflow:"hidden",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth:0,
  },

  uploadArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(77, 67, 82, 0.5)',
    width:"100%",
    height:192,
    position: 'relative', 
    
  },

  uploadText: {
    marginLeft: 10,
    color: '#4d4352',
    zIndex: 0,
  },
  preview: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%", 
    height: "100%", 
    opacity:1,
    zIndex: 1, 
  },

  inputContainer: {
    padding:15,
    borderWidth:0,
    width:"100%",
  },

  inputText:{
    marginBottom:10,
    borderRadius: 15,
    height:50,
    borderColor:'rgba(77, 67, 82, 0.15)',
    fontSize: 16,
  },

  bottomTextContainer:{
    alignItems:"flex-end",
    justifyContent:"flex-end",
    flexDirection: 'row', 
    width: '100%', 
  },

  bottomText:{
    color: colors['color-primary-500'],
    fontWeight:"200",
  }
});
