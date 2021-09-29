import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
const Pais = ({ resultado }) => {
    const { capital, name, callingCodes, region } = resultado;
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Divider />
            <View style={{ justifyContent: 'center' }}>
                <Text>Capital: {capital}</Text>
                <Text>Región: {region}</Text>
                <Text>Código de llamada: +{callingCodes}</Text>
            </View>
        </Card>
    );
};
export default Pais;