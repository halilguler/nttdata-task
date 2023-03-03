import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  favoriteCards: [],
  cardItems: [],
  isShowFavorite: false,
  slicedItems: [],
  favoriteCount: 0,
};
export const getCardsAsync = createAsyncThunk(
  "getCardsAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://honey-badgers-ecommerce.glitch.me/products"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const { id, isFavorite } = action.payload;
      const isExist = state.favoriteCards.find((item) => item.id === id);
      if (!isExist) {
        state.favoriteCards.push({ ...action.payload, isFavorite: true });
      } else {
        state.favoriteCards = state.favoriteCards.filter(
          (item) => item.id !== id
        );
      }
      state.favoriteCount = state.favoriteCards.length;
      state.cardItems = state.cardItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isFavorite: !isFavorite,
          };
        }
        return item;
      });
    },
    setShowFavorite: (state, action) => {
      state.isShowFavorite = action.payload;
    },
  },
  extraReducers: {
    [getCardsAsync.fulfilled]: (state, action) => {
      state.cardItems = action.payload.map((item) => ({
        ...item,
        isFavorite: false,
      }));
    },
  },
});
export const { addToFav, setShowFavorite } = cardsSlice.actions;
export default cardsSlice.reducer;
