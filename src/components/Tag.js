import React,{useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag (){
    
    
    const [tag , setTag] = useState('bike');
    

   
    
   const {gif,loading,fetchData} = useGif(tag);

    function clickHandler(){
        fetchData();

    }

    function changeHandler(event){
        setTag(event.target.value);
    }
    return(
        <div className="w-1/2  bg-pink-400 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]"> 
          
         <h1 className="mt-4 text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

         {
            loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
         }

         <input
         className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
         onChange={changeHandler}
         value={tag}
         />
           
            <button onClick={clickHandler} className="mb-5 w-10/12 bg-white
            opacity-40 text-lg py-2 rounded-lg
            " >generate</button>
        </div>
    );

}

export default Tag; 