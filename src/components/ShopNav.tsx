import React, { useReducer } from "react";

export default function ShopNav(props: any) {
  return (
    <nav className="w-full bg-logogreen">
      <ul className="flex flex-row justify-end items-center pt-2.5">
        <li className="px-2">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-25">
              <select
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={(e: any) => {
                  if (e.target.value !== "") {
                    props.categoryStateManager(e.target.value);
                  }
                  props.loading(false);
                }}
              >
                <option selected value="">
                  Select Category
                </option>
                <option value="Combos">Combos</option>
                <option value="Weight-Management">Weight Management</option>
                <option value="Skincare">Skincare</option>
                <option value="Reset">Reset</option>
                <option value="General-Nutrition">General Nutrition</option>
                <option value="Active-Lifestyle">Active Lifestyle</option>
                <option value="Personal-Care">Personal Care</option>
              </select>
            </div>
          </div>
        </li>
        <li className="mx-1">
          <div className="flex justify-center">
            <div className="mb-3 xl:w-25">
              <select
                className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                onChange={(e: any) => {
                  props.sortStateManager(e.target.value);
                  props.loading(false);
                }}
              >
                <option selected>Sort By Price</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
              </select>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
