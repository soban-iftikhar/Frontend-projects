import React, {  useState } from 'react'



const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>
                This is my counter count
            </p>
            <div style={{
                display: 'flex',
                justifyContent: "flex-start",
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px'
            }}>

               {count < 0 ? null : <button id='decrement'
                    onClick={() => setCount(count - 1)}
                >-</button>}
                <p id='counter'>{count < 0 ? "You are going in negative values" : count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>

        </div>
    )
}

export default Counter