import { ArrowRightAlt, KeyboardBackspace, Search, Send, Tune } from "@material-ui/icons"
import "./widgetLg.css"

export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <div className="widgetLgBigTitle">
      <div className="widgetLgInfo">
        <h3 className="widgetLgTitle">Latest transactions</h3>
      </div>
      <div className="widgetLgPlace">
        <Search className="widgetLgBoxIcon"/>
        <Tune className="widgetLgBoxIcon"/>
      </div>
      </div>

      
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Mon, Mar 1</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgBox"><ArrowRightAlt className="widgetLgBoxIcon"/></span>
            <span className="widgetLgName">Payment Sent to Shakir</span>
          </td>
          <td className="widgetLgAmount">$560.00</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgBox"><KeyboardBackspace className="widgetLgBoxIcon"/></span>
            <span className="widgetLgName">Salary from Redwhale</span>
          </td>
          <td className="widgetLgAmount positive">$12,200.00</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgBox"><Send className="widgetLgBoxIcon"/></span>
            <span className="widgetLgName">Money Sent to Wise.com</span>
          </td>
          <td className="widgetLgAmount">$3,000.00</td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Mon, Mar 2</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgBox"><ArrowRightAlt className="widgetLgBoxIcon"/></span>
            <span className="widgetLgName">Purchased Macbook Pro</span>
          </td>
          <td className="widgetLgAmount">$5560.00</td>
        </tr>
      </table>
    </div>
  )
}
