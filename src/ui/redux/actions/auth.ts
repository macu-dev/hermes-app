// features/auth/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from '@/infraestructure/api/axiosConfig'

interface LoginUserArgs {
  email: string
  password: string
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password }: LoginUserArgs, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/auth/user/register', { email, password })

      return response.data
    } catch (error) {
      const err = error as Error

      return rejectWithValue(err.message || 'Error en el registro')
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

      return rejectWithValue(err.message || 'Error en el login')
    }
  },
)
