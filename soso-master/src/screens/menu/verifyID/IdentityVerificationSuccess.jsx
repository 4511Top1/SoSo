import { Button, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";

const IdentityVerificationSuccess = ({ navigation, route }) => {
  const theme = useTheme();
  return (
    <ScreenNormalView>
      <ScreenView>
        <View
          style={{
            flex: 1,
            gap: 37,
            marginBottom: "40%",
            justifyContent: "center",
          }}
        >
          <View style={{ gap: 70, alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text category="h4" status="primary">
                Request Submitted
              </Text>
              <Text category="p1" style={{ textAlign: "center" }}>
                We will notify you when your identity has been successfully
                verified.
              </Text>
            </View>

            <Iconify
              style={{
                shadowColor: theme["color-primary-300"],
                shadowOpacity: 0.6,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 0 },
              }}
              size={100}
              color={theme["color-primary-300"]}
              icon="solar:check-circle-bold"
            />

            <Button
              style={{ width: "100%" }}
              onPress={() => {
                navigation.pop(3);
              }}
            >
              Continue
            </Button>
          </View>
        </View>
      </ScreenView>
    </ScreenNormalView>
  );
};

export default IdentityVerificationSuccess;
