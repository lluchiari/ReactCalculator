import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import InputButton from './InputButton';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

class ReactCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0
    };
  }

  render() {
    return(
      <View style={styles.rootContainer}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{this.state.inputValue}</Text>
        </View>
        <View>
          <InputButton> Clr </InputButton>
        </View>
        <View style={styles.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    );

  }

  /**
  * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
  */
  _renderInputButtons() {
    let views = [];
    let input;

    for (var r = 0; r < inputButtons.length; r++){
      const row = inputButtons[r];

      const inputRow = [];
      for (var i = 0; i < row.length; i++) {
        input = row[i];

        inputRow.push(
          <InputButton
          value={input}
          onPress={this._onInputButtonPressed.bind(this, input)}
          key={r + "-" + i} />
        );
      }
      views.push(<View style={styles.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
  }

  /**
  * Threats the action when the button is pressed!
  */
  _onInputButtonPressed(input) {
    alert(input);
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },
  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#3E606F'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default ReactCalculator;
