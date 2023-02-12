import Header from "./tableHeader";
import TableBody from "./tableBody";

export default function Table({data}){
    const headers = Object.getOwnPropertyNames(data[0]);
    
    return (
        <div>
            <table>
                <Header headers={headers}/>
                <TableBody data={data} headers={headers}/>
            </table>
        </div>
    );
}