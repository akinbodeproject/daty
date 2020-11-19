import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { withTheme } from "react-native-paper";
import {ActivityIndicator, Appbar, TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import logo from "../assets/logo.png";
import styles from "../styles/styles.js";
import { firebase } from "../model/model.js";

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
export default class SignUpApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      password: "",
      email: "",
      school: "",
      phone: "",
      photo:"",
      date:new Date(),
      address:"",
      dob:"",
      department:"",
      interest:[],
      languages:[],
      isLoading:false
      
    };
  }

handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   handleFullName = (text) => {
      this.setState({ fullName: text })
   }
   handlePhone = (text) => {
      this.setState({ phone: text })
   }
    handleSchool = (text) => {
      this.setState({ school: text })
   }
async storeToken(data) {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }



  onRegisterPress = () => {
   
    this.setState({ isLoading: true });
    //this._attemptGeocodeAsync
        const {fullName,password,email,school,phone,address,photo,date,dob,department,interest,languages} = this.state
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    fullName,
                    password,
                    school,
                    phone,
                    email,
                    address:new firebase.firestore.GeoPoint(0, 0),
                    dob,
                    interest,
                    languages,
                    department,
                    photo:"",
                    date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
                    
                };
                const usersRef = firebase.firestore().collection('users')
                const socialsRef = firebase.firestore().collection('socials')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        socialsRef
                    .doc(uid)
                    .set({id:uid,"link":""})
                      this.storeToken(data)

                      this.props.navigation.navigate('Datinglist',{user: data})
                    })
                    .catch((error) => {
                        alert(error)
                    });

            })
            .catch((error) => {
                alert(error)
        });
    };



  render() {
    return (
      <ImageBackground style={styles.accountPage}>
        <Appbar.Header
          statusBarHeight={hp("1%")}
          style={{ backgroundColor: "#ddd" }}
        >
          <Appbar.Content title="Sign Up" />
        </Appbar.Header>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
        >
          <View style={styles.signView}>
            <StatusBar hidden={true} />
            <ActivityIndicator animating={this.state.isLoading} color={"#FFF"} />
            <TextInput
              mode="flat"
              value={this.state.fullName}
              onChangeText= {this.handleFullName}
              placeholder={"Name"}
              style={styles.input}
            />
            <TextInput
              mode="flat"
              value={this.state.email}
              onChangeText={this.handleEmail}
              placeholder={"Email"}
              keyboardType={"email-address"}
              style={styles.input}
            />
            <TextInput
              mode="flat"
               value={this.state.phone}
              onChangeText={this.handlePhone}
              placeholder={"Phone Number"}
              keyboardType={"phone-pad"}
              style={styles.input}
            />
            <TextInput
              mode="flat"
              value={this.state.password}
              onChangeText={this.handlePassword}
              placeholder={"Password"}
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              mode="flat"
              value={this.state.school}
              onChangeText={this.handleSchool}
              placeholder={"School"}
              style={styles.input}
            />

            <View>
              <Button style={styles.buttonup} icon="account" mode="contained" onPress={this.onRegisterPress}>
                Create Account
              </Button>
            </View>
          </View>
          <View style={styles.facebookView}>
            <Button style={styles.facebook} icon="facebook" mode="contained">
              Sign Up With Facebook
            </Button>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    );
  }
}
