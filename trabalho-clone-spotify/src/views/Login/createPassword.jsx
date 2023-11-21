import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import { api } from "../../services/api";

const CreatePassowordPage = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const navigation = useNavigation();
  const navigation2 = useNavigation();
  const [novaSenha, setNovaSenha] = useState('');
  const [listaCadastro, setListaCadastro] = useState([]);

  const handlePressBack = () => {
    navigation.navigate("SignUpPage");
  };

  const handlePressNext = () => {
    navigation2.navigate('Home')
  }

  //post

  const addSenha = async() => {
    
    const conta = {
      email: 'novoEmail',
      senha: novaSenha,
      nome: 'novoNome',
      dataNascimento: 'novaDataNascimento',
    };

    try {
      
      const {data} = await api.post("/conta", novaSenha)
      setListaCadastro([...listaCadastro, data])
      // setNovaSenha("") 
      setNovaSenha("") //
      console.log(data);
      handlePressNext();
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <KeyboardAvoidingView  style={{padding: 5, backgroundColor: "#101010", flex:1}}>
    <View style={{ padding: 5, backgroundColor: "#101010", flex: 1 }}>
      <View
        style={{
          padding: 5,
          backgroundColor: "#101010",
          flexDirection: "row",
          alignItems: "center",
          // flex: 1,
        }}
      >
        <TouchableOpacity onPress={handlePressBack}>
          {/* <FontAwesome
            name="arrow-left"
            size={40}
            color="white"
            style={{ paddingTop: 30 }}
          ></FontAwesome> */}
          <AntDesign name="arrowleft" size={40} color="white" style={{ paddingTop: 30 }} />
        </TouchableOpacity>
        <View
          style={{
            padding: 5,
            backgroundColor: "transparent",
            marginLeft: 105,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "snow" }}> Create account</Text>
        </View>
      </View>
      <View style={{ flex: 9 }}>
        <Text style={styles.txtLog}>Create a password</Text>
        <TextInput
          style={{
            fontWeight: "300",
            fontSize: 20,
            borderRadius: 5,
            height: 45,
            padding: 8,
            color: "#fff",
            backgroundColor: emailFocus ? "silver" : "gray",
          }}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          secureTextEntry={true}
        ></TextInput>
        <Text style={{ color: "white", fontSize: 12 }}>
          Use at least 8 characters.
        </Text>
        {/* <FontAwesome name="eye" size={25} color='white' style={{ flex:1,justifyContent: 'flex-end' }}></FontAwesome> */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              marginTop: 30,
              borderRadius: 30,
              width: 80,
              backgroundColor: "snow",
              padding: 10,
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
            }}
            onPress={handlePressNext}
          >
            <Text
              style={{ color: "#101010", width: "auto", alignSelf: "center" }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePassowordPage;

const styles = StyleSheet.create({
  txtLog: {
    color: "white",
    fontSize: 30,
    fontFamily: "",
    marginTop: 15,
    fontWeight: "800",
    // textAlign: 'center',
    alignItems: "center",
    // backgroundColor: '#000'
    // alignContent: 'center',
  },
});
