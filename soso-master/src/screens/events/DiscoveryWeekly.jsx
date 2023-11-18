import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Text, Input, IconRegistry, Card } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import LocationIcon from "../../assets/svg/locationIcon.svg";
import BookMarkIcon from "../../assets/svg/bookmarkIcon.svg";
const { width } = Dimensions.get("window");

const LocationWithIcon = ({ location }) => {
  return (
    <View style={styles.locationContainer}>
      <LocationIcon width={24} height={24} style={styles.locationIcon} />
      <Text category="c1">{location}</Text>
    </View>
  );
};

const DiscoveryWeekly = ({ data }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { opacity: index === currentIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {data.map((item) => (
          <Card style={styles.card} key={item.id}>
            <ImageBackground
              source={item.image}
              style={styles.imageBackground}
              imageStyle={styles.image}
            ></ImageBackground>
            <Text category="c1">{item.date}</Text>
            <Text category="h5">{item.title}</Text>
            <Text category="p1">{item.subtitle}</Text>
            <LocationWithIcon location={item.location} />
            <BookMarkIcon
              width={24}
              height={24}
              style={styles.bookmarkButton}
            />
          </Card>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  card: {
    width: 350,
    height: 377,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 203,
    alignSelf: "stretch",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "black",
    margin: 4,
  },
  bookmarkButton: {
    position: "absolute",
    top: 320,
    right: 20,
  },
  imageBackground: {
    width: '100%',
    height: 200,
  },
  image: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
export default DiscoveryWeekly;
