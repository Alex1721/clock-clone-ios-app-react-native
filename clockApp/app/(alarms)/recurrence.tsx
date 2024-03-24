import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface RenderItemProps {
  item: string;
  index: number;
}

const RenderItem = ({ item, index }: RenderItemProps) => {
  const isFirstItem = index === 0;
  const isLastItem = index === 6;
  const [selected, setSelected] = useState(false);
  const handleOnPress = () => {
    setSelected(!selected);
  };
  return (
    <Pressable
      onPress={handleOnPress}
      style={({ pressed }) => {
        return [
          {
            backgroundColor: pressed ? "rgba(0,0,0,0.1)" : "orange",
            borderTopLeftRadius: isFirstItem ? 10 : 0,
            borderTopRightRadius: isFirstItem ? 10 : 0,
            borderBottomLeftRadius: isLastItem ? 10 : 0,
            borderBottomRightRadius: isLastItem ? 10 : 0,
          },
        ];
      }}
    >
      <View style={styles.button}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          {item}
        </Text>
        {selected ? (
          <Ionicons name="checkmark" size={22} color="black" />
        ) : null}
      </View>
    </Pressable>
  );
};

const Recurrence = () => {
  const selection = [
    "Every Monday",
    "Every Tuesday",
    "Every Wednesday",
    "Every Thursday",
    "Every Friday",
    "Every Saturday",
    "Every Sunday",
  ];
  const [selected, setSelected] = useState(false);

  const handleOnPress = () => {
    setSelected(!selected);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <FlatList
        data={selection}
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
        keyExtractor={(item) => item}
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default Recurrence;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 12,
    paddingVertical: 12,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
});
