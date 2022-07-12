import React,{useState} from 'react';
import './css/CartPaymentMethod.css';
import {IconPix, IconVisa, IconMastercard, IconHipercard, IconElo, IconBoleto } from '../../images';

function CartPaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState('pix');

  return (
    <div className="payment-method">
      <h2>Forma de pagamento</h2>
      <div className="payment-method-icons">
        <div className="payment-select">
          <input type="radio" defaultChecked value="pix" id="pix" name="method" onClick={()=>setPaymentMethod('pix')}/>
          <img className="payment-icon" src={IconPix} alt="pix" />
        </div>
        <div className="payment-select">
          <input type="radio" value="visa" id="visa" name="method" onClick={()=>setPaymentMethod('visa')}/>
          <img className="payment-icon" src={IconVisa} alt="visa" />
        </div>

        <div className="payment-select">
          <input type="radio" value="mastercard" id="mastercard" name="method" onClick={()=>setPaymentMethod('mastercard')}/>
          <img className="payment-icon" src={IconMastercard} alt="mastercard" />
        </div>

        <div className="payment-select">
          <input type="radio" value="hipercard" id="hipercard" name="method" onClick={()=>setPaymentMethod('hipercard')}/>
          <img className="payment-icon" src={IconHipercard} alt="hipercard" />
        </div>

        <div className="payment-select">
          <input type="radio" value="elo" id="elo" name="method" onClick={()=>setPaymentMethod('elo')}/>
          <img className="payment-icon" src={IconElo} alt="elo" />
        </div>

        <div className="payment-select">
          <input type="radio" value="boleto" id="boleto" name="method" onClick={()=>setPaymentMethod('boleto')}/>
          <img className="payment-icon" src={IconBoleto} alt="boleto" />
        </div>
      <hr />
      </div>
    </div>
  );
}

export default CartPaymentMethod;
