import React, { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import axios from 'axios';

const StudentForm = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSaveStudent = () => {
    axios.put('http://localhost/api.php', {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      direccion: direccion,
      telefono: telefono,
    },{
      
    })
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

      <Text>Nombre:</Text>
      <TextInput value={nombre} onChangeText={text => setNombre(text)} />

      <Text>Apellido:</Text>
      <TextInput value={apellido} onChangeText={text => setApellido(text)} />

      <Text>Dirección:</Text>
      <TextInput value={direccion} onChangeText={text => setDireccion(text)} />

      <Text>Teléfono:</Text>
      <TextInput value={telefono} onChangeText={text => setTelefono(text)} />

      <Pressable title="Guardar Estudiante" onPress={handleSaveStudent}>
        <Text>Guardar</Text>
      </Pressable>
    </View>
  );
};

export default StudentForm;
