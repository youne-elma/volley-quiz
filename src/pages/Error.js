import { Link } from "react-router-dom";

// import GIF
import gifblop1 from "../images/gifblop1.gif";
import gifblop2 from "../images/gifblop2.gif";

function Error() {
  return (
    <div className="main start-game">
      <img src={gifblop1} className="gifBlop1" alt="gif blop 1" />
      <div className="main-text">
        <h1 className="title-quiz">Error 404 page</h1>
        <Link to="/volley-quiz/" className="error-button">
          Go back
        </Link>
      </div>
      <img src={gifblop2} className="gifBlop2" alt="gif blop 2" />
    </div>
  );
}

export default Error;
