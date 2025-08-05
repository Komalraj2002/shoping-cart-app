import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductsTile from "../components/productTile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    if (data) {
      setLoading(false);
      setProducts(data);
    }
    console.log(data);
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (  
        <div className=" min-h-screen w-full flex justify-center items-center">
          <Circles  // if loading is true then we will show these circles 
            height={"100"}
            width={"100"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : <div  className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3 ">
        {
         products && products.length ?
         products.map(productsItem => <ProductsTile products={productsItem}/>)
         : null
        }
        </div>}
    </div>
  );
}
