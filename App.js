import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import axios from 'axios';

const StudentForm = () => {
  const [cedula, setCedula] = useState('');

  const handleSaveStudent = () => {
    axios.delete(`http://localhost/api.php/?var=${cedula}`)
    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.error(error);
    });
  };
  return (
    <View>
      <Text>Cédula:</Text>
      <TextInput value={cedula} onChangeText={text => setCedula(text)} />

      <Pressable title="Guardar Estudiante" onPress={handleSaveStudent}>
        <Text>Guardar</Text>
      </Pressable>
    </View>
  );
};

export default StudentForm;
