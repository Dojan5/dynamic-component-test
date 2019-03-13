import React, { Component } from 'react'

export default class NavBar extends Component {
    state = {
        'menuVisible': false,
    }

    toggleMenu = () => {
        this.setState(state => ({
            menuVisible: !state.menuVisible
        }));
    }

    renderBrand = (props) => (
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <strong>{props}</strong>
            </a>

            {this.renderMenuToggle()}
        </div>
    )

    renderMenuToggle = (props) => (
        <label role="button" className={this.state.menuVisible ? 'navbar-burger burger is-active' : 'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="mainMenu" onClick={this.toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </label>
    )

    renderMenu = (props) => (
        <div id="mainMenu" className={this.state.menuVisible ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-end">
                <a href="/" className="navbar-item">Home</a>
                <a href="/" className="navbar-item">Products</a>
                <a href="/" className="navbar-item">About</a>
                <a href="/" className="navbar-item">Contact Us</a>
            </div>
        </div>
    )

    render() {
        return (
            <nav className="navbar is-primary">
                {this.renderBrand("Dynamic Component Test")}
                {this.renderMenu()}
            </nav>
        )
    }
}
