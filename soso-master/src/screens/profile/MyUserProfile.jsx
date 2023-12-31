import {
  Avatar,
  Button,
  Text,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { HorizontalLine, VerticalLine } from "../../components/dividers/Lines";
import { BackAction } from "../../components/backAction";
import { default as s } from "./UserProfileStyle";

const MyUserProfile = ({ route, navigation }) => {
  const styles = useStyleSheet(s);
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MyUserProfileEdit", {
                description: description,
                interest: interest,
                image: image,
              });
            }}
          >
            <Text category="h6" style={styles.text}>
              Edit Profile
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
            <Text category="h3" style={styles.name}>
              Zoe
            </Text>
          </View>

          {/* Stats */}
          <HorizontalLine />
          <View style={styles.stats}>
            <Text>♥ 13 received</Text>
            <VerticalLine />
            <Text>2 events hosted</Text>
          </View>
          <HorizontalLine />

          <View style={styles.detailContainer}>
            {/* Description */}
            <Text style={styles.description}>
              {description ? description : "No description."}
            </Text>

            {/* Interests */}
            <View style={styles.detail}>
              <Text category="h4" style={styles.subHeader}>
                I am interested in
              </Text>
              <Text>{interest ? interest : "Nohing."}</Text>
            </View>

            {/* Events Hosted */}
            <View style={styles.detail}>
              <Text category="h4" style={styles.subHeader}>
                I have hosted
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Attended */}
            <View style={styles.detail}>
              <Text category="h4" style={styles.subHeader}>
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
