import React from 'react';
import { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data =use(bookPage);
    // console.log(data)
   const {bookName, author, image, rating, category,
 publisher, tags, bookId} = singleBook
    return(    
       <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 shadow-sm p-6">
  <figure className='p-4 bg-gray-200 w-[250px] mx-auto'>
    <img
      src={image}
      className='h-[250px]'
      alt="Book" />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-10'>
        {
            tags.map(tag =><button key={tag}>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge ">{publisher}</div>
    </h2>
    <p>By : {author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaRegStarHalfStroke /></div>
    </div>
  </div>
</div>
       </Link>
       
    );
};

export default Book;