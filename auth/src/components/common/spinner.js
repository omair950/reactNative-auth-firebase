import React , {Component} from 'react';

    import {Platform, StyleSheet, Text, View,ActivityIndicator} from 'react-native';

const Spinner =({size})=>{


// const { welcome} = styles;
  return( 
    <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || "large"}/>
    </View>
  )
}


const styles = {


    spinnerStyle:{
justifyContent:'center',
alignItems:'center',
flex:1

    }}

export default Spinner;