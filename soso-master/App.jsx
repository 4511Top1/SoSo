import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { FirstLaunchProvider } from "./src/hook/FirstLaunchContext";
import { AppNavigator } from "./src/AppNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { default as theme } from "./theme4.json";

// const BottomTabBar = ({ navigation, state }) => {
//   return (
//     <BottomNavigation
//       selectedIndex={state.index}
//       onSelect={(index) => navigation.navigate(state.routeNames[index])}
//     >
//       <BottomNavigationTab
//         title="Home"
//         icon={<Iconify size={25} icon="solar:home-2-linear" />}
//       />
//       <BottomNavigationTab
//         title="Events"
//         icon={<Iconify size={25} icon="solar:calendar-outline" />}
//       />
//       <BottomNavigationTab
//         title="Feed"
//         icon={<Iconify size={25} icon="solar:feed-linear" />}
//       />
//       <BottomNavigationTab
//         title="Notification"
//         icon={<Iconify size={25} icon={"solar:bell-linear"} />}
//       />
//       <BottomNavigationTab
//         title="Menus"
//         icon={<Iconify size={25} icon="solar:hamburger-menu-linear" />}
//       />
//     </BottomNavigation>
//   );
// };

// const TabNavigator = () => (
//   <Navigator
//     tabBar={(props) => <BottomTabBar {...props} />}
//     screenOptions={{ headerShown: false }}
//   >
//     <Screen name="Home" component={Home} />
//     <Screen name="Events" component={Events} />
//     <Screen name="Feed" component={Feed} />
//     <Screen name="Notification" component={Notifications} />
//     <Screen name="Menu" component={Menu} />

//   </Navigator>
// );

// const AppNavigator = () => (
//   <StackNavigator screenOptions={{ headerShown: false }}>
//     <StackScreen name="Tabs" component={TabNavigator} />
//     <StackScreen name="Login" component={Login} />
//     <StackScreen name="Register" component={Register} />
//     <StackScreen name="Reset" component={Reset} />
//     <StackScreen name="ResetSuccess" component={ResetSuccess} />
//     <StackScreen name="Interest" component={Interest} />
//     <StackScreen name="Verify" component={Verify} />
//     <StackScreen name="VerifyID" component={VerifyID} />
//     <StackScreen name="VerifyIDSubmitted" component={VerifyIDSubmitted} />
//     <StackScreen name="SuccessDone" component={SuccessDone} />
//     <StackScreen name="FirstLaunch" component={FirstLaunch} />
//   </StackNavigator>
// );

export default function App() {
  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
