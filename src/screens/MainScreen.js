import React from 'react'
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    ScrollView,
} from 'react-native'

import Card from '../components/Card'
import { THEME } from '../theme'

const img = {
    uri:
        'https://cutewallpaper.org/21/star-wars-background-stars/Star-Wars-The-Force-Awakens-.gif-edition-GIF-on-Imgur.jpg',
}
const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

export const MainScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={img}
                style={{
                    ...styles.container,
                    width: screenWidth,
                    height: screenHeight / 1.2,
                }}
            >
                <View style={styles.wrapper}>
                    <ScrollView>
                        <Card />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        height: screenHeight / 2,
        width: screenWidth / 1.3,
        marginTop: -50,
        borderWidth: 8,
        borderRadius: 10,
        padding: 20,
        borderColor: THEME.MAIN_LOGO_COLOR,
    },
})
