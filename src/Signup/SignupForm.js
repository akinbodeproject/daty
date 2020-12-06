import React, {useState} from 'react';
import { View, Text,  StyleSheet, TextInput, TouchableOpacity, 
    ActivityIndicator, SafeAreaView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {SignupStyles} from './SignupStyles';
import {Formik} from 'formik';
import * as yup from 'yup';

const SignupSchema = yup.object({
name: yup.string()
    .required()
    .min(5, "Too short"),
email: yup.string()
    .required('required')
    .email('Must be a valid email')
    .min(10),

phone: yup.number()
    .required('Required'),
    

school: yup.string()
    .required('Required')
    .max(20)
    .min(4),

password: yup.string()
    .required('Required')
    .min(5)
})
export default function SignupForm(props) {
return (
    <Formik
        initialValues={{name: "", password: "", 
        email: "", phone:"", school:""}}
        onSubmit={(values, actions)=>{
            actions.resetForm();
            props.handleRegister(values)
        }}
        validationSchema={SignupSchema}
        >
        {(props)=>(
        <View style={SignupStyles.form}>

        <TextInput name="name" placeholder="Name"
        placeholderTextColor={'#e2e1e3'} 
        onChangeText={props.handleChange('name')}
        value={props.values.name}
        style={SignupStyles.input} />
        <Text style={SignupStyles.errorText}>{props.errors.name}</Text>

        <TextInput name="email" placeholder="Email" 
        placeholderTextColor={'#e2e1e3'} 
        onChangeText={props.handleChange('email')}
        value={props.values.email}
        style={SignupStyles.input} />
        <Text style={SignupStyles.errorText}>{props.errors.email}</Text>

        <TextInput secureTextEntry={true} name="password" placeholder="Password" 
        placeholderTextColor={'#e2e1e3'}  
        onChangeText={props.handleChange('password')}
        style={SignupStyles.input} />
        <Text style={SignupStyles.errorText}>{props.errors.password}</Text>

        
        <TextInput name="phone" placeholder="Phone" 
        placeholderTextColor={'#e2e1e3'} 
        onChangeText={props.handleChange('phone')}
        value={props.values.phone}
        style={SignupStyles.input} />
        <Text style={SignupStyles.errorText}>{props.errors.phone}</Text>


        <TextInput name="school" placeholder="School" 
        placeholderTextColor={'#e2e1e3'} 
        onChangeText={props.handleChange('school')}
        value={props.values.school}
        style={SignupStyles.input} />
        <Text style={SignupStyles.errorText}>{props.errors.school}</Text>
       

        

        <View style={SignupStyles.myBtnsContainer}>
            <TouchableOpacity onPress={props.handleSubmit}>
            <Text style={SignupStyles.btn}>Create account</Text>
            </TouchableOpacity>
        </View>
        </View>
        )}
    </Formik>
)
}
