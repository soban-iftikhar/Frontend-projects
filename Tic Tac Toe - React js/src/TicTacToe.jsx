import React, { useState } from 'react'
import circle from './assets/circle.svg'
import cross from './assets/cross.svg'


const TicTacToe = () => {

    const [data, setData] = useState(Array(9).fill(''));
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);

    function toggle(index) {
        if (lock || data[index] !== '') return;

        const newData = [...data];
        newData[index] = count % 2 === 0 ? 'x' : 'o';
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
    }

    function setIcon(index) {
        if (data[index] === 'x') return <img src={cross} alt="cross" />;
        if (data[index] === 'o') return <img src={circle} alt="circle" />;
        return null;
    }

    function checkWin(board) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let [a, b, c] of winPatterns) {
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                alert(`Player ${board[a] === 'x' ? 1 : 2} wins!`);
                setLock(true);
                return;
            }
        }
    }

    return (
        <>
            <section className='tictactoe'>
                <h1>Tic Tac Toe</h1>
                <div className='board'>
                    <div className='row1'>
                        <div className='block' onClick={() => toggle(0)}>{setIcon(0)}</div>
                        <div className='block' onClick={() => toggle(1)}>{setIcon(1)}</div>
                        <div className='block' onClick={() => toggle(2)}>{setIcon(2)}</div>
                    </div>
                    <div className='row2'>
                        <div className='block' onClick={() => toggle(3)}>{setIcon(3)}</div>
                        <div className='block' onClick={() => toggle(4)}>{setIcon(4)}</div>
                        <div className='block' onClick={() => toggle(5)}>{setIcon(5)}</div>
                    </div>
                    <div className='row3'>
                        <div className='block' onClick={() => toggle(6)}>{setIcon(6)}</div>
                        <div className='block' onClick={() => toggle(7)}>{setIcon(7)}</div>
                        <div className='block' onClick={() => toggle(8)}>{setIcon(8)}</div>
                    </div>
                </div>
                <button onClick={() => window.location.reload()}>Restart</button>
            </section>
        </>
    )
}

export default TicTacToe