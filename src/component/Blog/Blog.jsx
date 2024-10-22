
import {FaRegBookmark } from 'react-icons/fa';


const Blog = ({ blog , handleAddToBookmark, handleMarkAsRead}) => {
    const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog
    console.log(blog);
    return (
        <div className='mb-20'>
            <img className='w-full rounded-xl mb-4' src={cover} alt={`cover picture of the title ${title}`}></img>
            <div className='flex justify-between space-y-8'>
               <div className='flex'>
               <img className='w-14' src={author_img}></img>
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
               </div>
                <div>
                    <span>{reading_time} min read</span>
                    
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-blue-600'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
           <div className='space-y-4'>
           <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                  
                   hashtags.map(hash => <span key={hash.id}>#{hash}</span>) 
                }
            
            </p>
            <button   onClick={() =>handleMarkAsRead(reading_time)} className='text-purple-500 underline'>Mark as Read</button>
           </div>
        </div>
    );
};


export default Blog;