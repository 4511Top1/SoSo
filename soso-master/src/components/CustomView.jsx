import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SafeView = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      {children}
    </View>
  );
};

export const ScreenView = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      {children}
    </View>
  );
};
