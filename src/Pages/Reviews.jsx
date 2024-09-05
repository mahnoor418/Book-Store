import React from 'react';

const Reviews = () => {
  return (
    <div className="p-6 md:p-10">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

   
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 text-3xl">★★★★★</span>
          <div className="text-lg text-gray-700">5.00 out of 5</div>
        </div>
        <div className="text-gray-500">Based on 1 review</div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mb-6">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★★</span>
            <div className="w-40 h-2 bg-red-500 ml-2 mr-2"></div>
            <span>1</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★☆</span>
            <div className="w-40 h-2 bg-gray-300 ml-2 mr-2"></div>
            <span>0</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">★★★☆☆</span>
            <div className="w-40 h-2 bg-gray-300 ml-2 mr-2"></div>
            <span>0</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">★★☆☆☆</span>
            <div className="w-40 h-2 bg-gray-300 ml-2 mr-2"></div>
            <span>0</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">★☆☆☆☆</span>
            <div className="w-40 h-2 bg-gray-300 ml-2 mr-2"></div>
            <span>0</span>
          </div>
        </div>
        <button className="mt-4 md:mt-0 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none">
          Write a review
        </button>
      </div>

      {/* Individual Reviews */}
      <div className="border-t border-gray-300 pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 font-semibold">Stetson</span>
          </div>
          <div className="text-gray-500">07/27/2020</div>
        </div>
        <h3 className="font-semibold text-lg">Consequat ac felis donec</h3>
        <p className="text-gray-700 mt-2">
          Pretium lectus quam id leo in vitae turpis massa sed. At lectus urna duis convallis convallis tellus.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
