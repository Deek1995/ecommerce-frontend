import React from "react";
import { images } from "../../../assets/images/index";

export const Cartpage = () => {
  return (
    <div>
      <div className="w-full min-w-[998px] h-[450px] bg-[#EAEDED] px-[18px] py-3.5 my-0 mx-auto">
        <div className="max-w-[1500px] m-auto text-sm leading-5 ">
          <div className="pt-14 pb-[15px] bg-[#fff]  mb-5 flex mr-5  ">
            <img
              className="w-[365px] h-[209px] "
              src={images.emptyCartKettle}
            />
            <div className="ml-5 ">
              <h3 className="font-bold text-[24px] leading-8">
                {" "}
                Your Amazon Cart is empty{" "}
              </h3>
              <div className="flex mt-10 gap-2">
                <div className="rounded-3xl border-black border-2 bg-orange-400 text-sm px-4 py-1">
                  Sign in to your account
                </div>
                <div className="rounded-3xl border-black border-2 text-sm px-4 py-1 ">
                  Sign up now
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1500px] bg-[#fff]  h-[74px] pt-5 pb-[15px] mb-5 mr-5"></div>
          <div className="text-xs">
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price. Do you have a
            promotional code? We'll ask you to enter your claim code when it's
            time to pay.
          </div>
        </div>
      </div>
    </div>
  );
};
