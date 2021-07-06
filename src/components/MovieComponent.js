import React, {Component} from 'react';
import {Platform, Text, View, TextInput, FlatList} from 'react-native';
import Button from 'react-native-button';

export default class MovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {movieName: '', releaseYear: ''};
  }
  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <Text
          style={{margin: 10, fontWeight: 'bold', color: 'pink', fontSize: 20}}>
          REDUX SAGA WITH TN98{' '}
        </Text>
        <Text style={{margin: 10, color: 'pink', fontSize: 20}}>
          NEW MOVIE INFORMATION
        </Text>
        <View style={{height: 100, margin: 10}}>
          <TextInput
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderColor: 'pink',
              borderWidth: 1,
            }}
            onChangeText={text => this.setState({movieName: text})}
            value={this.state.movieName}
            placeholder="Enter new movie name"
          />
          <TextInput
            style={{
              flex: 1,
              margin: 5,
              padding: 10,
              borderColor: 'pink',
              borderWidth: 1,
              width: 120,
            }}
            onChangeText={text => this.setState({releaseYear: text})}
            value={this.state.releaseYear}
            placeholder="Release year"
          />
        </View>
        <View style={{height: 70, flexDirection: 'row'}}>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{fontSize: 18, color: 'pink'}}
            onPress={() => this.props.onFetchMovie('asc')}>
            FETCH MOVIE
          </Button>
          <Button
            containerStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
            }}
            style={{fontSize: 18, color: 'pink'}}
            onPress={() => {}}>
            Add movie
          </Button>
        </View>

        <FlatList
          data={this.props.movies}
          keyExtractor={item => item.movieName}
          renderItem={({item, index}) => (
            <Text
              style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 17,
                color: 'white',
                backgroundColor:
                  index % 2 === 0 ? 'dodgerblue' : 'mediumseagreen',
              }}>
              {`${item.movieName}, releaseYearn = ${item.releaseYear}`}
            </Text>
          )}
        />
      </View>
    );
  }
}
