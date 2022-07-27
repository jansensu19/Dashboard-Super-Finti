import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import TransactionList from "./pages/transactionList/TransactionList";
import Transaction from "./pages/transaction/Transaction";
import NewTransaction from "./pages/newTransaction/NewTransaction";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/transaction" element={<TransactionList/>}/>
            <Route path="/transaction/:transactionId" element={<Transaction/>}/>
            <Route path="/newtransaction" element={<NewTransaction/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
