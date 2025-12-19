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
                {/* !!!!!!!!pune aici logo*/}
                wielnia
                </Link>

                {/* desktop version */}
                <div className="desktop">
                    <Link to={"/"} className="link"> Home </Link>
                    <Link to={"/create"} className="link"> Create Post </Link>
                    <Link to={"/chat"} className="link"> Chat </Link>
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

        {/* desktop auth */}
        <div><Link to={"/login"} className="link"> Change name </Link></div>

        {/* mobile menu */}
                {menuOpen && (
                    <div className="mobile">
                        <div>
                            <Link to={"/"} className="link"> Home </Link>
                            <Link to={"/create"} className="link"> Create Post </Link>
                            <Link to={"/chat"} className="link"> Chat </Link>
                        </div>
                    </div>
                )}
                

    </nav>
    )
}