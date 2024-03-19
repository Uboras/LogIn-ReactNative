import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "../../dada/Colors";
import { useMyContext } from "../../hook/useContext-Request";
//boton custom creado por nosotros
import CustomButton from "../../assents/customButon";
const OlvidoContrasena = () => {
  const { User, Pass, secretWord } = useMyContext();
  const [palabraSecreta, setPalabraSecreta] = useState("");
  /**
   * 
   * @returns Boolean verifica si es vacia la palabra clave
    */
  const verificacion = () => {
    return palabraSecreta !== "";
  };
//Acciona al ejecucion de recupero de cuenta por palabra secreta. 
  const Mostar = () => {
    //si esta vacio alerta
    if (!verificacion()) {
      return Alert.alert("Campo requerido");
    }
    // si no hay objeto user o palabra secreta en el useContext que de 
    //idea de un usuario ya registrado
    if (secretWord === "" || User === "")
      return Alert.alert("No hay usuario registrado");
    //recupera exitosamente la cuenta 
    //se muestra el usuaio y contraseña
    if (secretWord == palabraSecreta) {
      Alert.alert(`Usuario: ${User} ${"\n"}Contraseña: -${Pass}`);
    } else {
      Alert.alert("Palabra Incorrecta");
    }
  };

  return (
    <View style={{ minHeight: `${100}%`, marginTop: 40}}>
        <Text style={[styles.text ]}>
          Recupera tu {"\n"}Usuario y Password
        </Text>
      <View style={{ margin: 40 , marginBottom: 60 }}>
        <TextInput
          style={[styles.input , {marginBottom: 40}]}
          type="text"
          name="PalabraSecreta"
          placeholder="PalabraSecreta"
          onChangeText={(text) => setPalabraSecreta(text)}
          value={palabraSecreta}
        />
        <CustomButton style={styles.button} title="Mostar Usuario" onPress={Mostar} />
      </View>
    </View>
  );
};
export default OlvidoContrasena;
