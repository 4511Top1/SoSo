import React from 'react';
import { Button, Text } from '@ui-kitten/components';
import { StyleSheet, Image, View } from "react-native";

const LoginButton = ({ navigation, navigateTo, title, route }) => {
  const handlePress = () => {
    if (route) {
        navigation.navigate(navigateTo, route);
        // console.log("id", route);
    } else {
      navigation.navigate(navigateTo);
    }
  };
  return(
    <Button
    style={styles.button}
    onPress={handlePress}
    >
      {title}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/images/buttonArrow.png')} 
            style={styles.arrowImage}
            />
        </View>
      </View>
    </Button>
  )
};

const styles = StyleSheet.create({
    button: {
        marginTop: 35,
        backgroundColor: "#4D4352",
        padding: 10,
        borderRadius: 15,
        width: 271,
        height: 58,
      },
      iconContainer: {
        position: 'absolute',
        right: -105,
        top:-5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      arrowImage: {
        width: 30, 
        height: 30, 
      },
});

export default LoginButton;
