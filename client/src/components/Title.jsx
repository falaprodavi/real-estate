import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center my-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-orange-600">
        {title}
      </h2>
      <p className="text-lg text-gray-700 mt-2">{subtitle}</p>
    </div>
  );
}
