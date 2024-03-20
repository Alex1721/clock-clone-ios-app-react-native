import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import { Stack, Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

import Colors from "@/constants/Colors";

import Tone from "@/components/timers/ringtones/tone";
import Store from "@/components/timers/ringtones/store";
import StopLecture from "@/components/timers/ringtones/stop-lecture";

import ringtones from "@/assets/data/ringtones.json";

const SeparatorComponent = () => {
  return (
    <View style={styles.separatorContainer}>
      <View style={{ width: 30 }} />
      <View style={styles.separator} />
    </View>
  );
};

interface HeaderRightProps {
  param: string;
}

const HeaderRight = ({ param }: HeaderRightProps) => {
  return (
    <Link
      href={{
        pathname: "/timers",
        params: { name: param },
      }}
      asChild
    >
      <Pressable>
        <Text style={{ color: "orange", fontSize: 20 }}>Confirm</Text>
      </Pressable>
    </Link>
  );
};

const HeaderLeft = () => {
  return (
    <Link href="/timers" asChild>
      <Pressable>
        <Text style={{ color: "orange", fontSize: 20 }}>Cancel</Text>
      </Pressable>
    </Link>
  );
};

const HeaderTitle = () => {
  return <Text style={{ color: "white", fontSize: 20 }}>Ringtone</Text>;
};

const AddTimer = () => {
  const params = useLocalSearchParams();
  const name = params.name;

  const [selectedTone, setSelectedTone] = useState("Radar (per default)");
  const [showBackgroundColor, setShowBackgroundColor] = useState(false);

  useEffect(() => {
    if (name) {
      setSelectedTone(name as string);
    }
  }, [name]);

  const onPress = (tone: string) => {
    setSelectedTone(tone);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.grey }}>
      <Stack.Screen
        options={
          showBackgroundColor
            ? {
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <HeaderRight param={selectedTone} />,
                headerLeft: () => <HeaderLeft />,
                headerTransparent: true,
                headerBlurEffect: "dark",
              }
            : {
                headerTitle: () => <HeaderTitle />,
                headerRight: () => <HeaderRight param={selectedTone} />,
                headerLeft: () => <HeaderLeft />,
                headerTransparent: true,
                headerBlurEffect: "systemThickMaterialDark",
              }
        }
      />

      <FlatList
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 0) {
            setShowBackgroundColor(false);
          } else {
            setShowBackgroundColor(true);
          }
        }}
        ListHeaderComponent={<Store />}
        ListHeaderComponentStyle={{ marginVertical: 40 }}
        ListFooterComponent={<StopLecture name={"Stop Lecture"} />}
        ListFooterComponentStyle={{ marginTop: 40, marginBottom: 130 }}
        ItemSeparatorComponent={() => {
          return <SeparatorComponent />;
        }}
        showsVerticalScrollIndicator={true}
        data={ringtones}
        renderItem={({ item, index }) => {
          return (
            <Tone
              tone={item.tone}
              index={index}
              selected={selectedTone === item.tone}
              onPress={onPress}
            />
          );
        }}
        keyExtractor={(item) => item.tone}
        style={styles.container}
      />
    </View>
  );
};

export default AddTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  separatorContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "grey",
  },
  separator: {
    flex: 1,
    borderBottomWidth: 0.35,
    borderColor: "white",
  },
});
