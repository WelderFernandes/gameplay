import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import {
  Text,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

import { CategorySelect } from "../../components/CategorySelect";
import { ModalView } from "../../components/ModalView";
import { Background } from "../../components/Background";
import { SmallInput } from "../../components/SmallInput";
import { GuildIcon } from "../../components/GuildIcon";
import { TextArea } from "../../components/TextArea";
import { GuildProps } from "../../components/Guild";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Guilds } from "../Guilds";
import { firestore, firebase } from "../../configs/firebase";
import { ModalSuccess } from "../../components/ModalSuccess";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModa, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [description, setDescription] = useState("");
  const [openSuccess, setSuccess] = useState(false);

  const navigation = useNavigation();

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    if (
      category === "" ||
      !guild ||
      day === "" ||
      month === "" ||
      hour === "" ||
      minute === "" ||
      description === ""
    ) {
      return Alert.alert(
        "Ops!! Algo deu errado",
        "Todos os campos devem estar preenchidos",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("AppointmentCreate"),
          },
        ],
        { cancelable: false }
      );
    }
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} ??s ${hour}:${minute}h`,
      description,
    };

    firestore
      .collection("appointments")
      .add(newAppointment)
      .then((res) => {
        setSuccess(true);
        // navigation.navigate("Home");
        // setSuccess(true);
      });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 36, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon === "null" ? (
                  <View style={styles.image} />
                ) : (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                )}

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e m??s
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Text style={styles.divider}>/</Text>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Hora e minuto
                </Text>

                <View style={styles.column}>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Text style={styles.divider}>:</Text>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descri????o</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              onChangeText={setDescription}
            />

            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleSave} />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView visible={openGuildsModa} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>

      <ModalSuccess visible={openSuccess} />
    </KeyboardAvoidingView>
  );
}