import {Component} from 'react';

interface IProps {
  navigation: any;
  productData: any;
  removeItem: any;
  categoryData: any[];
  actualprice: (totalprice: number) => void;
  addtocart: (addtocart: {
    id: string;
    title: string;
    quantity: string;
    actualPrice: string;
    offPrice: string;
    img: string;
  }) => void;
  IncrementQuantity: (IncrementQuantity: number) => void;
  removeitemCategory: any;
}
export default class CartControllers extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
}
