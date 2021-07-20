import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";

type Props = {
  urlImage: string;
};

export function Avatar({ urlImage }: Props) {
  const { secondary40, secondary70 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary40, secondary70]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
