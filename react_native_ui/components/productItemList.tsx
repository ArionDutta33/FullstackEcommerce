import { Pressable, useWindowDimensions, View } from "react-native";
import React from "react";
import { Card } from "./ui/card";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
import { VStack } from "./ui/vstack";
import { Button, ButtonText } from "./ui/button";
import { Heading } from "./ui/heading";
import { Box } from "./ui/box";
import { Link } from "expo-router";
const ProductItemList = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg   flex-1 ">
          <Image
            source={{
              uri: `${product.image}`,
            }}
            alt={product.name}
            resizeMode="contain"
            className="mb-6 h-[240px] w-full rounded-md"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <Heading size="md" className="mb-4">
            ₹ {product.price}
          </Heading>
        </Card>
      </Pressable>
    </Link>
  );
};

export default ProductItemList;
