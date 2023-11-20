import React from "react";
import { Button, Text, useTheme } from "@ui-kitten/components";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const PostButtons = () => {
    // const LikeIcon = <Feather name="thumbs-up" size={16} color="black"/>;
    // const CommentIcon = (props) => <FontAwesome5 name="comment" size={16} color="black" {...props} />;
    // const ShareIcon = (props) => <MaterialCommunityIcons name="share-outline" size={16} color="black" {...props} />;

    // const theme = useTheme();
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button}>
              <Feather name="thumbs-up" size={16} color="black"/>
              <Text style={styles.button_text}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="comment" size={16} color="black"/>
              <Text style={styles.button_text}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIcons name="share-outline" size={16} color="black"/>
              <Text style={styles.button_text}>Share</Text>
            </TouchableOpacity>
          </View>
  );
};

export default PostButtons;

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        // marginTop:30,
        // borderWidth:1,
        // borderColor:"#4D4352",
    },
    button_text: {
        color: "#4D4352",
        fontSize: 15,
        fontWeight: 400,
        marginLeft:10,
    }
});