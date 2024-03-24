import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";

import Colors from "@/constants/Colors";
import Cities from "@/assets/data/europe-city.json";

interface RenderItemProps {
  item: string;
  section: any;
}

const RenderItem = ({ item, section }: RenderItemProps) => {
  const isLastItemInSection =
    section.data.indexOf(item) === section.data.length - 1;
  const style = isLastItemInSection ? styles.renderLastItem : styles.renderItem;
  return (
    <Link
      href={{
        pathname: "/",
        params: { city: item },
      }}
      asChild
    >
      <Pressable style={style}>
        <Text style={{ color: "white", fontSize: 18 }}>{item}</Text>
      </Pressable>
    </Link>
  );
};

const RenderSection = ({ title }: { title: string }) => {
  return (
    <View style={styles.renderSection}>
      <Text style={{ fontWeight: "bold", color: "#99999B", fontSize: 16 }}>
        {title}
      </Text>
    </View>
  );
};

const AddClock = () => {
  const { cities } = useLocalSearchParams();
  const [filteredData, setFilteredData] = useState(Cities);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const dataArray = Cities.filter((item) => {
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
      setFilteredData(Cities);
    }
  };

  useEffect(() => {
    const manyCities = cities as string[];
    const updateData = Cities.map((item) => {
      const title = item.title;
      const data = item.data.filter((city) => !manyCities.includes(city));
      return {
        title: title,
        data: data,
      };
    });
    setFilteredData(updateData);
  }, [cities]);

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
            textColor: "white",
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
        renderItem={({ item, section }) => (
          <RenderItem item={item} section={section} />
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
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#272729",
  },

  renderItem: {
    marginHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  renderLastItem: {
    marginHorizontal: 15,
    marginBottom: 30,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
});
