import "./transactionList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { transactionRows} from "../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react";

export default function TransactionList() {
    const [data,setData] = useState(transactionRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200,
          renderCell: (params)=>{
            return(
                <div className="transactionListItem">
                    <img className="transactionListImg" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
          },
          {
            field:"action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/transaction/"+params.row.id}>
                        <button className="transactionListEdit">Edit</button>
                    </Link>
                        <DeleteOutline className="transactionListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          }
      ];

  return (
    <div className="transactionList">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
    </div>
  )
}
