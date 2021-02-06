import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home';
import Detail from '../screens/detailScreens';
import Add from '../screens/addScreen';
import Update from '../screens/updScreen';

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{ 
                    headerStyle: {
                        height: 80,
                    },
                }}
            >
                <Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{ 
                        title: 'Consume API',
                    }}
                />
                <Stack.Screen 
                    name='Detail' 
                    component={Detail} 
                    options={{ 
                        title: 'Detail Data',
                    }}
                />
                <Stack.Screen 
                    name='Add' 
                    component={Add} 
                    options={{ 
                        title: 'Add Data',
                    }}
                />
                <Stack.Screen 
                    name='Update' 
                    component={Update} 
                    options={{ 
                        title: 'Update Data',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}