import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  status: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
  },
  loading: false,
  error: null,
};

export const logout = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Additional:can be add login or setUser here! if manual login
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
