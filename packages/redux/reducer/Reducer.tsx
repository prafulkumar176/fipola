import {
  ADD_TO_CART,
  CATEGORY_ADD_TO_CART,
  CATEGORY_DECREMENT_QUANTITY,
  CATEGORY_INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_CATEGORY_ITEM,
  DELETE_CURRENT_ADDRESS,
  DELETE_ITEM_FROM_CART,
  DELIVERY_LOCATION_PINCODE,
  INCREMENT_QUANTITY,
  NEW_ADDRESS,
} from '../action/ActionName';

const InitialVals = {
  productData: [],
  product_qantity: 0,
};
const AddAddressVals: any = {
  allAddress: [],
  totalPrice: 0,
  // Category: false,
};
const CategoryAddToCartData: any = {
  categoryData: [],
};

export const AddtoCartReducer = (state = InitialVals, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        productData: [...state.productData, action.payload],
      };
    }
    case INCREMENT_QUANTITY: {
      return {
        ...state,
        productData: state.productData.map((v: any) =>
          v.id === action.payload ? {...v, quantity: v.quantity + 1} : v,
        ),
      };
    }
    case DECREMENT_QUANTITY: {
      return {
        ...state,
        productData: state.productData.map((v: any) =>
          v.id === action.payload ? {...v, quantity: v.quantity - 1} : v,
        ),
      };
    }
    case DELETE_ITEM_FROM_CART: {
      console.log(action.payload, 'HDJHDFJKHJFKDHJGFD');

      let updatedArr = state.productData.filter((v: any) => {
        if (v.id !== action.payload) {
          return v;
        }
      });
      return {
        ...state,
        productData: updatedArr,
      };
    }
    default:
      return state;
  }
};

export const Addnewaddress = (state = AddAddressVals, action: any) => {
  switch (action.type) {
    case NEW_ADDRESS: {
      return {
        ...state,
        allAddress: [...state.allAddress, action.payload],
      };
    }
    case DELETE_CURRENT_ADDRESS: {
      return {
        ...state,
        allAddress: state.allAddress.filter((v: any) => {
          return v.id !== action.payload;
        }),
      };
    }
    default:
      return state;
  }
};

export const DeliveryPincodeReducer = (state = {pincode: ''}, action: any) => {
  switch (action.type) {
    case DELIVERY_LOCATION_PINCODE: {
      return {
        ...state,
        pincode: action.payload,
      };
    }

    default:
      return state;
  }
};

export const CategoryAddToCart = (
  state = CategoryAddToCartData,
  action: any,
) => {
  switch (action.type) {
    case CATEGORY_ADD_TO_CART: {
      return {
        ...state,
        categoryData: [...state.categoryData, action.payload],
      };
    }
    case CATEGORY_INCREMENT_QUANTITY: {
      return {
        ...state,
        categoryData: state.categoryData.map((v: any) =>
          v.id === action.payload
            ? {
                ...v,
                quantity: v.quantity + 1,
                isCategoryProductPresent: true,
              }
            : v,
        ),
      };
    }
    case CATEGORY_DECREMENT_QUANTITY: {
      return {
        ...state,
        categoryData: state.categoryData.map((v: any) =>
          v.id === action.payload ? {...v, quantity: v.quantity - 1} : v,
        ),
      };
    }
    case DELETE_CATEGORY_ITEM: {
      let updatedone = state.categoryData.filter((v: any) => {
        return v.title !== action.payload;
      });
      return {
        ...state,
        categoryData: updatedone,
      };
    }

    default:
      return state;
  }
};
