import React from "react";
import { Button, Text, useTheme } from "@ui-kitten/components";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Iconify } from "react-native-iconify";

const PostButtons = () => {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button}>
              <Feather name="thumbs-up" size={16} color="black"/>
              <Text style={styles.button_text}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Iconify
                size={18}
                icon={"iconamoon:comment-light"}
              />
              <Text style={styles.button_text}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Iconify
                size={18}
                icon={"uil:share"}
              />
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
      marginBottom:10
    },
    button_text: {
      color: "#4D4352",
      fontSize: 15,
      fontWeight: 400,
      marginLeft:10,
    }
});