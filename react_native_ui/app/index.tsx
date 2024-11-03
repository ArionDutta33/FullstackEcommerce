import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductItemList from "../components/productItemList";
import { Button, ButtonText } from "@/components/ui/button";
import { useBreakpointValue } from "@/components/ui/utils/use-break-point-value";
import { getProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

const HomeScreen = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const numColumns = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });
  if (isLoading) return <ActivityIndicator />;
  if (error) {
     console.log(error.message);
     console.log(error.stack);
  }
 
 
  return (
    <FlatList
      key={numColumns}
      numColumns={numColumns}
      data={data}
      contentContainerClassName="gap-2    max-w-960 mx-auto w-full"
      columnWrapperClassName="gap-2"
      renderItem={({ item }) => <ProductItemList product={item} />}
    />
  );
};

export default HomeScreen;
