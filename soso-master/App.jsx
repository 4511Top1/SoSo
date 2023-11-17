import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/home";
import Events from "./src/screens/events";
import Feed from "./src/screens/feed";
import Notifications from "./src/screens/notifications";
import Menu from "./src/screens/menu";

import Login from "./src/screens/auth/login";
import Register from "./src/screens/auth/register";
import Reset from "./src/screens/auth/reset";
import ResetSuccess from "./src/screens/auth/resetSuccess";
import Interest from "./src/screens/auth/interest";
import Verify from "./src/screens/auth/verify";
import VerifyID from "./src/screens/auth/verifyID";
import VerifyIDSubmitted from "./src/screens/auth/verifyIDSubmitted";
import SuccessDone from "./src/screens/auth/successDone";

import { Iconify } from "react-native-iconify";
import { Entypo } from "@expo/vector-icons";
import home2BoldDuotone from "@iconify/icons-solar/home-2-bold-duotone";

import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme.json";

const { Navigator, Screen } = createBottomTabNavigator();
const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

const BottomTabBar = ({ navigation, state }) => {
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      <BottomNavigationTab
        title="Home"
        icon={<Iconify size={25} icon="solar:home-2-linear" />}
      />
      <BottomNavigationTab
        title="Events"
        icon={<Iconify size={25} icon="solar:calendar-outline" />}
      />
      <BottomNavigationTab
        title="Feed"
        icon={<Iconify size={25} icon="solar:feed-linear" />}
      />
      <BottomNavigationTab
        title="Notification"
        icon={<Iconify size={25} icon={"solar:bell-linear"} />}
      />
      <BottomNavigationTab
        title="Menus"
        icon={<Iconify size={25} icon="solar:hamburger-menu-linear" />}
      />
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Screen name="Home" component={Home} />
    <Screen name="Events" component={Events} />
    <Screen name="Feed" component={Feed} />
    <Screen name="Notification" component={Notifications} />
    <Screen name="Menu" component={Menu} />
  </Navigator>
);

const AppNavigator = () => (
  <StackNavigator screenOptions={{ headerShown: false }}>
    <StackScreen name="Tabs" component={TabNavigator} />
    <StackScreen name="Login" component={Login} />
    <StackScreen name="Register" component={Register} />
    <StackScreen name="Reset" component={Reset} />
    <StackScreen name="ResetSuccess" component={ResetSuccess} />
    <StackScreen name="Interest" component={Interest} />
    <StackScreen name="Verify" component={Verify} />
    <StackScreen name="VerifyID" component={VerifyID} />
    <StackScreen name="VerifyIDSubmitted" component={VerifyIDSubmitted} />
    <StackScreen name="SuccessDone" component={SuccessDone} />
  </StackNavigator>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 15,
  },
  tabIcon: {},
});
