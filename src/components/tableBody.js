export default function tableBody({data, headers, deleteHandler}) {
    
    function displayRow(row, rowKey){
        return (
            <tr key={rowKey}>
                {headers.map((header, index) => (<td key={index}>{row[header]}</td>))}
                <td><button onClick={deleteHandler} value={row['id']}>Delete Record</button></td>
            </tr>
        )
    }
    return (
        <tbody>
            {data.map((row, index) => displayRow(row, index))}
        </tbody>
    );
}