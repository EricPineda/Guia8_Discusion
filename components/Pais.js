import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado}) => {

    const [info, setinfo] = useState([]);
    const [nombre, setnombre] = useState('');
    const [capital, setcapital] = useState();
    const [region, setregion] = useState();
    const [lengua, setlengua] = useState([]);
    const [area, setArea] = useState([]);
   // const [codigo, setCodigo] = useState([]);

    useEffect(() => {
      
        setinfo(resultado);
        lengua.length = 0;
        Object.values(info).map(e => {
            setnombre(e.nome.abreviado);
            setcapital(e.governo.capital.nome);
            setregion(e.localizacao.regiao.nome);
            setArea(e.area.total);
          //  setCodigo(e.id.ISO-3166-1-ALPHA-2);
            Object.values(e.linguas).map(l => {
                lengua.push(l.nome)
            })
        }
        );
    });

    return (
        <Card>
            <Card.Title>{nombre}</Card.Title>
            <Card.Divider />
            <View style={{ justifyContent: 'center' }}>
                <Text>Capital: {capital}</Text>
                <Text>Region: {region}</Text>
                <Text>Lengua: {lengua.toString()}</Text>
                <Text>Área: {area} m²</Text>

                <View style={{alignItems:'center', marginTop:10,}}>
                {
                    nombre =='Canadá'  ? <Image source={require('../src/img/ca.jpg')} style={{width:250,height:150,}} /> : <View></View> }
                { 
                    nombre =='El Salvador'  ? <Image source={require('../src/img/sv.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Guatemala'  ? <Image source={require('../src/img/gt.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Honduras'  ? <Image source={require('../src/img/hn.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Nicarágua'  ? <Image source={require('../src/img/ni.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Panamá'  ? <Image source={require('../src/img/pa.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Costa Rica'  ? <Image source={require('../src/img/cr.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='México'  ? <Image source={require('../src/img/mx.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Argentina'  ? <Image source={require('../src/img/ar.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Estados Unidos da América'  ? <Image source={require('../src/img/us.jpg')} style={{width:250,height:150,}} /> :<View></View> 
                }
                { 
                    nombre =='Colômbia'  ? <Image source={require('../src/img/co.jpg')} style={{width:250,height:150,}} /> :<View></View> 
                }
                { 
                    nombre =='Espanha'  ? <Image source={require('../src/img/es.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }
                { 
                    nombre =='Peru'  ? <Image source={require('../src/img/pe.jpg')} style={{width:250,height:150,}} /> : <View></View> 
                }


                </View>

            </View>
        </Card>
    );
};


export default Pais;