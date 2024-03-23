import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import React, { useState } from "react";

import Colors from "@/constants/Colors";
import cities from "@/assets/data/europe-city.json";

const RenderItem = ({ item }: { item: string }) => {
  return (
    <Link
      href={{
        pathname: "/",
        params: {
          name: item,
        },
      }}
      asChild
    >
      <Pressable style={styles.renderItem}>
        <Text style={styles.renderText}>{item}</Text>
      </Pressable>
    </Link>
  );
};

const RenderSection = ({ title }: { title: string }) => {
  return <Text style={styles.renderSection}>{title}</Text>;
};

const AddClock = () => {
  const [data, setData] = useState(cities);
  const [filteredData, setFilteredData] = useState(data);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const dataArray = data.filter((item) => {
        const letter = item.title[0].toUpperCase();
        const textData = text[0].toUpperCase();
        if (letter === textData) {
          return item;
        }
      })[0].data;
      const filteredDataArray = dataArray.filter((item) => {
        const itemData = item.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      const newData = [
        { title: text[0].toUpperCase(), data: filteredDataArray },
      ];
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.grey,
      }}
    >
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            placeholder: "Search",
            barTintColor: "white",
            hintTextColor: "white",
            textColor: "black",
            hideWhenScrolling: false,
            hideNavigationBar: false,
            onChangeText: (event) => {
              searchFilterFunction(event.nativeEvent.text);
            },
          },
        }}
      />
      <SectionList
        sections={filteredData}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <RenderSection title={title} />
        )}
        renderItem={({ item }) => <RenderItem item={item} />}
        SectionSeparatorComponent={() => (
          <View
            style={{
              marginVertical: 10,
            }}
          />
        )}
        contentInsetAdjustmentBehavior={"scrollableAxes"}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

export default AddClock;

const styles = StyleSheet.create({
  renderSection: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#333333",
  },
  renderItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  renderText: {
    color: "white",
    fontSize: 18,
  },
});
