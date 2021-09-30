//import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert, Picker }
    from 'react-native';
//import { Picker } from '@react-native-picker/picker';

const Formulario = ({ busqueda, guardarbusqueda, guardarconsultar }) => {
    const { pais } = busqueda;
    const [animacionboton] = useState(new Animated.Value(1));

    const consultarPais = () => {
        if (pais.trim() === '') {
            mostrarAlerta();
            return;
        }

        guardarconsultar(true);

    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Debe seleccionar un país', [{ Text: 'Entendido' }])
    }

    const animacionEntrada = () => {
        Animated.spring(animacionboton, { toValue: .9, useNativeDriver: true }).start();
    }
    const animacionSalida = () => {
        Animated.spring(animacionboton, { toValue: 1, useNativeDriver: true }).start();
    }

    const estiloAnimacion = {
        transform: [{
            scale: animacionboton,

        }]
    }


    const [lista, guardarLista] = useState({});
    const [bandera, actualizarBandera] = useState(true);
    useEffect(() => {
        const obtenerPaises = async () => {

            if (bandera) {
                const url = `http://api.countrylayer.com/v2/all?access_key=3b8b263df6e11944ab1f391600ace209`;

                try {
                    const respuestaP = await fetch(url);

                    const resultadoP = await respuestaP.json();

                    guardarLista(resultadoP);
                    actualizarBandera(false);

                    if (lista.length == 0) {
                        // Alert.alert('Info','No se encontró información.',[{Text:'Entendido'}])
                    } else {
                        Alert.alert('Info', 'Se han cargado los elementos correctamente.', [{ Text: 'Entendido' }])

                    }
                } catch (error) {

                    Alert.alert('Error', 'No se puede cargar los elementos.', [{ Text: 'Entendido' }])
                }

            }

        };
        obtenerPaises();
    }, []);

    return (

        <>
            <View>
                <View>
                    <Text style={styles.input}>Pais</Text>
                </View>
                <View>
                    <Picker
                        selectedValue={pais}
                        onValueChange={pais => guardarbusqueda({ ...busqueda, pais })}
                        //    onPress={}
                        style={styles.itempais}
                    >
                        <Picker.Item label="--seleccione un pais--" value="" />


                        {



                            bandera ? <Picker.Item label="El Salvador" value="sv" /> : (
                                lista.map((u, i) => {
                                    return (

                                        <Picker.Item label={u.name} value={u.alpha2Code} key={i} />

                                    );
                                })

                            )


                        }

                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                    onPress={() => consultarPais()}
                >
                    <Animated.View style={[styles.btnBuscar, estiloAnimacion]}   >

                        <Text style={styles.textoBuscar}>Buscar País</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    );


}
const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000'
    },
    itempais: {
        height: 60,
        backgroundColor: '#fff',
    },
    btnBuscar: {
        marginTop: 50,
        height: 50,
        backgroundColor: '#000',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    textoBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: "center",
        fontSize: 18,
    }
})

export default Formulario;