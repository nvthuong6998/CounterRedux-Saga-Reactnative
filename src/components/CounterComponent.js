import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import Button from 'react-native-button';

export default class CounterComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
        <Text
          style={{
            margin: 20,
            fontWeight: 'bold',
            color: 'forestgreen',
            fontSize: 20,
          }}>
          REDUX - SAGA
        </Text>
        <View style={{height: 50, margin: 10, flexDirection: 'row'}}>
          <Button
            style={{fontSize: 30, color: 'white'}}
            onPress={() => this.props.onDecrement(1)}
            containerStyle={{
              padding: 10,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
              marginLeft: 30,
            }}>
            Decrement -
          </Button>

          <Button
            style={{fontSize: 30, color: 'white'}}
            onPress={() => this.props.onIncrement(1)}
            containerStyle={{
              padding: 10,
              height: 45,
              borderRadius: 10,
              backgroundColor: 'darkviolet',
              marginLeft: 30,
            }}>
            Increment +
          </Button>
        </View>

        <Text
          style={{
            margin: 10,
            fontWeight: 'bold',
            color: 'darkblue',
            fontSize: 17,
          }}>
          Count {this.props.stateCount}
        </Text>
      </View>
    );
  }
}
