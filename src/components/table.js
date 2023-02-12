import Header from "./header";

export default function Table(){
    const headers = ["Header 1", "Header 2", "hEaDer 3"];
    return (
        <div>
            <table>
                <Header headers={headers}/>
                <tbody>
                    <tr>
                        <td>
                            Data for 1
                        </td>
                        <td>
                            Data for 2
                        </td>
                        <td>
                            Data for 3
                        </td>
                    </tr>
                    <tr>
                    <td>
                        Data for 1
                    </td>
                    <td>
                        Data for 2
                    </td>
                    <td>
                        Data for 3
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}