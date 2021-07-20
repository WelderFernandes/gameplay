import React from "react";
import { useState } from "react";
import { View, FlatList } from "react-native";
import { Appointment } from "../../components/Appointment";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [category, setCategory] = useState("");

  const navigation = useNavigation();

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Legendários",
        icon: null,
        owner: true,
      },

      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Legendários",
        icon: null,
        owner: true,
      },

      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  return (
    <Background>
      <View style={styles.heading}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total: 6" />

        <FlatList
          data={appointments}
          style={styles.matches}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment onPress={handleAppointmentDetails} data={item} />
          )}
        />
      </View>
    </Background>
  );
}
