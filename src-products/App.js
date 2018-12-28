import React from "react";
import products from "./models/productsData";
import Product from "./components/Product";

function App() {
  const productComponents = products.map(product => <Product key={product.id} product={product} />);

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App;
