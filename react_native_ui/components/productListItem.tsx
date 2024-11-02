import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductListItem = ({ product }) => {
  return <Text>{product.name}</Text>;
};

export default ProductListItem;

const styles = StyleSheet.create({});
