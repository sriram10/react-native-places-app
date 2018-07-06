import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

class PlacesInput extends Component {
  
  state = {
    text: ''
  }

  changeText = (v) => {
    this.setState({
      text: v
    })
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={this.changeText}
          style={styles.placeInput}
          placeholder='Type something'
           />
        <Button style={styles.placeBtn} title='SAVE' onPress={() => this.props.change(this.state.text) } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: "70%"
  },
  placeBtn: {
    width: "30%"
  }
})

export default PlacesInput