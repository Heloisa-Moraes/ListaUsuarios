import { useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import Usuarios from '../Data/Usuarios';

const getUsuarioPorId = (id) => {
    return Usuarios.find(p => p.id == id)
}
export default ({route, navigation}) => {
    const [usuario, setUsuario] = useState(getUsuarioPorId(route.params.id))
    return (
        <View>
            <Card>
                <Card.Cover source={{uri: usuario.urlImagem
                }} />
                <Card.Title title={usuario.titulo} />
                <Card.Content>
                    <Text variant="bodyMedium">{Usuarios.descricao}</Text>
                </Card.Content>            
            </Card>
        </View>
    )
} 