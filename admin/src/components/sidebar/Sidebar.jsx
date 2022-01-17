import "./sidebar.css";
import {LineStyle, Timeline, TrendingUp, AttachMoney, PermIdentity} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Products
                        </li>
                        </Link>
                        <Link to="/analytics" className="link">
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Analytics
                        </li>
                        </Link>
                        <Link to="orders" className="link">
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Orders
                        </li>
                        </Link>
                        <Link to="/requests" className="link">
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Custom Requests
                        </li>
                        </Link>
                    </ul>
                    <h3 className="sidebarTitle">Administrative</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Users
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
