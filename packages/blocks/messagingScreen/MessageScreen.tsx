/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './MessageScreenStyles';
import MessageControllers from './MessageControllers';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');
const data = [
  {
    query: 'Order Related Query',
    id: 1,
  },
  {
    query: 'Delivery Related',
    id: 2,
  },
  {
    query: 'I need your help',
    id: 3,
  },
  {
    query: 'App default settings',
    id: 4,
  },
];

export default class MessageScreen extends MessageControllers {
  render() {
    console.log(this.state.totalTextInput);

    return (
      <ScrollView automaticallyAdjustContentInsets={true}>
        <View style={{height: height}}>
          <View style={styles.topBarContainer}>
            <TouchableOpacity
              style={{position: 'absolute', zIndex: 1, top: 20, left: 10}}
              onPress={() => this.props.navigation.goBack()}>
              {/* <Feather size={25} color={'black'} name="arrow-left" /> */}
              <Text
                style={{
                  color: '#18161B',
                  fontWeight: '600',
                  fontSize: 20,
                  lineHeight: 40,
                  textTransform: 'capitalize',
                }}>
                Fipola
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DrawerNavigation')}
              style={{
                position: 'absolute',
                alignSelf: 'flex-end',
                top: 15,
                right: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#E7AC27',
                  padding: 7,
                }}>
                <Entypo name="cross" color="white" size={25} />
              </View>
            </TouchableOpacity>
          </View>
          {this.state.totalTextInput.map((v: any) => {
            return (
              <View key={v.id}>
                <Text>{v.message}</Text>
              </View>
            );
          })}

          <FlatList
            horizontal={true}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: 190,
                  height: 50,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 60,
                  alignSelf: 'flex-end',
                  marginBottom: 90,
                  // marginHorizontal: 5,
                  marginLeft: 15,
                  padding: 9,
                }}
                onPress={() => console.log(item.query)}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 15,
                    lineHeight: 24,
                    textTransform: 'capitalize',
                    color: '#18161B',
                    opacity: 0.8,
                  }}>
                  {item.query}
                </Text>
              </TouchableOpacity>
            )}
          />

          <View
            style={{
              //   flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 0,
              //   paddingHorizontal: 20,
            }}>
            <TextInput
              style={{
                width: width,
                height: 75,
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 30,
              }}
              placeholder="Type Your Message"
              onChangeText={e => this.setState({textInput: e})}
              value={this.state.textInput}
            />
            {this.state.textInput === '' ? (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 25,
                }}>
                <MaterialIcons name="attach-file" size={30} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  alignSelf: 'center',
                  right: 25,
                }}
                onPress={() =>
                  this.setState({
                    totalTextInput: [
                      ...this.state.totalTextInput,
                      {message: this.state.textInput, id: Date.now()},
                    ],
                    textInput: '',
                  })
                }>
                <MaterialIcons name="send" size={30} color="black" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}
