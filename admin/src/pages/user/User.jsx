import "./user.css";
import { Link } from "react-router-dom";
import { LocationSearching, MailOutline, PermIdentity, Publish } from "@material-ui/icons";
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
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateInfo">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                type="text"
                                placeholder="amoradi01"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                type="text"
                                placeholder="Alaw Moradi"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                type="text"
                                placeholder="amoradi01@yes.com"
                                className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                type="text"
                                placeholder="Sydney, Australia"
                                className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateSubmit">
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
  