import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class Footer extends React.Component{
    render(){
        return(
            <View style={styles.footer}>
                <Text style={styles.text_footer_up}>©2020 AtomicLabs. Todos los derechos reservados.{"\n"}</Text>
                <Text style={styles.text_footer_down}>Aviso de privacidad{"\n"}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 170
    },
    text_footer_up: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'SansSerif',
    },
    text_footer_down: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'SansSerif',
        textDecorationLine: 'underline',
    },
});