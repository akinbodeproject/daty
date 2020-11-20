import { StyleSheet} from 'react-native';

const LoginStyles = StyleSheet.create({
 container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#f1f2f3',
    alignItems: 'center',

  },
  loginImgContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'30%',
  },
  
  loginImg:{
    height:'55%', 
    width:'80%',
  },

  loginForm:{
    width:'100%',
    marginTop:5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Logininput:{
    borderWidth:1,
    borderColor:"#777",
    padding:8,
    margin:4,
    width:'80%',
    borderRadius: 40,
  },
  Loginplaceholder:{
    color: "#333"
  },
   myBtnsContainer:{
    marginTop:10,
    width: '80%',
  },
   btn:{
    backgroundColor: "#4e416d",
    textAlign:"center",
    marginBottom: 10,
    padding:12,
    color: "#ffffff",
    fontSize: 18,
    borderRadius: 100,
    width: '100%',
  },
  forgotPassword:{
    textAlign: "center",
    marginTop: '4%',
    color:"#eea985",
  },
  
  spinnerTextStyle: {
  color: '#FFF',
  },


})
export default LoginStyles;