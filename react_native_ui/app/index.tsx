import { View, Text, FlatList } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import products from "../assets/products.json";
import ProductListItem from "../components/productListItem";

const index = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
};

export default index;
