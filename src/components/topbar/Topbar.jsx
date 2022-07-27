import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings, InsertDriveFile, Inbox, MoreVert} from '@material-ui/icons'
import Camera from '@material-ui/icons/Camera';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo"><Camera />Super Finti</span>
            </div>
            <div className="topMiddle">
                <form className='topbarForm'>
                <input type="text" placeholder="Search ..." name="s" />
                </form>
                <InsertDriveFile className='topbarIcon'/>
                <Inbox className='topbarIcon'/>
                <MoreVert className='topbarIcon'/>
            </div>
            <div className="tophalfright">
                <div className="tophalfWallet">
                    <span className="tophalfOne">Wallet</span>
                    <span className="tophalfTwo">Invoice</span>
                </div>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <span className="topbaruserName">Hi, Anna</span>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
