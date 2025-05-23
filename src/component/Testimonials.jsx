import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    image: '/src/assets/Ema1.png',
    rating: 5,
    comment: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    id: 2,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    image: '/src/assets/Ema1.png',
    rating: 5,
    comment: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    image: '/src/assets/Ema1.png',
    rating: 5,
    comment: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f7fafd] py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-xl shadow text-left">
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.location}</p>
              </div>
            </div>
            <div className="flex text-orange-400 mb-3">
              {'★'.repeat(t.rating)}
            </div>
            <p className="text-sm text-gray-700">"{t.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;