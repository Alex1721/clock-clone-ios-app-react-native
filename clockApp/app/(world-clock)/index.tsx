import { StyleSheet, FlatList, Pressable, View } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

import Clock from "@/components/world-clock/clock";

import { Ionicons } from "@expo/vector-icons";

const HeaderRight = ({ cities }: { cities: string[] }) => {
  return (
    <Link
      href={{
        pathname: "/add-clock",
        params: { cities: cities },
      }}
      asChild
    >
      <Pressable>
        <Ionicons name="add" size={30} color="orange" />
      </Pressable>
    </Link>
  );
};

const WorldClock = () => {
  const { city } = useLocalSearchParams();
  const [cities, setCities] = useState<string[]>([]);
  const [data, setData] = useState<any>([]);

  const fetchData = async (item: string) => {
    try {
      const response = await fetch(
        "https://api.api-ninjas.com/v1/worldtime?city=" + item,
        {
          headers: {
            "X-Api-Key": "N464mc2+05q91tDRf9z+DQ==rowvHmmcSNcKW7ca",
          },
        }
      );
      const json = await response.json();
      setData([
        ...data,
        {
          name: item,
          day_of_week: json.day_of_week,
          date: json.datetime.substring(11, 16),
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cityName = city as string;
    if (!cities.includes(cityName) && cityName !== undefined) {
      setCities([...cities, cityName]);
      fetchData(cityName);
    }
  }, [city]);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Clock
              city={item.name}
              day_of_week={item.day_of_week}
              time={item.date}
            />
          );
        }}
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic"
      />

      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight cities={cities} />,
        }}
      />
    </View>
  );
};

export default WorldClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
