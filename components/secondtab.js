'use strict';

import React from 'react';
import {StyleSheet, Text, View,Dimensions,Animated,PanResponder,ImageBackground,ActivityIndicator,Image,TouchableOpacity,AsyncStorage } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwipeCards from 'react-native-swipe-cards';
import { firebase } from "../model/model.js";
import styles from '../styles/styles.js';
import { Ionicons } from '@expo/vector-icons';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDHT = Dimensions.get('window').width
export default class AlbumsRoute extends React.Component {
  constructor(props) {
    
    super(props);
    this.unsubscribe = null;
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex:0,
       posts:[],
      loading: true,
      visible:false,
      photo:"",
      lang:[],
      school:"",
      department:"",
    
    }
    this.rotate = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDHT/2, 0, SCREEN_WIDHT/2],
      outputRange:['-10deg' , '0deg' ,'10deg'],
      extrapolate:'clamp'
    })

    this.rotateAndTranslate = {
      transform:[{
      rotate : this.rotate
      },
     ...this.position.getTranslateTransform()
      ]
    }
    this.likeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDHT/2, 0, SCREEN_WIDHT/2],
      outputRange:[0 , 0 ,1],
      extrapolate:'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDHT/2, 0, SCREEN_WIDHT/2],
      outputRange:[1 , 0 ,0],
      extrapolate:'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDHT/2, 0, SCREEN_WIDHT/2],
      outputRange:[1 , 0 ,1],
      extrapolate:'clamp'
    })

this.nextCardScale = this.position.x.interpolate({
      inputRange:[-SCREEN_WIDHT/2, 0, SCREEN_WIDHT/2],
      outputRange:[1 , 0.8 ,1],
      extrapolate:'clamp'
    })
this.ref = firebase.firestore().collection('users');
  }

componentWillMount(){
  this.PanResponder = PanResponder.create({

    onStartShouldSetPanResponder:(evt,gestureState)=>true,

    onPanResponderMove:(evt,gestureState)=>{
      this.position.setValue({x:gestureState.dx,y:gestureState.dy})
    },
    onPanResponderRelease:(evt,gestureState)=>{

     if(gestureState.dx>120){
      Animated.spring(this.position,
      {
        toValue:{x:SCREEN_WIDHT+100,y:gestureState.dy}
      }).start(()=>{
        this.setState({currentIndex:this.state.currentIndex+1},()=>{
          this.position.setValue({x:0,y:0})
        })
      })
     }
     else if(gestureState.dx< -120){
      Animated.spring(this.position,
      {
        toValue:{x: -SCREEN_WIDHT -100,y:gestureState.dy}
      }).start(()=>{
        this.setState({currentIndex:this.state.currentIndex+1},()=>{
          this.position.setValue({x:0,y:0})
        })
      })
     }
     else{
      Animated.spring(this.position,
      {
        toValue:{x: 0,y:0},
        friction:4
      }).start()
     }
    }
  })
}


