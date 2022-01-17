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
                        <Visibility className="Icon"/>
                        Display
                    </button>
                </li>
                <li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Duncan Idaho
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="Icon"/>
                        Display
                    </button>
                </li><li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            John Wick
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="Icon"/>
                        Display
                    </button>
                </li><li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Carol Danvers
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="Icon"/>
                        Display
                    </button>
                </li><li className="widgetListItem">
                    <div className="widgetUser">
                        <span className="widgetUsername">
                            Jim Carrey
                        </span>
                    </div>
                    <button className="widgetButton">
                        <Visibility className="Icon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
