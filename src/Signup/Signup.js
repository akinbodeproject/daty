import React, {useState, useEffect, useMemo} from 'react'
import { View, Text, ActivityIndicator, 
    SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {SignupStyles} from './SignupStyles';
import SignupForm from './SignupForm';
import {firebase} from '../../model/model'

const Signup = ({navigation}) => {
const [loading, setLoading] = useState(false);
const [visible, setVisible] = React.useState(false);
const [userData, setuserData] = useState(null)

const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

const gotoHome = () =>{
    toggleAlert()
    navigation.navigate('Datinglist',{user: userData})
  }

const  storeToken = async (data)=> {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(data));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

const handleRegister = async (values)=>{
    setLoading(true)
     const {name,password,email,school,phone} = values
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    fullName: name,
                    password: password,
                    school: school,
                    phone: phone,
                    email: email,
                    address:new firebase.firestore.GeoPoint(0, 0),
                    dob: "",
                    interest:[],
                    languages:[],
                    department:"",
                    photo:"",
                    date: new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate()
                    
                };
                const usersRef = firebase.firestore().collection('users')
                const socialsRef = firebase.firestore().collection(uid)
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        socialsRef
                    .doc(uid)
                    .set({id:uid,"senderId":"","status":""})
                      storeToken(data)
                      setLoading(false);
                      setuserData(data)
                      toggleAlert();
                      
                    })
                    .catch((error) => {
                        alert(error)
                    });

            })
            .catch((error) => {
                alert(error)
        });

   console.log(values);
    
}

return (
    <SafeAreaView style={{ flex: 1 }}>
        {/* ========Custom alert form ==========*/}
        <FancyAlert
            visible={visible}
            icon={<View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 50,
            width: '100%',
            }}><Text>🤓</Text></View>}
            style={{ backgroundColor: 'white' }}
            onRequestClose={toggleAlert}
        >
            <Text style={{ marginTop: 16, marginBottom: 32 }}>
                Account created successful
            </Text>
             <TouchableOpacity style={SignupStyles.alertbtn} onPress={gotoHome}>
                <Text style={SignupStyles.btnText}>OK</Text>
            </TouchableOpacity>
        </FancyAlert>

    {/* ========Signup form container form and activity indicator =========================*/}
        <View style={SignupStyles.container}>
            {loading ? (
            <ActivityIndicator size="large" color="#ffffff"
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner
                textContent={'Loading...'}
                //Text style of the Spinner Text
                textStyle={SignupStyles.spinnerTextStyle}
            />
            ) : (
            
            <View style={SignupStyles.formContainer}>
                {/* Header text */}
                <Text style={SignupStyles.header}>Create Account</Text>
                <SignupForm handleRegister={handleRegister} />
            </View>
            )}
        </View>
    </SafeAreaView>
)}

export default Signup