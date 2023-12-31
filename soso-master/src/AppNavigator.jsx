// Screens
import {
  Interest,
  Login,
  Register,
  Reset,
  ResetSuccess,
  SuccessDone,
  Verify,
  VerifyID,
  VerifyIDSubmitted,
} from "./screens/Auth";
import Chat, { UserChat } from "./screens/Chat";
import Events, {
  CreateEvent,
  Details,
  DetailsRegist,
  FundEvent,
  FundSuccess,
  RegisterEvent,
  RegistrationSuccess,
  SearchEvents,
  SearchResults,
} from "./screens/Events";
import Feed, { NewPost, ReplyComment, ViewPost } from "./screens/Feed";
import Home, { Notifications, Scanner } from "./screens/Home";
import Menu, {
  AddFriends,
  CustomerSupport,
  DataPrivacy,
  EditPassword,
  FAQ,
  FriendRequest,
  FriendSuggestion,
  Friends,
  IdentityVerification,
  IdentityVerificationSuccess,
  MenuVerifyID,
  PastEvents,
  RegionLanguage,
  Saved,
  Settings,
  TermsCondition,
} from "./screens/Menu";
import {
  MyUserProfile,
  MyUserProfileEdit,
  UserProfile,
} from "./screens/Profile";
import Splash from "./screens/onboarding/Splash";

// Imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import React from "react";
import { Iconify } from "react-native-iconify";
import { SafeView } from "./components/CustomView";

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
        title="Chat"
        icon={<Iconify size={25} icon="iconoir:chat-bubble-empty" />}
      />
      <BottomNavigationTab
        title="Menu"
        icon={<Iconify size={25} icon="solar:hamburger-menu-linear" />}
      />
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{ headerShown: false }}
    initialRouteName="Home"
  >
    <Screen name="Home" component={Home} />
    <Screen name="Events" component={Events} />
    <Screen name="Feed" component={Feed} />
    <Screen name="Chat" component={Chat} />
    <Screen name="Menu" component={Menu} />
  </Navigator>
);

export const AppNavigator = () => {
  return (
    <SafeView>
      <StackNavigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        {/* Tabs */}
        <StackScreen name="Tabs" component={TabNavigator} />

        {/* Onboarding */}
        <StackScreen name="Splash" component={Splash} />

        {/* Auth */}
        <StackScreen name="Login" component={Login} />
        <StackScreen name="Register" component={Register} />
        <StackScreen name="Reset" component={Reset} />
        <StackScreen name="ResetSuccess" component={ResetSuccess} />
        <StackScreen name="Interest" component={Interest} />
        <StackScreen name="Verify" component={Verify} />
        <StackScreen name="VerifyID" component={VerifyID} />
        <StackScreen name="VerifyIDSubmitted" component={VerifyIDSubmitted} />
        <StackScreen name="SuccessDone" component={SuccessDone} />

        {/* Feed */}
        <StackScreen name="NewPost" component={NewPost} />
        <StackScreen name="ViewPost" component={ViewPost} />
        <StackScreen name="replyComment" component={ReplyComment} />

        {/* Notification */}
        <StackScreen name="Notification" component={Notifications} />
        <StackScreen name="Scanner" component={Scanner} />

        {/* Users */}
        <StackScreen name="UserChat" component={UserChat} />
        <StackScreen name="UserProfile" component={UserProfile} />
        <StackScreen name="MyUserProfile" component={MyUserProfile} />
        <StackScreen name="MyUserProfileEdit" component={MyUserProfileEdit} />

        {/* Menu */}
        <StackScreen name="Friends" component={Friends} />
        <StackScreen name="PastEvents" component={PastEvents} />
        <StackScreen name="Saved" component={Saved} />
        <StackScreen name="Settings" component={Settings} />
        <StackScreen name="MenuVerifyID" component={MenuVerifyID} />

        {/* Menu: Verify ID */}
        <StackScreen
          name="IdentityVerification"
          component={IdentityVerification}
        />
        <StackScreen
          name="IdentityVerificationSuccess"
          component={IdentityVerificationSuccess}
        />

        {/* Menu: Settings */}
        <StackScreen name="RegionLanguage" component={RegionLanguage} />
        <StackScreen name="DataPrivacy" component={DataPrivacy} />
        <StackScreen name="FAQ" component={FAQ} />
        <StackScreen name="CustomerSupport" component={CustomerSupport} />
        <StackScreen name="TermsCondition" component={TermsCondition} />
        <StackScreen name="EditPassword" component={EditPassword} />

        {/* Menu: Friends */}
        <StackScreen name="AddFriends" component={AddFriends} />
        <StackScreen name="FriendRequest" component={FriendRequest} />
        <StackScreen name="FriendSuggestion" component={FriendSuggestion} />

        {/* Event */}
        <StackScreen name="FundEvent" component={FundEvent} />
        <StackScreen name="FundSuccess" component={FundSuccess} />
        <StackScreen name="RegisterEvent" component={RegisterEvent} />
        <StackScreen
          name="RegistrationSuccess"
          component={RegistrationSuccess}
        />
        <StackScreen name="SearchEvents" component={SearchEvents} />
        <StackScreen name="SearchResults" component={SearchResults} />
        <StackScreen name="Details" component={Details} />
        <StackScreen name="CreateEvent" component={CreateEvent} />
        <StackScreen name="DetailsRegist" component={DetailsRegist} />
      </StackNavigator>
    </SafeView>
  );
};
