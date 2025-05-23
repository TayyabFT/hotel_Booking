import React, { useState } from "react";

const hotelsData = [
  {
    id: 1,
    name: "The Grand Resort",
    location: "San Diego, CA, USA",
    address: "Los Angeles, California, USA",
    price: 100,
    image: "/src/assets/roomImg1.png",
    rating: 4,
    reviews: "200+ reviews",
    type: "Luxury Room"
  },
  {
    id: 2,
    name: "The Regal Palace",
    location: "Skyline Boulevard, NY, USA",
    address: "Los Angeles, California, USA",
    price: 150,
    image: "/src/assets/roomImg2.png",
    rating: 4,
    reviews: "200+ reviews",
    type: "Double Bed"
  },
  {
    id: 3,
    name: "Velvet Nights Inn",
    location: "Beachfront Drive, CA, USA",
    address: "Los Angeles, California, USA",
    price: 120,
    image: "/src/assets/roomImg3.png",
    rating: 4,
    reviews: "200+ reviews",
    type: "Single Bed"
  },
  {
    id: 4,
    name: "Golden Horizon Suites",
    location: "Orlando, FL, USA",
    address: "Sunset Avenue, Florida, USA",
    price: 130,
    image: "/src/assets/roomImg4.png",
    rating: 5,
    reviews: "180+ reviews",
    type: "Family Suite"
  },
  {
    id: 5,
    name: "Cozy Stay Lodge",
    location: "Austin, TX, USA",
    address: "Lone Star Road, Texas, USA",
    price: 90,
    image: "/src/assets/roomImg3.png",
    rating: 3,
    reviews: "150+ reviews",
    type: "Single Bed"
  },
  {
    id: 6,
    name: "Majestic View Hotel",
    location: "Denver, CO, USA",
    address: "Mountain Peak Street, Colorado, USA",
    price: 160,
    image: "/src/assets/roomImg4.png",
    rating: 4,
    reviews: "210+ reviews",
    type: "Luxury Room"
  }
];

const priceRanges = [
  { label: "₹2500 to ₹5000", min: 30, max: 60 },
  { label: "₹5000 to ₹8000", min: 61, max: 100 },
  { label: "₹8000 to ₹15000", min: 101, max: 180 }
];

const HotelFilterList = () => {
  const [filters, setFilters] = useState({ type: [], price: [], sort: "" });

  const handleFilterChange = (category, value) => {
    if (category === "sort") {
      setFilters({ ...filters, sort: value });
      return;
    }
    const currentValues = filters[category];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFilters({ ...filters, [category]: updatedValues });
  };

  const clearFilters = () => setFilters({ type: [], price: [], sort: "" });

  const filteredHotels = hotelsData
    .filter((hotel) =>
      filters.type.length > 0 ? filters.type.includes(hotel.type) : true
    )
    .filter((hotel) =>
      filters.price.length > 0
        ? filters.price.some((range) => {
            const r = priceRanges.find((p) => p.label === range);
            return hotel.price >= r.min && hotel.price <= r.max;
          })
        : true
    )
    .sort((a, b) => {
      if (filters.sort === "Price Low to High") return a.price - b.price;
      if (filters.sort === "Price High to Low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="flex flex-col md:flex-row-reverse gap-6 justify-center items-start mt-24 p-6 max-w-screen-xl mx-auto">
      {/* Sidebar on right */}
      <aside className="w-full md:w-1/4 border mt-16 p-4 shadow-sm rounded bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">FILTERS</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            CLEAR
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Popular filters</h3>
          {["Single Bed", "Family Suite", "Double Bed", "Luxury Room"].map(
            (type) => (
              <label key={type} className="block text-sm mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.type.includes(type)}
                  onChange={() => handleFilterChange("type", type)}
                />
                {type}
              </label>
            )
          )}
        </div>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Price</h3>
          {priceRanges.map((range) => (
            <label key={range.label} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2"
                checked={filters.price.includes(range.label)}
                onChange={() => handleFilterChange("price", range.label)}
              />
              {range.label}
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-2">Sort By</h3>
          {["Price Low to High", "Price High to Low", "Newest First"].map(
            (option) => (
              <label key={option} className="block text-sm mb-1">
                <input
                  type="radio"
                  name="sort"
                  className="mr-2"
                  value={option}
                  checked={filters.sort === option}
                  onChange={() => handleFilterChange("sort", option)}
                />
                {option}
              </label>
            )
          )}
        </div>
      </aside>

      {/* Hotel listings on left */}
      <section className="w-full md:w-3/4">
        <h1 className="text-3xl font-bold mb-3">Hotel Rooms</h1>
        <p className="text-gray-600 mb-6">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>

        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white flex flex-col md:flex-row  rounded-lg overflow-hidden mb-6"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full md:w-[430px] h-72 object-cover rounded-lg"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h4 className="text-sm text-gray-500">{hotel.location}</h4>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {hotel.name}
                </h2>
                <div className="flex items-center text-sm text-orange-500 mb-1">
                  {"★".repeat(hotel.rating)}
                  <span className="text-gray-600 ml-2">{hotel.reviews}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{hotel.address}</p>
                <div className="flex gap-2 flex-wrap text-sm">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    free wifi
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    free breakfast
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    room service
                  </span>
                </div>
              </div>
              <div className="mt-4 text-lg font-bold text-gray-800">
                ₹{hotel.price * 80} /day
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HotelFilterList;
