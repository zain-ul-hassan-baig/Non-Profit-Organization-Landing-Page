import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');

  return (
    <section id="donate" className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto text-center max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Make a Donation</h2>
        <p className="text-gray-600 mb-6">Your contribution can change lives.</p>
        <form className="flex flex-col gap-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="px-4 py-2 border rounded-lg w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Donate ${amount || 'Now'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
