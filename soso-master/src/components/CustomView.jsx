import { Layout } from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const SafeView = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      {children}
    </Layout>
  );
};

export const ScreenView = ({ children }) => {
  return (
    <Layout
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      {children}
    </Layout>
  );
};
