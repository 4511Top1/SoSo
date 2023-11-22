import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import {
  Text,
  Input,
  Button,
  TopNavigation,
  Avatar,
  useStyleSheet,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import * as ImagePicker from "expo-image-picker";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { default as s } from "./UserProfileStyle";

const MyUserProfileEdit = ({ route, navigation }) => {
  const styles = useStyleSheet(s);

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
          <Button
            appearance="ghost"
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
            Done
          </Button>
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
                    style={styles.avatar}
                    source={
                      newImage.trim()
                        ? { uri: newImage }
                        : require("../../assets/pfp/profile_placeholder.jpeg")
                    }
                  />
                  <View style={styles.centerIcon}>
                    <Iconify size={50} icon="solar:camera-bold" />
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
                  placeholder="Your interests (separated by commas)"
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
