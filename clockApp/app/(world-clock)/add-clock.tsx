import { View, Text, FlatList, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import React from "react";

import Colors from "@/constants/Colors";

const HeaderTitle = () => {
  return <Text style={{ color: "white", fontSize: 16 }}>Choose a city</Text>;
};

const AddClock = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.grey }}>
      <Stack.Screen
        options={{
          headerTitle: () => <HeaderTitle />,
          headerBackTitleVisible: true,
          headerSearchBarOptions: {
            placeholder: "Search",
          },
        }}
      />
      <View style={styles.container}></View>
    </View>
  );
};

export default AddClock;

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 10,
  },
});
