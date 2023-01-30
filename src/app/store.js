import { configureStore } from '@reduxjs/toolkit';

import { crpytoApi } from '../services/cryptoApi';

export const store = configureStore({
    reducer: {
        [ crpytoApi.reducerPath ] : crpytoApi.reducer
    },
});