import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import SectionTitle from "../components/Title";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4 ">
        <SectionTitle
          title="Imóveis em Destaque"
          subtitle="Explore nossas principais opções cuidadosamente selecionadas."
        />
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
        <SectionTitle
          title="Lançamentos"
          subtitle="Fique por dentro das últimas novidades do mercado imobiliário."
        />
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HomePage;
