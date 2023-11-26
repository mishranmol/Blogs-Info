import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step1
export const AppContext = createContext();

//yha pr children default hai mtlb yeah hai ki children yha pr App hoga kuki app component wrapped hai AppContextProvider index.js mai

export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null);

    // Data Filling
   async function fetchData(page) {
        setLoading(true)
        const url = `${baseUrl}?page=${page}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch (e) {
            console.log("Error");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlerPageChange(page) {
        setPage(page);
        fetchData(page);
    }


    //it is a simple object which is used to just send the values joki upr define ki gyi hai 
    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        handlerPageChange,
        fetchData,
    };


    //2nd step
    //this is the syntax to send the data to the children which is app.js 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
