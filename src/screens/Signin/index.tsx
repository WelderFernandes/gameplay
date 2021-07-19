import React from "react";
import { Image, StatusBar, Text, View } from "react-native";

import { styles } from "./styles";
import { ButtonIcon } from "../../components/Buttonicon";
import IllustarionImg from "../../assets/illustration.png";

export function Signin() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustarionImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon activeOpacity={0.7} title="Entrar com Discord" />
      </View>
    </View>
  );
}
