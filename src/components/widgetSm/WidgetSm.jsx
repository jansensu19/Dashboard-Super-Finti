import { LocalAtm, Opacity, Receipt, SettingsInputComponent} from "@material-ui/icons"
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        
      <div className="widgetSmInfo">
        <h3 className="widgetSmTitle">Upcoming transactions</h3>
        <span className="SubInfo">View All</span>
      </div>

      
      <table className="widgetSmTable">
        <tr className="widgetSmTr">
          <th className="widgetLgTh">Today</th>
        </tr>
        <tr className="widgetSmTr">
          <td className="widgetSmItem">
            <span className="widgetSmBox blue"><Opacity className="widgetSmBoxIcon"/></span>
            <div className="widgetSmDetail">
                <span className="widgetSmName">Water Bill</span>
                <span className="widgetSmStatus">Unsuccessfully</span>
            </div>
          </td>
          <td className="widgetSmAmount negative">- $280</td>
        </tr>
        <tr className="widgetSmTr">
          <th className="widgetSmTh">Tomorrow</th>
        </tr>
        <tr className="widgetSmTr">
          <td className="widgetSmItem">
            <span className="widgetSmBox red"><LocalAtm className="widgetSmBoxIcon"/></span>
            <div className="widgetSmDetail">
                <span className="widgetSmName">Income: Salary Oct</span>
                <span className="widgetSmStatus">Successfully</span>
            </div>
          </td>
          <td className="widgetSmAmount positive">+$1200</td>
        </tr>
        <tr className="widgetSmTr">
          <td className="widgetSmItem">
            <span className="widgetSmBox lightblue"><SettingsInputComponent className="widgetSmBoxIcon"/></span>
            <div className="widgetSmDetail">
                <span className="widgetSmName">Electric Bill</span>
                <span className="widgetSmStatus">Successfully</span>
            </div>
          </td>
          <td className="widgetSmAmount negative">-$480</td>
        </tr>
        <tr className="widgetSmTr">
          <td className="widgetSmItem">
            <span className="widgetSmBox yellow"><Receipt className="widgetSmBoxIcon"/></span>
            <div className="widgetSmDetail">
                <span className="widgetSmName">Income: Jane transfers</span>
                <span className="widgetSmStatus">Successfully</span>
            </div>
          </td>
          <td className="widgetSmAmount positive">+ $1200</td>
        </tr>
        <tr className="widgetSmTr">
          <td className="widgetSmItem">
            <span className="widgetSmBox yellow"><Receipt className="widgetSmBoxIcon"/></span>
            <div className="widgetSmDetail">
                <span className="widgetSmName">Income: Jane transfers</span>
                <span className="widgetSmStatus">Successfully</span>
            </div>
          </td>
          <td className="widgetSmAmount positive">+ $500</td>
        </tr>
      </table>
    </div>
  )
}
