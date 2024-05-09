// 23 - ROUTER LINK 
import { Link } from "react-router-dom";



// Type: sfc and TAB 
const Navbar= () => {
    return (  
        // some template 
        <nav className="navbar">
            <h1>The Blogs</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>               
                
                {/* inline styling using dynamic values  */}
                <Link to="/create" className='blog' style={{
                    color: "white",
                    backgroundColor :"purple",
                    borderRadius: '10px',
                }} >New Blog</Link>

            </div>
        </nav>
    );
}
 
export default Navbar;