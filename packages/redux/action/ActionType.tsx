import {
  ADD_TO_CART,
  DECREMENT_QUANTITY,
  DELETE_CATEGORY_ITEM,
  DELETE_CURRENT_ADDRESS,
  DELETE_ITEM_FROM_CART,
  DELIVERY_LOCATION_PINCODE,
  INCREMENT_QUANTITY,
  NEW_ADDRESS,
} from './ActionName';

export const addtocart = (payload: any) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};
export const incrementQantity = (payload: any) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: payload,
  };
};
export const decrementQantity = (payload: any) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: payload,
  };
};

export const deletFromCart = (payload: any) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: payload,
  };
};

export const newadress = (payload: any) => {
  return {
    type: NEW_ADDRESS,
    payload: payload,
  };
};
export const deliveryLocationPincode = (payload: any) => {
  return {
    type: DELIVERY_LOCATION_PINCODE,
    payload: payload,
  };
};

export const categoryAddToCart = (payload: any) => {
  return {
    type: DELIVERY_LOCATION_PINCODE,
    payload: payload,
  };
};

export const deleteCurrentAddress = (payload: any) => {
  return {
    type: DELETE_CURRENT_ADDRESS,
    payload: payload,
  };
};
export const deleteCategoryItem = (payload: any) => {
  return {
    type: DELETE_CATEGORY_ITEM,
    payload: payload,
  };
};
