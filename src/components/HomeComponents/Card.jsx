import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHome,
} from "react-icons/fa";

const Card = ({
  image,
  address,
  bedrooms,
  bathrooms,
  sqft,
  category,
  price,
  status,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border">
      <img
        className="w-full h-48 object-cover"
        src={`/${image}`} // Use dynamic image URL
        alt="Property"
      />
      <div className="p-4">
        <div className="mb-2 text-sm font-semibold">
          <FaMapMarkerAlt className="inline-block text-gray-500 mr-1" />{" "}
          {address}
        </div>
        <div className="flex justify-between text-gray-600 mt-4">
          <div className="flex items-center">
            <FaBed className="mr-1" /> {bedrooms} Bed Room
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1" /> {bathrooms} Bath
          </div>
        </div>
        <div className="flex justify-between text-gray-600 mt-2">
          <div className="flex items-center">
            <FaRulerCombined className="mr-1" /> {sqft} sqft
          </div>
          <div className="flex items-center">
            <FaHome className="mr-1" /> {category}
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full py-2 bg-black text-white text-center rounded-md hover:bg-gray-800 transition-all">
            View Details
          </button>
        </div>
        <div className="mt-3 text-xl font-semibold text-black text-center">
          ${price.toLocaleString()}
        </div>
        <div className="mt-1 text-center text-sm text-gray-500">{status}</div>
      </div>
    </div>
  );
};

export default Card;
