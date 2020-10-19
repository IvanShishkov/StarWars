import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { THEME } from '../theme'
import { connect } from 'react-redux'
import { arrWithIcons } from '../arrWithIcons'

const img = {
    uri:
        'https://cutewallpaper.org/21/star-wars-background-stars/Star-Wars-The-Force-Awakens-.gif-edition-GIF-on-Imgur.jpg',
}
const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)

const SecondScreen = ({ profile, movies }) => {
    const navigation = useNavigation()

    const random = arrWithIcons[~~(Math.random() * arrWithIcons.length)]

    return (
        <View style={styles.container}>
            <ImageBackground
                source={img}
                style={{
                    ...styles.container,
                    width: screenWidth,
                    height: screenHeight,
                }}
            >
                <View style={styles.wrapper}>
                    {profile.name && (
                        <Text style={styles.text}>{profile.name}</Text>
                    )}
                    <View style={styles.insideBlocks}>
                        {profile.gender && (
                            <Text style={styles.text}>
                                Gender: {profile.gender}
                            </Text>
                        )}
                        {profile.height && (
                            <Text style={styles.text}>
                                Height: {profile.height}cm
                            </Text>
                        )}
                        {profile.mass && (
                            <Text style={styles.text}>
                                Weight: {profile.mass}kg
                            </Text>
                        )}
                        {profile.birth_year && (
                            <Text style={styles.text}>
                                Birth Year: {profile.birth_year}
                            </Text>
                        )}
                    </View>
                    <View style={styles.scroll}>
                        <ScrollView>
                            {movies.map((movie) => {
                                const dateArray = movie.release_date.split('-')

                                return (
                                    <Text
                                        style={{
                                            ...styles.text,
                                            paddingVertical: 10,
                                        }}
                                        key={movie.title}
                                    >
                                        {movie.title} ({dateArray[0]})
                                    </Text>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.buttonText}>{random}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const mapStateToProps = ({ character: { profile, movies } }) => ({
    profile,
    movies,
})

export default connect(mapStateToProps)(SecondScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'sw-crawl',
        color: THEME.MAIN_LOGO_COLOR,
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    wrapper: {
        borderWidth: 8,
        borderColor: THEME.MAIN_LOGO_COLOR,
        borderRadius: 10,
        width: screenWidth / 1.3,
        height: screenHeight / 1.2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    insideBlocks: {
        borderWidth: 5,
        borderColor: THEME.MAIN_LOGO_COLOR,
        borderRadius: 10,
        width: screenWidth / 1.5,
    },
    scroll: {
        borderWidth: 5,
        borderTopColor: THEME.MAIN_LOGO_COLOR,
        borderBottomColor: THEME.MAIN_LOGO_COLOR,
        width: screenWidth / 1.5,
        height: screenHeight / 3,
    },
    button: {
        backgroundColor: THEME.MAIN_LOGO_COLOR,
        width: screenWidth / 1.5,
        height: screenHeight / 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'sw-icons',
        fontSize: 60,
    },
})
