export const add = "INCREMENT"
export const sub = "DECREMENT"

export const addCounter = () => {
    return {
        type: add
    }
}
export const subCounter = () => {
    return {
        type: sub
    }
} 