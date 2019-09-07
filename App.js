/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-import { placeholder } from '@babel/types';
spaces */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,Text,View, TextInput, StatusBar} from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  };

  placeNameHandler = val => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return(
      <View style={style.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View>
          <StatusBar />
          <Text style={{fontSize: 20, paddingTop: 10, marginBottom: 5, fontFamily: 'times',}}>Input Location</Text>
          <TextInput 
            style={{width: 300, borderBottomWidth: 1, borderBottomColor: 'blue',}}
            placeholder="An Awesome Place"
            value={this.state.placeName} onChangeText={this.placeNameHandler}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});