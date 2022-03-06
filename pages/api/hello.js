// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(_, res) {
  // const allProductState = useSelector((state)=>state.getAllProductsReducer);

  const result = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(await result.json());
  if (!res) {
    return res.status(500).json({ message: "Internal server error" });
  }

  const allProds = await result.json();

  return res.status(200).json({ products: allProds });
}
