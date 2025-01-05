import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppStore } from '../store'

export type variantAlert = 'success' | 'warning' | 'error'

interface AlertPayload {
  variant: variantAlert | null
  title?: string | null
  message?: string | null
}

const alertState = {
  variant: null,
  title: null,
  message: null,
} as AlertPayload

//continuar con esto

export const selectAlertInfo = (state: AppStore) => state.alert

export const alertSlice = createSlice({
  name: 'alert',
  initialState: alertState,
  reducers: {
    updateAlert(state, action: PayloadAction<AlertPayload>) {
      state.variant = action.payload.variant
      state.title = action.payload.title
      state.message = action.payload.message
    },
    resetAlert(state) {
      state.title = null
      state.message = null
      state.variant = null
    },
  },
})

export const { updateAlert, resetAlert } = alertSlice.actions
export default alertSlice.reducer
