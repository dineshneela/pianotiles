import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert} from 'react-native';

import db from '../config'
import firebase from 'firebase'
import {RFValue} from 'react-native-responsive-fontsize'
export default class SettingScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : ''
    }
  }

  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_id,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })
  }

  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId)
    .update({
      "first_name": this.state.firstName,
      "last_name" : this.state.lastName,
      "address"   : this.state.address,
      "contact"   : this.state.contact,
    })

    Alert.alert("Profile Updated Successfully")

  }

  componentDidMount(){
    this.getUserDetails()
  }


  render(){
    return(
      <View style={styles.container} >
     <TouchableOpacity  onPress={()=>this.props.navigation.navigate('HomeScreen')}>
            <Image source={require('../assets/backbutton.png')} style={styles.iconImage}/>
</TouchableOpacity>
        <Text style={styles.myHeader}>Settings</Text>
        <View style={styles.formContainer}>
        <Text style={styles.label}>firstName</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
                    <Text style={styles.label}>lastName</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
                    <Text style={styles.label}>contact</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
                value ={this.state.contact}
            />
                    <Text style={styles.label}>address</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />
            <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.updateUserDetails()
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#6fc0b8"
  },
  formContainer:{
    flex:1,
    width:'100%',
    justifyContent: 'center'
  },
  label:{
fontSize:RFValue(18),
color:'#717d7e',
fontWeight:"bold",
padding:RFValue(10),
marginLeft:RFValue(20)
  },
  formTextInput:{
    width:"90%",
    height:RFValue(50),
    alignSelf:'center',
    borderColor:'grey',
    borderRadius:2,
    borderWidth:1,
    padding:RFValue(19),
    marginLeft:RFValue(20),
    marginBottom:RFValue(20)
  },
  button:{
    width:"75%",
    height:RFValue(60),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:RFValue(50),
    backgroundColor:"#32867d",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:RFValue(20)
  },
  buttonText:{
    fontSize:RFValue(25),
    fontWeight:"bold",
    color:"#fff",

  },
  buttonView:{
    flex:0.22,
    alignItems:'center',
    marginTop:RFValue(100)

  },
  myHeader:{
    fontSize:40,
    justifyContent:"center",
    alignItems:"center",
    color:"orange",
    fontWeight:"bold"
  },
  iconImage:{
      position:"absolute",
      height:50,
      width:50,
      resizeMode:'contain',
     right:80,
      top:10
    }
})
