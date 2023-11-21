import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
// import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { FontAwesome } from "@expo/vector-icons";
import LogInPage from "./login";
import { useNavigation } from "@react-navigation/native";
// import {FontAwesome } from "@expo/vector-icons";

const LoginPage = () => {
  const navigation = useNavigation();

  const handlePressLogin = () => {
    navigation.navigate("LogInPage");
  };
  const handlePressRegister = () => {
    navigation.navigate("SignUpPage");
  };

  return (
    // <View style={{ width: 100, height: 100, flex: 1 }}>
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
      <View style={{ justifyContent: "center", alignSelf: "center", flex: 1 }}>
        <FontAwesome
          name="spotify"
          size={65}
          color="white"
          style={{ justifyContent: "center", alignSelf: "center" }}
        ></FontAwesome>
        {/* <FontAwesome name="spotify" size={65} color='white' style={{ justifyContent: 'center',alignSelf: 'center'}}></FontAwesome> */}
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.containerText}>
          <Text style={styles.titleLogin}>Millions of songs.</Text>
          <Text style={{ ...styles.titleLogin }}>Free on Spotify.</Text>
        </View>
        <View style={{ ...styles.containerBttns, flex: 1 }}>
          {/* medidor para ver se está centralizado kakakakaka*/}

          {/* <Text style={{...styles.titleLogin, width: 4, height: '100%', backgroundColor: 'white', position: 'absolute'}}>Free on Spotify.</Text> */}

          <TouchableOpacity
            style={{ ...styles.bttns, justifyContent: "center" }}
            onPress={handlePressRegister}
          >
            <Text style={styles.txtBttns}>Sign up free</Text>
          </TouchableOpacity>

          {/* <LoginSpotify/> */}

          <TouchableOpacity
            style={{
              ...styles.bttns,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <FontAwesome
              name="mobile-phone"
              size={30}
              color="white"
              style={{
                width: "20%",
                marginLeft: 14,
                backgroundColor: "transparent",
              }}
            ></FontAwesome>
            <Text style={{ ...styles.txtBttns, color: "white", width: "auto" }}>
              Continue with phone number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.bttns,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <FontAwesome
              name="google"
              size={30}
              color="white"
              style={{
                width: "28%",
                marginLeft: 10,
                backgroundColor: "transparent",
              }}
            />
            <Text style={{ ...styles.txtBttns, color: "white", width: "auto" }}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.bttns,
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <FontAwesome
              name="facebook"
              size={28}
              color="white"
              style={{ width: "25%", marginLeft: 10 }}
            />
            <Text style={{ ...styles.txtBttns, color: "white" }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePressLogin}>
            <Text style={{ ...styles.txtBttns, color: "white", marginTop: 5 }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
    // </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  containerText: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  titleLogin: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    alignItems: "center",
    // backgroundColor: '#000'
    // alignContent: 'center',
  },
  containerBttns: {
    // flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  bttns: {
    flexDirection: "row",

    width: "92%",
    height: 40,
    backgroundColor: "#1FDF64",
    borderRadius: 25,
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    alignItems: "center",
  },
  txtBttns: {
    color: "black",
    fontSize: 16,
    // fontFamily: '',
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center",
    // backgroundColor: '#000'
    // alignContent: 'center',
  },
});
