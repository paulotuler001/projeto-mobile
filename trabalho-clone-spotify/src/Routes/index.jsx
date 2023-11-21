import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/Login/LoginHome";
import Home from "../views/Home/home";
import LogInPage from "../views/Login/login";
import SignUpPage from "../views/Login/signup";
import CreatePasswordPage from "../views/Login/createPassword";
import BirthDay from "../views/Login/birthday";
import AddMusic from "../views/Home/addMusic";
import LoginPage from "../views/Login/LoginHome";

const { Navigator, Screen } = createNativeStackNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Navigator>
        {/* <Screen name="Home" component={Home} options={{
          headerShown: false,
        }}></Screen> */}
          <Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
        <Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="AddMusic"
          component={AddMusic}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="BirthDay"
          component={BirthDay}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="CreatePasswordPage"
          component={CreatePasswordPage}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="LogInPage"
          component={LogInPage}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
