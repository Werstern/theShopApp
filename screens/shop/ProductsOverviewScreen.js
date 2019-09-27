import React from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux'; 

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList 
      data={products} 
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.title}</Text>} 
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All products'
}

export default ProductsOverviewScreen;