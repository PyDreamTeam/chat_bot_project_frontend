import type { AppProps } from 'next/app';
import '../styles/globals.css';
import React from "react";
import {Provider} from "react-redux";
import {store} from "../app/store";
import { worker } from '../../mocks/browser';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  console.log('test')
  require('../../mocks')
}

export default function App({ Component, pageProps }: AppProps) {  
  return <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
} 