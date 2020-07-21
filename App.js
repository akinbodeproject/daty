import * as React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import LogSignApp from './src/LogSign';
import App from './src/App';
import SignUp from './src/Signup';
import DatingGrid from './src/dailymatches';
import { createAppContainer } from 'react-navigation'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#441964',
    accent: '#673293',
    roundness: 3,
    background:'#fff',
    surface:'#fff',
    text:'#673293',
    placeholder:'#673293',
    

  },
};
const navigationOptions = {
    //To hide the ActionBar/NavigationBar
    header: null,
};
const RootStack = createAppContainer(createStackNavigator(
{
  LogSign: { screen: LogSignApp, navigationOptions: {
      header: null,
    }, },
  Login: { screen: App, navigationOptions: {
      header: null,
    }, },
     Datinglist: { screen: DatingGrid, navigationOptions: {
      header: null,
    }, },
    SignUp: { screen: SignUp, navigationOptions: {
      header: null,
    }, },
},
{
    initialRouteName: 'LogSign',
}

))
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <RootStack />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);