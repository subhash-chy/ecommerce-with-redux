import React from "react";
import { ProductCard } from "../../components";

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  return {
    paths: data.map((category) => ({ params: { category } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${context.params.category}`
  );
  const data = await res.json();

  return {
    props: {
      category: context.params.category,
      products: data,
    },
  };
}

function Category({ products, category }) {
  return (
    <div className="bg-white  px-custom gap-5  py-5 mb-5 space-y-5">
      <h1 className="text-xl font-bold">From {category}</h1>
      <div className="mb-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            imgUrl={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
