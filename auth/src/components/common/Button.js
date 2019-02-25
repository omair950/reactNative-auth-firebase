import React , {Component} from 'react';

    import {Platform, StyleSheet, Text,TouchableOpacity} from 'react-native';

const Button =({onPress, children})=>{
console.log("inside button");


// const { welcome} = styles;
  return( 
      <TouchableOpacity onPress={onPress} style ={styles.buttonStyle} >
     <Text style ={styles.textStyle} >{children} </Text>
     </TouchableOpacity>
  )
}



const styles = {


    textStyle:{
alignSelf:'center',
color:'#007aff',
fontSize:16,
fontWeight:'600',
paddingTop:10,
paddingBottom:10
    },
  buttonStyle: {
    flex: 1,
alignSelf:'stretch',
 borderradius:5,
 borderWidth:1,
 borderColor:'#007aff',

 marginLeft:5,
 marginRIght:5
  }}
export default Button;