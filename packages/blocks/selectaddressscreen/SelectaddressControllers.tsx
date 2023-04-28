import {Component} from 'react';
import {Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

interface IProps {
  productData: any[];
  navigation: {
    goBack: () => void;
    navigate: (arg0: string, currentAddress: any) => void;
  };
  allAddress: {
    flatAddress: string;
    cityName: string;
    pincode: string;
    id: string;
  }[];
  deleteAddress: (pincode: string) => void;
  route: {params: {totalPrice: number; cartdata: any[]}};
}
interface IState {
  isModalVisible: boolean;
}
export default class SelectaddressControllers extends Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
    this.state = {isModalVisible: false};
  }
  handlePayment = () => {
    let actualprice = this.props.route.params.totalPrice;
    console.log(actualprice, 'from payment');
    let cartdata = this.props.route.params.cartdata;
    console.log(cartdata);

    // let actualPrice = this.props?.productData
    //   .map((v: any) => v.actualPrice.slice(1))
    //   .reduce((acc: any, cur: any) => parseInt(acc) + parseInt(cur));
    var options: any = {
      description: 'Credits towards consultation',
      image:
        'data:image/png;base64,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',
      currency: 'INR',
      key: 'rzp_test_locuRaWt3KL2uf', // Your api key
      amount: actualprice * 100,
      name: 'Fipola',
      prefill: {
        email: 'void@razorpay.com',
        contact: '8179466343',
        name: 'Products',
      },
      theme: {color: '#F5BF45'},
    };
    RazorpayCheckout.open(options)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(data => {
        console.log(data);

        // handle success
        // Alert.alert(`Success: ${data.razorpay_payment_id}`);
        this.props.navigation.navigate('OrderSuccessfull');
      })
      .catch(error => {
        // handle failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };
}
