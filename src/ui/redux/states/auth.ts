import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '../../../domain/entities/User'
import { loginUser, registerUser } from '../actions/auth'

interface autSlice {
  loading: boolean
  userInfo: UserInfo | null
  error: null | string
  success: boolean
}

const initialState: autSlice = {
  loading: false,
  userInfo: null, // for user object
  error: null,
  success: false, // for monitoring the registration process.
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload as string
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false
        state.success = true
        //state.userInfo = payload //
        // we should consume the api user information
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false
        state.error = payload as string
      })
  },
})
