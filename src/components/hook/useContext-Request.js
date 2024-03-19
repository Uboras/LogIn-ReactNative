import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();
/**
 *
 * @param {*} param0
 * @returns Provider + children
 */

export const MyProvider = ({ children }) => {
  /** se crea una instancia para uso de toda la app. 
  *de seguir la app gastos, ingresos y otros irian en una 
  instancia posterior para uso solo de cada pagina destinada
  */
  const [ingreso, setIngreso] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [User, setUser] = useState("");
  const [Pass, setPass] = useState("");
  const [secretWord, setSecretword] = useState("");

  useEffect(() => {
    const retrieveData = async () => {
      //realiza los respectivos recupero de objetos guardados en la app. (memoria celular)
      try {
        const savedIngreso = await AsyncStorage.getItem(
          "@mySuperStore:ingreso"
        );
        const savedGastos = await AsyncStorage.getItem("@mySuperStore:gastos");
        const savedUser = await AsyncStorage.getItem("@mySuperStore:User");
        const savedPass = await AsyncStorage.getItem("@mySuperStore:Pass");
        const savedSecretWord = await AsyncStorage.getItem(
          "@mySuperStore:secretWord"
        );

        //si encuentra el objeto se hace el set del mismo para cada atrubito en su estado
        if (savedIngreso !== null) {
          setIngreso(JSON.parse(savedIngreso));
        }
        if (savedGastos !== null) {
          setGastos(JSON.parse(savedGastos));
        }
        if (savedGastos !== null) {
          setGastos(JSON.parse(savedUser));
        }
        if (savedPass !== null) {
          setPass(JSON.parse(savedPass));
        }
        if (savedIngreso !== null) {
          setSecretword(JSON.parse(savedSecretWord));
        }
      } catch (error) {
        console.log("Error al recuperar los datos:", error);
      }
    };

    retrieveData();
    //actualiza los datos cada 1 segundo por algun ingreso podria
    //cambiarse por alguna actualizacion de estado
    //con un useEffect
    const interval = setInterval(() => {
      retrieveData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //se utiliza para hacer uso de actualizacion por ejecucion de alguna 
  //accion  se clasifica por tipo y se actualiza el dato por el nuevo
  const storeData = async (newData, key) => {
    try {
      await AsyncStorage.setItem(
        `@mySuperStore:${key}`,
        JSON.stringify(newData)
      );
      if (key === "ingreso") {
        setIngreso(newData);
      } else if (key === "gastos") {
        setGastos(newData);
      } else if (key === "User") {
        setUser(newData);
      } else if (key === "Pass") {
        setUser(newData);
      } else if (key === "secretWord") {
        setSecretword(newData);
      }
    } catch (error) {
      console.log("Error al guardar los datos:", error);
    }
  };
// el retorno es de un componente que entrega acceso a los estados
// para su exportacion con permiso para lo que es el children.
  return (
    <MyContext.Provider
      value={{
        secretWord,
        setSecretword,
        Pass,
        User,
        setUser,
        setPass,
        ingreso,
        gastos,
        storeData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
