import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import OrganismNames from './OrganismNames';
import OrganismPhone from './OrganismPhone';
import ImgAstronaut from '../atoms/ImgAstronaut';
import ImgAstronautTwo from '../atoms/ImgAstronautTwo';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const baseUrl = 'https://morning-hamlet-18619.herokuapp.com';

const Inputs = () => {
  var navigation = useNavigation();
  const [firstNames, setFirstNames] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(false);

  const onChangeFirstNames = (firstNames) => {
    setFirstNames(firstNames);
  };
  const onChangeLastNames = (lastNames) => {
    setLastNames(lastNames);
  };
  const onChangePhone = (phone) => {
    setPhone(phone);
  };

  const onSubmitNames = () => {
    if (!firstNames.trim() || !lastNames.trim()) {
      alert("Nombres o apellidos inválidos.");
      return;
    }
    if (firstNames.length <= 4){
      alert('El nombre deberá tener mínimo 5 caracteres.');
      return;
    }
    setStep(true);
  };

  const onSubmitPhone = () => {
    if (!phone.trim() || phone.length <= 9 || phone.length > 10) {
      alert('Teléfono inválido. El número debe tener 10 caracteres.');
      return;
    }
    setLoading(true);
    axios.post(`${baseUrl}/api/v1/form`, { firstNames, lastNames, phone })
    .then( async res => {
      await alert(` Tú haz creado: ${JSON.stringify(res.data)}`);
      console.log(res.data);
      setFirstNames('');
      setLastNames('');
      setPhone('');
      setLoading(false);
      navigation.navigate('End');
    })
    .catch(e => {
      console.log(e);
      alert('Ha ocurrido un error al registrar.');
      setLoading(false);
      //navigation.navigate('End');
    })
  };

  return (
    <View>
      { !step ? 
      <View>
        <OrganismNames/>
        <Input
          label='Nombre (s)'
          value={firstNames}
          onChangeText={onChangeFirstNames}
          editable={!loading}
          labelStyle={{
          color: '#fff',
          fontFamily: 'OpenSans',
          fontSize: 18,
          letterSpacing: 1,
          margin: 5,
          }}
          inputContainerStyle={{ backgroundColor: '#fff', margin: 5 }}
          rightIcon={ <Icon name='lock' size={24} color='#9B9B9B' style={{marginRight:10}} /> }
        />
        <Input
          label='Apellidos'
          value={lastNames}
          onChangeText={onChangeLastNames}
          editable={!loading}
          labelStyle={{
          color: '#fff',
          fontFamily: 'OpenSans',
          fontSize: 18,
          letterSpacing: 1,
          margin: 5,
          }}
          inputContainerStyle={{ backgroundColor: '#fff', margin: 5 }}
          rightIcon={ <Icon name='lock' size={24} color='#9B9B9B' style={{marginRight:10}}/> }
        />
        <Button
          title='Enviar'
          onPress={ () => { onSubmitNames(); } }
          buttonStyle={{
            backgroundColor: '#E84F0C',
            borderRadius: 30,
            height: 45,
            width: 220,
            marginTop: 25,
            marginBottom: 10,
          }}
          titleStyle={{ fontFamily: 'OpenSans', fontSize: 18, color: '#fff', fontWeight: '700' }}
          containerStyle={{ alignItems: 'center' }}
        />
        <ImgAstronaut/>
      </View>

      :

      <View>
        <OrganismPhone/>
        <Input
          label='Número de Celular'
          value={phone}
          onChangeText={onChangePhone}
          editable={!loading}
          labelStyle={{
            color: '#fff',
            fontFamily: 'OpenSans',
            fontSize: 18,
            letterSpacing: 1,
            margin: 5,
          }}
          inputContainerStyle={{ backgroundColor: '#fff', margin: 5 }}
          rightIcon={ <Icon name='lock' size={24} color='#9B9B9B' style={{marginRight:10}} /> }
        />
        <Button
        title='Continuar'
        onPress={ () => { onSubmitPhone(); } }
        disabled={loading}
        buttonStyle={{
          backgroundColor: '#E84F0C',
          borderRadius: 30,
          height: 45,
          width: 220,
          marginTop: 25,
        }}
        titleStyle={{ fontFamily: 'OpenSans', fontSize: 18, color: '#fff', fontWeight: '700' }}
        containerStyle={{ alignItems: 'center' }}
        />
        <ImgAstronautTwo/>
      </View>

      }

    </View>
  );
};

export default Inputs;