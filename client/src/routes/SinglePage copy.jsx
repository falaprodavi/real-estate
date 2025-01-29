import React from "react";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

function SinglePage() {
  const post = useLoaderData();
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export default SinglePage;

// Dados fictícios para a UI
// const post = {
//   title: "Apartamento com 3 quartos no centro",
//   price: 1200000,
//   images: [
//     "https://via.placeholder.com/800x600",
//     "https://via.placeholder.com/800x600/FF0000",
//     "https://via.placeholder.com/800x600/00FF00",
//   ],
//   address: "Rua das Flores, 123",
//   city: "São Paulo",
//   bedroom: 3,
//   bathroom: 2,
//   suites: 1,
//   latitude: "-23.5505",
//   longitude: "-46.6333",
//   type: "buy",
//   property: "apartment",
//   postDetail: {
//     desc: "Um apartamento espaçoso com vista para o parque.",
//     utilities: "Incluídas",
//     pet: "Permitido",
//     income: "R$ 10.000",
//     size: 120,
//     school: 2,
//     bus: 1,
//     restaurant: 5,
//   },
// };

// const {
//   title,
//   price,
//   images,
//   address,
//   city,
//   bedroom,
//   bathroom,
//   suites,
//   latitude,
//   longitude,
//   type,
//   property,
//   postDetail,
// } = post;



