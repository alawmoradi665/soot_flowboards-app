import "./user.css";
import { Link } from "react-router-dom";
import { LocationSearching, MailOutline, PermIdentity } from "@material-ui/icons";
export default function User() {
    return (
        <div className="user">
            <div className="userTopContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Alaw Moradi</span>
                        <span className="userShowUserTitle">Front-End Developer</span>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">amoradi01</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">amoradi01@yes.com</span>
                        </div><div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Sydney, Aus</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate"></div>
            </div>
        </div>
    );
}
  