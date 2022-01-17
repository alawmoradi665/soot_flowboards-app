import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder="john"/>
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                    <input type="text" placeholder="john wick"/>
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="text" placeholder="doglover2000@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="Password" placeholder="Password"/>
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder="Hollywood, USA"/>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="newUserSubmit">
                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
    )
}
