import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home";
import Events from "./screens/events";
import Feed from "./screens/feed";
import Notifications from "./screens/notifications";
import Menu from "./screens/menu";

import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import Reset from "./screens/auth/reset";
import ResetSuccess from "./screens/auth/resetSuccess";
import Interest from "./screens/auth/interest";
import Verify from "./screens/auth/verify";
import VerifyID from "./screens/auth/verifyID";
import VerifyIDSubmitted from "./screens/auth/verifyIDSubmitted";
import SuccessDone from "./screens/auth/successDone";
import FirstLaunch from "./screens/onboarding/firstLaunch";

import { useFirstLaunch } from "./hook/FirstLaunchContext";

import { Iconify } from "react-native-iconify";

import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
// import * as eva from "@eva-design/eva";
// import { default as theme } from "../theme4.json";

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

export const AppNavigator = () => {
  const { isFirstLaunch } = useFirstLaunch();

  return (
    <StackNavigator>
      {isFirstLaunch ? (
        <StackScreen name="FirstLaunch" component={FirstLaunch} />
      ) : (
        <>
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
          {/* <StackScreen name="FirstLaunch" component={FirstLaunch} /> */}
        </>
      )}
    </StackNavigator>
  );
};
