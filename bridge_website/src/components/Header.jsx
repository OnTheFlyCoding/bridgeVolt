import {Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/about';
import bVolt from '../assets/BvoltLogo.png';
function Header(){
    return(
        <>
        <header className='header'>
            <div className='title'>
            BridgeVolt Cooperative. E-bikes For All.
            </div>
            <div className="logo">
            <Link to='/'><img src={bVolt} alt="no image yet" /></Link>
            </div>
            <br />
            <br />
            <br />
            <div className='navy border'>
                <Link to='/About'>About</Link>
                <Link to='/Donate'>Donate</Link>
                <Link to='/Equity'>Equity</Link>
                <Link to='/Visit'>Visit</Link>
                <Link to='/Visit'>Support</Link>

            </div>

        </header>
        </>
    )
}
export default Header;