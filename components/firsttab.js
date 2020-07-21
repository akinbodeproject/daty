/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
import {Button,Card, Surface, Text,Avatar } from 'react-native-paper';
import styles from '../styles/styles.js';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ImageBackground,StyleSheet,View,FlatList,ActivityIndicator,Image,TouchableOpacity,} from 'react-native';
//import all the components we will need

export default class MusicRoute extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: '../assets/avatar.png?text=' + (i + 1) };
    });
    that.setState({
      //Setting the data source
      dataSource: items,
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
      <ImageBackground source={require('../assets/frame.png')} style={styles.dailymatchbakcgroundImage}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.usersmatch}>

              <Avatar.Image size={wp('30%')} style={styles.imageThumbnail} source={require('../assets/avatar.png')} />
               <Card style={{width:wp('43%'),height:wp('10%')}}>
          <Card.Actions style={{width:wp('43%'),height:wp('10%'),backgroundColor:'#eee',elevation:1}}>
           <Button>Name</Button>
           <Button>88%</Button>
           </Card.Actions>
            </Card>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        </ImageBackground>
      </View>
    );
  }
}


