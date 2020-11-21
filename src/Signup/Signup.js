import React, {useState, useContext, useEffect, useMemo} from 'react'
import { View, Text, ActivityIndicator, 
    SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import { userRef } from '../../firebase/config';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import {SignupStyles} from './SignupStyles';
import SignupForm from './SignupForm';
import {firebase} from '../../model/model'

const Signup = ({navigation}) => {
const [loading, setLoading] = useState(false);
const { handleUserToken} = useContext(UserContext);
const { userToken} = useContext(UserContext);
const [visible, setVisible] = React.useState(false);
const {SignIn} = useContext(AuthContext);
const [userData, setuserData] = useState(null)

const toggleAlert = React.useCallback(() => {
    setVisible(!visible);
  }, [visible]);

const gotoHome = () =>{
    toggleAlert()
    SignIn(userData)

  }


const handleRegister = async (values)=>{
setLoading(true);
// const { name, email, gender, theState, lookingFor, password} = values;

    // try {
    //  let response =  await userAuth.createUserWithEmailAndPassword(email, password);
    //   if(response && response.user){
    //     const uid = response.user.uid;
    //     const data = {
    //         id: uid,
    //         name: name,
    //         email: email,
    //         gender: gender,
    //         photo: '',
    //         theState: theState,
    //         lookingFor: lookingFor,
    //         date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
    //     }
    //     const usersRef = firebase.firestore().collection('users');
    //      usersRef
    //      .doc(uid).set(data).then(() => {
    //         //  toggleAlert();
    //         //  setuserAuth(true);
    //         setLoading(false);
    //         setuserData(data);
    //          toggleAlert();
    //         }).catch((error) => {alert(error)});   
    //   }
    // }
    // catch (e) {
    //   console.error(e.message);
    // }
   
   
   
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