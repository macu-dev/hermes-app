import { api } from './api'

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: '/user/profile',
        method: 'get',
        credentials: 'include',
      }), // cambiar la url
    }),
  }),
})

export const { useGetUserProfileQuery } = userApi
