/*This is an Example of Grid View in React Native*/
import React, {Component} from 'react';
import {Title,Text, Paragraph,Card, Portal, Button, Provider, Surface,Avatar } from 'react-native-paper';
import styles from '../styles/styles.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Modal,TouchableHighlight,Alert,ImageBackground,StyleSheet,View,FlatList,ActivityIndicator,Image,TouchableOpacity,AsyncStorage } from 'react-native';
//import all the components we will need
import { firebase } from "../model/model.js";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { createStackNavigator } from 'react-navigation-stack';
import SwipeCards from 'react-native-swipe-cards';



export default class MusicRoute extends React.Component {
 constructor(props) {
    super(props);
    
    this.unsubscribe = null;
    this.state = {
      posts:[],
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
        languages
      })
     });
   
    this.setState({
      posts,
      loading: false,

   });
   //console.log(cards)
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
   
  const {photo,visible} =  this.state
  //console.log(cards)
    if (this.state.loading) {
      return <ActivityIndicator animating={this.state.loading}  size="large" />;
    }

  return (

      <View style={styles.MainContainer}>
    
      <ImageBackground source={require('../assets/frame.png')} style={styles.dailymatchbakcgroundImage}>
        <View>
<FlatList
          data={this.state.posts}
          renderItem={({ item }) => (
          
    <View style={styles.usersmatch}>
     <TouchableHighlight
         key={item.fullName}
         onPress={() =>this.props.navigation.navigate('userdetails')}
        >
          <View>
            <Avatar.Image size={wp('30%')} style={styles.imageThumbnail} source={item.photo==""?require('../assets/avatar.jpg'):{ uri: item.photo }} />
             
               <Card style={{width:wp('43%'),height:wp('10%')}}>
          <Card.Actions style={{width:wp('43%'),height:wp('10%'),backgroundColor:'#eee',elevation:1}}>
           <Button style={styles.displayname}>{item.fullName.split(' ')[0]}</Button>
           <Button>88%</Button>
           </Card.Actions>
            </Card>
            </View>
           </TouchableHighlight>
         
          </View>
        )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}

        />
        </View>
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
    backgroundColor: 'black',
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
    color:'#FFFFFF'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

