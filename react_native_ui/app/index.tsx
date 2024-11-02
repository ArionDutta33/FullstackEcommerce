import { View, Text, FlatList } from "react-native";
import React from "react";
import products from "../assets/products.json";
import ProductItemList from "../components/productItemList";
import { Button, ButtonText } from "@/components/ui/button";

const HomeScreen = () => {
  return (
    <FlatList
      numColumns={2}
      data={products}
      contentContainerClassName="gap-2"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductItemList product={item} />}
    />
  );
};

export default HomeScreen;
