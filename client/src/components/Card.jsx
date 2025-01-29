import React from "react";
import { FaBed, FaBath, FaCar, FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/swiper-bundle.css";

const Card = ({ item, id }) => {
  return (
    <div className="rounded-lg mx-4 my-6 overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-lg cursor-pointer">
      {/* Carrossel de fotos */}
      <Link to={`/${item.id}`}>
        <div className="relative">
          <Swiper
            style={{ "--swiper-navigation-color": "white" }}
            id={`swiper-${id}`}
            navigation={{
              nextEl: `.swiper-button-next-${id}`,
              prevEl: `.swiper-button-prev-${id}`,
            }}
            modules={[Navigation]}
            className="w-full "
          >
            {item.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-60 object-cover rounded-t-lg"
                  src={image}
                  alt={`Imóvel ${index + 1}`}
                />
              </SwiperSlide>
            ))}
            <div
              className={`swiper-button-next  swiper-button-next-${id} `}
            ></div>
            <div
              className={`swiper-button-prev swiper-button-prev-${id} `}
            ></div>
          </Swiper>
          <div className="absolute top-2 z-99 left-2 bg-white bg-opacity-75 px-2 py-1 rounded-full text-sm font-semibold">
            {item.city}
          </div>
          <div className="absolute top-2 z-99 right-2 bg-orange-500 text-white bg-opacity-75 px-2 py-1 rounded-full text-sm font-semibold">
            {item.type}
          </div>
        </div>

        {/* Restante do card */}

        <div className="px-4 py-2">
          <p className="text-xl font-bold text-gray-800">R$ {item.price}</p>
        </div>

        <div className="px-4 py-2">
          <p className="text-lg font-semibold text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkerAlt className="mr-1" /> {item.city}
          </p>
        </div>
      </Link>
      <div className="px-4 py-2 flex justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <FaBed className="mr-1" /> {item.bedroom} Quartos
        </div>
        <div className="flex items-center">
          <FaBath className="mr-1" /> {item.bathroom} Banheiros
        </div>
        <div className="flex items-center">
          <FaCar className="mr-1" /> {item.bathroom} Vagas
        </div>
      </div>
      <div className="px-4 py-2 border-t border-gray-200 flex items-center">
        <div>
          <p className="text-sm font-semibold text-gray-800 ">{item.title}</p>
          <p className="text-xs text-gray-600">{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
