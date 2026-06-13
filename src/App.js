import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/navigations/Main';

const App = () => {
  //Visualização
  return (
      <NavigationContainer>
        <Main />
      </NavigationContainer>
  );
};

export default App;
