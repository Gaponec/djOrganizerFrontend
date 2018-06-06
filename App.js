import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarsScreen from './src/MyCalendar';
import FadeExample from './src/FadeExample';

export default class App extends React.Component {
  render() {
    return (
        <CalendarsScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
