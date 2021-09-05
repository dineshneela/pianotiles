import React, {Component} from 'react';
import {Text,View,ImageBackground,StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground  source={require('../assets/pianotiles.jpg')} style={styles.backgroundImage} >
      <View style={styles.titleBar}>
      <Text style={styles.titleText}> PianoTilesApp </Text>
      </View>
      <TouchableOpacity style={styles.rootCard} onPress={()=>this.props.navigation.navigate('PlayScreen')}>
<Text style={styles.rootText}> PLAY </Text>
<Image source={require('../assets/playbutton.png')} style={styles.iconImage}/>
</TouchableOpacity>
 <TouchableOpacity style={styles.rootCard} onPress={()=>this.props.navigation.navigate('SettingScreen')}>
<Text style={styles.rootText}> SETTINGS </Text>
<Image source={require('../assets/settingbutton.jpg')} style={styles.iconImage}/>
</TouchableOpacity>
 <TouchableOpacity style={styles.rootCard} onPress={()=>this.props.navigation.navigate('WelcomeScreen')}>
<Text style={styles.rootText}> LOG OUT </Text>
<Image source={require('../assets/logoutbutton.jpg')} style={styles.iconImage}/>
</TouchableOpacity>
     </ImageBackground>

      </View>
          )
  }
}
const styles=StyleSheet.create(
  {
    container:{
      flex:1
    },
    backgroundImage:{
      flex:1,
      resizeMode:'cover',
    },
    rootCard:{
      flex:0.25,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      backgroundColor:'white',
      borderRadius:30
    },
    rootText:{
      fontSize:35,
      fontWeight:"bold",
      marginTop:30,
      paddingLeft:30,
      color:"black"
    },
    titleBar:{
      flex:0.15,
      justifyContent:'center',
      alignItems:'center'
    },
    titleText:{
      fontSize:40,
      color:'white',
      fontWeight:'bold'
    },
    iconImage:{
      position:"absolute",
      height:50,
      width:50,
      resizeMode:'contain',
      right:20,
      top:20
    }
  }
)