import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ProductCard } from "../components";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../state_machine/actions/actions";
import CategoryNav from "../components/nav/CategoryNav";

const allImages = [
  { url: "/images/car.jpg" },
  { url: "/images/black_car.jpg" },
  { url: "/images/car.jpg" },
];

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.getAllProductsReducer);
  useEffect(() => {
    // Getting all the products
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(getAllProducts(res)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <>
      <CategoryNav />
      {/* Carousel featured products */}
      {/* <div className="relative">
        <FiChevronLeft className="ml-3 md:ml-10 h-full w-10 text-white cursor-pointer absolute z-10 " />
        <FiChevronRight className="mr-3 md:mr-10 h-full w-10 text-white cursor-pointer absolute z-10  right-0" />
        <div className="h-[60vh] flex gap-5 overflow-x-auto mb-20 carousel relative snap-x">
          {allImages.map((image, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 relative w-full h-full"
            >
              <Image
                src={image.url}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="px-custom mb-20 mt-10 bg-[#f0f0f0] ">
        <h1 className="mb-5 text-2xl font-bold">Newest Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {allProducts.data?.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              imgUrl={product.image}
            />
          ))}
          <Link href="/" passHref>
            <div className="text-accent cursor-pointer py-5 border w-full h-full bg-white rounded-md flex items-center justify-center hover:scale-[1.01]">
              <p>View All Products</p>
              <FiChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
