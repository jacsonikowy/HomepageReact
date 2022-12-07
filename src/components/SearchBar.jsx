const SearchBar = () => {

  const handleClick = (searchValue) => {
    window.location.replace(`https://www.google.com/search?q=${searchValue}`);
  }

  const handleKeyPress = (searchValue) => {
    window.location.replace(`https://www.google.com/search?q=${searchValue}`);
  }
  
  return (
    <div className={"flex justify-center h-20"}>
      <input className={"border-white bg-inherit bg-neutral-900 rounded-3xl w-2/3 h-2/3 text-xl p-5"} type="text" id="input" placeholder="Type anything you want" onKeyPress={(searchValue) => handleKeyPress(document.querySelector("#input").value)}/>
      <button onClick={() => handleClick(document.querySelector("#input").value)}>Search</button>
    </div>
  ) 
}

export default SearchBar
