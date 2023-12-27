import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md">
        <div class="container">
          <a class="navbar-brand" href="./index.html">
            <Logo size={30} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="./html/shop.html">
                  Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./html/contacto.html">
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
