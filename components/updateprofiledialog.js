import * as React from 'react';
import {View, ScrollView } from 'react-native';
import {TextInput,Appbar,Button,Paragraph, Dialog, Portal, Text } from 'react-native-paper';
import styles from '../styles/styles.js';
 import Dropdown from '../components/Dropdown';
const FilterDialog = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);


  return (
    <View>
    <Appbar.Action icon="filter-variant" onPress={showDialog} />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Content>
          <Paragraph style={styles.filter}>Filter</Paragraph>
           
          <Dropdown style={styles.filterinput}/>
        </Dialog.Content>
      </Dialog>
      </Portal>
    </View>
  );
};

export default FilterDialog;