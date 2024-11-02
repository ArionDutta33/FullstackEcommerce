import { View, Text, FlatList } from "react-native";
import React from "react";
import products from "../assets/products.json";
import ProductItemList from "../components/productItemList";

const HomeScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItemList product={item} />}
    />
  );
};

export default HomeScreen;
