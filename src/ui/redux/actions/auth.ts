// features/auth/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/infraestructure/api/axiosConfig'
import { Error } from '@/lib/errorHandler'

interface LoginUserArgs {
  email: string
  password: string
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }: LoginUserArgs, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/user/create', { email, password })

      return response.data
    } catch (error) {
      const err = error as Error

      return rejectWithValue(err.response?.data.message || err.code)
    }
  },
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginUserArgs, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/auth/login', { email, password })

      return response.data
    } catch (error) {
      const err = error as Error

      return rejectWithValue(err.code)
    }
  },
)
