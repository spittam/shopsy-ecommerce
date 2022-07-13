import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import axios from "axios";

// importing components
import ShopNav from "../components/ShopNav";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [productList, setProductList] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    axios
    .post(
        category !== ""
          ? `${process.env.REACT_APP_API_BASE_URL}/products/${category}`
          : `${process.env.REACT_APP_API_BASE_URL}/products`,

      )
      .then((res) => {
        setProductList(res.data.Items);
        setLoading(!loading);
      })
      .catch((err: any) => {
        alert(err.message);
      });
  }, [category, sort]);
  return (
    <>
      <Helmet>
        <title>Plexus | Shop</title>
        <meta
                name="description"
                content="Plexus® is for you—yes, you. It’s for who you are today and who you’ll be tomorrow. It’s for your biggest dreams and your craziest goals. It’s for your drive to better yourself and change the world. We know you’ve got it in you. Let’s bring it out—together."
        />
        <meta
                name="keywords"
                content="Gut-Health,
    Weight-Management,
    Skincare"
        />
        <script
                defer
                src="https://kit.fontawesome.com/f89eb210df.js"
                crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div className={loading ? "" : "hidden"}>
        <ShopNav
          categoryStateManager={setCategory}
          sortStateManager={setSort}
          loading={setLoading}
        />

        <div className="grid md:grid-cols-2 ">
          {productList
            .map((product: any) => {
              return (
                <>
                  <ProductCard
                    key={product.ItemCode}
                    ItemCode={product.ItemCode}
                     ImageUrl={product.ImageUrl}
                    Name={product.Name}
                    RetailPrice={product.RetailPrice}
                    CategoryName={product.CategoryName}
                    Description={product.Description}
                  />
                </>
              );
            })}
        </div>
      </div>
      <div className={loading ? "hidden" : "h-500"}>
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "90vh" }}
        >
          <div className="flex">
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full mr-1 animate-bounce200"></div>
            <div className="h-5 w-5 bg-logogreen rounded-full animate-bounce400"></div>
          </div>
          <h1 className="text-2xl text-gray-600">
            Please wait... Fetching products...
          </h1>
        </div>
      </div>
    </>
  );
}
