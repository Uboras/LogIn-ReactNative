import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {styles} from "../dada/Colors"
//boton custom para adañir propiedades de estilos
const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
     <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;