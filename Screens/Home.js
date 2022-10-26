import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                   Home...
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    }
})



