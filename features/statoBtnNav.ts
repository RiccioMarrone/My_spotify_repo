import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface firstState {
  value: string;
}
const initialState: firstState = {
  value: "home",
};

const routeName = createSlice({
  name: "routeName",
  initialState,
  reducers: {
    changeName: (state, actions: PayloadAction<string>) => {
      state.value = actions.payload;
    },
  },
});

export const { changeName } = routeName.actions;
export default routeName.reducer;
