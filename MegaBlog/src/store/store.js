import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
const store = configureStore({
    reducer: 
    {
        auth: authSlice
        // TODO: need to add more post slices here 
    }
}
)

export default store