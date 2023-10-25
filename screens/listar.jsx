import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";

const StudentList = () => {
  const navigation = useNavigation();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/quinto/api.php")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [expandedItem, setExpandedItem] = useState(null);

  const handlePress = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedItem === item;

    return (
      <Pressable onPress={() => handlePress(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}>
            {item.nombre} {item.apellido}
          </Text>
          {isExpanded && (
            <>
              <Text style={styles.itemDetails}>Cédula: {item.cedula}</Text>
              <Text style={styles.itemDetails}>
                Dirección: {item.direccion}
              </Text>
              <Text style={styles.itemDetails}>Teléfono: {item.telefono}</Text>
              <View style={styles.buttonSeparator}>
                <Button
                  style={styles.deleteButton}
                  title="Eliminar"
                  onPress={() =>
                    navigation.navigate("Eliminar", { cedula: item.cedula })
                  }
                />
                <Button
                  title="Actualizar"
                  onPress={() =>
                    navigation.navigate("Actualizar", { cedula: item.cedula })
                  }
                />
              </View>
            </>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Estudiantes</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.cedula}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: "red",
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "column",
    padding: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDetails: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
  }, buttonSeparator: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
  }
});

export default StudentList;
