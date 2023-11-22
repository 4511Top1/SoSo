import { TopNavigationAction } from "@ui-kitten/components";
import React from "react";
import { Iconify } from "react-native-iconify";

const BackIcon = (props) => (
  <Iconify size={28} icon={"solar:arrow-left-linear"} />
);

export const BackAction = ({ navigation }) => (
  <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
);
