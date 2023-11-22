import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./src/AppNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { default as mapping } from "./mapping.json";
import { default as theme } from "./theme4.json";
import EventContext from "./src/hook/EventContext";

const eventData = [
  {
    id: "event1",
    title: "Marathon Sundays",
    date: "SUN, 29 SEP 04:30 PM",
    subtitle:
      "Lorem ipsum olor sit amet, consectetur adipiscing elit. Aenean eu magna vehicula diam pulvinar dictum.",
    image: require("./src/assets/images/Marathon.png"),
    location: "Sydney Olympic Park",
  },
  {
    id: "event2",
    title: "Community Yoga",
    date: "SUN, 29 SEP 04:30 PM",
    subtitle:
      "Join us for a relaxing session of yoga in the park every Saturday morning.",
    image: require("./src/assets/images/Marathon.png"),
    location: "Central Park",
  },
  {
    id: "event3",
    title: "Community Yoga",
    date: "SUN, 29 SEP 04:30 PM",
    subtitle:
      "Join us for a relaxing session of yoga in the park every Saturday morning.",
    image: require("./src/assets/images/Marathon.png"),
    location: "Central Park",
  },
];
export default function App() {
  const [events, setEvents] = React.useState(eventData);

  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        customMapping={mapping}
      >
        <EventContext.Provider value={{ events, setEvents }}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </EventContext.Provider>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
