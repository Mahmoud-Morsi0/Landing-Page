import { subscribe } from "diagnostics_channel"
import {
    createStore,
    bindActionCreators,
} from "redux"

const initialState = { value: 0 }
const increment = () => ({ type: "INCREMENT" })
const add = (mount) => ({ type: "ADD", bayload: mount })
const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return { value: state.value + 1 }
    }
    if (action.type === "ADD") {
        return { value: state.value + action.bayload }
    }
}


const store = createStore(reducer)
const subscriber = () => console.log("subscribe", store.getState())


const actions = bindActionCreators({ increment, add }, store.dispatch)

store.subscribe(subscriber)
actions.increment()
actions.add(1000)

// console.log(store.getState())

