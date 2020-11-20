import React, {useState} from 'react'
import { View, Text, StyleSheet, Image,
    TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native';

export default function Loading() {
    
    return (
       <View>
            <ActivityIndicator size="large" color="#ffffff"
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner
                textContent={'Loading...'}
                //Text style of the Spinner Text
                textStyle={LoginStyles.spinnerTextStyle}
            />
       </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
