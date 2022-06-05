import React from 'react';
import '../../css/CartPaymentMethod.css';
import iconPix from '../../images/icon-pix.png';
import iconVisa from '../../images/icon-visa.png';
import iconMastercard from '../../images/icon-mastercard.png';
import iconHipercard from '../../images/icon-hipercard.png';
import iconElo from '../../images/icon-elo.png';
import iconBoleto from '../../images/icon-boleto.png';

function CheckoutPaymentMethod(props) {

  const { method } = props;

  return (
    <div className="payment-method">
      <h2>Forma de pagamento</h2>
      <div className="payment-method-icons">
        <div className="payment-select">
          <input type="radio" defaultChecked value="pix" id="pix" name="method" onClick={()=>method('pix')}/>
          <img className="payment-icon" src={iconPix} alt="pix" />
        </div>
        <div className="payment-select">
          <input type="radio" value="visa" id="visa" name="method" onClick={()=>method('visa')}/>
          <img className="payment-icon" src={iconVisa} alt="visa" />
        </div>

        <div className="payment-select">
          <input type="radio" value="mastercard" id="mastercard" name="method" onClick={()=>method('mastercard')}/>
          <img className="payment-icon" src={iconMastercard} alt="mastercard" />
        </div>

        <div className="payment-select">
          <input type="radio" value="hipercard" id="hipercard" name="method" onClick={()=>method('hipercard')}/>
          <img className="payment-icon" src={iconHipercard} alt="hipercard" />
        </div>

        <div className="payment-select">
          <input type="radio" value="elo" id="elo" name="method" onClick={()=>method('elo')}/>
          <img className="payment-icon" src={iconElo} alt="elo" />
        </div>

        <div className="payment-select">
          <input type="radio" value="boleto" id="boleto" name="method" onClick={()=>method('boleto')}/>
          <img className="payment-icon" src={iconBoleto} alt="boleto" />
        </div>
      <hr />
      </div>
    </div>
  );
}

export default CheckoutPaymentMethod;
