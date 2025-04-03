import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useState } from 'react';

export default function App() {
  const [valueInit, setValueInit] = useState(null);
  const [percent, setPercent] = useState(null);
  const [time, setTime] = useState(null);
  const [value, setValue] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [messageImc, setMessageImc] = useState("Preencha montante, porcentagem e tempo.");

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Juros Compostos - Casas Bahia</Text>
      </View>

    <View style={styles.inputArea}>
      <TextInput
       style={styles.input}
       placeholder='Digite o montante inicial...'
       keyboardType='numeric'
       onChange={setValueInit} />

      <TextInput
      style={styles.input}
      placeholder='Digite a porcentagem...'
      keyboardType='numeric'
      onChange={setPercent} />

      <TextInput
      style={styles.input}
      placeholder='Digite o tempo...'
      keyboardType='numeric'
      onChange={setTime} />
    </View>


    <TouchableOpacity style={styles.button}>
      <Ionicons name={"calculator-sharp"} size={30} color={"#000000"} />
      <Text style={styles.textButton}>{textButton}</Text>
    </TouchableOpacity>

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
    height: '20%',
    width: '100%',
    backgroundColor: '#c9c7c7',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 70,
    color: '#2156f2'
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#2156f2',
    width: '70%',
    borderRadius: 5
  },
  button: {
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 1,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5
  },
  textButton: {
    fontSize: 25,
    fontWeight: 500,
    paddingLeft: 5,
    paddingRight: 10
  }
});
