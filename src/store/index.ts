import { configureStore,createAsyncThunk } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import uiReducer from './features/ui/uiSlice';
import { getUserInfoToken } from '../helper/Utils';
import { getMethod } from '../services/actions/Api';

export const getNotificationCount: any = createAsyncThunk('notifications/getNotificationCount', async () => {
    const result:any = await getMethod(
        "CommunityUser/GetTotalConfirmationCountOfUser",
        getUserInfoToken()
    )
    return result.isSucceed ? result.singleData : 0
});


export const store = configureStore({
    reducer: {
        ui: uiReducer
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

