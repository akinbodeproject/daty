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
       paddingLeft:wp('2.5%'),
        paddingRight:wp('2.5%'),
        width: wp('100%'),
        height: hp('100%'),
        left:wp('1%'),
        right:wp('1%')
    },
      swipeImage: {
      flex:1,
      resizeMode: "cover",
      width: wp('100%'),
      height: hp('80%'),
        
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
   
    flex: 1,
   
backgroundColor:'#fefeff',
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:wp('5%'),
    left:wp('4%')
  },
  usersmatch:{
flex: 1,
 flexDirection: 'column',

  backgroundColor:'#fefefe',
  alignItems:'center',
  height:wp('50%'),
  
  },
  usersmatch2:{
flex: 1,
 flexDirection: 'column',

  backgroundColor:'#fefefe',
  
  height:wp('50%'),
  
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
 displayname:{
  fontSize:wp('0.2%')
 },
 banner:{
  height:wp('60%'),
  width:wp('95%'),
  backgroundColor:'#441964',
  alignItems:'center',
  justifyContent: 'center',
 },
 fullname:{
   color:'#FFFFFF'
 },
 school:{
   color:'#FFFFFF',
   paddingLeft:wp('0.4'),
 },
 iconName: {
  
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    top:wp('-18%')
  },
  iconDept: {
  
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    top:wp('-16%')
  },
   edit: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:wp('20%')
  },
  camera:{
    top:wp('-17%'),
    left:wp('17%')
  },
  wallet:{
   right:wp('20%')
  },
  walletText:{
    right:wp('-1%')
  },
  premium:{
   left:wp('25%')
  },
  premiumText:{
   right:wp('5%')
  },
  useredit:{
    marginTop:wp('5%'),
   right:wp('-3%')
  },
  usereditText:{
   right:wp('-4%')
  },
   verify: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:wp('10%'),
    backgroundColor:'#EEEEEE',
     height:wp('60%'),
     width:wp('95%'),
     marginBottom:wp('10%'),
     borderRadius: 10,
     justifyContent:'center'
  },
  verifyimage: {
    width: wp('30%'),
    height: wp('30%'),
    right:wp('3%'),
    top:wp('2%')
  },
  verifyHeadingContainer:{
    top:wp('2%'),
    right:wp('-3%'),
    
    flexWrap: 'wrap',
    
 
  },
  verifyHeading:{
     fontSize: wp('7%'),
     
   
  },
  verifyText:{
    fontSize:wp('4%')
    
  },
  verifymark:{
    top:wp('-15%'),
    right:wp('-18%'),
    fontSize:wp('10%')
  },
  centralise:{
    marginTop:wp('5%'),
    justifyContent:'center',
    alignItems:'center' 
  },
  avatarImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:wp('10%'),
    marginBottom:wp('5%')
  },
  indprofile:{
 backgroundColor:'#441964',
  alignItems:'center',
  justifyContent: 'center',
 
  },

   card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});



export default styles;