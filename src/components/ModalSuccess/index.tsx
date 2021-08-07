import React, { ReactNode, useRef, useState } from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";

import LottieView from "lottie-react-native";
import successJson from "../../assets/success.json";

import { styles } from "./styles";

import { Background } from "../Background";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type Props = ModalProps & {
  closeModal?: () => void;
  onAnimationFinish?: () => void;
};

export function ModalSuccess({ ...rest }: Props) {
  const animation = useRef(null);
  const navigation = useNavigation();

  function handleSuccess() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Modal transparent animationType="fade" statusBarTranslucent {...rest}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={styles.overlay}>
              <LottieView
                ref={animation}
                autoPlay={true}
                onAnimationFinish={handleSuccess}
                style={styles.icon}
                loop={false}
                source={successJson}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}
