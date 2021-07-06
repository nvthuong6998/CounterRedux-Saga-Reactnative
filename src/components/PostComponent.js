// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// export default class PostComponent extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     this.props.getListPostAction();
//   }

//   render() {

//   }
// }

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function PostComponent(props) {
  useEffect(() => {
    props.getListPostAction();
  }, []);
  //   const {posts, load} = props.posts;
  //   console.log(posts);
  //   if (load) {
  //     return <Text style={{alignItems: 'center'}}>Loading</Text>;
  //   }
  return (
    <View>
      <Text>
        {props.posts.map(post => (
          <View key={post.id}>
            <Text>{post.id}</Text>
            <Text>{post.title}</Text>
          </View>
        ))}
      </Text>
    </View>
  );
}
