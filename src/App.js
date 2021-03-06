import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner'

// components
const animePics = 'https://api.waifu.im/random/'
const animeQuotesUrl = 'http://api.quotable.io/random' 


function App() {
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)
  const [img, setImg] = useState([])
  const [facts, setFacts] = useState([])

  // fetch requests 
  const fetchAnimeGirls = async () => {
    setLoading(true)
    try {
      const response = await fetch(animePics)
      const animeGirl = await response.json()
      setImg(animeGirl)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchAnimeQuotes = async () => {
    try {
      const response = await fetch(animeQuotesUrl)
      const animeQuote = await response.json()
      setFacts(animeQuote)
      setLoading2(false)
      console.log(animeQuote)
    } catch (error) {
      console.log(error)
    }
  }

  const fetcher = async (url, setState) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setState(data)
      setLoading(false)
      setLoading2(false)
    } catch (error) {
      console.log(error)
    }
  }

  

  const refreshPage = () => {
    setLoading(true)
    setLoading2(true)
    fetcher(animePics, setImg)
    fetcher(animeQuotesUrl, setFacts)
  }

  useEffect(() => {
    fetchAnimeGirls() 
    fetchAnimeQuotes()
  }, [])

  if (loading) {
    return (
      <div className='container spin-container'>
        <div className='row justify-content-center spinner-container'>
          <Spinner className='row' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>  
          </Spinner>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App container main-container">
        <div className='row justify-content-center'>
          <div className='col-4 text-center'>
            <img className='' src={img.images[0].url} alt="waifu"/>
            {loading2 || loading ? 'loading...' : <Factz {...facts} /> }
          </div>
        </div>
        <div className='text-center pt-6'>
          <button id='refreshButton' className='btn btn-primary' onClick={refreshPage}>Refresh</button>
        </div>
      </div>
    );
  }
  
}

const Factz = ({content, author}) => {
  return (
    <article>
      <h5>{content}</h5>
      <h6> - {author}</h6>
    </article>
  )
}

export default App;
