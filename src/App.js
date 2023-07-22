

import React from 'react';
import Head from './components/Head/Head';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Routers from './routers/Routers';


const App = () => {
  return (
  <>
   <Head/>
  <Header />
  
  <Routers/>
  <Footer />

 

  
  </>
  );
  
};

export default App;