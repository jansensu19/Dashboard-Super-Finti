import "./newTransaction.css"

export default function NewTransaction() {
  return (
    <div className="newTransaction">
        <h1 className="addTransactionTitle">New Transaction</h1>
        <form className="addTransactionForm">
            <div className="addTransactionItem">
                <label>Image</label>
                <input type="file" id="file"/>
            </div>
            <div className="addTransactionItem">
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods"/>
            </div>
            <div className="addTransactionItem">
                <label>Stock</label>
                <input type="text" placeholder="123"/>
            </div>
            <div className="addTransactionItem">
                <label>Status</label>
                <select name="active" id="active">
                    <option value="successfully">Successfully</option>
                    <option value="unsuccessfully">Unsuccessfully</option>
                </select>
            </div>
            <button className="addTransactionButton">Create</button>
        </form>
    </div>
  )
}
