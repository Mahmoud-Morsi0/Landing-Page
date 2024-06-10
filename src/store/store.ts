import User from "@/pages/user"
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { subscribe } from "diagnostics_channel"
import { Action } from "@radix-ui/react-toast";


const initialState: User[] = []

const userSlice = createSlice({
    name: "users",

    initialState,
    reducers: {
        setUsers (state, action: PayloadAction<User[]>) {
            return action.payload;
        },
        addUser(state, action: PayloadAction<User>) {
            state.push(action.payload);
        },
        removeUser(state, action: PayloadAction<number>) {
            return state.filter(user => user.id !== action.payload);
        },
        updateUser(state, action: PayloadAction<User>) {
            const index = state.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }

        }
    },
}
)


//Creat Counter Slice with 3 types of Actions Increment decrement and set a value
const counterSlice = createSlice({
    name: "Counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        set: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setUsers, addUser, removeUser, updateUser } = userSlice.actions
export const { increment, decrement, set } = counterSlice.actions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        counter: counterSlice.reducer,
    },
})

const subscriber = () => {

    console.log(store.getState())
}

store.subscribe(subscriber)


store.dispatch(increment())
store.dispatch(set(10))




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

