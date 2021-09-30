import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Formulario from './components/Formulario';
import Pais from './components/Pais';

export default function App() {
  const [busqueda, guardarbusqueda] = useState({
    pais: ''
  });

  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});

  useEffect(() => {

    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `http://api.countrylayer.com/v2/alpha/${pais}?access_key=572b5176e27d29232a76dadd7a242736`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();

          guardarresultado(resultado);
          guardarconsultar(false);

        } catch (error) {
          mostrarAlerta();
        }

      }
    };

    consultarPais();





  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad  o país.'), [{ Text: 'Ok' }];
  };


  return (

    <>



      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario
            busqueda={busqueda}
            guardarbusqueda={guardarbusqueda}
            guardarconsultar={guardarconsultar}

          />
          <Pais resultado={resultado} />
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    backgroundColor: '#b4f4d5',
  }
});
