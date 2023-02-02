import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem,{NavItemDropDown} from '../../components/NavItem/NavItem'
import { Link } from 'react-router-dom'
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="main site logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavItem>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="#">Browse</Link>
                        </NavItem>
                        <NavItemDropDown>
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Details
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item " to="#">Fortnite</Link></li>
                                <li><Link className="dropdown-item" to="#">Call of Duty</Link></li>
                            </ul>
                        </NavItemDropDown>
                        <NavItem>
                            <Link className="nav-link" to="/stream">Stream</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </NavItem>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header