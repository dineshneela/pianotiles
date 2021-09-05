import React,{Component} from 'react';
import {Text,View,TouchableOpacity,ImageBackground,Image,StyleSheet} from 'react-native';
import {Audio} from 'expo-av'
export default class PlayScreen extends Component{   
  async playSound(url) { 
    try { 
      await Audio.setIsEnabledAsync(true);
       var playbackObject = await Audio.Sound.createAsync( { uri: url },
        { shouldPlay: true } ); // Your sound is playing!
         } catch (error) 
         { console.log(); }       
         }                                 
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground  source={require('../assets/pianoback.jpg')} style={styles.backgroundImage} >
      <View style={styles.titleBar}>
      <Text style={styles.titleText}> PianoTilesApp </Text>
      </View>
      <TouchableOpacity style={{marginTop:70,marginLeft:140,width:40,height:120,backgroundColor:'gold', borderWidth:2,borderColor:'black'}} onPress={() => { var url = require('../assets/mixkit-arcade-retro-game-over-213.wav');
       this.playSound(url); }} >
     
      </TouchableOpacity>
     
      <TouchableOpacity style={{marginTop:-120,marginLeft:100,width:40,height:200,backgroundColor:'red', borderWidth:2,borderColor:'black'}} onPress={() => { var url = require('../assets/mixkit-fast-small-sweep-transition-166.wav');
       this.playSound(url); }}>
      
      </TouchableOpacity>
    <TouchableOpacity  onPress={()=>this.props.navigation.navigate('HomeScreen')}>
            <Image source={require('../assets/backbutton.png')} style={styles.iconImage}/>
</TouchableOpacity>
     </ImageBackground>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',
alignItems:'center'
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
    backgroundImage:{
      flex:1,
      resizeMode:'cover',
      width:'100%'
    },
     iconImage:{
      position:"absolute",
      height:100,
      width:100,
      resizeMode:'contain',
     marginLeft:100,
      top:-340
    }
})