import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenter from '@material-ui/icons/BusinessCenter'
import Chat from '@material-ui/icons/Chat'
import Notifications from '@material-ui/icons/Notifications'
import HeaderOption from './HeaderOption'

function Header() {
    return (
        <div className="header">
            {/* Left Section */}
            <div className="header_left">
                <img src="https://findicons.com/files/icons/377/toon_system/128/file_pictures.png" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            {/* Right Section */}
            <div className="header_right">
                <HeaderOption Icon={Home} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs" />
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
                <HeaderOption avatar="https://avatars.githubusercontent.com/u/61147494?v=4" title="user" />
            </div>
        </div>
    )
}

export default Header
