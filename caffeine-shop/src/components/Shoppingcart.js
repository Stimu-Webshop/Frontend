import React from 'react';
import '../styles/Shoppingcart.scss';
import CartContent from './CartContent';
import { Link } from 'react-router-dom';

export default function ShoppingCart({ showCart }) {
  return (
    <>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">
          Ostoskori
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className={`offcanvas-body ${showCart ? 'show' : ''}`}>
        <CartContent />
        <Link to="/cartpage"><button data-bs-dismiss="offcanvas">Kassalle</button></Link>
        <button className='emptyCart'>Tyhjennä ostoskori</button>
      </div>
    </>
  );
}
