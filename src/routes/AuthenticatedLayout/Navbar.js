import React from 'react';
import {Link} from 'react-router-dom';
import { routes } from '../../utils/constants/routes';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand">React-Demo</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={routes.Crud}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Utilites</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Mode</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CRUD</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Editor</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>      </span>
                </div>
            </div>
        </nav>
    )
}
