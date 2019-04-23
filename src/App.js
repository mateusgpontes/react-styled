import React from 'react';
import { Title, Text } from './styles/styles';

function App() {
  return (
    <div>
        <Title fontFamily={'Raleway'} fontSize={30}>
          Eae,
          <span> Beleza?</span>
        </Title>
        <Text>Opa, claro</Text>
    </div>
  );
}

export default App;
