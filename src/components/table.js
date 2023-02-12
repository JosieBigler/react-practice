import Header from "./tableHeader";
import TableBody from "./tableBody";

export default function Table({data, deleteHandler}){
    const headers = Object.getOwnPropertyNames(data[0]);
    
    return (
        <div>
            <table>
                <Header headers={headers}/>
                <TableBody data={data} headers={headers} deleteHandler={deleteHandler}/>
            </table>
        </div>
    );
}