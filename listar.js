import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import './App.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api.php')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View className="background">
      <Text>Listado de Estudiantes:</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.cedula}
        renderItem={({ item }) => (
          <View>
            <div>
              <Text>Cédula: {item.cedula}</Text>
              <Text>Nombre: {item.nombre}</Text>
              <Text>Apellido: {item.apellido}</Text>
              <Text>Dirección: {item.direccion}</Text>
              <Text>Teléfono: {item.telefono}</Text>
            </div>
          </View>
        )}
      />
    </View>
  );
};

export default StudentList;
