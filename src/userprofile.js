import React, {Component} from 'react';
import { Surface, Text,Avatar,TouchableRipple } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StatusBar,ImageBackground, StyleSheet, Alert,View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from '../styles/styles.js';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Ionicons } from '@expo/vector-icons';
export default class userstile extends  React.Component  {
  constructor() {
    super();
    this.state = {
      dataSource: {},
      fullname:"",
      photo:"",
      school:""
    };
    
}

  

  render() {
   
    const {fullname,photo,school} =  this.state
    return (
      <View style={styles.MainContainer}>
      <ImageBackground source={require('../assets/frame.png')} style={styles.dailymatchbakcgroundImage}>
       <View style={styles.usersmatch}>
        <View style={styles.banner}>
      
        <Image size={wp('40%')} style={styles.avatarImage} source={require('../assets/frame.png')} />
        </View>
        </View>

        </ImageBackground>
      </View>
    );
  }
}


