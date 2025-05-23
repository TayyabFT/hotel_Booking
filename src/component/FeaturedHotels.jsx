import React from "react";

const hotels = [
  {
    id: 1,
    name: "The Grand Resort",
    location: "Maldives",
    price: 450,
    rating: 4.9,
    badge: "Best Seller",
    image: "/src/assets/roomImg1.png"
  },
  {
    id: 2,
    name: "The Grand Resort",
    location: "Maldives",
    price: 450,
    rating: 4.9,
    badge: "",
    image:"/src/assets/roomImg2.png"
  },
  {
    id: 3,
    name: "The Grand Resort",
    location: "Maldives",
    price: 450,
    rating: 4.9,
    badge: "Best Seller",
    image: "/src/assets/roomImg3.png"
  },
  {
    id: 4,
    name: "The Grand Resort",
    location: "Maldives",
    price: 450,
    rating: 4.9,
    badge: "New",
    image: "/src/assets/roomImg4.png"
  }
];

const FeaturedHotelCard = ({ hotel }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md w-full max-w-xs mt-10 mx-auto">
    <div className="relative">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      {hotel.badge && (
        <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
          {hotel.badge}
        </span>
      )}
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 text-lg">{hotel.name}</h3>
      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
        <span>📍</span> {hotel.location}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="text-orange-500 font-medium text-sm flex items-center gap-1">
          ⭐ <span className="text-black">{hotel.rating}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-gray-800 text-lg font-semibold">
          ${hotel.price}{" "}
          <span className="text-sm font-normal text-gray-400">/ night</span>
        </div>
        <button className="bg-white border px-4 py-1 text-sm rounded shadow-sm hover:bg-gray-100">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const FeaturedHotels = () => {
  return (
    <div className="px-4 md:px-8 py-10 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">Featured Hotels</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Discover our handpicked selection of exceptional properties around the world,
        offering unparalleled luxury and unforgettable experiences.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <FeaturedHotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="px-6 py-2 border rounded text-sm bg-white hover:bg-gray-100">
          View All Hotels
        </button>
      </div>
    </div>
  );
};

export default FeaturedHotels;