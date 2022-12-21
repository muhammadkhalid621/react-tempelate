import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWidgets = createAsyncThunk('productsDashboardApp/widgets/getWidgets', async () => {
  // const response = await axios.get('/api/dashboards/products/widgets');
  const response = {}

  const data = await response.data;

  return data;
});

const widgetsSlice = createSlice({
  name: 'productsDashboardApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ productsDashboardApp }) => productsDashboardApp.widgets;

export default widgetsSlice.reducer;
