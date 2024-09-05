import React from 'react';

const Checkout = () => {
  return (
    <div className="flex justify-center items-start py-10 bg-gray-100">
      {/* Checkout Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-4">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <input type="email" placeholder="Email or mobile phone number" className="w-full p-2 mb-4 border rounded-lg" />
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label>Email me with news and offers</label>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Delivery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First name (optional)" className="w-full p-2 border rounded-lg" />
          <input type="text" placeholder="Last name" className="w-full p-2 border rounded-lg" />
        </div>
        <input type="text" placeholder="Address" className="w-full p-2 mb-4 border rounded-lg" />
        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-2 mb-4 border rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="City" className="w-full p-2 border rounded-lg" />
          <input type="text" placeholder="Postal code (optional)" className="w-full p-2 border rounded-lg" />
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label>Save this information for next time</label>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Shipping method</h2>
        <div className="flex justify-between items-center p-2 mb-6 border rounded-lg">
          <span>Standard</span>
          <span>$17.88</span>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Payment</h2>
        <p className="text-gray-500 mb-4">All transactions are secure and encrypted.</p>
        <input type="text" placeholder="Credit card number" className="w-full p-2 mb-4 border rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Expiration date (MM / YY)" className="w-full p-2 border rounded-lg" />
          <input type="text" placeholder="Security code" className="w-full p-2 border rounded-lg" />
        </div>
        <input type="text" placeholder="Name on card" className="w-full p-2 mb-4 border rounded-lg" />
        <div className="flex items-center mb-6">
          <input type="checkbox" className="mr-2" />
          <label>Use shipping address as billing address</label>
        </div>

        <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Pay now</button>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs mx-4 mt-10 md:mt-0">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-2">
          <span>Adventurous Eating</span>
          <span>$120.00</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span>$120.00</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span>Shipping</span>
          <span>$17.88</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-lg">
          <span>Total</span>
          <span>$137.88</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
