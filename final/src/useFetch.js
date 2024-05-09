// 20 - CUSTOM HOOKING 

// here put all the functionality to fetch the data exactly as we put in Home.js

import { useState, useEffect } from "react";
const useFetch = (url) =>{

    const [jsondata, setjsondata] = useState(null);
    //CONTIONAL LOADING MESSAGE 
    const [isPending, setIsPending] = useState(true);
    //HANDLING ERRORS
    const [error, setError] = useState(null)



    useEffect(() => {

// 24 - USEEFFECT CLEANUP 
        const abortConst = new AbortController();
        // associating abort controller with fetch below in settimeout

        setTimeout(() => {
            // fetch('http://localhost:8000/blogs')
            fetch(url, {signal: abortConst.signal})
        .then(res => { //response object
            //HANDLING ERRORS
            if(!res.ok){
                throw Error('could not fetch data for that resource');

            }
            return res.json();
        })

        //CONTIONAL LOADING MESSAGE 
        .then(jsondata => {
            // console.log(jsondata);
            setIsPending(false); //Loading only occurs when blogs are loading and disappears as soon as it appears
            setjsondata(jsondata);
            setError(null);
        })

        //HANDLING ERRORS
        .catch(err => {

            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            } else {

            // console.log (err.message);
            setIsPending(false);
            setError(err.message)
            }
        })
        // PRESS CTRL + C FROM JSON TERMINAL 
            
        }, 1000); // loading appears after few sec, DONT USE IT!!!!

// 24 - USEEFFECT CLEANUP 
    // return() => console.log ('cleanup');
    return() => abortConst.abort();

    }, [url]   //url dependencies  // if url changes it will rerun
    );

    return {jsondata, isPending, error} 
}

export default useFetch;