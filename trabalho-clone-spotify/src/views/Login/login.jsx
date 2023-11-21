import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 


const LogInPage = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const navigation = useNavigation();

  const handlePressBack = () => {
    navigation.navigate("Login");
  };

  const navigation2 = useNavigation();

  const handlePressNext = () => {
    navigation2.navigate("Home");
  };


  return (
    <View style={{ padding: 5, backgroundColor: "#101010", flex: 1 }}>
      <TouchableOpacity onPress={handlePressBack}>
      <AntDesign name="arrowleft" size={40} color="white" style={{ paddingTop: 30 }} />
      </TouchableOpacity>
      <Text style={styles.txtLog}>Email or username</Text>
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
      ></TextInput>
      <Text style={styles.txtLog}>Password</Text>
      <TextInput
        style={{
          fontWeight: "300",
          fontSize: 20,
          borderRadius: 5,
          padding: 8,
          height: 45,
          color: "#fff",
          backgroundColor: passwordFocus ? "silver" : "gray",
        }}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        secureTextEntry={true}
      >
        {/* <FontAwesome name="eye" size={25} color='white' style={{ flex:1,justifyContent: 'flex-end' }}></FontAwesome> */}
      </TextInput>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            marginTop: 40,
            borderRadius: 30,
            width: 100,
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
            Log in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 30,
            borderRadius: 30,
            width: "auto",
            height: "auto",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 2,
            paddingBottom: 2,
            backgroundColor: "transparent",
            borderWidth: 0.3,
            borderColor: "white",
            justifyContent: "center",
          }}
          onPress={handlePressNext}
        >
          <Text style={{ color: "white", alignSelf: "center", fontSize: 12 }}>
            Log in without password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInPage;

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
