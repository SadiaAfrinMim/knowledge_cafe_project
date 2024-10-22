
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setbookmark] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    const newBookMark = [...bookmarks,blog]
    setbookmark(newBookMark)
  }

  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime) 
  }
 

  return (
    <>
    
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs  handleAddToBookmark={ handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks ={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
