import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Listar from "./screens/listar";
import Guardar from "./screens/Guardar";
import Editar from "./screens/Editar";
import Eliminar from "./screens/Eliminar";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listar" component={Listar} />
        <Stack.Screen name="Eliminar" component={Eliminar} />
        <Stack.Screen name="Guardar" component={Guardar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
