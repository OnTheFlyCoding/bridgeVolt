import {Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/about';
import logo from '../assets/BvoltLogo.png'
function Header(){
    return(
        <>
        <header className='header'>
            <h1 className='turret-road-regular'>BridgeVolt Cooperative. E-bikes For All.</h1>
            <div className="logo">
                <Link to='/'><img src={logo} alt="no image yet" /></Link>
            </div>
            <div className='navigation border'>
                <Link to='/About'>About</Link>
                <Link to='/Donate'>Donate</Link>
                <Link to='/Equity'>Equity</Link>
                <Link to='/Visit'>Visit</Link>
            </div>
        </header>
        </>
    )
}
export default Header;