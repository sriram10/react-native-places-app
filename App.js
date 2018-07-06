import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlacesInput from './src/components/PlacesInput/PlacesInput';
import PlacesList from './src/components/PlacesList/PlacesList';

export default class App extends React.Component {

  state = {
    places: []
  }

  addPlaces = (val) => {
    this.setState((prevState) => {
      return {
        places: prevState.places.concat({title: val})
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput change={this.addPlaces} />
        <PlacesList data={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
