import { useEffect, useState } from "react";
import { Button, FlatList, Image, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { music } from "../../services/music";
import PlayListRenderer from "./renderer";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import AddMusic from "./addMusic";
import { Entypo } from '@expo/vector-icons'; 

// import AddMusic from "./addMusic";


const Home = () => {
  const [novaMusica, setNovaMusica] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const navigation2 = useNavigation();
  const [title, setTitle] = useState('Playlist Name');
  const [album, setAlbum] = useState([])


  const editTitle = () => {
    setTitle(title);
  }

 const handlePressBack = () =>{
  navigation2.navigate('Login')
 }
 const handlePressNext = () =>{
  navigation.navigate('AddMusic')
 }
  const getMusica = async () => {
      try {
          const response = await music.get("/musica");
        setPlaylist(response.data);
        console.log(response.data[0]);
        console.log(playlist);
        setAlbum(response.data[0])
      } catch (error) {
        console.log(error);
      }
    };

    
useEffect(() => {
    getMusica();
  }, []);

  const deleteList = async(id) => {
      
         const {data} = await music.delete(`/musica/${id}`);
        const novoArray = playlist.filter((tarefa) => tarefa.id != data.id);
        setPlaylist(novoArray);
        console.log('aaaaaa funfou');
  }

  const updatePlaylist = (newPlaylist) => {
    setPlaylist(newPlaylist);
  };
  const navigateToAddMusic = () => {
    navigation.navigate('AddMusic', { updatePlaylist });
  };

  const handleRefresh = () => {
    // Reinicia a pilha de navegação e navega para a tela "Home"
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <LinearGradient
    colors={[
      "rgba(0,0,0,0.5)",
      "rgba(0,0,0,0.6)",
      "rgba(0,0,0,0.7)",
      "#111111",
      "#101010",
      "#101010",
      "#101010",
    ]}
    style={{ width: "100%", height: "100%", flex: 1 }}
  >
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={handlePressBack}>
      <AntDesign name="arrowleft" size={40} color="white" style={{ paddingTop: 30 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRefresh}>
      <Entypo name="ccw" size={40} color="white" style={{ paddingTop: 30 }}/>
      </TouchableOpacity>
    </View>
    <ScrollView>
    <View style={{alignItems:'center', justifyContent: 'space-between', gap:40, marginBottom: 30, marginTop: 50}}>
        <View>
            {/* <View style={{width: 300, height: 300, backgroundColor: 'black'}}/> */}
            {/* {playlist.album === null ? 
            (<View style={{width: 300, height: 300, backgroundColor: 'black'}}/>)
            :
            (<Image 
              height={300}
              width={300}
              source={{
              uri: playlist.album
              }}/>)
            } */}
          
          <Image 
              height={300}
              width={300}
              source={{
              uri: album?.album,
              }}/>
              {/* <Button title="Fazer um GET" onPress={getMusica}  /> */}
        </View>
    </View>
    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
    <Text style={{marginLeft: 10, fontSize: 35, color: 'white', marginBottom: 20}}>
      {title}
      </Text>
      <TouchableOpacity style={{justifyContent: 'center'}}onPress={() => setModalVisible(true)}>
        <Entypo name="edit" size={24} color="white" />
      </TouchableOpacity>
      </View>
    
    <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView style={{flex:1, width: '100%'}}>
      <View 
      style={styles.modalContainer}
      >
          <TextInput
          value={title}
          style={{backgroundColor: 'white', width: '80%', height: '10%', fontSize: 25}}
          placeholder={title}
          maxLength={20}
            onChangeText={setTitle}
          >
          </TextInput>
          <TouchableOpacity 
          style={{width: '20%',height: '5%', backgroundColor: 'white',  marginTop: 40, justifyContent: 'center', alignItems: 'center',}}
          onPress={() => setModalVisible(false)}>
            <Text>Enviar</Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </Modal>
    <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
        <TouchableOpacity onPress={navigateToAddMusic} style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{alignItems: 'center',justifyContent: 'center',width: 50, height: 50, backgroundColor: '#222', }}>
          
        <AntDesign name="plus" size={40} color="grey" />        
        </View>
        <Text style={{ marginLeft: 10, color: 'white'}}>Add to this playlist</Text>
        </TouchableOpacity>
    </View>
    
      <PlayListRenderer playlist={playlist} deleteList={deleteList}/>
      </ScrollView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    height: 800,
    
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})