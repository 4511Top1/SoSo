import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Text, Input, Card, Layout } from "@ui-kitten/components";
import LocationIcon from "../../assets/svg/locationIcon.svg";
import { Shadow } from "react-native-shadow-2";
import { Iconify } from "react-native-iconify";
import { useTheme } from "@ui-kitten/components";

const { width } = Dimensions.get("window");

const Trending = ({ data }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  // const [isBookmarked, setIsBookmarked] = React.useState(false);
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };


  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
  };

  const renderBookmarkIcon = (props) => (
    <TouchableOpacity onPress={toggleBookmark}>
      {isBookmarked ? (
        <Iconify
          color={theme["color-primary-500"]}
          size={27}
          icon={"iconoir:bookmark-solid"}
          style={[
            styles.bookmarkIcon,
            isBookmarked ? styles.bookmarked : styles.notBookmarked,
          ]}
        />
      ) : (
        <Iconify
          color={theme["color-primary-500"]}
          size={27}
          icon={"iconoir:bookmark"}
          style={[
            styles.bookmarkIcon,
            isBookmarked ? styles.bookmarked : styles.notBookmarked,
          ]}
        />
      )}
    </TouchableOpacity>
  );

  const LocationWithIcon = ({ location }) => {
    return (
      <View style={styles.locationContainer}>
        <Iconify
          color={theme["color-primary-500"]}
          size={27}
          style={styles.LocationIcon}
          icon={"fluent:location-20-filled"}
        />
        <Text category="c1">{location}</Text>
      </View>
    );
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
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {data.map((item) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.cardContent}>
              <Image source={item.image} style={styles.image} />

              <View style={styles.textContainer}>
                <Layout style={styles.timeLineContainer}>
                  <Text status="primary" style={{ marginBottom: 5 }}>
                    {item.date}
                  </Text>
                  {/* <Iconify
                    color={theme["color-primary-500"]}
                    size={27}
                    icon={"iconoir:bookmark"}
                    style={[
                      styles.bookmarkIcon,
                      isBookmarked ? styles.bookmarked : styles.notBookmarked,
                    ]}
                  /> */}
                  {renderBookmarkIcon()}
                </Layout>
                <Text category="h5">{item.title}</Text>
                <Text category="p1">{item.subtitle}</Text>

                <LocationWithIcon location={item.location} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    width: width - 130,
    height: 331,
    marginRight: 25,
    flexDirection: "column",
    borderRadius: 15,
    marginTop: 20,
    // alignItems: "center",
  },
  cardContent: {
    borderWidth: 0,
    borderRadius: 15,
    height: 326,
    // overflow: "hidden",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "#000",
    elevation: 5,
    // backgroundColor:"yellow"
    backgroundColor: "#fff",
  },
  bookmarkIcon: {
    paddingRight: 10,
  },
  timeLineContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  textContainer: {
    // marginTop: 10,
    padding: 10,

    gap: 5,
  },
  image: {
    width: "100%",
    height: 200,

    // resizeMode: "cover",
    // width: 320,
    // height: 203,
    // alignSelf: "stretch",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",

    height: 20,
    marginTop: 10,
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
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
});
export default Trending;
