import React, {useState} from 'react'
import { View, Text, StyleSheet, Image,
    TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native';
import LoginStyles from '../styles/LoginStyles';
import { firebase } from "../model/model.js";



const gradientHeigth = 300;
const gradientBackground = "#4e416d";
const data = Array .from({length: gradientHeigth});

export default function Login({navigation}) {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmail = (text) => {
        setEmail(text)
    }

    const handlePassword = (text) => {
    setPassword(text)
    }

  const handleLogin = () => {
      setLoading(true);
          firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((response) => {
                  const uid = response.user.uid
                  const usersRef = firebase.firestore().collection('users')
                  usersRef
                      .doc(uid)
                      .get()
                      .then(firestoreDocument => {
                          if (!firestoreDocument.exists) {
                              alert("User does not exist.")
                              return;
                          }
                          const user = firestoreDocument.data()
                          console.log(user)
                            setLoading(false)
                            navigation.navigate('Datinglist')
                      })
                      .catch(error => {
                          alert(error)
                        setLoading(false)
                      });
              })
              .catch(error => {
                  alert(error)
                setLoading(false)
              })
      }

    return (
        <View  style={LoginStyles.container}>
           {/* ====== Gradient display ========= */}
             { data.map((_, i) =>(
               <View
               key={i}
               style={{
                position: "absolute",
                backgroundColor: gradientBackground,
                height: 1,
                bottom : (gradientHeigth -i),
                right:0,
                left:0,
                zIndex:-1,
                opacity:(1/gradientHeigth)*(i + 1)
               }}
                />
           ))}

          {/* ====== Top image display ========= */}
           <View style={LoginStyles.loginImgContainer}>
             <Image style={LoginStyles.loginImg} source={require('../assets/flat.png')} />
           </View>
           
            {/* ===== Login form =========== */}
            <View style={LoginStyles.loginForm}>
               <ActivityIndicator size="large" color="#ffffff"
               animating ={loading}
              />
                <TextInput style={LoginStyles.Logininput} name="email" 
                    onChangeText={handleEmail}
                    value={email}
                    keyboardType={"email-address"}
                    placeholder="Email" placeholderTextColor="#333333" />

                    <TextInput secureTextEntry={true} name="password"
                    value={password}
                    onChangeText={handlePassword}
                    style={LoginStyles.Logininput} 
                    placeholder="Password"  placeholderTextColor="#333333"/>

                <View style={LoginStyles.myBtnsContainer}>
                  <TouchableOpacity onPress={handleLogin}>
                  <Text style={LoginStyles.btn}>Login</Text>
                  </TouchableOpacity>
                 <TouchableOpacity>
                    <Text style={LoginStyles.forgotPassword}>forgot password</Text>
                 </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

