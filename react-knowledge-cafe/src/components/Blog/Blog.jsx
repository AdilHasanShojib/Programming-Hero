import PropTypes from 'prop-types'; 
import {FaRegBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtag}= blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
            <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>

                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button onClick={()=>handleAddToBookmarks(blog)} className='ml-2 mt-2 text-2xl'><FaRegBookmark></FaRegBookmark></button>
            </div>

            </div>
            
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>{hashtag}</p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-800 font-bold underline'>Marks as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;