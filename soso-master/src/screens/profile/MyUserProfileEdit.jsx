import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import {
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  Button,
  TopNavigation,
  Avatar,
  Icon,
  TopNavigationAction,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import * as ImagePicker from "expo-image-picker";

const MyUserProfileEdit = ({ route, navigation }) => {
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
                  <Iconify
                    size={50}
                    color={theme["color-basic-400"]}
                    icon="solar:camera-bold"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <Text category="h3" style={styles.name} status="primary">
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
              <Text category="h4" status="primary">
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
              <Text category="h4" status="primary">
                I have hosted
              </Text>
              <Text>In development.</Text>
            </View>

            {/* Events Attended */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I have attended
              </Text>
              <Text>In development.</Text>
            </View>
          </View>
        </ScrollView>
      </ScreenView>
    </ScreenNormalView>
  );
};

export default MyUserProfileEdit;

const styles = StyleSheet.create({
  name: {
    textTransform: "capitalize",
  },
  avatarName: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatarContainer: {
    backgroundColor: "black",
    marginBottom: 22,
    borderRadius: 180 / 2,

    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: "center",
    // alignItems: "center",
  },
  avatar: {
    width: 180,
    height: 180,
    opacity: 0.6,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 26,
    paddingVertical: 10,
  },
  description: {
    marginTop: 10,
  },
  detailContainer: {
    gap: 22,
  },
  detail: {
    gap: 10,
  },
  centerIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
