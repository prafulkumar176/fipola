import {Component} from 'react';

interface IProps {
  navigation: {navigate: (arg: string) => void};
  newaddress: (values: {
    flatAddress: string;
    cityName: string;
    pincode: string;
  }) => void;
}
interface IState {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: any;
  coordinates: Names[];
  marker: Object;
}
interface Names {
  latitude: number;
  longitude: number;
}
export default class AddnewaddressControllers extends Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
  }
  state: IState = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    coordinates: [],
    marker: {
      latitude: 0,
      longitude: 0,
    },
  };
}
