import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
import {userData} from "../../sampleData";
import WidgetLarge from "../../components/widgetsLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetsSmall/WidgetSmall";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Sales Analytics" grid dataKey="sales"/>
        <div className="homeWidgets">
            <WidgetSmall/>
            <WidgetLarge/>
        </div>
        </div>
    )
}
 