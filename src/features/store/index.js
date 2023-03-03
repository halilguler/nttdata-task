import { configureStore } from "@reduxjs/toolkit";

import reducer from "../../pages/index";

const store = configureStore({
  reducer: {
    reducer,
  },
});

export default store;
