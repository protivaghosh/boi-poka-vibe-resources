import React from 'react';
import { use } from 'react';

const Book = ({singleBook}) => {
    // const data =use(bookPage);
    // console.log(data)
   const {bookName, author, image} = singleBook
    return(    
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-6'>
    <img
      src={image}
      className=''
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
       
    );
};

export default Book;