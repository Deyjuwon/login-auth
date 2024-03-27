import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Auth'
import { db } from './config/firebase-config'
import { getDocs, collection } from 'firebase/firestore'

function App() {

  const [movieList, setMovieList] = useState([])
  const moviesCollectionRef = collection(db, 'movies')

  useEffect (() => {
    const getMovieList  = async () =>{
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data, id:doc.id}))
        console.log(filteredData)
      } catch (err) {
        console.error(err)
      }
    };
    getMovieList()
  }, [])
 

  return (
    <div>
      <Auth />
    </div>
  )
}

export default App
