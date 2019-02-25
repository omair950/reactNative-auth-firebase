    import React , {Component} from 'react';

    import {Platform, StyleSheet, Text, View} from 'react-native';

    const Card = (Props) =>{
      // console.log("###detail",this);
// const { welcome} = styles;
  return( <View style={styles.container}>
{Props.children}
       </View>
  )
}
const styles = {
  container: {
  borderWidth:1,
  borderRadius:2,
  borderColor:'#ddd',
  borderBottomWidth:0,
  shadowColor:'#000',
  shadowOffset: {width:0, height:2},
  shadowOpacity:0.1,
  shadowRadius:2, 
  elevation:1,
  marginLeft:5,
  marginRight:5,
  marginTop:10
   
  }
}
export default Card;