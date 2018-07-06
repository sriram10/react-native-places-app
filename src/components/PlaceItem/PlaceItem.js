import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const PlaceItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImg: {
    marginRight: 8,
    width: 100,
    height: 100
  }
})


export default PlaceItem