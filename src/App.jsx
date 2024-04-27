
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import './app.css'
import { useEffect } from 'react'
import useBookContext from './hook/useBookContext'

const App = () => {
  const { getAllBooks } = useBookContext()
  useEffect( async() => {
    await getAllBooks();
  }, [])
  return (
    <div className='wrapper'>
      <div className="container">
        <h1>Reading Book</h1>
        <div>
          <BookList />
        </div>
      </div>
      <BookCreate />
    </div>
  )
}

export default App