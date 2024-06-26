import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import fetchData from 'src/utils/requests/fetchData';
import {
  clientSubscriptionsSchema,
  type ClientSubscriptionsModel,
} from 'src/models/clientsSubscriptionsSchema';

interface FetchSubscriptionsParams {
  clientId: number;
  isActive?: boolean;
}

const CLIENT_URL = import.meta.env.VITE_CLIENT_URL;

export const fetchClientSubscriptions = createAsyncThunk<
  ClientSubscriptionsModel,
  FetchSubscriptionsParams,
  { rejectValue: string; state: RootState }
>(
  'subscriptions/fetchClient',
  async ({ isActive }, { rejectWithValue, getState }) => {
    const token = getState().token.access_token;
    const queryParams = new URLSearchParams();
    if (isActive !== undefined)
      queryParams.append('is_active', isActive.toString());
    const url = `${CLIENT_URL}subscriptions/?${queryParams.toString()}`;
    return fetchData(url, clientSubscriptionsSchema, rejectWithValue, token);
  }
);

interface ClientSubscriptionsProps {
  data: ClientSubscriptionsModel | null;
  loading: boolean;
  error: string | null;
}

const initialState: ClientSubscriptionsProps = {
  data: null,
  loading: false,
  error: null,
};

const clientSubscriptionsSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchClientSubscriptions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClientSubscriptions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchClientSubscriptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default clientSubscriptionsSlice.reducer;
