import * as React from 'react';
import {Appbar, BottomNavigation, Text } from 'react-native-paper';
import { ActivityIndicator,Image,TouchableOpacity,ImageBackground, StyleSheet, View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/styles.js';
import Usertile from '../components/userstile';
import MusicRoute from '../components/firsttab';
import AlbumsRoute from '../components/secondtab';
import Chat from '../components/chat';
import RecentsRoute from '../components/thirdtab';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FilterDialog from '../components/filterdialog';
import { createStackNavigator } from 'react-navigation-stack';
export default class DailyMatch extends React.Component {

state = {
    index: 0,
    routes: [
    
      { key: 'music', title: 'Matches', icon: 'heart' },
      { key: 'swipe', title: 'Swipe', icon: 'link' },
    { key: 'chat', title: 'Chat', icon: 'chat' },
    { key: 'profile', title: 'Profile', icon: 'account' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });
componentDidMount() {
  //console.log(this.props,'test')
    
  }

   
  _renderScene = ({ route,  jumpTo }) => {
    switch(route.key) {
      
      case 'music':
        return (<MusicRoute jumpTo={jumpTo} {...this.props} />);
       case 'swipe':
        return (<AlbumsRoute jumpTo={jumpTo} {...this.props} />);
        case 'chat':
        return (<Chat jumpTo={jumpTo} {...this.props} />);
        case 'profile':
        return (<Usertile jumpTo={jumpTo} {...this.props} />);
        
    }
  }
  //BottomNavigation.SceneMap({
    //music: MusicRoute,
   // links: AlbumsRoute,
    //profile: Usertile,
    //chat: RecentsRoute,
  //});

render() {

   const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <StatusBar
    
    hidden ={true}
  />
    <Appbar.Header statusBarHeight={hp('1%')}  style={{backgroundColor:'#ddd'}}>
         
      <Appbar.Content title=""  />
     
     <FilterDialog/>
    </Appbar.Header>

 <BottomNavigation
   style={styles.container}
     navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
    />
 </View>
  );
}
}


