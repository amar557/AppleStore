import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { decreaseItems, increaseItem } from "../ReduxSlices/CartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const selector = useSelector((data) => data.cart.cart);
  // const selecft1 = useSelector((data) => data.cart.cart);
  // console.log(selecft1.map((item) => item.quantity));
  console.log(selector);
  return (
    <div className="mx-auto  w-11/12  lg:w-10/12">
      {selector.length > 0 ? (
        <>
          <CartHead dispatch={dispatch} />
          {selector.map((data, i) => (
            <CartItem
              dispatch={dispatch}
              key={i}
              id={data.id}
              picture={data.pic}
              itemName={data.itemName}
              price={data.price}
              quantity={data.quantity}
              SubTotal={data.SubTotal}
            />
          ))}
          <CartPageButton />
        </>
      ) : (
        <ForEmptyCart />
      )}
    </div>
  );
}

function CartHead() {
  return (
    <div className="flex items-center justify-around capitalize">
      <div className="">product</div>
      <div className="">price</div>
      <div className="">quantity</div>
      <div className="">subtotal</div>
    </div>
  );
}

function CartItem({
  dispatch,
  picture,
  itemName,
  price,
  quantity,
  SubTotal,
  id,
}) {
  // const [items, setItems] = useState(1);
  // const [total, setTotal] = useState(0);
  // const rate = 550;
  // console.log(quantity);
  // const increasing = (id) => dispatch(increaseItem(id));
  // function increasing(id) {
  //   dispatch(increaseItem(id));
  // }
  const currentId = id;
  // console.log(currentId);
  function increasing(id) {
    dispatch(increaseItem(id));
  }
  function decreasing(id) {
    dispatch(decreaseItems(id));
  }

  return (
    <div className="flex items-center justify-around py-5 shadow ">
      <div className="flex w-1/5 items-center space-x-3">
        <img src={picture} alt="pic" className="w-1/4" />
        <span className="uppercase">{itemName}</span>
      </div>
      <div className="w-1/5 text-center">{price}$</div>
      <div className="flex w-1/5 items-center justify-center space-x-3">
        <div>{quantity}</div>
        <div className="flex flex-col">
          <button onClick={() => increasing(currentId)}>
            <BsChevronUp />
          </button>
          <button onClick={() => decreasing(currentId)}>
            <BsChevronDown />
          </button>
        </div>
      </div>
      <div className="w-1/5 text-center">{SubTotal}</div>
    </div>
  );
}
function CartPageButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="flex items-center justify-around space-x-3 py-10"
    >
      <IoIosArrowRoundBack />
      <span>go back</span>
    </button>
  );
}
function ForEmptyCart() {
  return (
    <div className="flex items-center justify-between ">
      <CartPageButton />
      <div className="w-[70%] self-center  py-10 text-lg">
        go to items page and add some items to Cart
      </div>
    </div>
  );
}
export default Cart;
