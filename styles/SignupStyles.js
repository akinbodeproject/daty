import { StyleSheet} from 'react-native';

export const SignupStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4e416d',
        justifyContent:"center",
       
    },

    spinnerTextStyle: {
    color: '#FFF',
    },

    formContainer:{
        marginTop: '5%',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        
    },
    header:{
        marginTop: '15%',
        fontSize:28,
        color:"#eea985",
        fontWeight:"bold",
        textAlign: "center"
    },
    form:{
        padding:10,
        marginTop:'6%',
        width: '100%',
        alignItems: 'center',
        backgroundColor:'#5d4f82',
        borderTopRightRadius:50,
        borderBottomLeftRadius:50,
        borderWidth:5,
        borderColor:"#eea985",
    },
    input:{
        borderWidth:1,
        borderColor:"#777",
        padding:10,
        width:'80%',
        borderRadius: 40,
        color:'#ccc',
        
  },
  myPicker:{
      width: "80%",
      color: "#ccc",
      borderWidth:1,
      borderColor:"#777",
      borderRadius: 40,
      marginBottom:18,
  },

  innerPicker:{
     color:"#ccc"

  },
  myBtnsContainer:{
    marginTop:10,
    width: '80%',
  },

  btn:{
    backgroundColor: "#3dc7b8",
    textAlign:"center",
    marginBottom: 10,
    padding:12,
    color: "#ffffff",
    fontSize: 18,
    borderRadius: 100,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
   alertbtn: {
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignSelf: 'stretch',
    backgroundColor: '#4CB748',
    marginTop: 16,
    marginBottom:10,
    minWidth: '50%',
    paddingHorizontal: 16,
  },
   btnText: {
    color: '#FFFFFF',
  },

  
})
