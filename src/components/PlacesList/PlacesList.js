import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import PlaceItem from '../PlaceItem/PlaceItem';

class PlacesList extends Component {

  getItems() {
    return this.props.data.map((item, i) => {
      return (<PlaceItem key={'item'+i} title={item.title} />)
    })
  }

  render() {
    return (
      <ScrollView style={styles.listContainer}>
        {this.getItems()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 25
  }
})

export default PlacesList