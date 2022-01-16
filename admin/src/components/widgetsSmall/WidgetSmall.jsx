import "./widgetSmall.css";
import {Visibility} from "@material-ui/icons";

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetTitle">New Clients</span>
            <ul className="widgetList">
                <li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Jane Doe
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility />
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Sneha Bhamra
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility />
                        Display
                    </button>
                </li><li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Ethan Worth
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility />
                        Display
                    </button>
                </li><li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Grant Hollingtan
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility />
                        Display
                    </button>
                </li><li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Alaw Moradi
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
