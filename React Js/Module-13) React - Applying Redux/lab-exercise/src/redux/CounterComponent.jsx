import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, subCounter } from './CounterAction'

const CounterComponent = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    const minusFunc = () => {
        dispatch(subCounter())
    }
    return (
        <div>
            <h1>Counter Example</h1>
            <h3>Count is {count}</h3>
            <button onClick={() => dispatch(addCounter())}>increment</button>
            <button onClick={minusFunc}>Decrement</button>
        </div>
    )
}   

export default CounterComponent
