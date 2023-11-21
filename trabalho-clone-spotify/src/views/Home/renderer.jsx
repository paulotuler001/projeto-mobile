import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlayListRenderer = ({ playlist, deleteList }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = () => {
    // Lógica para editar o item
    setModalVisible(false);
    const navigation = useNavigation();
    navigation.navigate('AddMusic');
  };

  const handleDelete = () => {
    // Lógica para excluir o item
    setModalVisible(false);
    if (selectedItem) {
      deleteList(selectedItem.id);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "column", marginBottom: 10 }}>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        {/* <View style={{ backgroundColor: "black", width: 50, height: 50 }}>

        </View> */}
        <Image 
        height={50}
        width={50}
        source={{uri: item?.album}}
        />
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "80%",
            alignItems: "center",
          }}
        >
          <View style={{ marginLeft: 10 }}>
            <Text style={{ padding: 0, color: "white", fontSize: 15 }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  paddingTop: 0,
                  borderRadius: 4,
                  fontSize: 10,
                  fontWeight: "600",
                  backgroundColor: "gray",
                }}
              >
                LYRICS
              </Text>
              <Text
                style={{
                  padding: 0,
                  marginLeft: 5,
                  color: "white",
                  fontSize: 12,
                }}
              >
                {item.artist}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
          }}>
            <Feather name="more-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={playlist}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={handleEdit}
          >
            <Text >Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalOption}
            onPress={handleDelete}
          >
            <Text style={
              [styles.modalOptionText, 

              { color: "red" }]}>
              Excluir
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={
              [styles.modalOption, 
              { color: "blue" }]}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalOption: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  modalOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayListRenderer;
