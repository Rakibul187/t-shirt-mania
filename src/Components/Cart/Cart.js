import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Buy Atleast One Item!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amer jonno ekta naw!!</h3>
            <p>Tomer Jonno Ekta nAw!!</p>
            <small>Amer Jonno Arekta Naaaaw!!!!!</small>
        </div>
    }
    else {
        message = <p>Thanks For Shopping!!</p>
    }
    return (
        <div>
            <h2>Orders Summary</h2>
            <h5>Orders quantity:  {cart.length}</h5>
            {cart.map(ts => <p key={ts._id}>
                {ts.name} <button onClick={() => handleRemoveItem(ts)}>X</button></p>)}
            {message}
        </div>
    );
};

export default Cart;