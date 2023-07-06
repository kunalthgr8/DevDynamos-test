import nav_logo from "./img/openlakeLogo.png";

const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={nav_logo} alt="OpenLake Logo" id="nav-logo" />
            <div className="nav-buttons">
                <div className="nav-btn">
                    Home
                </div>
                <div className="nav-btn">
                    Projects
                </div>
                <div className="nav-btn">
                    Blogs
                </div>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
