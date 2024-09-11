import React, { useEffect, useState } from "react";
import Card from "../components/HomeComponents/Card";
import Navbar from "../components/HomeComponents/Navbar";
import ResponsiveNavbar from "../components/HomeComponents/ResponsiveNavbar";

const properties = [
  {
    id: 1,
    image: "image1.jpg",
    address: "2861 62nd Ave, Oakland, CA 94605",
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1032,
    category: "Family",
    price: 649900,
    status: "For Sale",
  },
  {
    id: 2,
    image: "image2.jpg",
    address: "124 Maple St, Denver, CO 80205",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1450,
    category: "Single Family",
    price: 780000,
    status: "For Sale",
  },
  {
    id: 3,
    image: "image3.jpg",
    address: "78 Sunset Blvd, Los Angeles, CA 90001",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 980,
    category: "Condo",
    price: 499000,
    status: "For Rent",
  },
  {
    id: 4,
    image: "image4.jpg",
    address: "543 Lakeview Dr, Austin, TX 73301",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1200,
    category: "Townhouse",
    price: 690000,
    status: "For Sale",
  },
  {
    id: 5,
    image: "image5.jpg",
    address: "920 Hilltop Rd, San Francisco, CA 94112",
    bedrooms: 5,
    bathrooms: 3,
    sqft: 2100,
    category: "Family",
    price: 1250000,
    status: "For Sale",
  },
  {
    id: 6,
    image: "image6.jpg",
    address: "150 Pine St, New York, NY 10005",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 720,
    category: "Apartment",
    price: 850000,
    status: "For Rent",
  },
  {
    id: 7,
    image: "image7.jpg",
    address: "40 Beachside Ave, Miami, FL 33101",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    category: "Beach House",
    price: 980000,
    status: "For Sale",
  },
  {
    id: 8,
    image: "image1.jpg",
    address: "180 Forest Rd, Seattle, WA 98101",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1000,
    category: "Condo",
    price: 520000,
    status: "For Rent",
  },
  {
    id: 9,
    image: "image2.jpg",
    address: "200 Summit Ln, Boulder, CO 80301",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1700,
    category: "Single Family",
    price: 890000,
    status: "For Sale",
  },
  {
    id: 10,
    image: "image3.jpg",
    address: "345 City Plaza, Chicago, IL 60601",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1250,
    category: "Penthouse",
    price: 1120000,
    status: "For Rent",
  },
  {
    id: 11,
    image: "image4.jpg",
    address: "555 Coastal Dr, Santa Monica, CA 90405",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 980,
    category: "Condo",
    price: 600000,
    status: "For Sale",
  },
  {
    id: 12,
    image: "image5.jpg",
    address: "100 Central Park S, New York, NY 10019",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1350,
    category: "Apartment",
    price: 2150000,
    status: "For Rent",
  },
  {
    id: 13,
    image: "image6.jpg",
    address: "321 Ocean Dr, Miami, FL 33139",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 1800,
    category: "Beach House",
    price: 950000,
    status: "For Sale",
  },
  {
    id: 14,
    image: "image7.jpg",
    address: "500 Broadway, Los Angeles, CA 90013",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    category: "Condo",
    price: 720000,
    status: "For Rent",
  },
  {
    id: 15,
    image: "image1.jpg",
    address: "789 Forest Ln, Seattle, WA 98101",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    category: "Single Family",
    price: 760000,
    status: "For Sale",
  },
];

const PropertyList = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);
  return (
    <div>
      <Navbar />

      <ResponsiveNavbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setMagnetActive={setMagnetActive}
      />

      <h1 className=" text-4xl font-bold text-center my-4 ">Property Lists</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 py-6 md:grid-cols-3 lg:grid-cols-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            image={property.image}
            address={property.address}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            sqft={property.sqft}
            category={property.category}
            price={property.price}
            status={property.status}
          />
        ))}{" "}
      </div>
    </div>
  );
};

export default PropertyList;
