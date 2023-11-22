import {
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity } from "react-native";

const MenuCard = ({ title, icon, navigation, destination, disabled }) => {
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        if (destination) {
          navigation.navigate(destination);
        } else {
          const dest = title.replace(/ /g, "");
          navigation.navigate(dest.includes("Verify") ? `Menu${dest}` : dest);
        }
      }}
    >
      <Layout style={styles.menuCard}>
        {icon}
        <Text category="s1">{title}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default MenuCard;

const s = StyleService.create({
  menuCard: {
    width: 165,
    minHeight: 80,
    justifyContent: "center",
    gap: 3,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
});
