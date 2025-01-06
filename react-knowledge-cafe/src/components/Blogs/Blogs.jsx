import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import Blog from "../Blog/Blog";
export default function Blogs({handleAddToBookmarks,handleMarkAsRead}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs:{blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog 
        key={blog.id} 
        blog={blog}
        handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}
        >
        </Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
    
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
