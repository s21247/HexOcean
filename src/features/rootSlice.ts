import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  preparation_time: string;
  name: string;
  type: string;
  no_of_slices: number;
  diameter: number;
  spiciness_scale: number;
  slices_of_bread: number;
}

export interface OrderState {
  value: Order[];
}

const initialState: OrderState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addOrder } = customerSlice.actions;

export default customerSlice.reducer;
