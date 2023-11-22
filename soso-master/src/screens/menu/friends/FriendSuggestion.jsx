import {
  Layout,
  Tab,
  TabView,
  Text,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { FriendItemSuggestion } from "../../../components/FriendCard";
import { BackAction } from "../../../components/backAction";
import { default as s } from "../FriendsStyle";

const Suggestions = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [friends, setFriends] = React.useState([
    {
      username: "Sherlock",
      subtitle: "past activities",
      specific: "Summer Moon",
    },
    {
      username: "Hanzo",
      subtitle: "past activities",
      specific: "Summer Moon",
    },
    {
      username: "Kiriko",
      subtitle: "past activities",
      specific: "Summer Moon",
    },
    {
      username: "Hammond",
      subtitle: "past activities",
      specific: "Hiking Everest Until Dawn",
    },
    {
      username: "Sigma",
      subtitle: "past activities",
      specific: "Hiking Everest Until Dawn",
    },
    {
      username: "Holmes",
      subtitle: "interests",
      specific: "Hiking",
    },
    {
      username: "Repear",
      subtitle: "interests",
      specific: "Movies",
    },
    {
      username: "Holmes",
      subtitle: "interests",
      specific: "Gaming",
    },
    {
      username: "Holmes",
      subtitle: "interests",
      specific: "Gaming",
    },
    {
      username: "Genji",
      subtitle: "MBTI",
      specific: "ESFJ",
    },
    {
      username: "Brigitte",
      subtitle: "MBTI",
      specific: "INFJ",
    },
    {
      username: "Torbjorn",
      subtitle: "MBTI",
      specific: "INFJ",
    },
  ]);

  return (
    <Layout>
      <Text category="h4" style={styles.subHeader}>
        Based on
      </Text>

      <TabView
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={styles.tabView}
      >
        {["everything", "interests", "past activities", "MBTI"].map(
          (subtitle, index) => (
            <Tab
              key={index}
              title={(evaProps) => (
                <Text {...evaProps} style={[evaProps.style, styles.tabHeader]}>
                  {subtitle}
                </Text>
              )}
              style={styles.tab}
            >
              <Layout style={styles.tabContainer}>
                <ScrollView style={styles.scroll}>
                  <View style={styles.friendListTab}>
                    {friends
                      .filter((friend) =>
                        subtitle != "everything"
                          ? friend.subtitle == subtitle
                          : true
                      )
                      .map((friend, index) => {
                        return subtitle == "everything" ? (
                          <FriendItemSuggestion
                            key={index}
                            username={friend.username}
                            subtitle={friend.subtitle}
                            navigation={navigation}
                          />
                        ) : (
                          <FriendItemSuggestion
                            key={index}
                            username={friend.username}
                            specific={friend.specific}
                            navigation={navigation}
                          />
                        );
                      })}
                  </View>
                </ScrollView>
              </Layout>
            </Tab>
          )
        )}
      </TabView>
    </Layout>
  );
};

const FriendSuggestion = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

  return (
    <ScreenNormalView>
      <TopNavigation
        style={styles.topNav}
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Suggestions
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScreenView>
        <Suggestions navigation={navigation} />
      </ScreenView>
    </ScreenNormalView>
  );
};

export default FriendSuggestion;
