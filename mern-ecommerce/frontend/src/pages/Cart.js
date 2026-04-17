import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // ❌ Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  // ➕ Add quantity
  const increaseQty = (item) => {
    const updatedCart = cart.map((p) =>
      p._id === item._id ? { ...p, qty: (p.qty || 1) + 1 } : p
    );
    setCart(updatedCart);
  };

  // ➖ Decrease quantity
  const decreaseQty = (item) => {
    const updatedCart = cart.map((p) =>
      p._id === item._id
        ? { ...p, qty: (p.qty || 1) - 1 }
        : p
    ).filter((p) => (p.qty || 1) > 0);

    setCart(updatedCart);
  };

  // 💰 Total Price
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h2 className="text-center">Cart is empty</h2>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">

          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item)}>➖</button>
                <span>{item.qty || 1}</span>
                <button onClick={() => increaseQty(item)}>➕</button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item._id)}
                className="text-red-500"
              >
                ❌
              </button>
            </div>
          ))}

          {/* Total */}
          <h2 className="text-right text-xl font-bold">
            Total: ₹{total}
          </h2>

        </div>
      )}
    </div>
  );
};

export default Cart;