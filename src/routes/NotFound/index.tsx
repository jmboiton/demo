import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2 className="font-condensed text-3lg uppercase">Not found</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NotFound;
