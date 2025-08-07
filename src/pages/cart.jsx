import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/cartTile";
export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);
  return (
    <>
      {cart && cart.length ? (
        <>
          <div className=" min-h-[50vh] grid md:grid-cols-2 max-w-6xlmx-auto ">
            <div className=" flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          <div>
            <div className=" flex flex-col justify center items-end p-5 space-y-5 mt-14 ">
              <h1 className=" font-bold text-lg text-red-800 ">
                {" "}
                Your Cart Summary{" "}
              </h1>
              <p>
                <span className=" text-grey-800 font-bold"> Total Item</span>
                <span className=" ">: {cart.length}</span>
              </p>
              <p>
                <span className=" text-grey-800 font-bold"> Total Amount</span>
                <span className=" ">: {totalCart}</span>
              </p>
            </div>
          </div>
          </div>
        </>
      ) : (
        <div className=" min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className=" text-grey-800 font-bold text-xl mb-2">
            {" "}
            Your Cart Is Empty{" "}
          </h1>
          <Link to={"/"}>
            <button className=" bg-red-950 text-white gont-bold border-2 rounded-lg p-3 ">
              {" "}
              SHOP NOW{" "}
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
