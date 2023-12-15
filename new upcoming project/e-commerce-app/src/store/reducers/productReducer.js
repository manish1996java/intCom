import { createSlice } from "@reduxjs/toolkit";

const productsData = [
  { id: "1", name: "glass", price: 200, inStock: 2 },
  { id: "2", name: "Pen", price: 10, inStock: 2 },
  { id: "3", name: "Pot", price: 20, inStock: 2 },
  { id: "4", name: "bottel", price: 90, inStock: 2 },
  { id: "5", name: "bag", price: 40, inStock: 2 },
  { id: "6", name: "cup", price: 50, inStock: 2 },
  { id: "7", name: "phone", price: 7, inStock: 2 },
  { id: "8", name: "copy", price: 5, inStock: 2 },
  { id: "9", name: "fridge", price: 6, inStock: 2 },
  { id: "10", name: "guitar", price: 8, inStock: 2 },
  { id: "11", name: "gun", price: 9, inStock: 2 },
  { id: "12", name: "shoe", price: 8, inStock: 0 },
  { id: "13", name: "clock", price: 200, inStock: 2 },
  { id: "14", name: "bulb", price: 78, inStock: 2 },
];

const initialState = {
  filteredList: productsData,
  products: productsData,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    
  },
});

export default productSlice.reducer;
