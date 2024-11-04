// src/infrastructure/apis/customBaseQuery.ts
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import { AxiosError } from 'axios'
import apiClient from './axiosConfig'

const axiosBaseQuery: BaseQueryFn<
  {
    url: string
    method: 'get' | 'post' | 'put' | 'delete'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any
  },
  unknown,
  unknown
> = async ({ url, method, data, params }) => {
  try {
    const result = await apiClient({
      url,
      method,
      data,
      params,
    })

    return { data: result.data }
  } catch (axiosError) {
    const err = axiosError as AxiosError

    return {
      error: { status: err.response?.status, data: err.response?.data || err.message },
    }
  }
}

export default axiosBaseQuery
