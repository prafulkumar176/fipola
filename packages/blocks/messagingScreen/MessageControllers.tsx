import {Component} from 'react';

interface IProps {
  navigation: {navigate: (arg0: string) => void; goBack: () => void};
  totalTextInput: any[];
  textInput: string;
}

// const data = [
//   {
//     query: 'Order Related Query',
//     id: 1,
//   },
//   {
//     query: 'Delivery Related',
//     id: 2,
//   },
//   {
//     query: 'Payment issue',
//     id: 3,
//   },
//   {
//     query: 'App default settings',
//     id: 4,
//   },
// ];
export default class MessageControllers extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {textInput: '', totalTextInput: []};
  }
}
