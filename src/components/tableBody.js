export default function tableBody({data, headers}) {
    function displayRow(row, rowKey){
        return (
            <tr key={rowKey}>
                {headers.map((header, index) => (<td key={index}>{row[header]}</td>))}
            </tr>
        )
    }
    return (
        <tbody>
            {data.map((row, index) => displayRow(row, index))}
        </tbody>
    );
}