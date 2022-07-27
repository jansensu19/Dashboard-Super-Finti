import { Link } from "react-router-dom"
import "./transaction.css"
import Chart from "../../components/chart/Chart"
import { transactionData } from "../../dummyData"
import { Publish } from "@material-ui/icons"

export default function Transaction() {
  return (
    <div className="transaction">
        <div className="transactionTitleContainer">
            <h1 className="transactionTitle">Transaction</h1>
            <Link to="/newtransaction">
                <button className="transactionAddButton">Create</button>
            </Link> 
        </div>
        <div className="transactionTop">
            <div className="transactionTopLeft">
                <Chart data={transactionData} dataKey="Balance" title="Sales Performance" />
            </div>
            <div className="transactionTopRight">
                <div className="transactionInfoTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="transactionInfoImg" />
                    <span className="transactionName">Apple Airpods</span>
                </div>
                <div className="transactionInfoBottom">
                    <span className="transactionInfoKey">id:</span>
                    <span className="transactionInfoValue">123</span>
                </div>
                <div className="transactionInfoBottom">
                    <span className="transactionInfoKey">sales:</span>
                    <span className="transactionInfoValue">5123</span>
                </div>
                <div className="transactionInfoBottom">
                    <span className="transactionInfoKey">status:</span>
                    <span className="transactionInfoValue">Successfully</span>
                </div>
            </div>
        </div>
        <div className="transactionBottom">
            <form className="transactionForm">
                <div className="transactionFormLeft">
                    <label>Transaction Name</label>
                    <input type="text" placeholder="Apple Airpod"/>
                    <label>Status</label>
                    <select name="active" id="active">
                        <option value="successfully">Successfully</option>
                        <option value="unsuccessfully">Unsuccessfully</option>
                    </select>
                </div>
                <div className="transactionFormRight">
                    <div className="transactionUpload">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=conmpress&cs=tinysrgb&dpr=2&w=500" alt="" className="transactionUploadImg"/>
                        <label for="file">
                            <Publish />
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="transactionButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
