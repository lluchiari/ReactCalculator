import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableHighlight
            style={styles.inputButton}
            underlayColor="#193441"
            onPress={this.props.onPress}>
        <Text style={styles.inputButtonText}> {this.props.value} </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.2,
      borderColor: '#91AA9D',
  },
  inputButtonText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white'
  },
});
