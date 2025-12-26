import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload; 
      const existingItem = state.items.find(item => item.name === product.name);

      if (existingItem) { // Si el producto ya existe, incrementa la cantidad 
      existingItem.quantity += 1; 
      }
      else { // Si es nuevo, agrégalo con cantidad inicial 1 
      state.items.push({ ...product, quantity: 1 }); 
      }
    },
    removeItem: (state, action) => {
      const productName = action.payload; 
      state.items = state.items.filter(item => item.name !== productName);
    },
    updateQuantity: (state, action) => {
      const { productName, quantity } = action.payload; const existingItem = state.items.find(item => item.name === productName); 
      if (existingItem) { existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
