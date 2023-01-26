import { buildQueryLifecycleHandler } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/queryLifecycle';
import { createApi, fetchBaseQuery, fetchBaserQuery } from '@reduxjs/toolkit/query';

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const cryptoApiHeaders = {
    'X-RapidAPI-Key': '08ef291ffdmsh92544d081655cdap15c508jsn7aa93645b9e5',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const createRequest = (url) => ({url,header: cryptoApiHeaders});

export const crpytoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchange')
        })         
    })
});