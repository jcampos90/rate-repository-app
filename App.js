import React from 'react';
import { StatusBar } from 'react-native';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

export default function App() {
  return (
    <>
    <StatusBar translucent barStyle={'light-content'} />
    <NativeRouter>

    <Main />
    </NativeRouter>
    </>
  );
}
