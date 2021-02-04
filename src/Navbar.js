import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link className="logo-link" to="./"><h1 className="logo">Logensa</h1></Link>
            <Link className="nav-bar-link" to="./story">Our story</Link>
            <Link className="nav-bar-link" to="./gallery">Gallery</Link>
            <Link className="nav-bar-link" to="./contacts">Contacts</Link>
        </nav>
     );
}
 
export default Navbar;