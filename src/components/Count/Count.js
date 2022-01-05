import React, {useState} from 'react';
import CountUI from "./CountUI/CountUI";

const Count = () => {

    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className='count'>
            <CountUI
                count={count}
                decrement={decrement}
                increment={increment}
            />
        </div>
    );
};

export default Count;
