import React from 'react';
import './Cart.css'

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
            <h2 className={cart.length === 2 ? 'orange' : 'purple'}>Orders Summary</h2>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'orange'}`}>Orders quantity:  {cart.length}</h5>
            {cart.map(ts => <p key={ts._id}>
                {ts.name} <button onClick={() => handleRemoveItem(ts)}>X</button></p>)}
            {message}
            <p>Ternary operator</p>
            {cart.length === 3 ? <p>Tin jonke Gift Korba?</p> : <p>Kino Kino R o Kinooo!!</p>}
            <p>&& operator</p>
            {cart.length === 2 && <h6>tmi 2ta item kinna felcho!!</h6>}
            <h5>|| operator</h5>
            {cart.length === 4 || <p>charta items na!!</p>}
        </div>
    );
};

export default Cart;

/* 
conditinal rendering

1. use element in a variable and then use if-else to set value  or
2. ternary operation condition
3. && operator (if condition is true i want to display something)
4. || or operator (if condition is false i want display something)

*/