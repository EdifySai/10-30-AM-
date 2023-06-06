
import { useState } from 'react';
function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const updateState = (event) => {
        setSearchTerm(event.target.value);
    }
    const submitSearch = (event) => {
        event.preventDefault();
        props.onSearchTerm(searchTerm);
    }

    const changeBgColor = (event) => {
        event.target.style.backgroundColor = "red";
    }
    const normalizeBtn = (event) => {
        event.target.style.backgroundColor = "";
    }
    return (
        <form>
            <input onChange={updateState} style={{ padding: "10px", marginTop: "30px", border: '2px solid black' }} size="100" type="text" placeholder="enter your search term"></input> &nbsp;&nbsp;
            <button onMouseOut={normalizeBtn} onMouseOver={changeBgColor} onClick={submitSearch} style={{ padding: "10px", marginTop: "30px", border: '2px solid black', width: "170px", cursor: 'pointer' }}><i className="fa fa-search" style={{ fontSize: '15px', color: 'black' }}></i></button>
        </form>
    )

}
export default SearchBar;


/*
Tasks:
1. Align the video list items to the right
2. Align the video player to the left.
*/

