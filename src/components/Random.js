import React,{useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random (){

    const {gif,loading,fetchData} = useGif();
    
    

   
    

    function clickHandler(){
        fetchData();

    }
    return(
        <div className="w-1/2  bg-purple-400 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]"> 
          
         <h1 className="mt-4 text-2xl underline uppercase font-bold">A Random Gif</h1>

         {
            loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
         }
           
            <button onClick={clickHandler} className="mb-5 w-10/12 bg-white
            opacity-40 text-lg py-2 rounded-lg
            " >generate</button>
        </div>
    );

}

export default Random; 