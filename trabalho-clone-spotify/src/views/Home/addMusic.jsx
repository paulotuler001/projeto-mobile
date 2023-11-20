import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { music } from "../../services/music";
import { useNavigation } from "@react-navigation/native";

const AddMusic = () => {
  const [novaMusica, setNovaMusica] = useState("");
  const [novoArtista, setNovoArtista] = useState("");
  const [novoAlbum, setNovoAlbum] = useState("");
  const [playlist, setPlaylist] = useState("");
  const navigation = useNavigation();

  const addMusica = async () => {
    const musica = {
      name: novaMusica,
      artist: novoArtista,
      album: novoAlbum,
    };
      const response = await music.post("/musica", musica);
      setPlaylist([...playlist, response.data]);
      navigation.navigate('Home')
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o nome da música"
        onChangeText={setNovaMusica}
      />
      <TextInput
        placeholder="Digite o nome do artista"
        onChangeText={setNovoArtista}
      />
      <TextInput
        placeholder="Digite o nome do album"
        onChangeText={setNovoAlbum}
      />

      <TouchableOpacity onPress={addMusica}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMusic;
