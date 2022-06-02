import React from 'react';
import { Header, Footer } from '../components';
import { Breadcrumb } from 'react-bootstrap';
import '../css/Checkout.css';

function Checkout() {
  return (
    <>
      <Header />

      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Pagamento do Pedido</Breadcrumb.Item>
      </Breadcrumb>

        {/* <div className="checkout">
          <CheckoutFormShipping />
        </div> */}
        
        <Footer />
    </>
  );
}

export default Checkout;
