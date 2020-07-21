import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-paper';
import {TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {StatusBar,ImageBackground, StyleSheet, Alert,Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import logo from '../assets/logo.png'; 
import styles from '../styles/styles.js';
export default class App extends React.Component {

    constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
    render() {
        
        return (
          <ImageBackground source={require('../assets/bg.png')} style={styles.bakcgroundImage}>
            <View style={styles.image}>
               <ImageBackground source={require('../assets/logooo.png')} style={styles.tinyLogo}>

               </ImageBackground>
           </View>
             <KeyboardAwareScrollView
    enableOnAndroid
    enableAutomaticScroll
    keyboardOpeningTime={0}
    
  >
               <View style={styles.loginView}>
                  <StatusBar
                  hidden ={true}
                    />
                   <TextInput
                   mode='flat'
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
         mode='flat'
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
      
                <View>
                   <Button style={styles.buttonup} icon="lock" mode="contained"  onPress={() => this.props.navigation.navigate('Datinglist')}>
                     Login
                   </Button>
                </View>

                  </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            
        );
    }
}

