import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

function Header() {
    return (
        <div>
            <div className="Links">
                <Link className="LinksItem" to="/">Home</Link>
                <Link className="LinksItem" to="/about">About</Link>
            </div>
            <h1 className="Header">Todo</h1>
        </div>
    )
}
export default Header