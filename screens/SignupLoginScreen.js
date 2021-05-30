import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import  db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId: '',
            password: ''
        }
    }
    userSignUp=(emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password).then((response)=>{
            return alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage= error.message;
            return alert(errorMessage);
        })
    }
    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password).then(()=>{
            return alert("Successfully Login")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage= error.message;
            return alert(errorMessage);
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        BARTER SYSTEM
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.loginBox} 
                    placeholder= "abc@example.com"
                    keyboardType= 'email-address'
                    onChangeText= {(text)=>{
                        this.setState({emailId: text})
                    }}/>
                    <TextInput style={styles.loginBox} 
                    placeholder= "Enter Password"
                    secureTextEntry= {true}
                    onChangeText= {(text)=>{
                        this.setState({password: text})
                    }}/>
                    <TouchableOpacity style={[styles.button, {marginBottom: 20, marginTop: 20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container:{
    flex:1, 
    backgroundColor:'aqua',
    alignItems: 'center'
 }, 
 profileContainer:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
 title :{
    fontSize:65,
    paddingBottom:50,
    color : 'red',
    alignSelf: 'center',
    fontWeight: 'bold'
 }, 
 loginBox:{
  width: 300, 
  height: 40, 
  borderBottomWidth: 1.5, 
  borderColor : '#ff8a65', 
  fontSize: 20, 
  margin:10, 
  paddingLeft:10 
}, 
button:{ 
    width:300, 
    height:50, 
    justifyContent:'center', 
    alignItems:'center', 
    borderRadius:25, 
    backgroundColor:"blue", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 15, }, 
    shadowOpacity: 0.30, 
    shadowRadius: 10.32, 
    elevation: 16,
},
 buttonText:{ 
     color:'#ffff', 
     fontWeight:'200', 
     fontSize:20 
    }, 
buttonContainer:{ 
    flex:1, 
    alignItems:'center' 
} 
})