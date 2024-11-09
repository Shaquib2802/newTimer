import React, { useEffect, useState } from "react";

const ProductData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log("Data aaa gya:", data);

  return (
    <div>
      {data.map((items) => (
        <div>
          <h1>{items.id}</h1>
          <img src={items.image} className="h-24 w-24" />
        </div>
      ))}
    </div>
  );
};

export default ProductData;
