import React from 'react';
import { useCart } from '../components/CartContext';
import { asset } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const AddtoCart = () => {
  const { cartItems, removeItem, updateItem } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity === 0) {
      removeItem(id);
    } else {
      updateItem(id, quantity);
    }
  };

  const handleContinueShopping = () => {
    navigate('/products'); 
  };
  const handleCheckout = () => {
    navigate('/checkout');
  }

  return (
    <div className='parent div'>
      {/* header section */}
      <div className="text-center text-black mb-12 text-4xl font-bold mb-2">
        <div className="inset-0 bg-cover pt-[100px] pb-[50px]" style={{backgroundImage: `url(${asset.bg})`}}>
          <h1 className="text-black">Your Cart</h1>
          <p className="text-black">Products/ Cart</p>
        </div>
      </div>

      <div className="cart-page">
        <img src={asset.cartimage} alt="cart icon" className="w-16 h-16 mt-8 mx-auto" />

        {cartItems.length === 0 ? (
          <p className='text-3xl text-red-600 font-extrabold text-center p-[30px] mb-12'>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item flex text-3xl p-[50px] font-bold items-center justify-between gap-20">
              {/* Book Image */}
              <div className="w-32 h-32">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full rounded" />
              </div>
              
              {/* Book Info */}
              <div>
                <h2>{item.title}</h2>
                <p>{item.price}</p>
              </div>
              
              {/* Quantity and Remove Button */}
              <div>
                <input 
                  type="number" 
                  value={item.quantity} 
                  min="0" 
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  className="w-16 p-2 border rounded"
                />
                <button 
                  onClick={() => removeItem(item.id)} 
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {/* Continue Shopping Button */}
        <div className="text-center mt-8 ">
          <button 
            className="bg-red-600 mb-8 text-white px-6 py-3 rounded hover:bg-red-500"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <div>
          <button 
            className="bg-red-600 mb-8 text-white px-6 py-3 pl-[30px] rounded hover:bg-red-500"
            onClick={handleCheckout}
          >
           Buy Now
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;



