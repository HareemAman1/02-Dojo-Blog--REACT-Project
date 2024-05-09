import useFetch from './useFetch';

// 30 - DELETE 
import { useHistory, useParams } from "react-router-dom";

// ROUTE PARAMETERS
const BlogDetails = () => {

    const { id } = useParams();

    // CUSTOM HOOKS 
    // to get blog data 
    const { jsondata: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    // 30 - DELETE 
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }


    return ( 
        <div className="blog-details">
            <h2>Blog Details - {id}</h2> <br />

            {/* check if its true  */}
            {isPending && <div>Loading...</div>}    
            {error && <div> {error} </div>}       
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p><b>Written by {blog.author}</b></p>
                    <div>{blog.body}</div>

                    {/* // 30 - DELETE  */}
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div> 
     );
}
 
export default BlogDetails;