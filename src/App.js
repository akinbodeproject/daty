import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { withTheme } from 'react-native-paper';
import {ActivityIndicator,TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {AsyncStorage, StatusBar,ImageBackground, StyleSheet, Alert,Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import logo from '../assets/logo.png'; 
import styles from '../styles/styles.js';
import { firebase } from "../model/model.js";
export default class App extends React.Component {

    constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      isLoading:false
    };
  }
  
  handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
 onLoginPress = () => {

    this.setState({ isLoading: true });
   const {password,email} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        console.log(user)
                          this.props.navigation.navigate('Datinglist')
                    })
                    .catch(error => {
                        alert(error)
                       this.setState({ isLoading: false });
                    });
            })
            .catch(error => {
                alert(error)
                this.setState({ isLoading: false });
            })
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
                    <ActivityIndicator animating={this.state.isLoading} color={"#FFF"} />
                   <TextInput
                   mode='flat'
          value={this.state.email}
          onChangeText={this.handleEmail}
          keyboardType={"email-address"}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
         mode='flat'
          value={this.state.password}
          onChangeText={this.handlePassword}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
      
                <View>
                   <Button style={styles.buttonup} icon="lock" mode="contained"  onPress={this.onLoginPress}>
                     Login
                   </Button>
                </View>

                  </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
            
        );
    }
}

