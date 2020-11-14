import React, {Component} from 'react';
import { Surface, Text,Avatar,TouchableRipple } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StatusBar,ImageBackground, StyleSheet, Alert,View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from '../styles/styles.js';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Ionicons } from '@expo/vector-icons';
import  ProfilePics from '../src/camera.js';
export default class userstile extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
      fullname:"",
      photo:"",
      school:""
    };
    this.getToken()
}
async getToken() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      data.photo ==""? this.createTwoButtonAlert():""
      this.setState({
        fullname:data.fullName,
        photo:data.photo,
        school: data.school
      })
      
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
  
createTwoButtonAlert(){
   Alert.alert(
  'Profile',
  'Update your profile for a richer experience',
  [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed')
    },
   
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ],
  { cancelable: false }
);
  }
  render() {
   
    const {fullname,photo,school} =  this.state
    return (
      <View style={styles.MainContainer}>
      <ImageBackground source={require('../assets/frame.png')} style={styles.dailymatchbakcgroundImage}>
       <View style={styles.usersmatch}>
        <View style={styles.banner}>
      
        <Avatar.Image size={wp('40%')} style={styles.avatarImage} source={require('../assets/avatar.jpg')} />
         <TouchableOpacity 
      rippleColor="rgba(255, 0, 0, .32)"
       style={styles.camera}
      >
      <Avatar.Icon size={50} icon="camera" pointerEvents={"none"}/>
      </TouchableOpacity>
        <View style={styles.iconName}>
        <Ionicons name="md-person" size={20} color="green" />
        <Text style={styles.fullname} >{fullname.toUpperCase()} </Text>
        </View>
        <View style={styles.iconDept}>
        <Ionicons name="md-school" size={20} color="green" />
        <Text style={styles.school} >{school} </Text>
         </View>
        </View>
        <View style={styles.edit}>
           <TouchableOpacity onPress={() => alert('credits')}
      rippleColor="rgba(255, 0, 0, .32)"
      style={styles.wallet}
      >
        <View>
       <Avatar.Icon size={50} icon="wallet" />
       <Text style={styles.walletText}>Credits</Text>
       </View>
       </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('edit')}
         rippleColor="rgba(255, 0, 0, .32)"
         style={styles.useredit}
         >
       <View >
       <Avatar.Icon size={50} icon="pencil" />
       <Text style={styles.usereditText}>Edit</Text>
       </View>
       </TouchableOpacity>
       
        <View >
           <TouchableOpacity onPress={() => alert('premium')}
      rippleColor="rgba(255, 0, 0, .32)"
      style={styles.premium}
      >
       <Avatar.Icon size={50} icon="crown" />
       <Text style={styles.premiumText}>Go Premium</Text>
       </TouchableOpacity>
       </View>
       
        </View>
        <View style={styles.verify}>
             <TouchableOpacity onPress={() => alert('verify')}
      rippleColor="rgba(255, 0, 0, .32)"
      
      >
        <View  >
        <Image  style={styles.verifyimage} source={require('../assets/avatar.jpg')} />
         <Ionicons name="md-close" size={30} color="red" style={styles.verifymark} />
        </View>
         </TouchableOpacity>
        <View style={styles.verifyHeadingContainer}>
        <View style={styles.centralise}>
        <Text style={styles.verifyHeading}>Verify Your Photo</Text>
        <Text style={styles.verifyText}>More girls will respond to you,</Text>
        <Text>if your profile picture is verifed</Text>
        </View>
        </View>
        </View>
        </View>

        </ImageBackground>
      </View>
    );
  }
}


