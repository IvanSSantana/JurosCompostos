import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Juros Compostos - Casas Bahia</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBox: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '25%',
    width: '100%',
    backgroundColor: '#c9c7c7',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 70,
    color: '#2156f2',
  }
});
