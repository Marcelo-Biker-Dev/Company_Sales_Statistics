import Chambertran from "assets/img/chambertran_logo.png";

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-2 px-4 pb-2 mb-4 border-bottom">
        <a className="fs-4" href="http://www.chambertran.solutions" target="_blank" rel="noreferrer"> <img src={Chambertran} alt="Chambertran Solutions" width="100" /></a>
  
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
          <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
        </nav>
      </div>
    );
}

export default NavBar;