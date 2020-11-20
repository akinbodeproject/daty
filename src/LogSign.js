import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-paper';
import { TextInput,Button } from 'react-native-paper';
import {StatusBar,ImageBackground, StyleSheet, Alert,Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/styles.js';
import {firstScrnStyles} from '../styles/FirstScreenStyles'


const LogSignApp = ({navigation}) => {
const gradientHeigth = 300;
const gradientBackground = "#4e416d";
const data = Array .from({length: gradientHeigth});

return (
    <View style={firstScrnStyles.container}>
        <View style={firstScrnStyles.firstScreenContainer}>
            { data.map((_, i) =>(
                <View
                key={i}
                style={{
                position: "absolute",
                backgroundColor: gradientBackground,
                height: 1,
                bottom : (gradientHeigth -i),
                right:0,
                left:0,
                zIndex:-1,
                opacity:(1/gradientHeigth)*(i + 1)

                }}
                />
            ))}
            <View style={firstScrnStyles.logoContainer}>
                <Image style={firstScrnStyles.logo} source={require('../assets/logoo.png')} />
            </View>
            <Text style={firstScrnStyles.connectTogether}>Konnect thru beta wey</Text>
            <View style={firstScrnStyles.myBtnsContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                    <Text style={firstScrnStyles.btnCreate}>Get started </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={firstScrnStyles.btn}>Log in</Text>
                </TouchableOpacity>
            </View>
            
            </View>
    </View> 
  )
}

export default LogSignApp;


