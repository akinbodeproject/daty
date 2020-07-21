import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import styles from '../styles/styles.js';
 import {View,StyleSheet} from 'react-native';
 import { Chevron } from 'react-native-shapes';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import {Button,RadioButton } from 'react-native-paper';
const Dropdown = () => {
  const [value, setValue] = React.useState('Male');
    return (
        <View>
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
                { label: 'Music', value: 'Music' },
                { label: 'Movie', value: 'Movie' },
            ]}
             placeholder={{
              label: 'Interest',
              value: null,
              color:'#441964',
            }}

        />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'UNILAG', value: 'unilag' },
                { label: 'OAU', value: 'oau' },
                { label: 'FUTA', value: 'futa' },
            ]}
             placeholder={{
              label: 'School',
              value: null,
              color: '#441964',
            }}
           style={pickerSelectStyles}
        />
         <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '16-20', value: '16-20' },
                { label: '21-25', value: '21-25' },
                { label: '26-30', value: '26-30' },
                 { label: 'Above 30', value: 'Above30' },
            ]}
             placeholder={{
              label: 'Age',
              value: null,
              color: '#441964',
            }}
           
        />
         <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Male" value="Male" />
      <RadioButton.Item label="Female" value="Female" />
    </RadioButton.Group>
         <Button onPress={() => console.log('Ok')}>Search</Button>
</View>
    );
};

export default Dropdown;


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#441964',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1.5,
    borderColor: '#441964',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});