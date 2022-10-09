import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);

        if (exists) {
            alert('Already Added!!')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
            alert('Successfully added!!')
        }
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {tshirts.map(tshirt => <Tshirt handleAddToCart={handleAddToCart} tshirt={tshirt} key={tshirt._id}></Tshirt>)}
            </div>
            <div className='cart-container'>
                <h2>Orders Summary</h2>
                <h5>Orders quantity:  {cart.length}</h5>
                {cart.map(ts => <p key={ts._id}>
                    {ts.name}, <button>X</button>

                </p>)}
            </div>
        </div>
    );
};

export default Home;