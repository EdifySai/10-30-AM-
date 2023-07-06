import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './CounterSlice';

function Counter() {

    var count = useSelector(async (appState) => await appState.counter.value);
    var dispatch = useDispatch();

    const getData = async () => {
        return await count;
    }
    console.log("getData", getData());
    const increaseCounter = () => {
        dispatch(increase());
    }
    console.log("count", count);
    const decreaseCounter = () => {
        dispatch(decrease());
    }
    return (
        <div>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>

            <h1>The current count is
            </h1>
        </div>
    )
}
export default Counter;