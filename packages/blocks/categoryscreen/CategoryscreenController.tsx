import {Component} from 'react';
import {data} from './config';

interface IProps {
  navigation: any;
  id: any;
  type: any;
  title: any;
  quantity: any;
  actualPrice: any;
  offPrice: any;
  img: any;
}
interface Istate {
  updatedData: any[];
  CategoryId: number;
  inputText: string;
}
export default class CategoryscreenController extends Component<
  IProps,
  Istate
> {
  constructor(props: IProps) {
    super(props);
    this.state = {CategoryId: 0, updatedData: data, inputText: ''};
  }

  handleNavigate = (data: any) => {
    this.props.navigation.navigate('SubCategory', {
      id: data.id,
      title: data.title,
    });
  };

  handleTextInput = (e: any) => {
    // this.setState({inputText: e});
    let newArr = data.filter(v => {
      return v.title.toLowerCase().includes(e);
    });

    this.setState({updatedData: newArr});
  };
}
