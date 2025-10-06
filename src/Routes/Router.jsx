import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Root/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Component/About/About';
import BookDetails from '../Component/Bookdetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader: ()=>fetch("booksData.json"),
            path: "/",
           element:<Home></Home>,
           
        },
        {
          path:"/about",
          element: <About></About>
        },
        {
            path:"/bookDetails/:id",
            loader: ()=>fetch("booksData.json"),
            element:<BookDetails></BookDetails>
        }
    ]
  },
]);

