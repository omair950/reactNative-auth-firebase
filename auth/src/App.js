/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
 import firebase from 'firebase';
 import Header from './components/common/header';
  import LoginForm from './components/LoginForm';
import Button from './components/common/Button';
import Spinner from './components/common/spinner';
export default class App extends Component {
state={loggedIn:null }
componentWillMount(){

    firebase.initializeApp({
    apiKey: "AIzaSyBQMbwnNkds4WodanxifYS6M_DueGa7d78",
    authDomain: "authentication-dfb36.firebaseapp.com",
    databaseURL: "https://authentication-dfb36.firebaseio.com",
    projectId: "authentication-dfb36",
    storageBucket: "authentication-dfb36.appspot.com",
    messagingSenderId: "292345592126"
  });


  firebase.auth().onAuthStateChanged((user)=>
  {
if(user){


this.setState({loggedIn:true})

}else{
this.setState({loggedIn:false})


}
  })
}

rendercontent(){

console.log("loggedin",this.state.loggedIn)
  switch (this.state.loggedIn) {
  
    case true:
  
  
 return (<View  style={styles.button}> 
 <Button onPress={() => firebase.auth().signOut()
  
  }>
    LogOut
    </Button> 
    </View>) ;
  
    case false:
    return   <LoginForm/>;

    default:
    return <Spinner size="large"/>
  }
}



  render() {
  
    return (
      
      <View >
  <Header headerText='Authentication'/>
   {this.rendercontent()}
   
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   button: {
       flex: 1,
alignSelf:'stretch',
 borderradius:5,
 borderWidth:1,
 borderColor:'#007aff',

 marginLeft:5,
 marginRIght:5
  }
};
