import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utility/addToBd';
import Book from '../../Pages/Book/Book';

const ReadList = () => {
    const [readList, setReadList]=useState([]);
    const [sort, setSort] = useState("");
    const data =useLoaderData()
    console.log(data);

    useEffect(()=>{
         const storedBookData = getStoreBook();
         const convertedStoredBooks = storedBookData.map(id=>parseInt(id))
         const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
         setReadList(myReadList);
    }, [])
    

    const handleSort =(type)=>{
        setSort(type)
        if(type === "pages"){
           const sortByPage =[...readList].sort((a,b)=>a.totalPages - b.totalPages);
           setReadList(sortByPage)
        }
        if(type === "ratings"){
              const sortByRating =[...readList].sort((a,b)=>a.rating-b.rating);
              setReadList(sortByRating);
        }
    }

    return (
      
        <div>
             <details className="dropdown">
  <summary className="btn m-1">Sort by : {sort? sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
  </ul>
</details>
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