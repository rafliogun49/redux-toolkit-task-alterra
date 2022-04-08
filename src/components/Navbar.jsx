import {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="navbar bg-white shadow-sm py-2">
        <div className="container">
          <div className="row align-items-center gap-1">
            <i className="col-1 bi bi-grid" onClick={handleClick}></i>
            <span className="col-4 navbar-brand mb-0 h1 logo-app" href="home">
              Todo Apps
            </span>
          </div>
        </div>
      </nav>
      {menu && (
        <div className="menu fixed-top bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-12 text-end mt-3">
                <i className="bi bi-x-lg" onClick={handleClick}></i>
              </div>
              <div className="col-12">
                <h1 className="navbar-brand mb-0 logo-app text-white" href="home">
                  Todo Apps
                </h1>
              </div>
              <div className="menu-lists pt-4">
                <ul className="list-unstyled d-flex flex-column gap-3">
                  <li>
                    <Link to="/" className="text-white text-decoration-none fw-bold">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/about-app"
                      className=" text-white text-decoration-none fw-bold"
                    >
                      About App
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/about-author"
                      className=" text-white text-decoration-none fw-bold"
                    >
                      About Author
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
