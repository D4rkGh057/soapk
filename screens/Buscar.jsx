import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import axios from 'axios';

const StudentForm = () => {
  const [cedula, setCedula] = useState('');

  const buscarEstudiante = () => {
    axios.get(`http://localhost/quinto/api.php/?cedula=${cedula}`)
    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.error(error);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cédula:</Text>
      <TextInput style={styles.input} value={cedula} onChangeText={text => setCedula(text)} />

      <Pressable style={styles.button} title="Guardar Estudiante" onPress={buscarEstudiante}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StudentForm;