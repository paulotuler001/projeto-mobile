import { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { music } from "../../services/music";
import PlayListRenderer from "./renderer";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
// import AddMusic from "./addMusic";


const Home = () => {
  const [novaMusica, setNovaMusica] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const navigation = useNavigation();
  const navigation2 = useNavigation();

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
      } catch (error) {
        console.log(error);
      }
    };

    
useEffect(() => {
    getMusica();
  }, []);
//   useEffect(() => {
//     const getMusica = async () => {
//       try {
//         const response = await music.get("/musica");
//         setPlaylist(response.data);
//         console.log(response.data[0]);
//         console.log(playlist);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getMusica();
//   }, []);
  //   useEffect(() => {
  //     getMusica()
  // }, []);
  
  
  // const handleAddMusic = () => {
  //   navigation.navigate('AddMusic');
  // }

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
    <TouchableOpacity onPress={handlePressBack}>
    <AntDesign name="arrowleft" size={40} color="white" style={{ paddingTop: 30 }} />
    </TouchableOpacity>
    <View style={{alignItems:'center', justifyContent: 'space-between', gap:40, marginBottom: 30, marginTop: 50}}>
        <View>
            <View style={{width: 300, height: 300, backgroundColor: 'black'}}/>
        </View>
    </View>
    <Text style={{marginLeft: 10, fontSize: 35, color: 'white', marginBottom: 20}}>Playlist Name</Text>
    <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
        <TouchableOpacity onPress={handlePressNext} style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{alignItems: 'center',justifyContent: 'center',width: 50, height: 50, backgroundColor: '#222', }}>
          
        <AntDesign name="plus" size={40} color="grey" />        
        </View>
        <Text style={{ marginLeft: 10, color: 'white'}}>Add to this playlist</Text>
        </TouchableOpacity>
    </View>
    
      <PlayListRenderer playlist={playlist}/>
    </LinearGradient>
  );
};

export default Home;
