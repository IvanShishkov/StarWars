import * as Font from 'expo-font'

export async function bootstrap() {
    try {
        await Font.loadAsync({
            'sw-font': require('../assets/fonts/Starjedi.ttf'),
            'sw-icons': require('../assets/fonts/StarwarsKit-MeeP.ttf'),
            'sw-crawl': require('../assets/fonts/HanSoloRegular-nz8R.otf'),
        })
    } catch (e) {
        console.log(e)
    }
}
