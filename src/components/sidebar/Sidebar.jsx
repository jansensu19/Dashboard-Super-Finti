import "./sidebar.css"
import { Dashboard, Flip, Contacts, Widgets, Toc, AccountBalanceWallet, PermMedia, Receipt, Schedule, Help} from "@material-ui/icons"
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Main Navigation</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarListItem active">
                        <Dashboard className="sidebarIcon"/>
                        Dashboard
                    </li>
                    </Link>
                    <Link to="/transaction" className="link">
                    <li className="sidebarListItem">
                        <Flip className="sidebarIcon"/>
                        Transactions
                    </li>
                    </Link>
                    <Link to="/users" className="link">
                    <li className="sidebarListItem">
                        <Contacts className="sidebarIcon"/>
                        Contacts
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Widgets className="sidebarIcon"/>
                        Features
                    </li>
                    <li className="sidebarListItem">
                        <Toc className="sidebarIcon"/>
                        Library
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Settings & Schedules</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem active">
                            <AccountBalanceWallet className="sidebarIcon" />
                            Base Wallet
                        </li>
                    </Link>
                    <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <PermMedia className="sidebarIcon"/>
                            My Contacts
                        </li>
                    </Link>
                    
                    <li className="sidebarListItem">
                        <Receipt className="sidebarIcon"/>
                        Invoices
                    </li>
                    <li className="sidebarListItem">
                        <Schedule className="sidebarIcon"/>
                        Schedules
                    </li>
                </ul>
            </div>

            <div className="sideBarMenuBigIndicator">
                <Help className="sideBarMenuIcon" />
                </div>
                
            <div className="sideBarMenuBox">
                
                <div className="sideBarItem">
                    <div className="sideBarItemInfos">
                        <span className="sideBarTitle">Help Center</span>
                        <span className="sideBarSubTitle">Having trouble in Finti. <br />Please contact us for more questions.</span>
                </div>
                <div className="sideBarHelpContainer">
                    <button className="sideBarButton">Go To Help Center</button>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}
