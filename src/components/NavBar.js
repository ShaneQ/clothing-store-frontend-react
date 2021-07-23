import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xl navbar-light fixed-top bg-white">
            <div className="container">
                <img src={process.env.PUBLIC_URL + '/img/custom/logo.jpg'} alt="logo" className="img-fluid img-logo"/>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLandingCollapse"
                        aria-controls="navbarLandingCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarLandingCollapse">

                    <ul className="navbar-nav ml-xl-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" data-toggle="smooth-scroll">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products" data-toggle="smooth-scroll">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" data-toggle="smooth-scroll">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#howItWorks" data-toggle="smooth-scroll">How it Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing" data-toggle="smooth-scroll">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#membership" data-toggle="smooth-scroll">Membership</a>
                        </li>
                        <li><NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-xl-4">
                        <li className="nav-item">
                            <NavLink class="btn btn-outline-secondary" to="/login">Login
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    )
}
export default NavBar;