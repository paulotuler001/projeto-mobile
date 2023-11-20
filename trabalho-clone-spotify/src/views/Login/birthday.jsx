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
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";
import DatePicker from "react-native-wheel-pick";

const BirthDay = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const navigation = useNavigation();
  const [novaSenha, setNovaSenha] = useState("");
  const [listaCadastro, setListaCadastro] = useState([]);

  const handlePressBack = () => {
    navigation.navigate("SignUpPage");
  };

  //post

  const addSenha = async () => {
    try {
      const { data } = await api.post("/conta", novaSenha);
      setListaCadastro([...listaCadastro, data]);
      // setNovaSenha("")
      setNovaSenha(""); //
      console.log(data);
      handlePressNext();
    } catch (error) {
      console.log(error);
    }
  };

  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2023);

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const renderDays = () => {
    const days = [];
    const totalDays = daysInMonth(month, year);
    for (let i = 1; i <= totalDays; i++) {
      days.push(i.toString());
    }
    return days;
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <DatePicker
          style={{ width: 100, height: 150 }}
          selectedValue={day}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={(index) => setDay(index)}
        >
          {renderDays().map((value, index) => (
            <DatePicker.Item key={index} label={value} value={index + 1} />
          ))}
        </DatePicker>

        <DatePicker
          style={{ width: 100, height: 150 }}
          selectedValue={month}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={(index) => setMonth(index)}
        >
          {/* Mapeie os meses aqui */}
        </DatePicker>

        <DatePicker
          style={{ width: 100, height: 150 }}
          selectedValue={year}
          itemStyle={{ color: 'black', fontSize: 26 }}
          onValueChange={(index) => setYear(index)}
        >
          {/* Mapeie os anos aqui */}
        </DatePicker>
        </View>
  );
};

export default BirthDay;

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
