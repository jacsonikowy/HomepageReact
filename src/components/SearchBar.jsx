const SearchBar = () => {

  const handleSearch = (searchValue) => {
    window.location.href = `https://www.google.com/search?q=${searchValue}`;
  }
  
  return (
    <div className={"flex justify-center h-20"}>
      <input className={"border-white bg-inherit bg-neutral-900 rounded-3xl w-2/3 h-2/3 text-xl p-5"} type="text" id="input" placeholder="Type anything you want" onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleSearch(document.querySelector("#input").value);
        }
      }} />
      <button onClick={() => handleSearch(document.querySelector("#input").value)}>Search</button>
    </div>
  ) 
}

export default SearchBar
