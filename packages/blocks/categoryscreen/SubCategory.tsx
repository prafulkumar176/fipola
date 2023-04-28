import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './CategoryscreenStyles';

import CategoryscreenController from './CategoryscreenController';
import FlatListCards2 from './FlatListCards2';
import {individualItemdata} from './config';

export default class SubCategory extends CategoryscreenController {
  render() {
    // console.log(this.props);
    // console.log(this.state.updatedData, 'updatedone');

    return (
      <View style={styles.flatlistContainer}>
        <FlatList
          data={individualItemdata[this.props.route.params.id - 1].data}
          numColumns={2}
          renderItem={({item}) => (
            <FlatListCards2
              id={item.id}
              type={item.type}
              title={item.title}
              quantity={item.quantity}
              actualPrice={item.actualPrice}
              offPrice={item.offPrice}
              img={item.img}
              navigation={undefined}
            />
          )}
        />
      </View>
    );
  }
}
