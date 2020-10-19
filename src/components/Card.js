import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import {
    setCurrentCharacter,
    getCharacterProfile,
} from '../store/character/actions'

import { THEME } from '../theme'

const Card = ({ characters, setCharacter }) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Second')
    }

    return (
        <View style={styles.wrapper}>
            {characters.map((c, i) => (
                <TouchableWithoutFeedback
                    onPressOut={setCharacter(i + 1)}
                    onPress={onPress}
                    key={c.name}
                >
                    <Text style={styles.text}>{c.name}</Text>
                </TouchableWithoutFeedback>
            ))}
        </View>
    )
}

const mapStateToProps = ({ characters }) => ({
    characters,
})

const mapDispatchToProps = (dispatch) => ({
    setCharacter(id) {
        return () => {
            dispatch(setCurrentCharacter(id))
            dispatch(getCharacterProfile(id))
        }
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'sw-crawl',
        color: THEME.MAIN_LOGO_COLOR,
        marginBottom: 10,
        fontSize: 20,
    },
})
