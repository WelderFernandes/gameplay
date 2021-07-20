import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { ButtonIcon } from "../../components/Buttonicon";
import IllustarionImg from "../../assets/illustration.png";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";


export function Signin() {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate("Home");
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustarionImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"} e organize suas {"\n"}jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
}
