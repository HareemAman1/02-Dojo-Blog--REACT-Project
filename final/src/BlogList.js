import { Link } from "react-router-dom";

    const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
             
             <h2> {title}</h2>

             {blogs.map((blog) =>  (
                <div className="blog-preview" key={blog.id}>
                    {/* <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p> */}
                    
                    <Link to = {`/blogs/${blog.id}`}>  {/*add javascript so use template string */}
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                    </Link>
                    
                    
                </div>

            ))}
        </div>
     );
}
 
export default BlogList;