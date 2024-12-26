import {Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/about';
function Header(){
    return(
        <>
        <header className='header'>
            <nav>
                <div className="logo">
                    <Link to='/'><img src="" alt="no image yet" /></Link>
                </div>
                <div className='toggle'>
                    <a href="#"><ion-icon name="menu-outline"></ion-icon></a>
                </div>
                <ul className='menu'>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Donate'>Donate</Link>
                    </li>
                    <li>
                        <Link to='/Equity'>Equity</Link>
                    </li>
                    <li>
                        <Link to='/Visit'>Visit Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header;