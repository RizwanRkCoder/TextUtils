import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                    </div>
                    {/* props mode === ye ternary operator ha is me agr light ha tu dark agr dark ha tu light */}
                    <div className= {`form-check form-switch text-${props.mode=== 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="switch" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>Switch Mode</strong></label>
                    </div>

                    {/* Dark ke siwa aur b color me change kr sakty ha */}
                    {/* <div>
                        <button className='btn btn-danger mx-2' onClick={props.redishMode}>Redish</button>
                        <button className='btn btn-success mx-2' onClick={props.grenishMode}>Grenish</button>
                        <button className='btn btn-primary mx-2' onClick={props.bluishMode}>Bluish</button>
                    </div> */}
                </div>
            </nav>
        </>
    )
}


// navBar ke types b ha ke set kr dy strict mode ke liye ke ye string ha 
// agr tu type string ke jaga koch aur howe tu error ay ga 

// now we study about the required method and according to this we write isRequired ke default do ya to declare kro lazmi
Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};


// Navbar.defaultProps = {
//     title : 'Set Title here',
//     aboutText : 'Write something'
// };
