import {combineReducers} from '@reduxjs/toolkit';
import {
  Addnewaddress,
  AddtoCartReducer,
  CategoryAddToCart,
  DeliveryPincodeReducer,
} from './Reducer';

export const rootReducer = combineReducers({
  AddtoCartReducer: AddtoCartReducer,
  Addnewaddress: Addnewaddress,
  DeliveryPincodeReducer: DeliveryPincodeReducer,
  CategoryAddToCart: CategoryAddToCart,
});
