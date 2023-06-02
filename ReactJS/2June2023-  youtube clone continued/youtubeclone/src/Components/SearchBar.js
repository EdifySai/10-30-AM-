
import { useState } from 'react';
function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const updateState = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <form>
            <input onChange={updateState} style={{ padding: "10px", marginTop: "30px", border: '2px solid black' }} size="100" type="text" placeholder="enter your search term"></input> &nbsp;&nbsp;
            <button style={{ padding: "10px", marginTop: "30px", border: '2px solid black', width: "170px" }}><i className="fa fa-search" style={{ fontSize: '15px' }}></i></button>
        </form>
    )

}
export default SearchBar;