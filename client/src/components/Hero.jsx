import React from "react";
import Filter from "./Filter";

export default function Hero() {
  return (
    <div className="relative bg-gray-800 text-white h-[70vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg')", // Altere para o link da imagem desejada
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-center px-6">
        {/* Search Form */}
        <div className="bg-white/90 text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-4xl ">
          <Filter />
        </div>
      </div>
    </div>
  );
}
