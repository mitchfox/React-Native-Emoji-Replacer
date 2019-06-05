import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholderTextColor="#2B2B52"
        placeholder={"Enter Value..."}
        onChangeText={(text) => {this.setState({text})}}
        />
        <Text style={{ 
          marginTop: 50, fontSize: 25
         }}>
         {this.state.text
         .split(' ')
         .map(text => text && "😵")
         .join(' ')}
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    marginTop: 100,
    borderWidth: 1,
    borderColor: "#2B2B52",
    paddingHorizontal: 10,
    borderRadius: 5
  }
});
