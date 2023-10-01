import '../css/searchBar.css';
function SearchBar(props){
    return(
        <div className={(props.visible?'':'show-search ') + 'search-container'}>
            <input type="text" placeholder="What are you looking for" className='search-input'/>
            <i className="bx bx-search"/>
        </div>
    );
}
export default SearchBar;