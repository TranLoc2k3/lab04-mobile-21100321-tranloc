import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  const [num, setNum] = useState(0);


  function increasingNumber() {
    setNum(num + 1);
  };


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increasingNumber}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold'}}>
            Click to increase
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDanger} onPress={() => setNum(0)}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Number is: {num}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 50,
    padding: 12,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#2186c4',
  },
  buttonDanger: {
    height: 50,
    padding: 12,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fc361c',
  }
});
