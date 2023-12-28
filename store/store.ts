import { configureStore } from "@reduxjs/toolkit";
import routeName from "../features/statoBtnNav";
import progressionSlider from "../features/BtnProgression";
const store = configureStore({
  reducer: {
    routeName,
    progressionSlider,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
