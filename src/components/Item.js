import React, { useState } from "react";

function Item({ id, name, price }) {
  // State variable to track whether the item is in the cart
  const [isInCart, setInCart] = useState(false);

  // Event handler for adding/removing the item from the cart
  const toggleCartStatus = () => {
    setInCart(!isInCart);
  };

  // Dynamically set the class based on whether the item is in the cart
  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <div>
        <h3>{name}</h3>
        <p>${price}</p>
        <button onClick={toggleCartStatus}>
          {isInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </div>
    </li>
  );
}

export default Item;
