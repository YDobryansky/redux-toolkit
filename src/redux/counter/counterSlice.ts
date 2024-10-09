import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
      })
      .addCase(decrementAsync.pending, () => {
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      })
      .addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.value -= action.payload;
      });
  }
});

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: number) => {
  return amount;
});

export const decrementAsync = createAsyncThunk('counter/decrementAsync', async (amount: number) => {
  return amount;
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
