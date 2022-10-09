import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
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

    const handleRemoveItem = (ts) => {
        const remaining = cart.filter(tshirt => tshirt._id !== ts._id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {tshirts.map(tshirt => <Tshirt handleAddToCart={handleAddToCart} tshirt={tshirt} key={tshirt._id}></Tshirt>)}
            </div>
            <div className='cart-container'>
                <Cart handleRemoveItem={handleRemoveItem} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;

