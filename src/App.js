import React, { useContext, useEffect } from 'react'
import Header from './Components/Header';
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination';
import { AppContext } from './Context/AppContext';


export const App = () => {

  const {fetchData} = useContext(AppContext);

  useEffect(() => {
    fetchData();
  },[])


  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App;