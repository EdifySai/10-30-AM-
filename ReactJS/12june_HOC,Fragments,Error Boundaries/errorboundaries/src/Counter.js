import { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(10);
    if (counter == 15) {
        throw new Error("Limit exceeded! Appplication crashed");
    }
    const counterUpdate = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <h1 onClick={counterUpdate}>Counter value {counter}</h1>
        </>

    )
}
export default Counter;