import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Login from "./Login";
import Principal from "./Principal";
import CadastroUnidade from "./CadastroUnidade";

export default function Rotas(){
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Login" component={Login} options={{headerShown:false}}
                />
                <Tab.Screen 
                    name="Principal" component={Principal} options={{headerShown:false}}
                />
                <Tab.Screen 
                    name="CadastroUnidade" component={CadastroUnidade} options={{headerShown:false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}