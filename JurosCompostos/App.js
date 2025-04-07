import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useState } from 'react';

export default function App() {
  const [valueInit, setValueInit] = useState(null);
  const [percent, setPercent] = useState(null);
  const [time, setTime] = useState(null);
  const [valueFinal, setValue] = useState(null);
  const [message, setMessageJuros] = useState("Preencha os campos solicitados.");

  function calculateJuros() {
    setValue(valueInit * ((percent / 100 + 1) ** time).toFixed(2))
  }

  function messageJuros() {
    if (valueInit != null && percent != null && time != 0)
    {
      Keyboard.dismiss()
      calculateJuros();
      setMessageJuros('O montante final é igual a: ');
    }
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>Juros Compostos</Text>
      </View>

      <TextInput
       style={styles.input0}
       placeholder='Digite o montante inicial...'
       placeholderTextColor={'#b6c8e0'}
       keyboardType='numeric'
       onChangeText={setValueInit} />      

    <View style={styles.inputArea}>
      <TextInput
      style={styles.input}
      placeholder='Digite a %...'
      placeholderTextColor={'#b6c8e0'}
      keyboardType='numeric'
      onChangeText={setPercent} />

      <TextInput
      style={styles.input}
      placeholder='Digite o tempo...'
      placeholderTextColor={'#b6c8e0'}
      keyboardType='numeric'
      onChangeText={setTime} />
    </View>


    <TouchableOpacity style={styles.button} onPress={messageJuros}>
      <Ionicons name={"calculator-sharp"} size={30} color={"#b6c8e0"} />
      <Text style={styles.textButton}>Calcular</Text>
    </TouchableOpacity>

    <View style={styles.jurosArea}>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.juros}>{valueFinal}</Text>
    </View>

      <StatusBar style="light" backgroundColor={"#131a36"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90a5d6',
  },
  titleBox: {
    height: '7%',
    width: '80%',
    backgroundColor: '#6d8dd6',
    borderRadius: 14,
    marginTop: '20%',
    alignSelf: 'center',
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#3a5799',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2156f2',
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 20
  },
  input0: {
    borderWidth: 1,
    borderColor: '#2156f2',
    width: '70%',
    color: '#b6c8e0',
    borderRadius: 5,
    backgroundColor: '#7188bf',
    marginTop: 40,
    marginHorizontal: 'auto'
  },
  input: {
    borderWidth: 1,
    borderColor: '#2156f2',
    width: '32%',
    color: '#b6c8e0',
    borderRadius: 5,
    backgroundColor: '#7188bf',
    height: '40',
    flexWrap: 'nowrap'
  },
  button: {
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#2156f2',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#7188bf',
  },
  textButton: {
    fontSize: 25,
    fontWeight: 500,
    paddingLeft: 5,
    paddingRight: 10,
    color: '#b6c8e0'
  },
  jurosArea: {
    marginTop: 60,
    marginBottom: 20,
    justifySelf: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  juros: {
    fontSize: 90,
    color: '#2156f2'
  },
  text: {
    fontSize: 20,
    color: '#2c499e'
  }
});
