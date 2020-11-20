import { StyleSheet} from 'react-native';

export const firstScrnStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2f3',
  },
  firstScreenContainer: {
    flex: 1,
    backgroundColor: '#f1f2f3',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectTogether:{
    marginTop: 80,
    fontSize:28,
    color:"#eea985",
    fontWeight:"bold",
    textAlign: "center"
  },
  myBtnsContainer:{
    marginTop:90,
    width: '80%',
    
  },

  btnCreate:{
    backgroundColor: "#4e416d",
    textAlign:"center",
    marginBottom: 10,
    padding:15,
    width:'100%',
    color: "#ffffff",
    fontSize: 18,
    borderRadius: 100,

  },

  btn:{
    textAlign:"center",
    marginBottom: 10,
    padding:15,
    width:'100%',
    color: "#4e416d",
    fontSize: 18,
    borderRadius: 10,

  },
  logoContainer:{
     marginTop:'40%',
     backgroundColor:"#fcfcfc",
     borderRadius: 50,
  },
  logo:{
    height:80, 
    width:80,
    
  }
});