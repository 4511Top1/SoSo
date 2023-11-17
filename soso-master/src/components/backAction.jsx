import React from "react";
import {
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const BackAction = ({ navigation }) => (
  <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
);
