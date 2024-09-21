import React from 'react';
import { FlatList, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Usuarios from '../Data/Usuarios';

export default function ListaUsuarioScreen({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetalhesUsuario', { id: item.id, backgroundColor: item.cor })}>
        <View style={[styles.item, { backgroundColor: item.cor }]}>
          <Image 
            source={{ uri: item.urlImagem || 'link_do_placeholder_aqui' }} 
            style={styles.image} 
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={Usuarios}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    elevation: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});
