import { View, Text, FlatList, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import products from "../assets/products.json";
import ProductItemList from "../components/productItemList";
import { Button, ButtonText } from "@/components/ui/button";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { getProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

const HomeScreen = () => {
  useQuery({ queryKey: ["products"] });

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
      contentContainerClassName="gap-2    max-w-960 mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductItemList product={item} />}
    />
  );
};

export default HomeScreen;
