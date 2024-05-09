// import { useState, useEffect } from "react";  //NOT USEABLE 
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

// 20 - CUSTOM HOOKING 
const {jsondata: blogs, isPending, error} = useFetch ('http://localhost:8000/blogs');


// USE THIS ALL FOR USEFETCH.JS  
    // const [blogs, setblogs] = useState(null);
    // //CONTIONAL LOADING MESSAGE 
    // const [isPending, setIsPending] = useState(true);
    // //HANDLING ERRORS
    // const [error, setError] = useState(null)

//  FETCHING DATA USING JSON 
 
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //     .then(res => { //response object
    //         //HANDLING ERRORS
    //         if(!res.ok){
    //             throw Error('could not fetch data for that resource');

    //         }
    //         return res.json();
    //     })

    //     //CONTIONAL LOADING MESSAGE 
    //     .then(jsondata => {
    //         // console.log(jsondata);
    //         setblogs(jsondata);
    //         setIsPending(false); //Loading only occurs when blogs are loading and disappears as soon as it appears
    //         setError(null);
    //     })

    //     //HANDLING ERRORS
    //     .catch(err => {
    //         // console.log (err.message);
    //         setIsPending(false);
    //         setError(err.message)
    //     })
    //     // PRESS CTRL + C FROM JSON TERMINAL 
            
    //     }, 1000); // loading appears after few sec, DONT USE IT!!!!

    // }, []   //empty dependency: runs just intitial render no matter how many blogs we delete
    // );


    return (  
        <div className="home">

            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="ALL BLOGS"/>} 


        </div>
    );
}
 
export default Home;