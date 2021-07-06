import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class UserComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    const {users} = this.props.state;
    const results = users.length > 0 ? users : [];

    console.log(results);
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 16}}>
          {results.map(value => (
            <Text key={value.id}>
              <Text>{value.username}</Text>
            </Text>
          ))}
        </Text>
      </View>
    );
  }
}
