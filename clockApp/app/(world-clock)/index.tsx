import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Link, Stack, Tabs } from "expo-router";
import React, { useState } from "react";

import Clock from "@/components/world-clock/clock";

import { Ionicons } from "@expo/vector-icons";
import cities from "@/assets/data/cities.json";

const HeaderRight = () => {
  return (
    <Link href="/add-clock" asChild>
      <Pressable>
        <Ionicons name="add" size={30} color="orange" />
      </Pressable>
    </Link>
  );
};

const HeaderLeft = () => {
  return <Text style={{ color: "orange", fontSize: 20 }}>Edit</Text>;
};

const HeaderTitle = () => {
  return <Text style={{ color: "white", fontSize: 20 }}>Clocks</Text>;
};

const WorldClock = () => {
  const [showBackgroundColor, setShowBackgroundColor] = useState(true);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Stack.Screen
        options={
          showBackgroundColor
            ? {
                headerTitle: "",
                headerRight: () => <HeaderRight />,
                headerLeft: () => <HeaderLeft />,
                headerTransparent: true,
                headerBlurEffect: "extraLight",
              }
            : {
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <HeaderRight />,
                headerLeft: () => <HeaderLeft />,
                headerTransparent: true,
                headerBlurEffect: "dark",
              }
        }
      />
      <FlatList
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 15) {
            setShowBackgroundColor(false);
          } else {
            setShowBackgroundColor(true);
          }
        }}
        ListHeaderComponent={
          <Text style={{ color: "white", fontSize: 34, fontWeight: "bold" }}>
            World Clock
          </Text>
        }
        ListHeaderComponentStyle={{
          borderBottomWidth: 1,
          borderColor: "#1C1C1E",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
        ListFooterComponentStyle={{ marginTop: 40, marginBottom: 130 }}
        data={cities}
        renderItem={({ item }) => {
          return (
            <Clock date={"Today, + 0HRS"} city={item.city} time={"9:41"} />
          );
        }}
        keyExtractor={(item) => item.city}
        style={styles.container}
      />
    </View>
  );
};

export default WorldClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 90,
    //backgroundColor: "#1C1C1E",
  },
});
