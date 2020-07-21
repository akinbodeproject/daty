import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-paper';
import {Appbar,TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {StatusBar,ImageBackground, StyleSheet, Alert,Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import logo from '../assets/logo.png'; 
import styles from '../styles/styles.js';
export default class SignUpApp extends React.Component {

    constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      password: '',
      email:'',
      school:'',
      phone:'',
    };
  }
  
  onLogin() {
    const { name, password,email,school,phone } = this.state;

    Alert.alert('Credentials', `${name} + ${password}`);
  }
    render() {
        
        return (

          <ImageBackground  style={styles.accountPage}>
             <Appbar.Header statusBarHeight={hp('1%')}  style={{backgroundColor:'#ddd'}}>
      <Appbar.Content title="Sign Up"/>
      </Appbar.Header>
             <KeyboardAwareScrollView
    enableOnAndroid
    enableAutomaticScroll
    keyboardOpeningTime={0}
    
  >
               <View style={styles.signView}>
               <StatusBar
                  hidden ={true}
                    />
                   <TextInput
                   mode='flat'
          value={this.state.name}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
         mode='flat'
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          keyboardType={'email-address'}
          style={styles.input}
        />
        <TextInput
         mode='flat'
          value={this.state.phone}
          onChangeText={(phone) => this.setState({ phone })}
          placeholder={'Phone Number'}
         keyboardType={'phone-pad'}
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
         <TextInput
         mode='flat'
          value={this.state.school}
          onChangeText={(school) => this.setState({ school })}
          placeholder={'School'}
          
          style={styles.input}
        />
      
                <View>
                   <Button style={styles.buttonup} icon="account" mode="contained" >
                     Create Account
                   </Button>
                </View>
                 
                </View>
                <View style={styles.facebookView}>
                   <Button style={styles.facebook} icon="facebook" mode="contained" >
                     Sign Up With Facebook
                   </Button>
                </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            
        );
    }
}

