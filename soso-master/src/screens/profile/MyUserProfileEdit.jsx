import {
  Avatar,
  Button,
  Input,
  Text,
  TopNavigation,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
import { default as s } from "./UserProfileStyle";

const MyUserProfileEdit = ({ route, navigation }) => {
  const styles = useStyleSheet(s);
  const theme = useTheme();

  const [newDescription, setNewDescription] = React.useState("");
  const [newInterest, setNewInterest] = React.useState("");
  const [newImage, setNewImage] = React.useState("");

  // No permissions request is necessary for launching the image library
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewImage(result.assets[0].uri);
    }
  };

  React.useEffect(() => {
    if (route.params.description) {
      setNewDescription(route.params.description);
    }
    if (route.params?.image) {
      setNewImage(route.params.image);
    }
    if (route.params?.interest) {
      setNewInterest(route.params.interest);
    }
  }, [route.params?.description, route.params?.image, route.params?.interest]);

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        accessoryRight={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyUserProfile", {
                description: newDescription.trim()
                  ? newDescription.trim()
                  : " ",
                interest: newInterest,
                image: newImage,
              });
            }}
          >
            <Text category="h6" style={styles.text}>
              Done
            </Text>
          </TouchableOpacity>
        }
        title={
          <View>
            <Text category="h2" status="primary">
              My Profile
            </Text>
          </View>
        }
        alignment="start"
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={47}
        style={{ flex: 1 }}
        behavior="padding"
      >
        <ScreenView>
          <ScrollView>
            {/* Avatar */}
            <View style={styles.avatarName}>
              <TouchableOpacity onPress={() => pickImage()}>
                <View style={styles.avatarContainer}>
                  <Avatar
                    style={styles.avatarEdit}
                    source={
                      newImage.trim()
                        ? { uri: newImage }
                        : require("../../assets/pfp/profile_placeholder.jpeg")
                    }
                  />
                  <View style={styles.centerIcon}>
                    <Iconify
                      size={50}
                      color={theme["color-basic-400"]}
                      icon="solar:camera-bold"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <Text category="h3" style={styles.name}>
                Zoe
              </Text>
            </View>

            <View style={styles.detailContainer}>
              {/* Description */}
              <Input
                value={newDescription}
                placeholder="Describe yourself"
                style={styles.description}
                multiline={true}
                onChangeText={(nextValue) => {
                  setNewDescription(nextValue);
                }}
              />

              {/* Interests */}
              <View style={styles.detail}>
                <Text category="h4" style={styles.subHeader}>
                  I am interested in
                </Text>
                <Input
                  value={newInterest}
                  placeholder="Your interests"
                  multiline={true}
                  onChangeText={(nextValue) => setNewInterest(nextValue)}
                />
              </View>

              {/* Events Hosted */}
              <View style={styles.detail}>
                <Text category="h4" style={styles.subHeader}>
                  I have hosted
                </Text>
                <Text>In development.</Text>
              </View>

              {/* Events Attended */}
              <View style={styles.detail}>
                <Text category="h4" style={styles.subHeader}>
                  I have attended
                </Text>
                <Text>In development.</Text>
              </View>
            </View>
          </ScrollView>
        </ScreenView>
      </KeyboardAvoidingView>
    </ScreenNormalView>
  );
};

export default MyUserProfileEdit;
