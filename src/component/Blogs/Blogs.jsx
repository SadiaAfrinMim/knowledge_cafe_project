import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res=> res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>blogs: {blogs.length}</h1>
            {
                blogs.map((blog,id) => <Blog key={id}  handleAddToBookmark={ handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} blog={blog}></Blog>)
            }
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.func
}

export default Blogs;