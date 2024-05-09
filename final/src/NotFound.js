// 32 - 404 ERROR & NEXT STEPS 
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry Babes...</h2> <br />
            <p>The page you are trying to reach cannot be found</p> <br />
            <Link to='/'>Back to Homepage...</Link>
        </div>
     );
}
 
export default NotFound