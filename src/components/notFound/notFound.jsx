import { Link } from "react-router-dom";

const NotFound = () => {
    return (
      <div className="notFound">
Not found <br/>

        Click <Link to="/">here</Link> to go to Homepage
      </div>
    );
}
 
export default NotFound;