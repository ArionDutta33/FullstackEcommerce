const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  return data;
}
