import React from "react";
import Card from "../components/Card";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Filter from "../components/Filter";

function ListPage() {
  const data = useLoaderData();

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-4 ">
        <div className="p-4">
          <Filter />
        </div>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 ">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post, index) => (
                  <Card key={index} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default ListPage;
