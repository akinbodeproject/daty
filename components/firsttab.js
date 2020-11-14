/*This is an Example of Grid View in React Native*/
import React, {Component} from 'react';
import {Title, Paragraph, Portal, Button, Provider, Surface,Avatar } from 'react-native-paper';
import styles from '../styles/styles.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Modal,Text,TouchableHighlight,Alert,ImageBackground,StyleSheet,View,FlatList,ActivityIndicator,Image,TouchableOpacity,AsyncStorage } from 'react-native';
//import all the components we will need
import { firebase } from "../model/model.js";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { createStackNavigator } from 'react-navigation-stack';
import SwipeCards from 'react-native-swipe-cards';
class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.data)
    const { navigation } = this.props;
    return (
      <View style={sty.card}>
      <Text style={sty.text}>{this.props.fullName}</Text>
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
      <View style={sty.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}


export default class MusicRoute extends React.Component {
 constructor(props) {
    super(props);
    
    this.unsubscribe = null;
    this.state = {
      cards:[],
      loading: true,
      visible:false,
      photo:"",
      lang:[],
      school:"",
      department:"",
      outOfCards: false
    };
    //this.getDetails();
    this.ref = firebase.firestore().collection('users');

  }
   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }





componentDidMount() {
  //console.log(this.props,'test')
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
   setTimeout(() => {
      this.getToken()
      }, 10000);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const cards = [];
    const lang =[];
    querySnapshot.forEach((doc) => {
      const { fullName, password, school,phone, email,address,photo,date,dob,interest,languages} = doc.data();
      //console.log(doc.data())
      cards.push({
        key: doc.id, // Document ID
        doc, // DocumentSnapshot
        fullName,
        password,
        school,
        phone,
        email,
        address,
        photo,
        date,
        dob,
        interest,
        languages
      })

     });
     console.log(cards)
    this.setState({
      cards,
      loading: false,

   });
   //console.log(cards)
  }





  handleYup (card) {
    console.log("yup")
  }

  handleNope (card) {
    console.log("nope")
  }

  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        //console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards,
          outOfCards: true
        })
      }

    }

  }


  async getToken() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      data.photo ==""? this.createTwoButtonAlert():""
      this.setState({
        fullname:data.fullName,
        photo:data.photo
      })
      
      //console.log(data);
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
   const { navigation } = this.props;
   //console.log(this.props.navigation)
   
  const {photo,visible,cards} =  this.state
  //console.log(cards)
    if (this.state.loading) {
      return <ActivityIndicator animating={this.state.loading}  size="large" />;
    }

  return (

      <View style={styles.MainContainer}>
    
      <ImageBackground source={require('../assets/frame.png')} style={styles.dailymatchbakcgroundImage}>
        <SwipeCards
        cards={this.state.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
        </ImageBackground>

      </View>
    );
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
  },
  thumbnail: {
  height:hp('80%'),
  width:wp('95%'),
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    top:wp('-17%'),
    color:'#000000'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})