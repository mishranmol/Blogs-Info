import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


const Pagination = () => {
 
  const{page,handlerPageChange,totalPages}=useContext(AppContext);

  return (
    <div >
        <div className="flex flex-row border w-screen overflow-auto justify-center bg-slate-100 py-1 fixed bottom-0 left-0 items-center">
            { 
           page>1 &&
          <button className="ml-[10p] border px-[40px] flex justify-center w-[40px]" onClick={()=>handlerPageChange(page-1)}>
             Previous
          </button>
            }

            {
                page < totalPages &&
                <button className="border px-[40px] flex justify-center w-[40px]" onClick={()=>handlerPageChange(page+1)}>
                    Next
                </button>
            }

            <p className="ml-20">
                PAGE {page} OF {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination