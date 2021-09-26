import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log('cart',props)
    const {speaker} = props;

    let total = 0;

    for(const spkr of speaker){
        total = total+spkr.allowance;
    }

    return (
        <div>
            <h2>This is cart</h2>
            <h4>Total Speaker Added: {speaker.length}</h4>
            <h4>Total Allowance: {total}</h4>
            <ul className="spk-ul">
            {
                speaker.map(spk => <li className="spk-li" key={spk.id}><img src={spk.img} alt=""/> {spk.fname} <span className="spk-lname">{spk.lname}</span></li>)
            }
            </ul>
        </div>
    );
};

export default Cart;