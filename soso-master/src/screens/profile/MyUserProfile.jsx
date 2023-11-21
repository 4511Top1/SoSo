import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import {
  useTheme,
  Text,
  Layout,
  Card,
  Button,
  TopNavigation,
  Avatar,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { HorizontalLine, VerticalLine } from "../../components/Lines";

const MyUserProfile = ({ route, navigation }) => {
  const theme = useTheme();

  const [description, setDescription] = React.useState(null);
  const [interest, setInterest] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (route.params?.description) {
      setDescription(route.params.description.trim());
    }
    if (route.params?.interest) {
      setInterest(route.params.interest);
    }
    if (route.params?.image) {
      setImage(route.params.image);
    }
  }, [route.params?.description, route.params?.interest, route.params?.image]);

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        accessoryRight={
          <Button
            appearance="ghost"
            onPress={() => {
              navigation.navigate("MyUserProfileEdit", {
                description: description,
                interest: interest,
                image: image,
              });
            }}
          >
            Edit Profile
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
            <Avatar
              style={styles.avatar}
              source={
                image.trim()
                  ? { uri: image }
                  : require("../../assets/pfp/profile_placeholder.jpeg")
              }
            />
            <Text category="h3" style={styles.name} status="primary">
              Zoe
            </Text>
          </View>

          {/* Stats */}
          <HorizontalLine />
          <View style={styles.stats}>
            <Text>♥ 0 received</Text>
            <VerticalLine />
            <Text>0 events hosted</Text>
          </View>
          <HorizontalLine />

          <View style={styles.detailContainer}>
            {/* Description */}
            <Text style={styles.description}>
              {description ? description : "No description."}
            </Text>

            {/* Interests */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I am interested in
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Hosted */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I have hosted
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Attended */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I have attended
              </Text>
              <Text>Nothing.</Text>
            </View>
          </View>
        </ScrollView>
      </ScreenView>
    </ScreenNormalView>
  );
};

export default MyUserProfile;

const styles = StyleSheet.create({
  name: {
    textTransform: "capitalize",
  },
  avatarName: {
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 180,
    height: 180,
    marginBottom: 22,
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
});
