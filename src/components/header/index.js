import './style.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="main-header-container">
            <ul className='main-menu'>
                <Link to='/'>  
                    <li className='title-hospital'>
                        <i class="fa-regular fa-hospital icon-hospital"></i>
                        Hospital Management System
                    </li>
                </Link>
                <li>Login</li>
            </ul>
        </div>
    );
}

export default Header;