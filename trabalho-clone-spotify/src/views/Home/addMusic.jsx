import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { music } from "../../services/music";
import { useNavigation } from "@react-navigation/native";

const AddMusic = ({updatePlaylist}) => {
  const [novaMusica, setNovaMusica] = useState("");
  const [novoArtista, setNovoArtista] = useState("");
  const [novoAlbum, setNovoAlbum] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Novo estado para controle de carregamento
  const [playlist, setPlaylist] = useState("");
  const navigation = useNavigation();

  const addMusica = async () => {
    setIsLoading(true); // Ativar o indicador de carregamento

    const musica = {
      name: novaMusica,
      artist: novoArtista,
      // album: novoAlbum,
    };

    try {
      const response = await music.post("/musica", musica);
      setPlaylist([...playlist, response.data]);
      navigation.navigate('Home');
      
    } catch (error) {
      console.error("Erro ao adicionar música:", error);
    } finally {
      setIsLoading(false); // Desativar o indicador de carregamento, independentemente do resultado
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />} 
    </View>
  );
};

export default AddMusic;
