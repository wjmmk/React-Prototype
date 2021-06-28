import React from 'react'
import Menu from '../menu/Menu';
import Formulario from './form/Form'; 
import Map from './map/Map'; 
import Footer from '../footer/Footer';

const Contact = () => {
    return (
      <>
        <Menu />

        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <h1 className="mb-5">Contacto</h1>

            <div className="row">
              <div className="col-md-6">
                <Formulario />
              </div>

              <div className="col-md-6">
                <Map />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
}

export default Contact
