import React from 'react';
import boiPoka from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex items-center justify-between p-15 bg-gray-200 my-10 rounded-xl flex-1'>
            <div>
                <h2 className='font-bold text-6xl'>Books to freshen up your bookshelf</h2>
                <button className='btn mt-8 bg-green-500 text-white'>View The List</button>
            </div>
            <div>
                <img className="rounded-xl" src={boiPoka} alt="" />
            </div>
        </div>
    );
};

export default Banner;