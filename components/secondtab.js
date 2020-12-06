'use strict';

import React, { Component }  from 'react';
import {StyleSheet, Text,Alert, View,Dimensions,Animated,PanResponder,ImageBackground,ActivityIndicator,Image,TouchableOpacity,AsyncStorage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwipeCards from 'react-native-swipe-cards';
import { firebase } from "../model/model.js";
import styles from '../styles/styles.js';
import { Ionicons } from '@expo/vector-icons';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDHT = Dimensions.get('window').width
class Card extends React.Component {
  constructor(props) {
    super(props);
 
  }

 getAge = (dateString)=>{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  render() {
    
    return (
      <View style={sty.card}>
        <ImageBackground style={sty.thumbnail} source={{uri: this.props.photo}} >
        <View style={sty.toplayer}>
        <Text style={sty.text}>{this.props.fullName}</Text>
        <Text style={sty.text}>{this.props.dob!=""?this.getAge(this.props.dob):"N/A"} Years</Text>
        <Text style={sty.text}>20 miles away</Text>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View>
        <Text style={sty.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class AlbumsRoute extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    //this.getToken();
    this.state = {
      cards:  [],
      loading: true,
      visible:false,
      photo:"",
      fullName:"",
      lang:[],
      school:"",
      department:"",
      userId:""
    };
     
    this.ref = firebase.firestore().collection('users').where("photo","!=","");
    
  }
//This function get id from AsyncStorage and send a like requets to firestore
//It is the function called when you swipe to the right
async handleYup (card) {
  let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
firebase.firestore().collection(card.id).doc(card.id).update({
    "senderId": data.id,
    "status": "Request",
  });
   
 }
  handleNope (card) {
    console.log(`Nope for ${card.fullName}`)
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.fullName}`)
  }


  

componentDidMount() {
   
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
     
  }
  

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const cards = [];
    const lang =[];
    querySnapshot.forEach((doc) => {
      const { fullName,id, password, school,phone, email,address,photo,date,dob,interest,languages} = doc.data();
      //console.log(doc.data())
      cards.push({
        
        fullName,
        id,
        password,
        school,
        phone,
        email,
        address,
        photo,
        date,
        dob,
        interest,
        languages,
        
      })
     });
   
    this.setState({
      cards,
      loading: false,

   });
   //console.log(cards)
  }


  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
     const {photo,visible,fullName,userId} =  this.state
  //console.log(cards)
    if (this.state.loading) {
      return <ActivityIndicator animating={this.state.loading}  size="large" />;
    }
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        stack ={true}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        yupStyle={{backgroundColor:'#404040',top:wp('10%'),height:hp('10'),fontSize:20,zIndex:10000}}
        nopeStyle={{backgroundColor:'#404040',height:hp('10'),fontSize:20,zIndex:1000}}
        smoothTransition={true}
        stack={true}
        stackOffsetX={0}
        stackOffsetY={0}
        yupText={"Like"}
        nopeText={"Nope"}
        hasMaybeAction
      />
    )
  }
}

const sty = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
   
    width: wp('100%'),
    height: hp('80%'),
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode:'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color:'black',
    fontWeight: 'bold'
  },
  toplayer: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor:'#cccccc',
    opacity:0.5,
    width:wp('50%'),
    zIndex:2000,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yupStyle:{
    backgroundColor:'black'
  }
})