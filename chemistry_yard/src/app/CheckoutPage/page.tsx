import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Checkout</h2>
            <h5 className="text-md font-medium mb-4 text-gray-800">Card Type</h5>

            <div className="flex space-x-4 mb-6">
              <img src="/images/paypal.png" alt="PayPal" width={50} height={30} />
              <Image src="/images/american.png" alt="Amex" width={50} height={30} />
              <Image src="/images/visa.png" alt="Visa" width={50} height={30} />
              <Image src="/images/mastercard.png" alt="MasterCard" width={50} height={30} />
            </div>

            <form className="space-y-4 text-gray-800">
              <input type="text" placeholder="Name on Card" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
              <input type="text" placeholder="Card Number" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
              <div className="flex space-x-4">
                <input type="text" placeholder="MM/YY" className="w-1/2 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
                <input type="text" placeholder="CVC" className="w-1/2 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-400" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="saveInfo" className="mr-2" />
                <label htmlFor="saveInfo" className="text-sm">Save my information for faster checkout</label>
              </div>
              <button type="submit" className="w-full bg-teal-500 text-white p-3 rounded hover:bg-teal-600 font-semibold transition-colors duration-200">Confirm Payment</button>
            </form>
          </div>

          {/* Summary */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md text-gray-800">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>

            {[1, 2].map((item) => (
              <div key={item} className="flex items-center space-x-4 mb-3">
                <div className="w-16 h-16 bg-gray-300 rounded-md" />
                <div>
                  <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet</p>
                  <p className="text-sm font-semibold">$24.69</p>
                </div>
              </div>
            ))}

            <div className="text-sm text-gray-700 border-t pt-4 mt-4 space-y-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$51.38</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span>0%</span>
              </div>
              <div className="flex justify-between">
                <span>TAX</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold text-black border-t pt-2 mt-2">
                <span>Total</span>
                <span>$56.38</span>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Section */}
        <main className="max-w-7xl mx-auto px-4 py-8">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl font-semibold text-black">
      Top Education offers and deals are listed here
    </h2>
    <a href="#" className="text-blue-500 text-sm font-semibold hover:underline">
      See all
    </a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-86">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7HRp34e2ymTWysuNEjKIyMJxb6pzUhpPWQ&s"
        alt="Instructor Offer"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
        50%
      </div>
      {/* Centered text without black background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
          FOR INSTRUCTORS
        </h3>
        <p className="text-white text-sm max-w-xs drop-shadow-md">
          TOTC’s school management software helps traditional and online schools manage scheduling.
        </p>
      </div>
    </div>

    {/* Repeat Card 2 */}
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-86">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7HRp34e2ymTWysuNEjKIyMJxb6pzUhpPWQ&s"
        alt="Instructor Offer"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
        50%
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
          FOR INSTRUCTORS
        </h3>
        <p className="text-white text-sm max-w-xs drop-shadow-md">
          TOTC’s school management software helps traditional and online schools manage scheduling.
        </p>
      </div>
    </div>

    {/* Repeat Card 3 */}
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-86">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7HRp34e2ymTWysuNEjKIyMJxb6pzUhpPWQ&s"
        alt="Instructor Offer"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
        50%
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10">
        <h3 className="text-white text-2xl font-semibold mb-2 drop-shadow-md">
          FOR INSTRUCTORS
        </h3>
        <p className="text-white text-sm max-w-xs drop-shadow-md">
          TOTC’s school management software helps traditional and online schools manage scheduling.
        </p>
      </div>
    </div>
  </div>
</main>
      </div>
      <Footer />
    </>
  );
}
