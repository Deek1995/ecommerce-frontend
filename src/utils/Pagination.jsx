import React, { useState } from "react";
import { convertNumberInNumerals } from "../pages/product/utils/ConvertNumberInNumerals";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Pagination = ({ products, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const numberedPages = [1, 2, 3, 4];
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // console.log("Products", products);
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {currentProducts?.map((ele) => {
          return (
            <ProductGridCard
              key={ele.ProductId}
              product_id={ele.ProductId}
              ele={ele}
            />
          );
        })}
      </div>
      <div className="flex border-gray-200 border items-center rounded-xl w-max mx-auto mt-20">
        <div
          className={`flex items-center p-4 cursor-pointer ${
            currentPage === 1
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <MdOutlineKeyboardArrowLeft />
          Previous
        </div>
        {
          <ul className="flex">
            {numberedPages?.map((number, index) => {
              return (
                <li
                  key={number}
                  className={`p-4 px-6 cursor-pointer${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {number}
                </li>
              );
            })}
          </ul>
        }
        <div
          className={`flex items-center p-4 px-6 cursor-pointer${
            currentPage === totalPages
              ? "opacity-25 cursor-not-allowed pointer-events-none"
              : "none"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

const ProductGridCard = ({ product_id, ele }) => {
  const price = convertNumberInNumerals(ele.Price);
  // console.log(product_id);
  const navigate = useNavigate();
  // const data = { id: product_id };

  const handleClick = () => {
    console.log("Clicking");
    const product_id = ele.ProductId;
    navigate(`/products/product/${product_id}`, { state: ele });
  };

  return (
    <>
      <div className="border-4 border-gray-200 w-[290px]" onClick={handleClick}>
        <img src={ele.Images[1]} className="w-full h-52" />
        <div className="p-4">
          <div className="font-bold text-lg text-wrap">
            {ele.ProductDescription}
          </div>
          <div className="font-bold">{ele.ProductName}</div>
          <div className="text-sm">rating</div>
          <div className="font-bold text-3xl mt-5">{price}</div>
          <div className="text-sm my-2">Free Delivery</div>
          <button className="border-yellow-500 rounded-3xl bg-yellow-500 text-black px-3 py-1 mx-auto inline text-sm">
            AddtoCart
          </button>
        </div>
      </div>
    </>
  );
};
