import { View, Text } from "react-native";
import React from "react";

const ProductItemList = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default ProductItemList;
