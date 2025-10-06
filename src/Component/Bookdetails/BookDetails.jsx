import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const bookId=parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId === bookId);
   const {bookName, image, review, publisher, category, tags} = singleBook;

    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <h4>By : {publisher}</h4>

     <div className='border-1 border-dashed mt-4 text-gray-400'></div>

     <p>{category}</p>
     <div className='border-1 border-dashed mt-4 text-gray-400'></div>
      <p className="py-6">
    Review : {review}

    <div className=''>
        <h3 className='font-bold'>tags : <button className='text-green-500 space-x-10 btn  m-4 '>
        {
            tags.map(tag =><button key={tag}>{tag}</button>)
        }
            </button></h3>

       
    </div>

    <div className='border-1 border-dashed mt-4 text-gray-400'></div>
      </p>
     <button className="btn btn-active btn-accent">Read</button>
     <button className="btn btn-active btn-info ml-6">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;