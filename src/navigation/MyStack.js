import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from '../screens/MainScreen'
import SecondScreen from '../screens/SecondScreen'
import { THEME } from '../theme'

const Stack = createStackNavigator()

export const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'sw-font',
                    color: THEME.MAIN_LOGO_COLOR,
                    justifyContent: 'center',
                    alignSelf: 'center',

                    fontSize: 55,
                },
                headerStyle: {
                    backgroundColor: THEME.BLACK_COLOR,
                    height: 150,
                    shadowRadius: 0,
                    shadowOffset: {
                        height: 0,
                    },
                },
            }}
        >
            <Stack.Screen name="STAR WARS" component={MainScreen} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Second"
                component={SecondScreen}
            />
        </Stack.Navigator>
    )
}
