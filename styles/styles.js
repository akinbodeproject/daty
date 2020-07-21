import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
       flex: 1,
    flexDirection: "column"
    },
  bakcgroundImage: {
      flex:1,
       resizeMode: "contain",
       padding:wp('4.5%'),
        width: wp('100%'),
        height: hp('100%'),
       
    },
    LogSignbakcgroundImage: {
      flex:1,
       resizeMode: "contain",
       alignItems: 'center',
        width: wp('100%'),
        height: hp('100%'),
    
    },
    loginButton: {
        marginBottom: 40,
        backgroundColor:'#f2fef8',
        color: '#0250a3',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
      input: {
     width: wp('85%'),
    height: hp('5%'),
    padding: 10,
    borderWidth: 1,
    borderColor: '#441964',
    color:'#441964',
    borderRadius: 10,
    color: '#0250a3',
    marginBottom: 10,
    justifyContent: "center",
 },
  buttonup:{
     width: wp('85%'),
    height: hp('8%'),
    padding: 10,
    borderWidth: 1,
    borderColor: '#d5c8df',
    marginBottom: 10,
    backgroundColor:'#673293',
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
   buttonin:{
     width: wp('85%'),
    height: hp('8%'),
    padding: 10,
    borderWidth: 1,
    borderColor: '#441964',
    marginBottom: 10,
    color:'#441964',
    backgroundColor:'#f2f2f2',
       borderRadius: 10,
         color: '#0250a3',
         textAlign: 'center',
         alignItems: 'center',
  },
  LogSignloginView:{
    marginTop:hp('38%')
  },

   container2: {
       flex: 1,
    flexDirection: "column",
    padding:wp('4.5%'),
    },
    dailymatchbakcgroundImage: {
      flex:1,
       resizeMode: "contain",
       paddingLeft:wp('4.5%'),
         paddingRight:wp('4.5%'),
        width: wp('100%'),
        height: hp('100%'),
       
    },
dailymatchloginView:{
    marginTop:hp('60%')
  },
   bakcgroundImage: {
      flex:1,
       resizeMode: "contain",
       alignItems: 'center',
        width: wp('100%'),
        height: hp('100%'),
    
    },
     loginView:{
    marginTop:hp('35%')
  },
  tinyLogo: {
    marginTop: hp('10%'),
    width: wp('58.5%'),
    height: wp('32.4%'),
  },
   image:{
   
   alignItems: 'center',
    justifyContent:'center'
  },
  accountPage:{
    backgroundColor:'#441964',
      flex: 1,
    flexDirection: "column",
   
  },
 facebook:{
     width: wp('85%'),
    height: hp('8%'),
    padding: 10,
    borderWidth: 1,
    borderColor: '#d5c8df',
    backgroundColor:'#3b5998',
    marginTop:hp('10%'),
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  facebookView:{
  alignItems:'center'
  },
  signView:{
    marginTop:hp('7%'),
    alignItems:'center',
  },
   surface: {
    padding: 8,
    height: wp('50%'),
    width: wp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
   MainContainer: {
    justifyContent: 'center',
    flex: 1,
   
backgroundColor:'#fefeff',
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:wp('5%')
  },
  usersmatch:{
flex: 1,
 flexDirection: 'column',
  margin: wp('1%'),
  backgroundColor:'#fefefe',
  alignItems:'center',
  height:wp('50%'),
  padding:wp('2%'), 
  },
  avatarbutton:{
    width:null
  },
  filter:{
    alignItems:'center',
    justifyContent: 'center',
  },
    filterinput: {
    height: hp('8%'),
    padding: 10,
    borderColor: '#441964',
    color:'#441964',
    color: '#0250a3',
    marginBottom: 2,
    justifyContent: "center",
 },
});


export default styles;