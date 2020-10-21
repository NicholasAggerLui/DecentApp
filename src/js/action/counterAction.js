
export const increment = () => ({
    type: 'INCREMENT',
  })

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export default {
    increment,
    decrement
}