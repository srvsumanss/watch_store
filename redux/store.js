import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ProductsReducer } from "./reducers/ProductReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderReducer } from "./reducers/orderReducers";


const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    products: ProductsReducer,
    cart: cartReducer,
    order: orderReducer,
   
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
