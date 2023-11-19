import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { SafeView } from "./components/CustomView";
import { SafeAreaView } from "react-native-safe-area-context";

import Home from "./screens/home";
import Events from "./screens/events";
import Feed from "./screens/feed/feed";
import Chat from "./screens/Chat";
import NewPost from "./screens/feed/newPost";
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
import Splash from "./screens/onboarding/splash";
import SearchEvents from "./screens/events/SearchEvents";
import SearchResults from "./screens/events/SearchResults";

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
      {/* <BottomNavigationTab
        title="Notification"
        icon={<Iconify size={25} icon={"solar:bell-linear"} />}
      /> */}
      <BottomNavigationTab
        title="Chat"
        // icon={<Iconify size={25} icon="solar:chat-round-linear" />}
        icon={<Iconify size={25} icon="iconoir:chat-bubble-empty" />}
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
    {/* <Screen name="Notification" component={Notifications} /> */}
    <Screen name="Chat" component={Chat} />
    <Screen name="Menu" component={Menu} />
  </Navigator>
);

export const AppNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigator screenOptions={{ headerShown: false }}>
        <StackScreen name="Splash" component={Splash} />
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
        <StackScreen name="SearchEvents" component={SearchEvents} />
        <StackScreen name="SearchResults" component={SearchResults}/>
        <StackScreen name="NewPost" component={NewPost} />
        <StackScreen name="Notification" component={Notifications} />
      </StackNavigator>
    </SafeAreaView>
  );
};
