import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../Homescreenstyles';
import HomescreenController from '../HomescreenController';

export default class ReceipeFlatCards extends HomescreenController {
  render() {
    const {id, img, title}: any = this.props;
    return (
      <View style={styles.receipesFlatList} key={id}>
        <Image
          source={{
            uri: img,
          }}
          style={styles.receipesImages}
        />
        <Text style={styles.receipesTitle} numberOfLines={1}>
          {title}
        </Text>
      </View>
    );
  }
}
