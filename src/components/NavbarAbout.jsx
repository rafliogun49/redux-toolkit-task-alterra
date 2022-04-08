import {Link} from "react-router-dom";

const NavbarAbout = () => {
  return (
    <>
      <header className="about-menu">
        <div className="menu-lists pt-4">
          <ul className="list-unstyled d-flex flex-column gap-3">
            <li>
              <Link to="/" className="  text-white text-decoration-none fw-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about/about-app" className=" text-white text-decoration-none fw-bold">
                About App
              </Link>
            </li>
            <li>
              <Link to="/about/about-author" className=" text-white text-decoration-none fw-bold">
                About Author
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavbarAbout;
