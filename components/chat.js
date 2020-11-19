// @refresh reset
import {StatusBar} from 'expo-status-bar';
import React,{useState, useEffect, useCallback} from 'react';
import {Stylesheet, text, view,YellowBox,AsyncStorage } from 'react-native';
import { firebase } from "../model/model.js";
import {GiftedChat} from 'react-native-gifted-chat'
YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])
const chatref = firebase.firestore().collection('chats')

export default function Chat(){
 const [user, setUser] = useState(0)
 const [id, setId] = useState(0)
 const [messages, setMessages] = useState([])
	async function getToken() {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
     setUser(data.fullName)
      setId(data.id)
      //console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
 


  useEffect(()=>{
  console.log(id)
getToken()
const unsubscribe = chatref.onSnapshot(querySnapshot =>{
	const messageFirestore = querySnapshot.docChanges().filter(({type})=>type=='added')
	.map(({doc})=>{
		const message = doc.data()
		return {_id:id,...message,createdAt:message.createdAt.toDate()
         
		}
	}).sort((a,b)=>b.createdAt.getTime()-a.createdAt.getTime())
	appendMessages(messageFirestore)
})
return ()=>unsubscribe()
  },[])

  async function handleSend(messages){
  	const writes = messages.map(m=>chatref.add(m))
  	await Promise.all(writes)
  }
  const appendMessages = useCallback((messages)=>{
  	setMessages((previousMessages)=>GiftedChat.append(previousMessages,messages))
  },[messages])
	return(
<GiftedChat messages={messages} onSend={handleSend}/>
		);
}

