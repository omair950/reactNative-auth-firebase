    import React , {Component} from 'react';

    import {Platform, StyleSheet, Text, View} from 'react-native';

    const CardSection= (Props) =>{
      // console.log("###detail",this);
// const { welcome} = styles;
  return( <View style={styles.container}>
{Props.children}
       </View>
  )
}
const styles = {
  container: {

padding:5,
  borderColor:'#ddd',
  borderBottomWidth:1,
backgroundColor:'#fff',
justifyContent:'flex-start',
flexDirection:'row',
position:'relative'

  

   
  }
}
export default CardSection;