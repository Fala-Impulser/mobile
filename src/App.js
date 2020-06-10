import React from 'react';
import { View, Text, Image } from 'react-native';
import Svg from 'react-native-svg';


import styles from './styles';
import logo from './static/logo.png';

function App() {
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textTitle}>Hello Impulser</Text>
      </View>
    </>
  );
};

export default App;
