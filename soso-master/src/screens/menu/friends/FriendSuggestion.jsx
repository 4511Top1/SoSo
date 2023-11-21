import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  TopNavigation,
  Button,
  Tab,
  TabView,
  ViewPager,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import {
  FriendItemRequest,
  FriendItemSuggestion,
} from "../../../components/FriendCard";

const Suggestions = ({ navigation, route }) => {
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
    <View>
      <Layout style={styles.subHeader}>
        <Text category="h4" status="primary">
          Based on
        </Text>
      </Layout>

      <Layout style={styles.tabName}>
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
          swipeEnabled={false}
        >
          <Layout>
            <TouchableOpacity onPress={() => setSelectedIndex(0)}>
              <Text
                category="h4"
                appearance={selectedIndex == 0 ? "basic" : "hint"}
              >
                everything
              </Text>
            </TouchableOpacity>
          </Layout>
          <TouchableOpacity onPress={() => setSelectedIndex(1)}>
            <Text
              category="h4"
              appearance={selectedIndex == 1 ? "basic" : "hint"}
            >
              interests
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedIndex(2)}>
            <Text
              category="h4"
              appearance={selectedIndex == 2 ? "basic" : "hint"}
            >
              past activities
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedIndex(3)}>
            <Text
              category="h4"
              appearance={selectedIndex == 3 ? "basic" : "hint"}
            >
              MBTI
            </Text>
          </TouchableOpacity>
        </ViewPager>
      </Layout>

      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Layout style={styles.tab}>
          <ScrollView style={styles.scroll}>
            <View style={styles.list}>
              {friends.map((friend, index) => {
                return (
                  <FriendItemSuggestion
                    key={index}
                    username={friend.username}
                    subtitle={friend.subtitle}
                    navigation={navigation}
                  />
                );
              })}
            </View>
          </ScrollView>
        </Layout>

        <Layout style={styles.tab}>
          <ScrollView style={styles.scroll}>
            <View style={styles.list}>
              {friends
                .filter((friend) => friend.subtitle == "interests")
                .map((friend, index) => {
                  return (
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
        <Layout style={styles.tab}>
          <ScrollView style={styles.scroll}>
            <View style={styles.list}>
              {friends
                .filter((friend) => friend.subtitle == "past activities")
                .map((friend, index) => {
                  return (
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
        <Layout style={styles.tab}>
          <ScrollView style={styles.scroll}>
            <View style={styles.list}>
              {friends
                .filter((friend) => friend.subtitle == "MBTI")
                .map((friend, index) => {
                  return (
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
      </ViewPager>
    </View>
  );
};

const FriendSuggestion = ({ navigation, route }) => {
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

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
  },

  topNav: {
    zIndex: 1,
  },
  tabName: {
    paddingRight: "40%",
    marginBottom: 10,
    zIndex: 1,
  },
  tab: {
    height: "92%",
    marginRight: 20,
    overflow: "visible",
  },
  list: {
    gap: 10,
    paddingBottom: 10,
    overflow: "visible",
  },
  scroll: {
    overflow: "visible",
    zIndex: -1,
  },
});
