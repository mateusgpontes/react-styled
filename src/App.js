import React from 'react';
import { Title, Text } from './styles/styles';

function App() {
  return (
    <div>
        <Title color={'#2225b7'} fontFamily={'Raleway'} fontSize={30}>
          Eae,
          <span fontSize={20}> Beleza?</span>
        </Title>
        <Text>Opa, claro</Text>
    </div>
  );
}

export default App;
