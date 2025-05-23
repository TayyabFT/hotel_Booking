import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <section className="px-4 py-16 mt-10">
      <div className="max-w-4xl mx-auto bg-[#0f172a] text-white rounded-2xl border border-blue-500 p-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Inspired</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-[#1e293b] border border-gray-600 text-white w-full sm:w-auto min-w-[250px] outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Subscribe →
          </button>
        </form>

        <p className="text-xs text-gray-400">
          By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a> and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;