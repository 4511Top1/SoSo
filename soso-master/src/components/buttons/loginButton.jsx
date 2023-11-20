import React from 'react';
import { Button, Text } from '@ui-kitten/components';
import { StyleSheet, Image, View } from "react-native";

const LoginButton = ({ navigation, navigateTo, title }) => (
  <Button
    style={styles.button}
    onPress={() => navigation.navigate(navigateTo)}
    // accessoryRight={
    //   <Image
    //     source={require('../../assets/images/buttonArrow.png')} // 使用正确的图片路径
    //     style={styles.arrowImage}
    //   />
    // } 
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
);

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
