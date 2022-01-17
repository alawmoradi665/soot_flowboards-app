import { MergeType } from "@material-ui/icons";
import "./widgetLarge.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
      return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Orders</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">Duncan Idaho</span>
            </td>
            <td className="widgetLgDate">1 Jan 2022</td>
            <td className="widgetLgAmount">$999.00</td>
            <td className="widgetLgStatus">
              <Button type="Shipped" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">Jane Doe</span>
            </td>
            <td className="widgetLgDate">2 Jan 2022</td>
            <td className="widgetLgAmount">$433.00</td>
            <td className="widgetLgStatus">
              <Button type="Shipped" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">John Wick</span>
            </td>
            <td className="widgetLgDate">5 Jan 2021</td>
            <td className="widgetLgAmount">$250.00</td>
            <td className="widgetLgStatus">
              <Button type="Processing" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">Jim Carrey</span>
            </td>
            <td className="widgetLgDate">8 Jan 2021</td>
            <td className="widgetLgAmount">$732.00</td>
            <td className="widgetLgStatus">
              <Button type="Reviewing" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <span className="widgetLgName">Carol Danvers</span>
            </td>
            <td className="widgetLgDate">15 Jan 2021</td>
            <td className="widgetLgAmount">$499.55</td>
            <td className="widgetLgStatus">
              <Button type="Reviewing" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
