
import { StyleSheet } from 'react-native'
export default StyleSheet.create({

image: {
  marginBottom: 40,
},


container: {
  flex: 2,
  // backgroundColor: '#FFFFFF',
},
imageContainer: {
  flex:1, 
  paddingTop: 50,
  alignItems: 'center', // email, progdate and prog
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
},
footerContainer: {
  flex: 1 / 2,
  alignItems: 'center',

  width: null,
  height: null,
},
image: {
  flex: 1,
  justifyContent: 'center',
},

text: {
  color: '#FFFFF',
  fontSize: 42,
  lineHeight: 84,
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#000000c0',
},
overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(255,255,255, 0.8)',
  position: 'absolute',
  top: 150,
  left: 15,
  right: 15,
  bottom: -200
},
input_container:{
margin: 5,
height: 50,
width: 100, 
fontSize: 16
},
inputView: {
  backgroundColor: "#FFC0CB",
  borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
},
TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 20,
},
forgot_button: {
  height: 30,
  marginBottom: 30,
},
loginBtn: {
  width: "80%",
  borderRadius: 25,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  backgroundColor: "#FF1493",
},

});