import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import overlayReducer from "./slices/overlaySlice";
import sidebarReducer from "./slices/sidebarSlice";
import deliveryLocationReducer from "./slices/locationSlice";
import languageReducer from "./slices/languageSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  overlay: overlayReducer,
  sidebar: sidebarReducer,
  deliveryLocation: deliveryLocationReducer,
  language: languageReducer,
});

export default rootReducer;
