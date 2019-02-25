/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
 import firebase from 'firebase';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/spinner';
export default class LoginForm extends Component {

state ={email:'' , password:'' ,error:'' ,loading:false}
onButtonPress(){

  this.setState({error:'',loading:true})
firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
.then(this.loginsuccess.bind(this))
.catch(()=>{

  firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state. password)
  .then(this.loginsuccess.bind(this))
  .catch(this.loginfail.bind(this));
})

}

onRenderButton(){

  if(this.state.loading ){
    return <Spinner size='small'/>
  }

  return(     <Button onPress={this.onButtonPress.bind(this)} >
  Login
     </Button>  
     );
}
loginfail(){
  this.setState({error:'Authentication Failed.', loading:false })
}
loginsuccess(){

  this.setState({email:'', password:'' ,loading:false ,error :''})
}
  render() {
    return (
     <Card>
   <CardSection>
<Input label="Email" placeholder="user@gmail.com"  value={this.state.email}
onChangeText ={text => this.setState({email:text})}
 />
     </CardSection>
     
     <CardSection>
     <Input label="Password" placeholder="Password"  value={this.state.password}
onChangeText ={passwordtext => this.setState({password:passwordtext})} secureTextEntry
 />
   </CardSection>

   <Text style={styles.errorTextStyle}>{this.state.error}
     </Text>
     <CardSection>
     
{this.onRenderButton()}
     </CardSection>
     </Card>
   
    );
  }
}

const styles ={

  errorTextStyle:{
fontSize:20,
alignSelf:'center',
color:'red'

  }
}