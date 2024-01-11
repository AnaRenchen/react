import Logo from "../components/Logo";

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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#shop"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#shop">
                      All Paintings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#shop">
                      - Characters
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#shop">
                      - Nature and Mythological Animals
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">
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
