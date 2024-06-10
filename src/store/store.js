import { configureStore, createSlice } from "@reduxjs/toolkit"
import { subscribe } from "diagnostics_channel"
import {
    createStore,
    bindActionCreators,
} from "redux"



const userSlice = createSlice({
    name: "USERS",
    initialState: { name: "", age: "" },
    reducers: {
        login: (state, action) => {

            state.name = action.payload.name
            state.age = action.payload.age
        },

    }

})

export const { login } = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})

const subscriber = () => {

    console.log(store.getState())
}

store.subscribe(subscriber)

store.dispatch(login({ name: "Morsi", age: "26" }))
store.dispatch(login({ name: "Mahmoud", age: "27" }))
store.dispatch(login({ name: "Morsi", age: "28" }))
store.dispatch(login({ name: "Morsi", age: "29", adress: "cairo" }))











// const initialState = { value: 0 }
// const increment = () => ({ type: "INCREMENT" })
// const add = (mount) => ({ type: "ADD", bayload: mount })
// const reducer = (state = initialState, action) => {
//     if (action.type === "INCREMENT") {
//         return { value: state.value + 1 }
//     }
//     if (action.type === "ADD") {
//         return { value: state.value + action.bayload }
//     }
// }


// const store = createStore(reducer)
// const subscriber = () => console.log("subscribe", store.getState())


// const actions = bindActionCreators({ increment, add }, store.dispatch)

// store.subscribe(subscriber)
// actions.increment()
// actions.add(1000)

// console.log(store.getState())

