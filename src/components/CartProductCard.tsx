import React, { useState } from "react";

export interface cartProductCardType {
  Name: string;
  ItemCode: string;
  quantity: number;
  RetailPrice: number;
  ImageUrl: string;
  Description: string;
  CategoryName: string;
}

export default function CartProductCard({
  Name,
  ItemCode,
  quantity,
  RetailPrice,
  ImageUrl,
  Description,
  CategoryName,
}: cartProductCardType) {
  const [stateQuantity, setStateQuantity] = useState<number>(quantity);
  return (
    <div
      className={
        stateQuantity !== 0
          ? "flex justify-between items-center mt-6 pt-6"
          : "hidden"
      }
    >
      <div className="flex items-center">
        {" "}
        <img src={ImageUrl} width="60" className="rounded-full " />
        <div className="flex flex-col ml-3">
          {" "}
          <span className="md:text-md font-medium">{Name}</span>{" "}
          <span className="text-xs font-light text-gray-400">{ItemCode}</span>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="pr-8 flex ">
          {" "}
          <span
            className="font-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (stateQuantity > 0) setStateQuantity(stateQuantity - 1);
            }}
          >
            -
          </span>{" "}
          <input
            type="text"
            className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
            value={stateQuantity}
          />{" "}
          <span
            className="font-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => setStateQuantity(stateQuantity + 1)}
          >
            +
          </span>{" "}
        </div>
        <div className="pr-8 ">
          {" "}
          <span className="text-xs font-medium">
            ${(RetailPrice * quantity).toFixed(2)}
          </span>{" "}
        </div>
        <div className="close-btn" onClick={() => setStateQuantity(0)}>
          {" "}
          <i className="fa fa-close text-xs font-medium"></i>{" "}
        </div>
      </div>
    </div>
  );
}
