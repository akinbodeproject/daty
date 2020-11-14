import * as React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import LogSignApp from "./src/LogSign";
import App from "./src/App";
import SignUp from "./src/Signup";
import DatingGrid from "./src/dailymatches";
import userdetails from "./src/userprofile";
import firsttab from "./components/firsttab";

import Camera from "./src/camera";
import { createAppContainer } from "react-navigation";
import * as firebase from "firebase";
import "firebase/firestore";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#441964",
    accent: "#673293",
    roundness: 3,
    background: "#fff",
    surface: "#fff",
    text: "#673293",
    placeholder: "#673293",
  },
};
const navigationOptions = {
  //To hide the ActionBar/NavigationBar
  header: null,
};
const RootStack = createAppContainer(
  createStackNavigator(
    {
      LogSign: {
        screen: LogSignApp,
        navigationOptions: {
           headerShown: false,
        },
      },
      Login: {
        screen: App,
        navigationOptions: {
          headerShown: false,
        },
      },
      Datinglist: {
        screen: DatingGrid,
        navigationOptions: {
           headerShown: false,
        },
      },
      SignUp: {
        screen: SignUp,
        navigationOptions: {
           headerShown: false,
        },
      },
      userdetails: {
        screen: userdetails,
        navigationOptions: {
           headerShown: false,
        },
      },
        Camera: {
        screen: Camera,
        navigationOptions: {
           headerShown: false,
        },
      },
      firsttab: {
        screen: firsttab,
        navigationOptions: {
           headerShown: false,
        },
      },
    },
    {
      initialRouteName: "LogSign",
    }
  )
);
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <RootStack />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
