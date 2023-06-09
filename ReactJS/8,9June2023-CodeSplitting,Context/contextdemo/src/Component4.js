import { useContext } from 'react';
import { UserContext } from './UserContext';
function Component4() {

    var data = useContext(UserContext);

    return (
        <div>
            <h1>Component 4</h1>
            {data}
        </div>
    )

}
export default Component4;