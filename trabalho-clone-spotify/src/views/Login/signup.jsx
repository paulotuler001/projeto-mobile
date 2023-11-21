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

const SignUpPage = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  // const [passwordFocus, setPasswordFocus] = useState(false);

  const [novoEmail, setNovoEmail] = useState('');
  // const [novaSenha, setNovaSenha] = useState('');
  const [listaCadastro, setListaCadastro] = useState([]);

  const navigation = useNavigation();
  const navigation2 = useNavigation();

  const handlePressBack = () => {
    navigation.navigate("Login");
  };
  const handlePressNext = () => {
    navigation2.navigate("CreatePasswordPage");
  };

  const addEmail = async () => {
    const conta = {
      email: novoEmail,
      senha: 'novaSenha',
      nome: 'novoNome',
      dataNascimento: 'novaDataNascimento',
    };
  
    try {
      console.log("Iniciando requisição:", conta);
      const response = await api.post("/conta", conta);
      console.log("Resposta da API:", response.data);
  
      setListaCadastro([...listaCadastro, response.data]);
      setNovoEmail("");
      console.log("Cadastro atualizado:", listaCadastro);
  
      
    } catch (error) {
      console.log("Erro ao adicionar conta:", error);
  
      if (error.response) {
        // O servidor respondeu com um status de erro
        console.log("Data da resposta:", error.response.data);
        console.log("Status da resposta:", error.response.status);
        console.log("Cabeçalhos da resposta:", error.response.headers);
      } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.log("Solicitação feita, mas sem resposta do servidor");
      } else {
        // Algo aconteceu durante a configuração da solicitação que provocou o erro
        console.log("Erro durante a configuração da solicitação:", error.message);
      }
    }finally{
      handlePressNext(); 
    }
  };


  return (
    <KeyboardAvoidingView  style={{padding: 5, backgroundColor: "#101010", flex:1}}>
    <View style={{ padding: 5, backgroundColor: "#101010", flex: 1, flexDirection: '' }}>
      <View
        style={{
          padding: 5,
          backgroundColor: "#101010",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handlePressBack}>
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
      <View style={{flex: 9}}>
        <Text style={styles.txtLog}>What's your email?</Text>
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
          value={novoEmail}
          onChangeText={setNovoEmail}
        />
        <Text style={{color: 'white', fontSize:12}}>You'll need to confirm this email later.</Text>
        
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
            onPress={addEmail}
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

export default SignUpPage;

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
