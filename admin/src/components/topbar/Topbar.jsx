import React from "react";
import "./topbar.css";
import {NotificationsNone, Language, Settings, ExitToApp,} from "@material-ui/icons";
import img from "../../soot01.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Soot Flowcraft Admin</span>
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
            <ExitToApp />
          </div>
          {/* display image to be linked below */}
          <img src={img} alt="display" className="profileIcon" />
        </div>
      </div>
    </div>
  )
}
