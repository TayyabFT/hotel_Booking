import React from 'react';

const offers = [
  {
    id: 1,
    discount: '25% OFF',
    title: 'Summer Escape Package',
    description: 'Enjoy a complimentary night and daily breakfast',
    expires: 'Expires Aug 31',
    image: '/src/assets/exclusiveOfferCardImg1.png',
  },
  {
    id: 2,
    discount: '20% OFF',
    title: 'Romantic Getaway',
    description: 'Special couples package including spa treatment',
    expires: 'Expires Sep 20',
    image: '/src/assets/exclusiveOfferCardImg2.png',
  },
  {
    id: 3,
    discount: '20% OFF',
    title: 'Early Bird Special',
    description: 'Book 60 days in advance and save on your stay at any of our luxury properties worldwide.',
    expires: 'Expires Aug 31',
    image: '/src/assets/exclusiveOfferCardImg3.png',
  },
];

const ExclusiveOffers = () => {
  return (
    <section className="py-16 px-4 bg-white mt-10">
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">Exclusive Offers</h2>
          <p className="text-gray-600 max-w-lg">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-black flex items-center gap-1">
          View All Offers →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {offers.map((offer) => (
          <div key={offer.id} className="relative rounded-xl overflow-hidden h-72 shadow-md">
            <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 flex flex-col justify-end text-white">
              <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full mb-2 self-start">
                {offer.discount}
              </span>
              <h3 className="text-lg font-semibold mb-1">{offer.title}</h3>
              <p className="text-sm mb-1">{offer.description}</p>
              <p className="text-xs text-gray-200 mb-3">{offer.expires}</p>
              <a href="#" className="text-sm font-medium underline flex items-center gap-1">
                View Offers →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveOffers;