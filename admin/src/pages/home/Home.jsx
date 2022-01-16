import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import Chart from "../../components/chart/Chart";
import {userData} from "../../sampleData";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="Sales Analytics" grid dataKey="sales"/>
        </div>
    )
}
 