import { Link } from "react-router";
import { useState } from "react";
import './Navbar.css';


export const Navbar=()=>{
    const [menuOpen,setMenuOpen]=useState(false);
    return (
    <nav className="nav-bar">
        <div>
            <div>
                <Link to={"/"} className="name">
                {/* !!!!!!!!pune aici logo si nume*/}
                social media :3
                </Link>

                {/* desktop version */}
                <div className="desktop">
                    <Link to={"/"} className="link"> Home </Link>
                    <Link to={"/create"} className="link"> Create Post </Link>
                    <Link to={"/communities"} className="link"> Communities </Link>
                    <Link to={"/community/create"} className="link"> Create Community </Link>
                </div>

                {/* mobile menu button */}
                <div className="mobile">
                    <button onClick={()=>setMenuOpen((prev)=>!prev)}className="menu-icon">
                        <svg
                            
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* mobile menu */}
                {menuOpen && (
                    <div className="mobile">
                        <div>
                            <Link to={"/"} className="link"> Home </Link>
                            <Link to={"/create"} className="link"> Create Post </Link>
                            <Link to={"/communities"} className="link"> Communities </Link>
                            <Link to={"/community/create"} className="link"> Create Community </Link>
                        </div>
                    </div>
                )}
                

    </nav>
    )
}