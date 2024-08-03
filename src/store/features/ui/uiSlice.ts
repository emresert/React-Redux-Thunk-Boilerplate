import { createSlice,createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import { getMethod } from '../../../services/actions/Api';

export const getUsers: any = createAsyncThunk('profileImg', async () => {
    const result: any = await getMethod("users" )
    return result ? result : []
});


const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isAuth: true,
        users:[]
    },
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
            state.users = action.payload;
        });
    },

});

export const {setIsAuth } = uiSlice.actions;
export default uiSlice.reducer;


