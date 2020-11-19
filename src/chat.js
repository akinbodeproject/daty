import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Stylesheet, text, view,YellowBox,AsyncStorage } from 'react-native';
import { firebase } from "../model/model.js";
import {GiftedChat} from 'react-native-gifted-chat'
YelowBox.ignoreWarnings(['Setting a timer for a long period of time'])
const chatref = firebase.firestore().collection('chats')
const [user, setUser] = useState(null)
 const [messages, setMessages] = useState([])
export default function Chat(){
 
	async getToken() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
     setUser(data.fullName)
      
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
 


  useEffect(()=>{
getToken()
unsubscribe = chatref.onSnapshot(querySnapshot =>{
	const messageFirestore = querySnapshot.docChanges().filter(({type})=>type=='added')
	.map(({doc})=>{
		const message = doc.data()
		return {...message,createdAt:message.createdAt.toDate()}
	}).sort((a,b)=>b.createdAt.getTime()-a.createdAt.getTime())
	setMessages(messageFirestore)
})
  },[])
	return(
<View style= {styles.container}>

<Text>Yes we are chatting</Text>

</View>

<StatusBar style="auto"/>
		);
}

const styles = Stylesheet.create({
	container:{
		flex:1,
		backgroundColor:"#fff",
		alignItems:"center",
		justifyContent:"center"
	}
});