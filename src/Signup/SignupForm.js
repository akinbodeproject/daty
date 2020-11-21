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
    .min(5),
email: yup.string()
    .required()
    .email()
    .min(10),
password: yup.string()
    .required()
    .min(5)
})
export default function SignupForm(props) {
return (
    <Formik
        initialValues={{name: "", password: "", 
        email: "", gender: "Male", theState: "Abuja", 
        lookingFor: "" }}
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

        <View style={SignupStyles.myPicker}>
        <Picker style={SignupStyles.innerPicker} 
            selectedValue={props.values.theState}
            onValueChange={props.handleChange('theState')}>
            <Picker.Item label="Abuja" value="Abuja" />
            <Picker.Item label="Lagos" value="Lagos" />
            <Picker.Item label="Abia" value="Abia" />
            <Picker.Item label="Adamawa" value="Adamawa" />
            <Picker.Item label="Akwa Ibom" value="Akwa Ibom" />
            <Picker.Item label="Abia" value="Abia" />
            <Picker.Item label="Anambra" value="Anambra" />
            <Picker.Item label="Bauchi" value="Bauchi" />
            <Picker.Item label="Bayelsa" value="Bayelsa" />
            <Picker.Item label="Benue" value="Benue" />
            <Picker.Item label="Borno" value="Borno" />
            <Picker.Item label="Cross river" value="Cross river" />
            <Picker.Item label="Delta" value="Delta" />
            <Picker.Item label="Ebonyi" value="Ebonyi" />
            <Picker.Item label="Edo" value="Edo" />
            <Picker.Item label="Ekiti" value="Ekiti" />
            <Picker.Item label="Enugun" value="Enugun" />
            <Picker.Item label="Gombe" value="Gombe" />
            <Picker.Item label="Imo" value="Imo" />
            <Picker.Item label="Jigawa" value="Jigawa" />
            <Picker.Item label="Kaduna" value="Kaduna" />
            <Picker.Item label="Kano" value="Kano" />
            <Picker.Item label="Katsina" value="Katsina" />
            <Picker.Item label="Kebbi" value="Kebbi" />
            <Picker.Item label="Kogi" value="Kogi" />
            <Picker.Item label="Kwara" value="Kwara" />
            <Picker.Item label="Nasarawa" value="Nasarawa" />
            <Picker.Item label="Niger" value="Niger" />
            <Picker.Item label="Ogun" value="Ogun" />
            <Picker.Item label="Ondo" value="Ondo" />
            <Picker.Item label="Osun" value="Osun" />
            <Picker.Item label="Oyo" value="Oyo" />
            <Picker.Item label="Plateau" value="Plateau" />
            <Picker.Item label="Rivers" value="Rivers" />
            <Picker.Item label="Sokoto" value="Sokoto" />
            <Picker.Item label="Taraba" value="Taraba" />
            <Picker.Item label="Yobe" value="Yobe" />
            <Picker.Item label="Zamfara" value="Zamfara" />
        </Picker>
        </View>

        <View style={SignupStyles.myPicker}>
            <Picker style={SignupStyles.innerPicker} 
                selectedValue={props.values.gender}
                onValueChange={props.handleChange("gender")}>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
            </Picker> 
        </View>

        <View style={SignupStyles.myPicker}>
            <Picker style={SignupStyles.innerPicker} 
            selectedValue={props.values.lookingFor}
            onValueChange={props.handleChange("lookingFor")}>
            <Picker.Item label="Looking for" value="empty" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Both" value="both" />
            </Picker>
        </View>

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
