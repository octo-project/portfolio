import { createSlice, PayloadAction} from "@reduxjs/toolkit"

interface AppState {
    locale: string;
}

const  initialState: AppState = {
    locale: 'fr'
}

const AppSlice = createSlice({
    name: 'app',
    initialState, 
    reducers: {
        setLocale: (state, action: PayloadAction<string>) => {
            state.locale = action.payload
        }
    }
})

export const {setLocale} =AppSlice.actions
export default AppSlice.reducer