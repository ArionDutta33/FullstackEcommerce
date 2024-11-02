import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React from "react";
import products from "../assets/products.json";
import ProductItemList from "../components/productItemList";
import { Button, ButtonText } from "@/components/ui/button";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";

const HomeScreen = () => {
  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });
  return (
    <FlatList
      key={numColumns}
      numColumns={numColumns}
      data={products}
      contentContainerClassName="gap-2  max-w-960 mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductItemList product={item} />}
    />
  );
};

export default HomeScreen;
