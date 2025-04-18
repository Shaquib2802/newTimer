import React, { useEffect, useState } from "react";

const ProductData = () => {
  const [data, setData] = useState([]);

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
    <div className="border overflow-hidden">
      <div className="text-2xl ml-4 font-semibold mt-5">Foods</div>
      <div className="grid grid-cols-5 gap-4 w-full overflow-x-auto p-4 ">
        {data.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border rounded-md border-gray-300 p-2 h-56 justify-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-32 object-cover"
            />
            <h1 className="text-center mt-2 font-semibold">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
