import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const Store = () => {
  const backgroundColor = "grey";
  const backgroundColorPressed = "#220D0B";
  const [selected, setSelected] = React.useState(false);

  const onPressIn = () => {
    setSelected(!selected);
  };

  const onPressOut = () => {
    setSelected(!selected);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.store}>STORE</Text>
      <Pressable
        onPressOut={onPressOut}
        onPressIn={onPressIn}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? backgroundColorPressed : backgroundColor,
          },
        ]}
      >
        <Text
          style={selected ? [styles.text, { color: "white" }] : styles.text}
        >
          Ringtones
        </Text>
      </Pressable>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  store: {
    fontSize: 14,
    color: "white",
    paddingLeft: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    color: "orange",
  },
  text: {
    color: "orange",
    fontSize: 18,
  },
});
