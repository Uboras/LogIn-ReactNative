import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importacion de la pantallas a mapear las rutas
import { screens } from "../dada/menusScreensdata";
// se cargan en una hoja de estilos custom
import { styles } from "../dada/Colors";



const Stack = createNativeStackNavigator();



const MyStack = () => {



/**
 * genera las pantallas con las rutas para poder usarlas en el navegador
 */
  return (
    <Stack.Navigator  >
      {screens.map((screen, index) => (
        <Stack.Screen
        style={styles.sidebar }
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MyStack;
