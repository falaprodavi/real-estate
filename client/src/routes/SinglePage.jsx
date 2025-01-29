import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

const SinglePage = () => {
  const post = useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna Esquerda (2/3 da largura) */}
        <div className="lg:col-span-2">
          {/* Carrossel de Imagens */}
          <div className="mb-8">
            <Swiper
              navigation
              style={{ "--swiper-navigation-color": "white" }}
              pagination={{ clickable: true }}
              modules={[Navigation]}
              className="h-[600px] rounded-lg"
            >
              {post.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Imóvel ${index + 1}`}
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Informações Básicas */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-2xl text-orange-600 font-semibold mb-4">
              {post.type === "buy" ? "À venda" : "Para alugar"} - R${" "}
              {post.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Endereço:</span> {post.address},{" "}
              {post.city}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <span className="font-semibold">Quartos:</span> {post.bedroom}
              </div>
              <div>
                <span className="font-semibold">Banheiros:</span>{" "}
                {post.bathroom}
              </div>
              <div>
                <span className="font-semibold">Suítes:</span> {post.suites}
              </div>
              <div>
                <span className="font-semibold">Tipo:</span>{" "}
                {post.property === "apartment"
                  ? "Apartamento"
                  : post.property === "house"
                  ? "Casa"
                  : post.property === "condo"
                  ? "Condomínio"
                  : "Terreno"}
              </div>
            </div>
          </div>

          {/* Detalhes Adicionais */}
          {post.postDetail && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">Detalhes do Imóvel</h2>
              <p className="text-gray-700 mb-4">{post.postDetail.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.postDetail.utilities && (
                  <div>
                    <span className="font-semibold">Utilidades:</span>{" "}
                    {post.postDetail.utilities}
                  </div>
                )}
                {post.postDetail.pet && (
                  <div>
                    <span className="font-semibold">Pet Friendly:</span>{" "}
                    {post.postDetail.pet}
                  </div>
                )}
                {post.postDetail.income && (
                  <div>
                    <span className="font-semibold">Renda Mínima:</span>{" "}
                    {post.postDetail.income}
                  </div>
                )}
                {post.postDetail.size && (
                  <div>
                    <span className="font-semibold">Tamanho:</span>{" "}
                    {post.postDetail.size} m²
                  </div>
                )}
                {post.postDetail.school && (
                  <div>
                    <span className="font-semibold">Escolas próximas:</span>{" "}
                    {post.postDetail.school}
                  </div>
                )}
                {post.postDetail.bus && (
                  <div>
                    <span className="font-semibold">Ônibus próximos:</span>{" "}
                    {post.postDetail.bus}
                  </div>
                )}
                {post.postDetail.restaurant && (
                  <div>
                    <span className="font-semibold">
                      Restaurantes próximos:
                    </span>{" "}
                    {post.postDetail.restaurant}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mapa */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Localização</h2>
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                title="Localização do Imóvel"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=SUA_CHAVE_API&q=${post.latitude},${post.longitude}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Coluna Direita (1/3 da largura) */}
        <div className="lg:col-span-1">
          {/* Contato do Corretor */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Contato do Corretor</h2>
            <div className="flex items-center mb-4">
              <img
                src={""}
                alt="nome"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">nome</p>
                <p className="text-sm text-gray-600">telefone</p>
                <p className="text-sm text-gray-600">email</p>
              </div>
            </div>
            <button className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-400">
              Entrar em Contato
            </button>
          </div>

          {/* Anúncios Relacionados */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Anúncios Relacionados</h2>
            <p className="text-gray-700">
              Outros imóveis que podem te interessar.
            </p>
            {/* Adicione mais anúncios aqui */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
