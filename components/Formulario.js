//import * as React from 'react';
import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert }
    from 'react-native';
import { Picker } from '@react-native-picker/picker';

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


    /* const [lista, guardarLista] = useState({});
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
     }, []);*/

    return (

        <>
            <View>
                <View>
                   
                   
                </View>
                <View >
                    
                    <View style={styles.cont}>




                        {
                            /*
                            
                            
                                                        bandera ? <Picker.Item label="El Salvador" value="sv" /> : (
                                                            lista.map((u, i) => {
                                                                return (
                            
                                                                    <Picker.Item label={u.name} value={u.alpha2Code} key={i} />
                            
                                                                );
                                                            })
                            
                                                        )
                            
                            */
                        }



                        <View>
                            <View>
                                <Text style={styles.input}>Búsqueda de Pais</Text>
                            </View>
                            <View style={styles.itempais}>

                                <Picker 
                                selectedValue={pais}
                                onValueChange={pais=>guardarbusqueda({...busqueda,pais})}
                                style={styles.itempais}
                                >
                                    
                                    <Picker.Item label="-- Seleccione un pais --" value="" />
                                    <Picker.Item label="Canada" value="ca" />
                                    <Picker.Item label="El Salvador" value="sv" />
                                    <Picker.Item label="Guatemala" value="gt" />
                                    <Picker.Item label="Honduras" value="hn" />
                                    <Picker.Item label="Nicaragua" value="ni" />
                                    <Picker.Item label="Panamá" value="pa" />
                                    <Picker.Item label="Costa Rica" value="cr" />
                                    <Picker.Item label="Mexico" value="mx" />
                                    <Picker.Item label="Argentina" value="ar" />
                                    <Picker.Item label="Estados Unidos" value="us" />
                                    <Picker.Item label="Colombia" value="co" />
                                    <Picker.Item label="España" value="es" />
                                    <Picker.Item label="Peru" value="pe" />
                                </Picker>
                            </View>
                           
                        </View>
                    </View>
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
   /* input: {
        padding: 10,
        fontSize: 20,

        textAlign: 'center',
        color: '#d1158c',
        marginTop: 20
    },
    itempais: {
        height: 80,
        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: '#000',
        color: '#2273f5'

    },
    btnBuscar: {
        margin: 20,
        marginTop: 50,
        height: 40,
        backgroundColor: '#6640e3',
        fontSize: 20,
        marginBottom: 50,
        textAlign: 'center'
    },
    textoBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: "center",
        fontSize: 18,
    }, */
   // linea: {
        /* borderTopWidth: 2,
         borderTopColor: 'gray',
         marginLeft:5,
         marginRight: 5*/
  //  },
  /*  sel: {
        fontSize: 16,
        marginTop: 10
    },
    cont: {
        borderWidth: 1,
        margin: 5,
        borderColor: '#c3c1c9'
    }*/

    input:{padding:10,
        height:50,
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
        color :'#fff'
        },
        itempais:{
        height:60,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#000',
        color:'#000'
        },
        btnBuscar:{
        marginTop:50,
        height:50,
        backgroundColor:'#000',
        fontSize:20,
        marginBottom:20,
        textAlign:'center'
        },
        textoBuscar:{
        color:'#fff',
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:"center",
        
        fontSize:18
        }

})

export default Formulario;