import React , {Component} from 'react';

    import {TextInput , StyleSheet, Text, View} from 'react-native';
/* <Text style ={labelStyle}  >Email</Text> */
const Input =({label ,placeholder,onChangeText , value ,secureTextEntry})=>{
 const { containerStyle , labelStyle , Inputstyle} = styles;


  return( 
      <View style ={containerStyle}>  
      
     <Text style ={labelStyle}  >{label}</Text>
     <TextInput secureTextEntry={secureTextEntry} autoCorrect={false}  placeholder={placeholder} style ={Inputstyle}   value= {value}  onChangeText= {onChangeText } ></TextInput>
     </View>
  )
}



const styles = ({
  Inputstyle: {
    flex: 2,
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23
  },
  labelStyle: {
    fontSize:18,
     paddingLeft:5,
     flex: 1,
  },
  containerStyle: {
   
   height:40,
   flex:2,
   flexDirection:'row',

    alignItems:'center'
  },
});

export default Input ;