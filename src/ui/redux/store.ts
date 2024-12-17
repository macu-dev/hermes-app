import { UserInfo } from '../../domain/entities/User'
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './states/auth'
import { api } from '../../infraestructure/api/api'
import { alertSlice, variantAlert } from './states/alert'

export interface AppStore {
  auth: {
    loading: boolean
    userInfo: UserInfo | null
    error: null | string
    success: boolean
  }
  alert: {
    variant: variantAlert | null
    title: string | null
    message: string | null
  }
}

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
