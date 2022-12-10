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
    <header className={"width-max text-center text-2xl p-6 pt-12 md:text-4xl md:pt-24"}>
      <Time />
      <div className={"px-3 mt-4 md:my-12"}>
        <p className={"font-serif text-2xl italic"}>"{quote}"</p>
        <p className={"text-xl"}>{author}</p>
      </div>
    </header>
  )
}

export default Header
