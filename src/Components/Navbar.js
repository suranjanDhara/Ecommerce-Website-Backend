import React, { Component } from 'react'
import '../Css/Navbar.css'
// import { purple } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PropTypes from 'prop-types'

export default class Navbar extends Component {
    //   static propTypes = {
    //     prop: PropTypes
    //   }

    render() {
        return (
            <>
                <nav className="navbar">
                    <ul className="navbarItems">
                        <a className="navItems heading" href="/">
                            SuranjanKart
                        </a>
                        <div className="two-items-display-flex">
                            <input class="search" placeholder="Search" type="text" ></input>
                            <a className="navItems" href="/">Search</a>

                        </div>
                        <div className="two-items-display-flex">
                            <button className="btn">Log in</button>

                            <a className="navItems cart" href="/"><ShoppingCartIcon /></a>
                        </div>

                    </ul>
                </nav>
            </>
        )
    }
}