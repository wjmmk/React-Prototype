import React from 'react'

import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Slider from '../home/slider/Slider';
import Services from './Services/Services';
import Footer from '../footer/Footer';

const Home = () => {
    return (
      <>
        <Menu />
        
        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <Slider />
            <br />
            <Services />
            <hr className="featurette-divider" />
          </div>
        </main>

        <Footer />
      </>
    );
}

export default Home
