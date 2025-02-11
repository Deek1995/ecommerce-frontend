import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { MainHeader } from "./../components/headers/mainHeader/MainHeader";
import { SecondaryHeader } from "./../components/headers/secondaryHeader/SecondaryHeader";
import { Footer } from "./../components/footer/Footer";
import { HomePage } from "../pages/homepage/components/HomePage";
import { ProductsPage } from "../pages/productsgridpage/components/ProductsPage";
import { ProductPage } from "../pages/product/components/ProductPage";
import { Cartpage } from "../pages/cartpage/components/Cartpage";
import { AccountCheck } from "./../pages/signin/components/AccountCheck";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/signin" element={<SignInPage />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin/auth" element={<AccountCheck />} />

      <Route
        path="/"
        element={
          <>
            <MainHeader />
            <SecondaryHeader />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="/home" element={<HomePage />} />
        <Route path="/products/:filter?" element={<ProductsPage />} />
        <Route path="/products/product/:productId?" element={<ProductPage />} />
        <Route path="/cart" element={<Cartpage />} />
      </Route>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );
};
