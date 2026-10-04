import {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)

    const counterStyle = {
        border:'1px solid white',
    }
    return (
        <div style={counterStyle}>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}