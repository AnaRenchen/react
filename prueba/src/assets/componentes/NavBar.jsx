import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand" href="./index.html">
            <Logo size={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
