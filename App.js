import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { MyStack } from './src/navigation/MyStack'
import { bootstrap } from './src/bootstrap'
import reducer from './src/store/'
import { getCharacters } from './src/store/characters/actions'

const store = createStore(reducer, applyMiddleware(thunk))
store.dispatch(getCharacters())

export default function App() {
    const [isReady, setIsReady] = useState(false)
    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onError={(err) => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </Provider>
    )
}
