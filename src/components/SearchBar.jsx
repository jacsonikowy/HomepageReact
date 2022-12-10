import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

  const handleSearch = (searchValue) => {
    window.location.href = `https://www.google.com/search?q=${searchValue}`;
  }
  
  return (
    <div className={"flex justify-center align-evenly h-20"}>
      <input className={"border-white bg-inherit bg-neutral-900 rounded-3xl w-2/3 h-2/3 text-base p-5 md:text-xl"} type="text" id="input" placeholder="Type anything you want" onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleSearch(document.querySelector("#input").value);
        }
      }} />
      <button className={"ml-2 bg-purple-600 rounded-full h-2/3 w-16"} onClick={() => handleSearch(document.querySelector("#input").value)}><SearchIcon /></button>
    </div>
  ) 
}

export default SearchBar
