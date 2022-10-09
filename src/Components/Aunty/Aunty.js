import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h2>Aunty page</h2>
            <p><small>House: {house}</small></p>
            <button onClick={() => setHouse(house - 1)}>Decrease House</button>
            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;