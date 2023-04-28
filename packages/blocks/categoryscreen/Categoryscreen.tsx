/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoryscreenController from './CategoryscreenController';
import {styles} from './CategoryscreenStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Categoryscreen extends CategoryscreenController {
  render() {
    // console.log(this.state.updatedData);
    return (
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.topBarContainer}>
            <Text style={styles.headingText}>Our Category</Text>
          </View>

          <View style={styles.searchBarContainer}>
            <AntDesign
              name="search1"
              size={20}
              color="#A4A1A1"
              style={{marginLeft: 10}}
            />
            <TextInput
              placeholder="Search..."
              style={styles.inputField}
              onChangeText={e => this.handleTextInput(e)}
            />
          </View>

          <FlatList
            style={{marginTop: 5}}
            numColumns={2}
            data={this.state.updatedData}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => this.handleNavigate(item)}>
                  <View style={styles.itemView}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.title1}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
