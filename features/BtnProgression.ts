import ProgressionSlider from "@/app/components/ProgressionSlider";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface btnProgression {
  value: number;
}
const initialState: btnProgression = {
  value: 1,
};

const progressionSlider = createSlice({
  name: "progressionSlider",
  initialState,
  reducers: {
    changeId: (state, actions: PayloadAction<number>) => {
      state.value = actions.payload;
    },
  },
});

export const { changeId } = progressionSlider.actions;
export default progressionSlider.reducer;
