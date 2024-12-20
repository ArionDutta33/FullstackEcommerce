import React from "react";
import "@/global.css";

import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/store/authStore";
const queryClient = new QueryClient();
const RootLayout = () => {
  const cartItems = useCart((state) => state.items.length);
  const isLoggedIn = useAuth((state) => !!state.token);

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider>
        <Stack
          screenOptions={{
            headerRight: () => (
              <Link href={"/cart"} asChild>
                <Pressable className="flex-row gap-2">
                  <AntDesign name="shoppingcart" size={24} color="black" />
                  <Text>{cartItems}</Text>
                </Pressable>
              </Link>
            ),
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Shop",
              headerTitleAlign: "center",
              headerLeft: () =>
                !isLoggedIn && (
                  <Link href={"/login"} asChild>
                    <Pressable className="flex-row gap-2">
                      <AntDesign name="user" size={24} color="black" />
                    </Pressable>
                  </Link>
                ),
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
