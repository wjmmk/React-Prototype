import React from 'react'
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; 
import Details from './details/Details'; 
import Footer from '../footer/Footer';

const US = () => {
    return (
      <>
        <Menu />

        <main role="main" className="flex-shrink-0 mt-5">
          <Jumbotron /> 
          <Details /> 
        </main>

        <Footer />
      </>
    );
}

export default US
