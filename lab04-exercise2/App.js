import react, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  const [nums, setNum] = useState([5, 6, 7]);

  function nextNumber() {
    setNum((nums) => nums.map(n => n + 1))
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={nextNumber}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
            Print next numbers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDanger} onPress={() => setNum([5, 6, 7])}>
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {nums.map(n => {
          return <Text key={n}>{n}</Text>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    height: 50,
    padding: 24,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#2186c4',
  },
  buttonDanger: {
    height: 50,
    padding: 24,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fc361c',
  },
});
