import {Link} from "react-router-dom";
import notFound from "../components/undraw_Page_not_found_re_e9o6.png";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 pt-3">
            <img src={notFound} alt="404" className="col-12" />
            <h2 className="logo-app text-center py-4">Oops.... Something Wrong</h2>
            <button className="btn btn-primary col-12">
              <Link to="/" className="text-white text-decoration-none fw-bold">
                Return to Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
