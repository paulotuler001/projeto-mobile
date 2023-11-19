import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";

const LoginSpotify = () => {
  const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=5eaaf34eca2046aa9dabcd4440194c27&response_type=code&redirect_uri=http://localhost:8081&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

  const handleLoginPress = () => {
    Linking.openURL(AUTH_URL);
  };

  return (
    <TouchableOpacity
      onPress={handleLoginPress}
      style={{ width: 100, height: 100, flex: 1, backgroundColor: "white" }}
    />
  );
};

export default LoginSpotify;
