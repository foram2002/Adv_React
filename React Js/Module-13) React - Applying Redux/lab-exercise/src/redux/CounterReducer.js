import { add, sub } from "./CounterAction"

const initialState = {
    count: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case add: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case sub: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        default: return state
    }
}

export default CounterReducer
