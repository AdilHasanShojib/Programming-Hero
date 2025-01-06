import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/header"



function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleAddToBookmarks = blog =>{
    const newbookmarks =[...bookmarks,blog];
    setBookmarks(newbookmarks);
  }

  const handleMarkAsRead= (id,time)=>{
    const newreadingTime = readingTime+time;
    setReadingTime(newreadingTime);

    const remainingBookmarks =bookmarks.filter(bookmark=>bookmark.id !== id);
    setBookmarks(remainingBookmarks);  

  }

 return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
       
      <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>


      </div>
      
  
    </>
  )
}

export default App
