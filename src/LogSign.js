import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-paper';
import { TextInput,Button } from 'react-native-paper';
import {StatusBar,ImageBackground, StyleSheet, Alert,Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import styles from '../styles/styles.js';
export default class LogSignApp extends React.Component {

    constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
 
    render() {
        
        return (
        <View style ={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={styles.LogSignbakcgroundImage}>
               <View style={styles.image}>
               <ImageBackground source={require('../assets/logooo.png')} style={styles.tinyLogo}>

               </ImageBackground>
           </View>

               <View style={styles.loginView}>
                <StatusBar
                  hidden ={true}
                    />
                   <Button style={styles.buttonin} icon="login" mode="contained"  onPress={() => this.props.navigation.navigate('Login')}>
                   <Text style={{color:'#441964'}}> Sign In</Text>
                   </Button>
                
                   <Button style={styles.buttonup} icon="account-plus" mode="contained" onPress={() => this.props.navigation.navigate('SignUp')}>
                     Sign Up
                   </Button>
                
                  </View>
                </ImageBackground>
          </View> 
        );
    }
}


