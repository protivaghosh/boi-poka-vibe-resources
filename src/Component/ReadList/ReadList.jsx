import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utility/addToBd';
import Book from '../../Pages/Book/Book';

const ReadList = () => {
    const [readList, setReadList]=useState([]);
    const data =useLoaderData()
    console.log(data);

    useEffect(()=>{
         const storedBookData = getStoreBook();
         const convertedStoredBooks = storedBookData.map(id=>parseInt(id))
         const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
         setReadList(myReadList);
    }, [])
    

    return (
        <div>
             <Tabs>
    <TabList>
      <Tab>Read book list</Tab>
      <Tab>My wish list</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read: {readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My wish list</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;