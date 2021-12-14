import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <nav className="navbar">
            <div className="title unclick">
                <Link to="/"><h1 href="/">Xanders Blog</h1></Link>
            </div>
            <div className="links">
                <h5 className="unclick" onClick={handleClick}>I have been clicked {counter} times!</h5>
            </div>

            <div className="links unclick">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;