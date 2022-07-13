import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface productCardPropType {
  ItemCode: string;
  ImageUrl: string;
  Name: string;
  RetailPrice: number;
  CategoryName: string;
  Description: string
}

export default function ProductCard({
  ItemCode,
  ImageUrl,
  Name,
  RetailPrice,
  CategoryName,
  Description
}: productCardPropType) {
  return (
    <div className="md:w-100 p-2 my-2">
      <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto my-2">
                  <a>
                    <img className="rounded-t-lg" src={ImageUrl} alt="" />
                  </a>
      </div>
        <div className="flex text-center items-start px-2 pt-2">
          <div className="p-2 flex-grow">
            <h1 className="font-medium text-xl font-poppins">
              {Name.substring(0, 50)}
            </h1>
          </div>
          <div className="p-2 text-right">
            <div className="text-logoorange font-semibold text-lg font-poppins">
              ${RetailPrice}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2 pb-2">
          <div className="w-1/2 p-2">
            <Link to={`/shop/category/${ItemCode}`}>
              <button
                className="block w-full bg-logoblue hover:bg-teal-600 border-2 border-logoblue hover:border-teal-600 py-2 rounded uppercase font-poppins font-medium"
                style={{ color: "#fff" }}
              >
                <svg viewBox="0 0 24 24" className="inline w-4 h-4">
                  <path
                    fill="#CFD8DC"
                    d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                  />
                </svg>{" "}
                Details
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
