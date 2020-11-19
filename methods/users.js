import React, {component, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
class Users extends Component{
Users=()=> {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

 useEffect(() => {
  const subscriber = firestore()
    .collection('users')
    .onSnapshot(querySnapshot => {
      const users = [];

      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setUsers(users);
      setLoading(false);
    });

  // Unsubscribe from events when no longer in use
  return () => subscriber();
}

  

  if (loading) {
    return <ActivityIndicator />;
  }

 
    return (
       const {fullname} =  this.state
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

export default Users;