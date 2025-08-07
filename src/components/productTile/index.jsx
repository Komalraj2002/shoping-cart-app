import { useDispatch, useSelector } from "react-redux";
import { addToCart , removeFromCart } from "../../store/slices/cart-slice";
export default function ProductsTile({ product }) {

  const {cart} = useSelector((state) => state)
const dispatch = useDispatch()
function handleAddToCart(){
  dispatch(addToCart(product))
}

function handleremoveFromCart(){
  dispatch(removeFromCart(product.id))
}


  return (
    <div>
      <div className=" group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className=" max-h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className=" object-cover h-full w-full"
          />
        </div>
         <div>
            <h1 className=" w-40 truncate mt-3 text-grey-700 font-bold text-lg "> {product?.title}</h1>
         </div>
        <div className=" flex items-center justify-center w-full mt-4">
          <button onClick={  cart.some(item => item.id === product.id ) ?  handleremoveFromCart : handleAddToCart} className=" bg-red-950 text-white border-2 rounded-lg font-bold p-3"> 
            {
              cart.some(item => item.id === product.id ) ? "Remove from Cart": "Add to cart"
            }
            </button>
        </div>
      </div>
    </div>
  );
}

//working of button
// when handleAddToCart is called dispatch tells reduc i want to do something
//addToCart(product) creates an action like this:
// {type: "cart/addToCart",payload: { id: 1, name: "Shoes", price: 100 }}
//then the above code is action.payload in cart-slice.js file that get push in the array(cart)