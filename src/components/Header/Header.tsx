import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/mainpage'><button>1</button></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header