import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { CartItem } from './CartItem';
import './cart.css';
import { LaptopContext } from '../../contexts/LaptopContext';

export const Cart = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="product-container">
                {currentUser?.cart?.length > 0
                    ? currentUser.cart.map(laptop => <CartItem key={laptop.id} laptop={laptop} />)
                    : <p>No laptops in the cart!</p>}
            </div>
            <div className="cart-bottom">
                <div className="total">
                    <h3>Subtotal:</h3>
                    <h3>$60</h3>
                </div>
                <div className="btn-container">
                    <button className="btn">Pay</button>
                </div>
            </div>
        </div>
    );
}