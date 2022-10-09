import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Cousin = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMoney(money * 100)}>AddMoney</button>
        </div>
    );
};

export default Cousin;