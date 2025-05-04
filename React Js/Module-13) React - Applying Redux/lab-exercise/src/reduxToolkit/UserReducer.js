import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const UserReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        insert: (state, action) => {
            state.data=[
                ...state.data,
                action.payload
            ]
        },
        update: (state, action) => {
            state.data=state.data.map((i, index) => {
                if (index == action.payload.id) {
                    i.name = action.payload.data.name
                    i.age = action.payload.data.age
                }
                return i
            })
        },
        del: (state, action) => {
            state.data=state.data.filter((i,index) => {
                return index != action.payload
            })
        }
    }
})

export const { insert, update, del } = UserReducer.actions
export default UserReducer.reducer