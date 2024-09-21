import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Usuarios from '../Data/Usuarios';

export default function DetalhesUsuarioScreen({ route }) {
  const { id } = route.params;
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioSelecionado = Usuarios.find(u => u.id === id);
    setUsuario(usuarioSelecionado);
  }, [id]);

  if (!usuario) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: usuario.urlImagem }} style={styles.image} />
      <Text style={styles.title}>{usuario.titulo}</Text>
      <Text style={styles.name}>Nome: {usuario.nome}</Text>
      <Text style={styles.email}>E-mail: {usuario.email}</Text>
      <Text style={styles.id}>ID: {usuario.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, 
    borderWidth: 2,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  id: {
    fontSize: 14,
    color: 'gray',
  },
});