componentDidMount() {
  //console.log(this.props,'test')
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const posts = [];
    const lang =[];
    querySnapshot.forEach((doc) => {
      const { fullName, password, school,phone, email,address,photo,date,dob,interest,languages} = doc.data();
      //console.log(doc.data())
      posts.push({
        
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
        languages,
        
      })
     });
   
    this.setState({
      posts,
      loading: false,

   });
   //console.log(cards)
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

  renderUsers =()=>{
    
  const { navigation } = this.props;
 const {photo,visible,fullName,age,id} =  this.state

    return this.state.posts.map((item,i)=>{
   if(i< this.state.currentIndex){
    return null
   }
   else if(i==this.state.currentIndex){
 
    return(
<Animated.View 
{...this.PanResponder.panHandlers}
key={item.id} style={[this.rotateAndTranslate,{height:SCREEN_HEIGHT-hp('4'),width:SCREEN_WIDHT,padding:1,right:wp('-2.5%'),position:'absolute'}]}>

<Animated.View style={{opacity:this.likeOpacity,transform:[{rotate:'-30deg'}],
  position:'absolute', top:50,left:40,zIndex:1000}}>
<Text style={{borderWidth:1,borderColor:'green', color:'green',fontSize:32,fontWeight:'800',padding:10}}>LIKE</Text>

</Animated.View>

<Animated.View style={{opacity:this.dislikeOpacity,transform:[{rotate:'30deg'}],
  position:'absolute', top:50,right:40,zIndex:1000}}>
<Text style={{borderWidth:1,borderColor:'red', color:'red',fontSize:32,fontWeight:'800',padding:10}}>NOPE</Text>

</Animated.View>
      <Image style={{flex:1, height:null,width:null,resizeMode:'cover',borderRadius:20}}
      source ={{uri:item.photo}} />
     <View style={sty.hintView}>
      <View style={sty.iconDept}>
        <Ionicons  name="md-person" size={20} color="#441964" />
        <Text style= {sty.text}>{item.fullName}</Text>
         </View>
      <View style={sty.iconDept}>
        <Ionicons name="md-timer" size={20} color="#441964" />
        <Text style= {sty.text1}>{this.getAge(item.dob)} Years</Text>
         </View>
     <View style={sty.iconDept}>
        <Ionicons name="md-map" size={20} color="#441964" />
       <Text style= {sty.text2}>20 Miles Away</Text>
         </View>
      </View>
     </Animated.View >
        )
         }

    else{
      return(
      <Animated.View 
   key={item.id} style={[{
  opacity: this.nextCardOpacity,
  transform:[{scale:this.nextCardScale}],
  height:SCREEN_HEIGHT-hp('4'),width:SCREEN_WIDHT,padding:10,right:wp('-2.5%'),position:'absolute'}]}>
      <Image style={{flex:1, height:null,width:null,resizeMode:'cover',borderRadius:20}}
     source ={{uri:item.photo}} />
      <View style={sty.hintView}>
      <View style={sty.iconDept}>
        <Ionicons  name="md-person" size={20} color="#441964" />
        <Text style= {sty.text}>{item.fullName}</Text>
         </View>
      <View style={sty.iconDept}>
        <Ionicons name="md-timer" size={20} color="#441964" />
        <Text style= {sty.text1}>{this.getAge(item.dob)} Years</Text>
         </View>
     <View style={sty.iconDept}>
        <Ionicons name="md-map" size={20} color="#441964"/>
       <Text style= {sty.text2}>20 Miles Away</Text>
         </View>
      </View>
     </Animated.View >
     )
    }
    }).reverse()
  }

  render() {

  //console.log(cards)
    if (this.state.loading) {
      return <ActivityIndicator animating={this.state.loading}  size="large" />;
    }
    return (
     <View  style={{flex:1}}>
     <ImageBackground source={require('../assets/frame.png')} style={styles.dailymatchbakcgroundImage}>
      <View  style={{height:hp('0.5')}}>

     </View>
     <View  style={{flex:1}}>
     {this.renderUsers()}
     </View>
     <View  style={{height:hp('0.5')}}>

     </View>
     </ImageBackground>
     </View>
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
  },
   text: {
    fontSize: 20,
    
    color:'#000000',
    
  },
  texticon: {
    fontSize: 20,
    paddingTop: 1,
    paddingBottom: 1,
    top:wp('-37%'),
    color:'#000000',
    
  },
  text1: {
    fontSize: 20,
    paddingTop: 1,
    paddingBottom: 1,
    top:wp('-35%'),
    color:'#000000',
    
  },
  text2: {
    fontSize: 20,
    paddingTop: 1,
    paddingBottom: 1,
    top:wp('-33%'),
      color:'#000000',
    
  },
   hintView:{
    
     left:wp('3%'),
     backgroundColor:'#eeeeee',
     width:wp('60%'),
     opacity:0.8,
     
   },
   iconDept: {
    flexDirection: 'row',
    flexWrap: 'wrap',
     backgroundColor: '#eeeeee',
   
     top:wp('-50%')
  },
})