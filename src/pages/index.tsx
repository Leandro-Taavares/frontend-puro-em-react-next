import React from 'react';
import Header from '../components/Header';
import Video from '../components/Video'
import Avaliacoes from '../components/Avaliacoes'
import Mural from '../components/Mural'
import Maps from '../components/Maps'
import Footer from '../components/Footer'
 

const HomePage = () => {
  return (
    <div>
      <Header />
      <Video />
      <Avaliacoes />
      <Mural />
      <Maps />
      <Footer />
    </div>
  );
};

export default HomePage;
