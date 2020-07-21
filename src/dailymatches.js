import * as React from 'react';
import {Appbar, BottomNavigation, Text } from 'react-native-paper';
import { ActivityIndicator,Image,TouchableOpacity,ImageBackground, StyleSheet, View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/styles.js';
import Usertile from '../components/userstile';
import MusicRoute from '../components/firsttab';
import AlbumsRoute from '../components/secondtab';
import RecentsRoute from '../components/thirdtab';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FilterDialog from '../components/filterdialog';

const DailyMatch = () => {


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Matches', icon: 'heart' },
    { key: 'links', title: 'Links', icon: 'link' },
    { key: 'chat', title: 'Chat', icon: 'chat' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    links: AlbumsRoute,
    profile: RecentsRoute,
    chat: RecentsRoute,
  });

  return (
    <View style={styles.container}>
      <StatusBar
    
    hidden ={true}
  />
    <Appbar.Header statusBarHeight={hp('1%')}  style={{backgroundColor:'#ddd'}}>
         
      <Appbar.Content title="Daily Matches"  />
     
     <FilterDialog/>
    </Appbar.Header>

 <BottomNavigation
   style={styles.container}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
 </View>
  );
};

export default DailyMatch;

