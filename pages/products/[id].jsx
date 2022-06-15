import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";
import { ProductCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsByCategories } from "../../state_machine/actions/actions";
import axios from "axios";

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((d) => ({ params: { id: d.id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      product: data,
    },
  };
}

function ProductDetails({ product }) {
  console.log("Product => ", product);
  const dispatch = useDispatch();
  const byCategoryProducts = useSelector(
    (state) => state.getProductsByCategoryReducer
  );

  useEffect(() => {
    axios(
      `https://fakestoreapi.com/products/category/${product.category}`
    ).then((res) => dispatch(getProductsByCategories(res.data)));
  }, [product.category, dispatch]);

  return (
    <>
      {/* Product navigation */}
      <div className="shadow-md py-2 text-xs px-custom flex overflow-x-auto gap-2 items-center justify-cent">
        <p>Category</p>
        <FiChevronRight className="icon" />
        <p className="whitespace-nowrap">{product.category}</p>
        <FiChevronRight className="icon" />
        <p className="whitespace-nowrap">{product.title}</p>
      </div>

      {/* Product */}
      <div className="px-custom my-10 ">
        <div className="bg-white px-custom gap-5  py-5 grid md:grid-cols-12 mb-5">
          {/* Left section */}
          <div className="md:col-span-4">
            <div className="relative w-full h-80">
              <Image
                src={product.image}
                objectFit="contain"
                layout="fill"
                alt={product.title}
              />
            </div>
            {/* More images here */}
            <div></div>
          </div>

          {/* Right section */}
          <div className="md:col-span-8 px-custom space-y-5">
            <div>
              <h1 className="text-2xl">{product.title}</h1>
              {/* <p>{product.description}</p> */}
            </div>

            <div className="flex items-center gap-5">
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                value={product.rating.rate}
              />
              <p>{product.rating.count} ratings</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-accent/50">
                ${product.price}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <p>Quantity</p>
              <button className="bg-gray-100 rounded-md py-2 px-3">-</button>
              <p>1</p>
              <button className="bg-gray-100 rounded-md py-2 px-3">+</button>
              <p>Only 3 in stock</p>
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-green-500 rounded-md uppercase p-3 hover:opacity-90 transition text-white">
                Buy Now
              </button>
              <button className="bg-orange-500 rounded-md uppercase p-3 hover:opacity-90 transition text-white">
                Add To Bag
              </button>
            </div>
          </div>
        </div>

        {/* Product details section */}

        <div className="bg-white  px-custom gap-5  py-5 mb-5 space-y-5">
          <h1 className="text-xl">Product details of {product.title}</h1>

          <div>
            <ul className="list-disc list-inside grid md:grid-cols-2">
              <li>Wireless Transmitter for Flash</li>
              <li>Frequency: 2.4 GHz, 32 Channels</li>
              <li>Wireless Range: 328.1</li>
              <li>High Speed Sync up to 1/8000 sec</li>
            </ul>
          </div>
          <div className="border-t-2 pt-5">
            <p>{product.description}</p>
          </div>

          <div className="border-t-2 pt-5 space-y-5">
            <h1 className="text-xl">Specifications of {product.title}</h1>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <p>Brand</p>
                <p className="text-lg font-semibold">{product.category}</p>
              </div>
              <div>
                <p>SKU</p>
                <p className="text-lg font-semibold">
                  105510266_{product.id}-1027268978
                </p>
              </div>
            </div>
            <div>
              <p>What is in the box</p>
              <p className="text-lg font-semibold">{product.category}</p>
            </div>
          </div>
        </div>

        {/* Ratings and reviews section */}
        <div className="bg-white  px-custom gap-5  py-5 mb-5 space-y-5">
          <h1 className="text-xl font-bold">Ratings and Reviews</h1>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <p className="text-3xl font-bold">{product.rating.rate}/5</p>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                isHalf={true}
                value={product.rating.rate}
              />
              <p>{product.rating.count} ratings</p>
            </div>
            <div className="col-span-2">{product.description}</div>
          </div>
        </div>

        {/* From Same Category */}
        <div className="border-2  px-custom gap-5  py-5 mb-5 space-y-5">
          <h1 className="text-xl font-bold">From Same Category</h1>
          <div className="mb-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {byCategoryProducts?.map((product) => (
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
      </div>
    </>
  );
}

export default ProductDetails;
