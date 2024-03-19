import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useMyContext } from "../../hook/useContext-Request";
// se importa barra de navegacion
import BarraNav from "../../assents/barraNavegacion";

const HomeScreen = () => {
  //uso del userContext para tener datos de la cuenta
  const { User } = useMyContext();

  return (
    /*se agrega un scroll de la pantalla por 
    caso de que el teclado use toda la pantalla   */
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={{ fontSize: 30 }}>Hola! {User}</Text>
    {/*barra de navegacion para proximas paginas gastos ingresos demas*/}
      <BarraNav />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
