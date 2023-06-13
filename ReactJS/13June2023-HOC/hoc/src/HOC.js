import { useState } from 'react';
const HOC = (Component, data) => {
    const HOCComponent = () => {
        const [counter, setCounter] = useState(data);
        const updateCounter = () => {
            setCounter(counter + 1);
        }
        return <Component counter={counter} updateCounter={updateCounter} ></Component>
    }
    return HOCComponent;
}
export default HOC;