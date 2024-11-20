import { UserInfo } from '../../domain/entities/User'
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './states/auth'
import { api } from '../../infraestructure/api/api'

export interface AppStore {
  user: UserInfo
  auth: {
    loading: boolean
    userInfo: UserInfo | null
    error: null | string
    success: boolean
  }
}

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
