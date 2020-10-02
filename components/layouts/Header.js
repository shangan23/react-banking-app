import React from 'react'
import Navigation from '../Navigation'

const header = {
    background: 'red',
    padding: '5px'
}

const siteName = {
    float: 'left'
}

const menus = {
    float: 'right'
}

const clear = {
    clear: 'both'
}

function Header() {
    return (
        <div style={header}>
            <div style={siteName}>React Bank</div>
            <div style={menus}><Navigation /></div>
            <div style={clear}></div>
        </div>
    )
}
export default Header;