import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const emptyData = require("@/assets/data/empty.json");

const WorldClock = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        style={styles.container}
        data={emptyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ color: "orange", fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: "white", fontSize: 14 }}>{item.time}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View
            style={{
              height: 650,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
          >
            <Text style={{ color: "orange", fontSize: 20 }}>No Data</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default WorldClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
