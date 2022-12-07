import { useState, useEffect } from 'react'
import Time from "./Time"
import norway from "./norway.jpg"

const Header = () => {
  
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    displayQuotes();
  }, [])
  
  const getQuotes = async () => {
    const allQuotes = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    
    const fetchedQuotes = await fetch(allQuotes)
    const data = await fetchedQuotes.json()

    return data;
  }

  const displayQuotes = async () => {

    const data = await getQuotes()
    
    let randomNum = Math.floor(Math.random() * data.quotes.length);
    let randomQuote = data.quotes[randomNum]


    setQuote(randomQuote.quote)
    setAuthor(randomQuote.author)
    
  }

  return (
    <header className={"width-max text-center text-4xl p-24"}>
      <Time />
      <p className={"font-serif mt-12 text-2xl italic"}>"{quote}"</p>
      <p className={"text-xl"}>{author}</p>
    </header>
  )
}

export default Header
